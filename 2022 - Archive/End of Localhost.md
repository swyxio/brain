
# The End of Localhost
**All the Cloud's A Stage, and All the Laptops Merely Clients**

---

**Dev environments should be cattle, not pets**. It looks likely that most development will *not* be done on `localhost` in future.

Make a wishlist for the average rich-country developer in 2030:
- Fast gigabit internet is *cheap* and *everywhere* (5G or mesh wifi)
- Dev machines (laptops, tablets, VR) are *cheap* and have multiday battery life
- Your apps build in a second *regardless of scale*, with tests and staging environments/deploy previews ~instantly live after every keystroke
- Your personal dev environment travels with you no matter which device you use
- Any app's environmental dependencies - everything from a HTTPS cert to a sanitized, sandboxed fork of the production database - are immediately available to any teammate ramping up to contribute any feature. No docs, no runbook.
- You can go from idea to first customer in a weekend, using a combination of low-code builders and backends-as-a-service
- You can scale up from MVP to unicorn in weeks, using one of the serverless or "new Heroku" platforms, and auth/payments/database/communication needs handled by world-class SaaS teams

You will notice that most of these items enable (even *require*) you to run things "live" on the cloud, not `localhost`.

Perhaps most importantly, the time wasted fixing bugs between dev and prod environments **goes from 1-4 hours a week down to 0**, if you can simply eliminate the discrepancy between dev and prod[^1].

[^1]: Realistically, you will always have *some* discrepancy between "staging" and production environments, but the distance between them should be much smaller than between dev and prod. For example, working on  `https` is always a pain in `localhost` but is a requirement on prod.

To [paraphrase Bob Metcalfe](https://www.wired.com/2012/04/ff-andreessen/), if the browser reduced operating systems to "a poorly debugged set of device drivers", then **the cloud is reducing the dev machine to a poorly debugged set of environment mocks**.

[INSERT MEME: My machine can't simulate the cloud - then we'll make you work on the cloud]

That's it, that's the blogpost. The rest of this article is working out subpoints, examples, trends, and anecdata.

## But I Need To Code on a Plane?

Maybe stop flying so much. Or get a good audiobook and rest your eyes. Maybe even talk to your neighbor! (if they seem social)

## The "Future is Just Not Evenly Distributed" Argument

Many Bigcos who have invested in their developer productivity already work entirely in the cloud. This will be news to some of you, and old hat to others, so I didn't know how much emphasis to place on this.

But to my knowledge, this is the first time anyone has collected public info about Bigco dev environments in one place:

- **Google Cider** is Google's web IDE that "mounts the enormous Piper file system and provides a super tight integration with internal review, build and testing tools" without downloading any source code to the local machine ([source](https://www.quora.com/What-does-Googles-web-IDE-look-like), [source](https://medium.com/codesphere-cloud/why-online-coding-is-the-future-e7b9a255f77f)) 
- **FB On-Demand** is Facebook's way to do "on-demand" environment provisioning that create a live feature preview with more fidelity than local. At FB, "[local development did not exist](https://twitter.com/gwenshap/status/1533956840240779264?s=20&t=FBNMNXzv8v6vwAdSzkTxDw)". ([FB alum tweet](https://twitter.com/threepointone/status/1533971160005738496), [YC startup clone](https://news.ycombinator.com/item?id=29164556))
- **Tesla** moved from local to cloud for their vehicle OS development ([source](https://twitter.com/charmcgi/status/1534182983837618176))
- **Palantir** reported a 41% decrease in overall costs when moving to remote ephemeral workspaces ([source](https://blog.palantir.com/the-benefits-of-remote-ephemeral-workspaces-1a1251ed6e53), thanks [Ben Potter](https://twitter.com/bpmct/status/1533932035147980802?s=20&t=FBNMNXzv8v6vwAdSzkTxDw))
- **Shopify** is "moving the majority of our developers into our cloud development environment, called Spin."  ([source](https://shopify.engineering/cloud-load-modular-code-shopify-2022), thanks [David Stosik](https://twitter.com/davidstosik/status/1533981379209613312?s=20&t=shjhKXR3Gtrtr54iSqHPnA))
- **Github** "left our macOS model behind and moved to Codespaces for the majority of GitHub.com development". ([source](https://github.blog/2021-08-11-githubs-engineering-team-moved-codespaces), [podcast](https://twitter.com/swyx/status/1436602844216500227))

The standard response to bringing up a bunch of Bigcos is "sure, but does it work for my small team?"

The answer is invariably "maybe yes, but also probably not in this current form", because most of these moves were done after sizable internal investment and take advantage of lots of proprietary infrastructure. However, as this tech commoditizes, we'll see more and more of it spread out as we find commonalities among audience subsets.

The obvious first part of commoditizing preview environments has already been done - one of Netlify's early innovations was making [deploy previews for frontend projects](https://www.netlify.com/products/deploy-previews/) ubiquitous[^3]. Virtually every docs site now uses some form of deploy preview system, and Jamstack apps can also use them for their release process ([example](https://twitter.com/philhawksworth/status/1149664004681240577)). With [database branching](https://changelog.com/founderstalk/85) becoming increasingly common, this workflow will make its way further and further up the stack. Let's look at this stack next...

[^3]: With a terribly unoptimized build system, but that's a topic for another day.


## Jobs to Be Done of Localhost

In [my original tweet](https://twitter.com/swyx/status/1533910738942562304) calling out this trend I actually conflated different usages of local development (as [Anil Dash observed](https://twitter.com/anildash/status/1534177596593917954)):

- Editing code in a local IDE
- Running code cloned to a local file directory
- Spinning up a local database instance/cluster of services to code against

Conveniently, they are all under attack (did i miss any? please let me know):

- Editing code and Running code remotely: GitHub Codespaces, Replit, Coder.com, CodeSandbox, Gitpod
- Editing code locally while it runs on a Remote server: VSCode + [Azure VMs](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurevirtualmachines) or VSCode + [Amazon Workspaces](https://dev.to/aws/how-to-live-stream-meetups-on-twitch-without-any-special-equipment-56cb) or [Jetbrains Fleet](https://www.jetbrains.com/fleet/) "Distributed IDE" or [Okteto Sync](https://twitter.com/rberrelleza/status/1534241206514749441?s=20&t=sNeNXfaWqhc2VzuUnSZ7uw)
- Editing code while it runs in a lightweight [JavaScript container](https://tinyclouds.org/javascript_containers) in the browser: Stackblitz
- Running code remotely: [Brev.dev](https://www.brev.dev/)
- Staging resources to code against: Planetscale [Branches](https://docs.planetscale.com/concepts/branching), Stripe [Test mode keys](https://stripe.com/docs/keys#test-live-modes), Railway [Ephemeral Environments](https://docs.railway.app/develop/environments#ephemeral-environments), [Okteto environments](https://www.okteto.com/)

So no matter what you're doing in `localhost`, there's probably a well-funded startup or Amazon/Microsoft tool that does it better in the cloud.

## The Inevitability Argument

One of the ironic tensions of humanity is that we **say** we want free will, privacy, self sufficiency and decentralization, but our **actions** tend toward the hive mind, convenience, interdependence and central infrastructure. My theory for this is that social psychology, economics and technology are very powerful centralizing forces.

- There are a long list of critical life essentials on which we are not self sufficient. Many historians mark agriculture as a starting point of civilization - meaning that *centralizing our food source* helped us move past a subsistence agriculture. Water supply and sanitation centralized [in the 1700s](https://en.wikipedia.org/wiki/History_of_water_supply_and_sanitation). Electricity has basically been centralized from the start.
- Closer to modern times we're also seeing everything we use move to the cloud, from movies/TV (from huge VHS and DVD libraries to a monthly Netflix/Disney/HBO subscription), games (from box games to free-to-play MOBAs and MMORPGs, Google Stadia, xCloud and PS Now), and knowledge (from Encyclopaedia to Wikipedia)
- Even in the B2B domain: 
	- Salesforce's "no software" move to SaaS was just the first in a long history of moving every imaginable application to the cloud
	- Box and Dropbox moved file storage to the cloud
	- Docusign/Hellosign moved *legal contracts* to the cloud
	- GAE/AWS/Azure moved the datacenter to the cloud
	- Most recently [Suhail Doshi's Mighty app](https://www.producthunt.com/stories/suhail-doshi-s-new-company-mighty-is-a-faster-browser-streamed-from-the-cloud) is moving even the *browser* to the cloud

To argue *against* `localhost` eventually going the way of the Dodo is to do the developer equivalent of asserting that most people want to run their own generators or grow their own food.


## The Outer vs Inner Loop Argument

You might argue that developers take so much pride in their tools that they will go out of their way to be self sufficient in them. And yet:

- Every [Slack](https://hn.algolia.com/?dateRange=all&page=0&prefix=false&query=status.slack.com&sort=byPopularity&type=story) and [GitHub](https://hn.algolia.com/?dateRange=all&page=0&prefix=true&query=github%20is%20down&sort=byPopularity&type=story) outage is basically celebrated as a Developer "Snow Day" (unscheduled holiday due to acts of god)
- Most companies run separate Build/CI/CD infrastructure anyway - in other words most apps don't get *deployed* without first going through some cloud infra as part of the critical path

I will grant that there's a difference between "We use CircleCI" and "Let's kill localhost". The term of art the industry has adopted to describe this difference in dev tooling is the [Dev "Outer Loop" vs "Inner Loop"](https://twitter.com/beyang/status/1530589936361119744) - the Outer Loop taking the git commit as the atomic unit of developer productivity, and the Inner Loop being all the developer activity that happens *between* commits.

So, to use those terms - we're fine with the cloud taking the slow Outer Loop, but people are concerned about network latency affecting the much faster Inner Loop.

- With Sourcegraph, developers are effectively saying a remote service can do a better job of *searching* their code than they can locally
- With GitHub Copilot, even *autocomplete* is being made better by being cloud-enabled

The degree to which the cloud can eat the Inner Loop is probably a question of reliability and latency - we are more than happy to hand over slow activities that take minutes, but nobody will tolerate 300ms latencies to see the result of a keystroke.[^2].

[^2]: It's probably worth a future essay breaking down the various components of the Inner Loop, as there are orders of magnitude differences in the latency of various activities we undertake and so different ideal solutions for each.

## The Potential of Edge Compute

Ultralow latency is the domain of edge compute, and likely the final frontier of how the cloud can eat that "last mile" of the developer Inner Loop.

Anil Dash, CEO of Glitch, [put it best](https://twitter.com/anildash/status/1534177596593917954?s=20):

> I think it’s more likely the rise of tech like CRDTs & edge compute will blur the lines of what we actually think of as “local”.

Cloudflare folks working on Cloudflare workers [also agree](https://twitter.com/threepointone/status/1533914337290735616?s=20&t=FBNMNXzv8v6vwAdSzkTxDw):

> "wrangler dev" **actually runs the worker on the edge**, and we use localhost as a proxy. it means you have access to resources/secrets from your real environment, and we implement copy-on-write on stuff like durable objects that gets discarded once your shut down your session

While not as low-latency, serverless folks like [Tim Wagner](https://twitter.com/timallenwagner/status/1534200123252584449) (creator of AWS Lambda), [Emrah Samdan](https://twitter.com/emrahsamdan/status/1533912205594353676?s=20&t=FBNMNXzv8v6vwAdSzkTxDw) (PM @ Serverless.com), and [Tudor Golubenco](https://twitter.com/tudor_g/status/1534443433846358016?s=21&t=Af93P2lzKTPECID5Y0q2KA) (CTO Xata) also have a lot of sympathy with this because of how easy it is to provision/scale serverless resources. 

## Pushback: It's Still Not Good Enough

**Don't get overexcited here**. My caution on judging this movement with today's technology is that for this to succeed, provisioning must feel so cheap as to be "throwaway" - even a latency of 10 seconds to spin up a preview environment is too long for me, though your mileage may vary.

It takes a second to deploy a frontend preview with [Netlify Drop](https://www.netlify.com/blog/2018/08/14/announcing-netlify-drop-the-simplicity-of-bitballoon-with-the-added-power-of-netlify/) and ~10 seconds with the Netlify CLI, but I still habitually use localhost for development because my iteration cycle is in *milliseconds*. I can and have moved part of that workflow to remote tools like Codesandbox, Gitpod and Stackblitz, but none of them are fully capable of replicating the full set of dependencies that I need for fullstack development. In fact, after one [particularly bad livestream](https://www.learnwithjason.dev/how-to-use-netlify-identity-and-netlify-functions), I resolved to always use [Netlify Dev](https://news.ycombinator.com/item?id=19615546) (the Netlify local dev solution I used to work on) because the iteration loop of git-push-and-wait-for-deploy was so agonizingly slow (I had the same pain with [AWS Amplify](https://www.youtube.com/watch?v=VA3TFymZlW4)).

Other similar sentiments:

> Localhost has been attempted to be killed for eons, until the network is as fast as my disk, and can the “remoteness” of it can disappear entirely, localhost is here to stay. ([tweet](https://twitter.com/nickhudkins/status/1534344248987897856?s=21&t=XrMtpxYKXroVa45238TsGA))

> Currently we have local development with impossible physics: assets that load immediately, APIs that respond in under a millisecond. So if dev goes to the cloud because the latency is acceptable, then we are finding a middle point that is acceptable for both devs and real users. ([tweet](https://twitter.com/royalicing/status/1534289848370352128?s=21&t=XrMtpxYKXroVa45238TsGA))

But surely you can see that the latency question is a question of letting the Moore's law equivalent of cloud commoditizing infrastructure take its course. If it's not good enough today, then wait 5 years and check back again.


## Other Notable responses

People have very extreme
- positive views
	- "General purpose computation on your own machine is probably going to be illegal in 20 years. It will be our greatest accomplishment if we can liberate even 1% of humanity from this soul-stifling metaverse. We increasingly are moving from stone age to bronze age computing. We need a bronze age collapse and the beginning of iron-age computing. In particular, we need computing that escapes the massive centralized palace economy model, even if only for 1% of humanity." ([tweet](https://twitter.com/wolftivy/status/1533934249673228288?s=20&t=FBNMNXzv8v6vwAdSzkTxDw))
	- "This is already the case in many big companies and killing local dev is going to be a huge win for developers." ([Roopak from Bolt](https://twitter.com/roopakv/status/1533916592085422080?s=20&t=FBNMNXzv8v6vwAdSzkTxDw))
- and negative views
	- "You pry localhost from my cold dead hands!" ([tweet](https://twitter.com/coolpatiens/status/1533958291931512832?s=20&t=FBNMNXzv8v6vwAdSzkTxDw))
	- "Out of my cold dead hands. This is the final step in the road to the inescapable surveillance dystopia." ([tweet](https://twitter.com/zetalyrae/status/1533920071130955776))
	- "Nobody wondering whether it's a good idea to hand over what small power we have left as devs to a few private platforms." ([tweet](https://twitter.com/sgwil/status/1534068485273305089?s=20&t=FBNMNXzv8v6vwAdSzkTxDw))

**Dan Abramov** predicted this happens in [5 years](https://twitter.com/dan_abramov/status/1533912835096465408?s=20&t=FBNMNXzv8v6vwAdSzkTxDw), not 10.

**Paul Biggar** [sees](https://twitter.com/paulbiggar/status/1534185221955932161) a few drivers:

> - production is harder and harder to replicate locally
> - it's cheaper to pay for cloud dev machines than expensive laptops each year
> - services with high scale (eg Spanner) don't behave the same on localhost anyway - you just have an emulator 
>   
>   Pretty sure we're going to do fewer things locally and a lot more developing directly against the cloud in the future

Patrick Mckenzie [says](https://twitter.com/patio11/status/1533958144090460161?s=20&t=FBNMNXzv8v6vwAdSzkTxDw): 

> It seems to me like all the bits needed to do this are already abundantly available and it’s waiting for a) one solid product team and, crucially, b) becoming The Right Way To Do It for one language/platform that rockets to mainstream success.
> 
> You’d want the “curl dockerinthecloudlets.go” to be the first line in all the tutorials and for that to be the last time users ever think about compute substrate or networking.


## Further Reading

- [**James Turnbull**](https://github.com/readme/guides/developer-onboarding): "I was speaking to the CEO of a developer tools company earlier this year. He told me that the biggest obstacle to contribution is his local development environment." 
- [**Julius Gamanyi**](https://twitter.com/juliusgb2k/status/1534154613682757635?s=20&t=oquJNGbOl2U8ZLfTR_fMUA) : Wardley mapping of the Cloud IDE workspace https://juliusgamanyi.com/2018/03/16/learning-to-map-cloud-ides-developer-workspaces-fast-time-to-first-line-of-code/


