
# The End of Localhost
**All the Cloud's A Stage, and All the Laptops Merely Clients**

---

**It looks likely that most development will *not* be done on `localhost` in future.**

Make a wishlist for the average rich-country developer in 2030:
- Fast gigabit internet is *cheap* and *everywhere* (5G or mesh wifi)
- Dev machines (laptops, tablets, VR goggles) are *cheap* and have multiday battery life
- Your apps build in a second *regardless of scale*, with tests and staging environments/deploy previews ~instantly live after every keystroke
- Your personal dev environment travels with you no matter which device you use
- Any app's environmental dependencies are immediately available to any teammate ramping up on it - no docs, no runbook
- You can go from idea to first customer in a weekend, using a combination of low-code builders and backends-as-a-service
- You can scale up from MVP to unicorn in weeks, using one of the serverless or "new Heroku" platforms, and auth/payments/database/communication needs handled by world-class SaaS teams

You will notice that most of these items enable (even *require*) you to run things "live" on the cloud, not `localhost`.

Perhaps most importantly, the time wasted fixing bugs between dev and prod environments **goes from 1-4 hours a week down to 0**, if you can simply eliminate the discrepancy between dev and prod (realistically, you will always have *some* discrepancy between staging and prod. 

To [paraphrase Bob Metcalfe](https://www.wired.com/2012/04/ff-andreessen/), if the browser reduced operating systems to "a poorly debugged set of device drivers", then **the cloud is reducing the dev machine to a poorly debugged set of environment mocks**.

[INSERT MEME: My machine can't simulate the cloud - then we'll make you work on the cloud]

That's it, that's the blogpost. The rest of this article is elaborating with subpoints, examples, trends, and anecdata.

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

## But I Need To Code on a Plane?

Maybe stop flying so much. Or get a good audiobook and rest your eyes. Maybe even talk to your neighbor! (if they seem social)

## The Inevitability Argument

One of the ironic tensions of humanity is that we **say** we want free will, privacy, self sufficiency and decentralization, but our **actions** tend toward the hive mind, convenience, interdependence and central infrastructure. My theory for this is that social psychology, economics and technology are very powerful centralizing forces.

- There are a long list of critical life essentials on which we are not self sufficient. Many historians mark agriculture as a starting point of civilization - meaning that *centralizing our food source* helped us move past a subsistence agriculture. Water supply and sanitation centralized [in the 1700s](https://en.wikipedia.org/wiki/History_of_water_supply_and_sanitation). Electricity has basically been centralized from the start.
- Closer to modern times we're also seeing everything we use move to the cloud, from movies/TV (from huge VHS and DVD libraries to a monthly Netflix/Disney/HBO subscription), games (from box games to free-to-play MOBAs and MMORPGs, Google Stadia, xCloud and PS Now), and knowledge (from Encyclopaedia to Wikipedia)
- Even in the B2B domain: 
	- Salesforce's "no software" move to SaaS was just the first in a long history of moving every imaginable application to the cloud
	- GAE/AWS/Azure moved the datacenter to the cloud
	- Box and Dropbox moved file storage to the cloud
	- Most recently [Suhail Doshi's Mighty app](https://www.producthunt.com/stories/suhail-doshi-s-new-company-mighty-is-a-faster-browser-streamed-from-the-cloud) is moving even the *browser* to the cloud

To argue *against* `localhost` eventually going the way of the Dodo is to do the developer equivalent of asserting that most people want to run their own generators or grow their own food.


## The "Inner Loop" Argument

You might argue that developers take so much pride in their tools that they will go out of their way to be self sufficient in them. And yet:

- Every [Slack](https://hn.algolia.com/?dateRange=all&page=0&prefix=false&query=status.slack.com&sort=byPopularity&type=story) and [GitHub](https://hn.algolia.com/?dateRange=all&page=0&prefix=true&query=github%20is%20down&sort=byPopularity&type=story) outage is basically celebrated as a Developer "Snow Day" (unscheduled holiday due to acts of god)
- Most companies run separate Build/CI/CD infrastructure anyway - in other words most apps don't get *deployed* without first going through some cloud infra as part of the critical path

I will grant that there's a difference between "I use CircleCI" and "let's kill localhost". The term of art the industry has adopted to describe this difference in dev tooling is the [Dev "Outer Loop" vs "Inner Loop"](https://twitter.com/beyang/status/1530589936361119744) - the Outer Loop taking the git commit as the atomic unit of developer productivity, and the Inner Loop being everything that happens between commits. And yes



- With Sourcegraph, developers are effectively saying a remote service can do a better job of *searching* their code than they can locally
- With GitHub Copilot, even *autocomplete* is being made better by being cloud-enabled


## The "Future is Just Not Evenly Distributed" Argument

Bigcos: 
- Tesla: https://twitter.com/charmcgi/status/1534182983837618176
- FB ondemand https://twitter.com/threepointone/status/1533971160005738496?s=20&t=FBNMNXzv8v6vwAdSzkTxDw https://twitter.com/gwenshap/status/1533956840240779264?s=20&t=FBNMNXzv8v6vwAdSzkTxDw 
- Google Cider https://www.quora.com/What-does-Googles-web-IDE-look-like
- Palantir https://blog.palantir.com/the-benefits-of-remote-ephemeral-workspaces-1a1251ed6e53 (thanks [Ben Potter](https://twitter.com/bpmct/status/1533932035147980802?s=20&t=FBNMNXzv8v6vwAdSzkTxDw))
- Shopify https://shopify.engineering/cloud-load-modular-code-shopify-2022  (thanks [David Stosik](https://twitter.com/davidstosik/status/1533981379209613312?s=20&t=shjhKXR3Gtrtr54iSqHPnA))
- Github


## Serverless and Edge

- Tim Wagner
- Serverless cloud https://twitter.com/emrahsamdan/status/1533912205594353676?s=20&t=FBNMNXzv8v6vwAdSzkTxDw
- Anil Dash
	- https://twitter.com/anildash/status/1534177596593917954?s=20&t=FBNMNXzv8v6vwAdSzkTxDw
- Cloudflare
	- - cloud wrangler https://twitter.com/threepointone/status/1533914337290735616?s=20&t=FBNMNXzv8v6vwAdSzkTxDw

disbelievers
- netlify dev
- begin sandbox
- amplify cli


## Pushback: It's Still Not Good Enough

- my struggle with cloud dev

## Other Pushback

- Centralization to private platforms https://twitter.com/sgwil/status/1534068485273305089?s=20&t=FBNMNXzv8v6vwAdSzkTxDw
- 


## Other Notable responses


People have very extreme
- positive views: https://twitter.com/wolftivy/status/1533934249673228288?s=20&t=FBNMNXzv8v6vwAdSzkTxDw
	- https://twitter.com/roopakv/status/1533916592085422080?s=20&t=FBNMNXzv8v6vwAdSzkTxDw
- and negative views: https://twitter.com/coolpatiens/status/1533958291931512832?s=20&t=FBNMNXzv8v6vwAdSzkTxDw
	- https://twitter.com/zetalyrae/status/1533920071130955776

Dan Abramov:

https://twitter.com/dan_abramov/status/1533912835096465408?s=20&t=FBNMNXzv8v6vwAdSzkTxDw

Paul Biggar of Dark:

https://twitter.com/paulbiggar/status/1534185221955932161

Patio11: 

https://twitter.com/patio11/status/1533958144090460161?s=20&t=FBNMNXzv8v6vwAdSzkTxDw

[Julius Gamanyi](https://twitter.com/juliusgb2k/status/1534154613682757635?s=20&t=oquJNGbOl2U8ZLfTR_fMUA) - wardley mapping: https://juliusgamanyi.com/2018/03/16/learning-to-map-cloud-ides-developer-workspaces-fast-time-to-first-line-of-code/