# The Investment Case for Temporal

I spend a lot of time talking to developers about Temporal, but haven't touched on Temporal's business potential since my [Why Temporal](https://www.swyx.io/why-temporal/#the-business-case-for-temporal) post from last year. 

We announced [our Series B last month](https://twitter.com/swyx/status/1493994119869657090), and I thought it'd be fun to take my dev hat off and put on my money hat. I won't be discussing "[So what actually is Temporal?](https://news.ycombinator.com/item?id=30365798)" here. This piece is focused on making the *business* case that I would as a venture partner getting buy-in to invest in the company.

*obviously this is personal speculation and I am not confirming the company roadmap or anything. This is going to start off sounding extremely bullish, because it is easy to do that for young startups, but this isn't a puff piece and we'll get a lot more tentative towards the end.*

## Why Temporal is worth 1.5b

I'll rule out one form of valuation here, which is "unicorn by strategic acquisition" - all the cloud majors have a workflow offering and Temporal would be additive, but Temporal's appeal is inherently multi-cloud, so that would seriously impair the value here (though that has [not stopped Microsoft](https://www.inverse.com/gaming/call-of-duty-xbox-exclusive)). There are other possible acquirers than the cloud majors of course, but those are hard to predict. Salesforce, Stripe, or Twilio perhaps.

### Unicorn by Comparables

Making a unicorn valuation by comps is the easiest, if flimsiest, argument.

Some notable recent raises by peer devtools, compared with informal data on their revenue trends, gives us confidence that Temporal is in the neighborhood of similar raises:

- [Chronosphere raised 200m on $1+b](https://techcrunch.com/2021/10/07/chronosphere-raises-200m-at-a-1b-valuation-for-cloud-native-monitoring-adds-granular-distributed-tracing-to-its-dashboard/)
- [Sourcegraph raised 125m on $2.6b](https://techcrunch.com/2021/07/13/sourcegraph-raises-125m-series-d-on-2-6b-valuation-for-universal-code-search-tool/)
- [Airbyte raised 150m on $1.5b](https://airbyte.com/blog/a-150m-series-b-to-power-the-movement-of-data)

### Unicorn by Growth

Making a unicorn value based on *fundamentals* is a good deal harder. Let's just say exit price/sales multiples for enterprise software is at 20-40x. So Temporal would have to bring in $50m in revenue (with say 30-40% growth) for $1.5b valuation to make sense as a standalone public company. It does not make that today, no unicorn does. But growth is a good deal higher. What’s a fair price for $5m revenue growing the classic “triple triple double double” for example? Thats the sort of handicapping you have to do in startup investing.

However one thing I can say here is to collate public statements on the *viral expansion* of Temporal:

- **At Uber**, Cadence grew from 0 to >100 usecases within 3 years.
- Also while [at Uber](https://docs.temporal.io/blog/oss-startups-podcast), Cadence got adoption at HashiCorp, Coinbase, DoorDash, Box, Checkr on the back of [minimal (but effective) marketing](https://www.youtube.com/watch?v=BJwFxqdSx4Y)
- Temporal open source has disclosed [25% MoM growth](https://www.theregister.com/2022/02/16/temporal_103m_funding/) (which annualizes to about [14x in 1 yr](https://twitter.com/BogieBalkansky/status/1494025245279195136) ) in active clusters
- [Datadog reported](https://docs.temporal.io/blog/how-datadog-ensures-database-reliability-with-temporal/) usage "expanded to more than 100 users across dozens of teams within just one year" now running [3 million workflows per month](https://youtu.be/Hz7ZZzafBoE?t=100)
- [Netflix reported](https://youtu.be/LliBP7YMGyA?t=197) running 500k workflows a *day* in Oct 2021 and projected 1m a day by end 2021
- [Stripe hasn't disclosed](https://www.youtube.com/watch?v=Crkcr1S-NSc) any numbers, but have posted [a second job for their Workflow Engine team](https://stripe.com/jobs/listing/infrastructure-engineer-developer-productivity-workflow-engine/2964407) this year.

The natural position of Temporal as a primary tool for the rising [Platform Engineer](https://twitter.com/danielbryantuk/status/1494614250567966732) to provide a scalable stateful reliability primitive (bundling queues, databases, timers, gateways, encryption etc.) means that the biggest cost of adoption is paid by the first production user. Every subsequent user after that has a much lower cost to adopt Temporal, because most of the deployment and integration niggles have been worked out. And once the code has been run and is running reliably, the long running and repetitive nature of this workload means there is very little incentive to churn.

At minimum this should mean that user acquisition/organic growth should be strong for many years, and in terms of monetization you could see Net Revenue Retention north of 200% in the first few years of implementation, which is world-beating ([110% is good, 130% is great](https://www.lennysnewsletter.com/p/what-is-good-retention-issue-29?utm_source=url), Snowflake is 160-180%, though these numbers are for more mature companies).


## Why Temporal will be worth 10b

Let's level-set here on what it takes to be a ~10b software company in 2022:

- New Relic: 4b valuation, 750m revenue +20% yoy
- Elastic: 8b valuation, 600m revenue +40% yoy
- Gitlab: 9b valuation, 200m revenue +60% yoy
- Hashicorp: 10b valuation, 300m revenue +50% yoy
- Confluent: 14b valuation, 400m revenue +70% yoy

So to be in the neighborhood of 10b you need at least 200-300m revenue growing 50-70%, which of course is variable based on a number of other factors including margin, expansion/churn profile, and other revenue quality metrics.

### Assessing potential

Temporal can reach this stage with just the existing open source software, but it **must be complemented by a fully generally available Cloud service** equally capable of handling individual developers as it is large enterprises like Snap (now a [public customer](https://docs.temporal.io/blog/series-b-press)). We haven't seen what kind of growth a fully unfettered Cloud service is capable of, even in terms of mature account expansion, much less being able to take on all the inbound interest, nor its ability to convert trial/free tier users. 

The primary risk to Temporal reaching this milestone is the inability to build a satisfactory Cloud service in a reasonable time frame. It must move fast to build out all the table stakes accoutrements of the [Enterprise Ready](https://enterpriseready.io/) stack, while not losing customer data or experiencing fatal downtime or security breaches.

Sales don't even have to be particularly international yet (Hashicorp was 75% domestic at IPO, with Confluent 68% and Gitlab 83%), but will probably need to develop both geographically and vertically - the [top listed usecases](https://temporal.io/use-cases) are each large categories on their own, with significant (e.g. government, finance, healthcare, energy and industrials) verticals not yet represented, and there are [more](https://web.archive.org/web/20210428212024/temporal.io/usecases) not yet fully developed.

**We aren't even close to understanding the ceiling here.**

### Everything As Code

As a developer's understanding of Temporal grows, the stated benefits and applied use cases tend to shift from the basic promises on reliability and observability, to its ability to offer general purpose orchestration, automation and human-in-the-loop interaction.

I am really impressed by the [Datadog case study](https://docs.temporal.io/blog/how-datadog-ensures-database-reliability-with-temporal/#outcomes) for spelling this out: "With Temporal, a single Workflow not only replaces the manual steps but also the need for a human to be monitoring it.... We've done things that we likely wouldn't have done without Temporal." Similar has been mentioned at [Descript](https://docs.temporal.io/blog/descript-case-study#whats-next) and [Box](https://docs.temporal.io/blog/temporal-a-central-brain-for-box#whats-next).

Because workflows can wait for arbitrarily long amounts of time, and can block on human action or other external input, they are a perfect tool for automating anything long-running, including previously manual, or partially manual, processes. This helps justify **the ridiculously high upper bound** on the potential value of Temporal workflows, because anything that saves or eliminates human labor has both high marginal profit and linear scalability. **There will be workflows worth millions per year**.

Still, there is an upper limit. At the end of the day, when we are talking B2B revenue, the money doesn't come from thin air, the budget must come from somewhere, and it is very hard to get businesses to spend money on software that it wasn't spending elsewhere before....

***Unless*** you can convincingly show that the money is being spent on humans, and lost in opportunity cost. Then you drop the red-ocean TAM talk and unlock the big bucks.

Of course, Temporal will not capture the bulk of this value, because significant work still needs to be done by developers to realize this benefit.

### The Workflow Engines Category

The general flexibility of Temporal is both why it is difficult to pitch and yet tends to be applied to everything once understood (Index Ventures' tagline, "[Everything is a Workflow](https://www.indexventures.com/perspectives/everything-is-a-workflow-our-investment-in-temporal/)" is a very common realization once you've worked with Temporal a while). 

The formal framing of Temporal is as an **Application State Manager**, because that accurately describes the central but limited role that Temporal plays inside of a distributed system/microservice architecture (doesn't directly handle big blobs of data, doesn't run your code, but does route and persist the general state of your application spread across services). It is the one stateful service in your stack that lets everything else be stateless (or at least idempotent).

But it is often *used* as a "Workflow Engine" (of which there are [many](https://github.com/meirwah/awesome-workflow-engines), which underlines Temporal's reluctance to be lumped in the same bucket). I sometimes like to pitch Workflow Engines in general as a kind of "special purpose database", much like Search Engines and Analytics Engines: 

- Just like Search and Analytics, you could roll your own, but you'd do a poor job of it. You're fine if your usecase is trivial, but most people should reach for Elastic or Clickhouse at any decent scale.
- Just like Search and Analytics, once you understand the capabilities and implementation well, you are free to apply them to whatever use cases you can imagine.
- *Unlike* Search and Analytics, Workflow Engines are a sort of "[Self-Provisioning Runtime](https://www.swyx.io/self-provisioning-runtime/)" on which you run specialized software (whether using Temporal-style As-Code SDKs or JSON/YML/DAG-style Workflow definitions), rather than making isolated API calls from application code.

By the time Temporal is a decacorn, ASM's or Workflow Engines are likely to be a widely-accepted part of the modern developer toolkit, no longer regarded to be ["quiet"](https://twitter.com/ChrisSamiullah/status/1417215296834781185) or ["insider knowledge"](https://twitter.com/andrewingram/status/1481652733975224322?s=20&t=5wyE8AebdE69ceRts8IvIw), but rather very hyped and possibly overhyped. You don't get to this level without getting your fair share of haters.

## Why Temporal could be worth 100b

Let's level-set on what it takes to be a multi-decacorn in 2022:

- Splunk: 18b valuation, 2.5b revenue +20% yoy
- Mongodb: 25b valuation, 780m revenue +50% yoy
- Okta: 27b valuation, 1.2b revenue +60% yoy
- Twilio: 30b valuation, 2.8b revenue +50% yoy
- Cloudflare: 35b valuation, 660m revenue +50% yoy
- Databricks: 38b valuation, 600m revenue +70% yoy
- Datadog: 50b valuation, 1b revenue +80% yoy
- VMWare: 50b valuation, 12.9b revenue +7% yoy
- Snowflake: 82b valuation, 1b revenue +100% yoy
- Shopify: 87b valuation, 4.6b revenue +55% yoy
- IBM: 112b valuation, 57b revenue +6% yoy
- Stripe: 115b valuation, 7.4b revenue +400% yoy
- Oracle: 200b valuation, 41b revenue +6% yoy

Most of these are developer household names, and the centicorns are certainly fully household names. It's clear that you want to be more of a Stripe, Snowflake or Datadog than you do an IBM or Oracle. You need to do at least 2b in revenue, growing triple digits, in order to be a centicorn. This is a tall ask for any company no matter how awesome the underlying technology.

![https://pbs.twimg.com/media/E33DDqnXoAcfteL.jpg](https://pbs.twimg.com/media/E33DDqnXoAcfteL.jpg)

Here the future becomes a good deal murkier for Temporal. Just like Stripe [deepened its relationship with customers on all things money](https://www.readthegeneralist.com/briefing/stripe), Temporal will almost certainly have to roll out a full suite of products for its core customer, the [Platform Engineer](https://softwareengineeringdaily.com/2020/02/13/setting-the-stage-for-platform-engineering/), and to do so in competition with other companies who will almost certainly be converging on the same market needs from a different starting point. What products these will ultimately be is up for speculation.

So let's speculate!

### Backward Integration and Multi-cloud

Each of the centicorn companies lays some credible claim to being more valuable as an independent entity than being one of the Big 3 clouds (and therefore would lose value if acquired).

- Snowflake took [6-7 years](https://www.snowdba.com/chapter-1-snowflake-history/) to launch Azure and GCP support, and now brands itself as a standalone Data Cloud.
- Stripe has pretty much always been [on AWS](https://aws.amazon.com/solutions/case-studies/stripe/), but considers itself the "[AWS of payments](https://www.geekwire.com/2017/stripe-co-founder-john-collison-thinks-company-amazon-web-services-payments/)".
- [Cloudflare is making a very different play](https://www.swyx.io/cloudflare-go/) in order to be the "fourth major cloud".

Because of Temporal's focus on lightweight application state and orchestration of multiple services, it has a natural position between the big clouds (this is a very contrived scenario, but imagine being able to easily weave together specialized ML services from Google, with the advanced storage options from AWS, inside a well supported .NET environment on Azure). I'm not saying that Temporal *has* to be multi-cloud to be a centicorn, but pretty much every large company in this league needs a compelling story *not* to be better off as part of the Big 3.

Eventually sufficiently sized workloads will force Temporal into providing its own cloud primitives of [compute, storage, and bandwidth](https://twitter.com/swyx/status/1475857610306109440?s=20&t=zESt1zAn4WfC_fKkp04Mkg), up to and including operating or making its own hardware at the very extreme. This should give cost, speed, and scalability advantages. 

### Temporal as Mesh or Protocol?

Believe it or not, viewing Temporal as a "State Manager" or "Workflow Engine" is possibly understating its potential. The broader, more abstract job it is doing is helping critical long running processes communicate with each other deterministically, designed for extreme fault tolerance and scalability.

From a [2020 interview of CEO Maxim](https://softwareengineeringdaily.com/wp-content/uploads/2020/04/SED1043-Cadence-Workflow-Orchestration.pdf): 

> Another model, which is I think is more interesting, is that you can think about [Temporal] as a **service mesh**. A service mesh for longer running operations, because right now if you think about it [the current conversation about service meshes are] always around short-lived operations...
> 
> Inside of [Temporal], workflows can call other activities. When you look at the call, it [looks like a] synchronous request-reply. You make request and then you wait for it in blocking mode and then you get your reply. The difference is that this request can take 5 days or one year. It doesn’t matter...

While "Temporal as Long Running Service Mesh" is mostly an analogy for now, it could turn into reality some day. Service Meshes are already Temporal's most immediate adjacency. We can see hints of this in Snap's [detailed overview](https://eng.snap.com/build_a_reliable_system_in_a_microservices_world_at_snap) of their Temporal deployment:

> To help with more teams in Snap, our internal Temporal cluster is hosted as a multi-tenant environment which runs on top of Snap’s Service Mesh where we can get authN, authZ and load balancing support. Also with Service Mesh, team onboarding is as simple as access approval and establishing connection using our vended client libraries which incorporate Service Mesh connections and Temporal SDKs in one.

There is [a *ton* of innovation going on in the Service Mesh world](https://thenewstack.io/how-ebpf-streamlines-the-service-mesh/) right now so it's probably better for Temporal to stay unopinionated about this as long as possible — this was a key factor for Temporal adoption within [Netflix's "paved road"](https://twitter.com/swyx/status/1448027262121496578) last year. 

But we're talking about the $100b future of Temporal, so we're allowed to dream. The more jobs Temporal does, the more value it offers, so we must explore the most obvious adjacencies.

The basic language that Temporal establishes around [Timeouts](https://docs.temporal.io/blog/activity-timeouts/), Signaling, Querying, [Migrations](https://docs.temporal.io/docs/go/versioning/), Child Workflows, [Parent Close Policy](https://docs.temporal.io/docs/concepts/what-is-a-parent-close-policy/), [Encryption](https://docs.temporal.io/docs/concepts/what-is-a-data-converter/), [Authorization](https://docs.temporal.io/docs/server/security#authorization), [Visibility](https://docs.temporal.io/docs/temporal-explained/visibility/) and all features to come could become the lingua franca of all services in Temporal's massive orbit - to the extent that it is quite possible to envision a future where non-Temporal software advertises itself as [Temporal-API](https://github.com/temporalio/api)-compatible, much like [S3 Compatibility](https://hn.algolia.com/?dateRange=all&page=0&prefix=true&query=s3%20compatible&sort=byPopularity&type=story) is now a basic requirement of all storage services.

If you consider the [7 Layer OSI model](https://en.wikipedia.org/wiki/OSI_model), you can consider Temporal as Layer 8 ("fault oblivious" workflows). Layer 8 does for Layer 7 (HTTP/REST/gRPC) what Layer 4 (TCP) does for Layer 3 (IP) - offering a reliable abstraction over unreliable foundations.

If you strip away all implementation detail, Temporal's APIs could become the industry standard protocol for long running operations, much in the same way that HTTP has become the standard protocol for short-lived ones. At first perhaps an informally followed, ill-enforced format like REST, but with enough strictness that it could be like [Relay](https://relay.dev/docs/guides/graphql-server-specification/) or even like HTTP in conformity.

Since this is a future we all desire, I often wonder if there would be any benefit to formalizing the specification and donating it to a neutral organization like the Linux Foundation or CNCF, a competitor- and integrator-friendly move often done by other aspiring industry standards (as a counterpoint, note that AWS didn't do this with S3 and it is doing just fine).

### Forward Integration and Network Effects

**Temporal can build a *services* marketplace**.

As a platform tool with a significant learning curve and devops cost, Temporal has a valuable *internal* [growth loop](https://www.reforge.com/blog/growth-loops) built on improving developer experience and tangible results. 
- The *second* team to adopt Temporal at a company has a 10x better experience because the infra/ops blockers have been worked out. 
- The *twentieth* team to adopt Temporal at a company has a 100x better experience because reusable internal libraries and SDK wrappers start being developed that reflect best practices and domain knowledge accumulated by their colleagues before them.

However, Temporal's *external* network effects are near zero today. The addition of each new Temporal user doesn't materially impact future users, or existing users, beyond sporadic open source and community participation.

The easiest way *external* network effects could start happening is through some kind of marketplace. There's nothing inherent in Temporal's design that requires that every Workflow or Activity must be run, or even operated, by you. Yet by its nature, it has knowledge of every critical microservice in its' users organization (this "knowledge" is very decoupled for now, and will likely have to be strengthened if this becomes a project priority).

Each new user could contribute their microservices in some sort of public directory, which can then be invoked by others wishing to reuse them. This treats Temporal as a sort of super-aggregator of services, assuming it has established itself as a preferred protocol for long-running processes, as we discussed above. Temporal should respect [the Mullenweg-Gates Line](https://twitter.com/swyx/status/1360729115372920832) and only take 5% of the total value, but if they can get money flowing here then there is a ton of value to be realized by a third party ecosystem (and more efficiently than many Web3 advocates might suppose). Temporal wins when vendors on its marketplace win - up to and including every [API Economy](https://www.swyx.io/api-economy/) vendor wrapping their offerings in a Temporal Activity or Workflow for easier consumption.

This doesn't even have to happen all at once - Temporal can help offer mesh, catalog, billing, and discovery products internally at very large companies before making any of this publicly available. Snowflake only [launched its private Data Exchange in 2019](https://www.prnewswire.com/news-releases/snowflake-announces-data-exchange-to-break-down-data-barriers-300861264.html) - before broadening to a public [Data Marketplace](https://www.zdnet.com/article/snowflake-announces-new-data-marketplace-and-powered-collaborations/) in 2021.

Before we go all-in on a marketplace, I'm pretty sure there are easier network effect opportunities to establish as well. Auth network effects? In-UI collaboration network effects?

### Temporal as System of Record

**Temporal can build an *integrations* marketplace.**

Every great B2B company is the system of record for *something* crucial within the enterprise. The sheer gravity of this data pulls its own ecosystem of apps and startups into its orbit, further entrenching the company.

Salesforce is one such ecosystem for customers and sales, which is why it continues to be adopted while everybody complains about it. Let's say Okta is the emerging SoR for SSO logins, and it is beginning to [flex its data](https://www.okta.com/sites/default/files/2022-01/Businesses-at-Work-2022-Annual-Report.pdf). Rippling is the [SoR for employee data](https://twitter.com/EverettRandle/status/1451209431597731840). So on and so forth.

Temporal is naturally the System of Record for the most critical long running processes within any company. How many open transactions do we have running right now? What's the p95 runtime of our customer shopping journeys in the past month? Why was there a spike in manual cancellations of our billing workflow yesterday? 

This not only positions it for offering the [most important dashboard](https://www.saastr.com/want-go-upmarket-need-great-dashboard/) in the company (though it should not attempt to be a dashboarding company) but perhaps also *control panel* as well. Neither are significant revenue opportunities - but the integrations that come with this data can be.

One underappreciated fact is that Temporal is also the System of Record for vendor reliability. We naturally collect the API failure rates as the flip side of retries, and can do everything from evaluate SLAs to baking off vendor performance, although I don't seriously expect that this use case will be dominant compared to other vendor evaluation criteria.

### Serverless and Code Hosting

**Temporal can build a *hosting* marketplace.**

Temporal is ***not*** serverless today, despite being a "modern" technology.

People used to serverless providers and API vendors are often surprised to learn that [Temporal's operational model](https://www.youtube.com/watch?v=2HjnQlnA5eY) requires you to run and scale your own Worker fleet. Even if you pay Temporal Cloud to host a Cluster for you. 

This works just fine for enterprises who *prefer* it that way (for compliance, security, control, and just generally fitting into their preferred infrastructure setup) but there is still the majority of the developer market that wants to do as minimal infra and ops as possible.

That's a lot of compute revenue left on the table, right there, that Temporal simply says no to. Temporal at $1.5b valuation would much rather be best friends with the likes of Heroku, Render, Railway, and the entire pantheon of EC2 variants, than compete with them. But it certainly suffers a hit to developer experience by needing to bring in Yet Another Vendor. To the extent that Temporal can establish a successful *hosting* marketplace (primarily compute and storage) and be the central point of billing integration, this can be a viable stance for a very long time. But ultimately the best developer experience will only be accomplished with the tight integration of providing first party compute. Even if this business is ultimately low margin, the lower friction leading to accelerated adoption could well be worth getting into this business.

*The same argument, by the way, can be made for storage revenue and storage developer experience - [Chronosphere's recent presentation at the flagship Temporal meetup](https://www.youtube.com/watch?v=QTdspo9NY4I) highlights how commonly the state layer needs to work with the storage layer.*

One final observation - Temporal essentially breaks Workflow code into dozens of tiny "[Workflow Tasks](https://docs.temporal.io/docs/concepts/what-is-a-workflow-task/)", which, when looked at in the right light, are essentially dozens of tiny serverless functions. Workflow Workers can turn serverless well before Activity Workers have to and it would not be a big leap for Temporal to offer this natively. The "Serverless Containers" offerings like Fargate, Cloud Run and others could eventually also prove good bases for "serverless" Activity Workers too. There's a fair amount of revenue to drive or absorb here.

*Note that this point can evolve independently of the "Backward Integration" point above, because that pertains more to running Temporal Clusters than Temporal Workers. But of course there are overlaps.*

### Humans in the Loop vs ML in the Loop

In the "Temporal as a 10b company" section above, we talked about how Temporal's ability to replace manual processes is a key driver to its value. The scope of this is already inestimably large, but ultimately it is rate limited by one of the rarest resources on Earth: *Developers*.

**Can we write workflows without developers?**

This line of thinking might look like I am arguing that Temporal will eventually become a no-code company. For cultural and core competency reasons I don't think this can or should happen - you would have to bet on Temporal successfully incubating a second company that successfully cracks the "general purpose no-code" nut better than Zapier or Make. Better to be arms dealer to the very long tail of no-code and platforms-offering-low-code-workflows services. We are already seeing examples of customers [writing XState Statechart interpreters with Temporal](https://temporal.io/xstate) to implement their own low-code systems with surprising effectiveness.

No, I'm more talking about the ability for ***data*** to augment or replace developers for routine or insufficient-data-but-manually-prototypable tasks:

- Not replacing developers entirely, but enabling product managers and other domain experts to shape workflow decision trees and dynamically adjusting decisions to data without requiring code changes, while still relying on developers to write activities and set up integrations. This expands Temporal reach within the organization beyond the engineering org. 
- The simplest version of this is the A/B test - have two versions of a Workflow written up, have Temporal send traffic through each, and decide the winner by human or automated decision criteria. More complex variants can turn the binary decision into value seeking between given min-max ranges - essentially a very slow, real world form of [backpropagation](https://en.wikipedia.org/wiki/Backpropagation). Temporal would probably choke under most forms of deep learning today, but there's nothing preventing us implementing simple, explainable learning. Still, the ability of Temporal to function as a distributed computer shouldn't be underestimated: Developers at Uber already have shown examples of [Particle Swarm Optimization](https://github.com/temporalio/samples-go/tree/main/pso) using Workflows.
- Temporal could explicitly model "hybrid human-machine" nodes - "Workflows" that initially defer to human domain expert decision makers, but then *using the collected data* to switch to automated decision making within sufficiently established ranges, while still yielding back to humans for unobserved ranges or exceeded confidence bounds.

This is basically the essence of Andrej Karpathy's [Software 2.0](https://karpathy.medium.com/software-2-0-a64152b37c35) thesis applied to Temporal - how much can we let *data* write Workflows, rather than developers? Many deployments of Temporal are very high volume - in the *millions* of workflows per month - and it is a shame that none of that data currently feeds back in any automated way to improving the workflows themselves.

As much as I have noted Temporal's strong internal network effect to developers, the best internal network effect is always feeding back to the company as a whole.

## Conclusion

This is just me thinking out loud on the potential direction of Temporal. I find order-of-magnitude thought exercises to be a [Brian Chesky-style](https://www.product-frameworks.com/11-Star-Experience.html) mind expander that lifts ambitions and forces you to really think through what moves the needle to get to the next stage.

Very few people on Earth have ever seen a company through from 1b to 100b and beyond, so I'm definitely missing obvious steps or making some absolute howlers. Please comment below or correct me if you can see these. 

