# The Investment Case for Temporal

I spend a lot of time talking to developers about Temporal, but haven't touched on Temporal's business potential since my [Why Temporal](https://www.swyx.io/why-temporal/#the-business-case-for-temporal) post from last year. 

Today is the occasion of [our Series B announcement](https://twitter.com/swyx/status/1493994119869657090), and I thought it'd be fun to take my dev hat off and put on my money hat. I won't be discussing "[So what actually is Temporal?](https://news.ycombinator.com/item?id=30365798)" here, just making the business case that I would as a venture partner getting buy-in to invest in the company.

*Obviously this is personal speculation and I am not confirming the company roadmap or anything. This is going to start off sounding extremely bullish, because it is easy to do that for young startups, but this isn't a puff piece and we'll get more skeptical towards the end.*

## Why Temporal is worth 1.5b

I'll rule out one form of valuation here, which is "unicorn by strategic acquisition" - all the cloud majors have a workflow offering and Temporal would be additive, but Temporal's appeal is inherently multi-cloud, so that would seriously impair the value here (though that has [not stopped Microsoft](https://www.inverse.com/gaming/call-of-duty-xbox-exclusive)). There are other possible acquirers than the cloud majors of course, but those are hard to predict. Salesforce, Stripe, or Twilio perhaps.

### Unicorn by Comparables

Making a unicorn valuation by comps is the easiest, if flimsiest, argument.

Some notable recent raises by peer devtools, compared with informal data on their revenue trends, gives us confidence that Temporal is in the neighborhood of similar raises:

- [Chronosphere raised 200m on $1+b](https://techcrunch.com/2021/10/07/chronosphere-raises-200m-at-a-1b-valuation-for-cloud-native-monitoring-adds-granular-distributed-tracing-to-its-dashboard/)
- [Sourcegraph raised 125m on $2.6b](https://techcrunch.com/2021/07/13/sourcegraph-raises-125m-series-d-on-2-6b-valuation-for-universal-code-search-tool/)
- [Airbyte raised 150m on $1.5b](https://airbyte.com/blog/a-150m-series-b-to-power-the-movement-of-data)

### Unicorn by Growth

Making a unicorn value based on *fundamentals* is a good deal harder. Let's just say exit price/sales multiples for enterprise software is at 20-40x. So Temporal would have to bring in $50m in revenue (with say 30-40% growth) for $1.5b valuation to make sense as a public company. It does not make that today, no unicorn does. But growth is a good deal higher. What’s a fair price for $5m revenue growing the classic “triple triple double double” for example? That's the sort of handicapping you have to do in startup investing.

However, one thing I can say here is to collate public statements on the *viral expansion* of Temporal:

- **At Uber**, Cadence grew from 0 to >100 use cases within 3 years.
- Also while [at Uber](https://docs.temporal.io/blog/oss-startups-podcast), Cadence got adoption at HashiCorp, Coinbase, DoorDash, Box, and Checkr on the back of [minimal (but effective) marketing](https://www.youtube.com/watch?v=BJwFxqdSx4Y).
- Temporal open source has disclosed [25% MoM growth](https://www.theregister.com/2022/02/16/temporal_103m_funding/) (which annualizes to about [14x in 1 yr](https://twitter.com/BogieBalkansky/status/1494025245279195136)) in active clusters.
- [Datadog reported](https://docs.temporal.io/blog/how-datadog-ensures-database-reliability-with-temporal/) usage "expanded to more than 100 users across dozens of teams within just one year" and is now running [3 million workflows per month](https://youtu.be/Hz7ZZzafBoE?t=100).
- [Netflix reported](https://youtu.be/LliBP7YMGyA?t=197) running 500k workflows a *day* in Oct 2021 and projected 1m a day by end 2021.
- [Stripe hasn't disclosed](https://www.youtube.com/watch?v=Crkcr1S-NSc) any numbers, but have posted [a second job for their Workflow Engine team](https://stripe.com/jobs/listing/infrastructure-engineer-developer-productivity-workflow-engine/2964407) this year.

The natural position of Temporal as a primary tool for the rising [Platform Engineer](https://twitter.com/danielbryantuk/status/1494614250567966732) to provide a scalable stateful reliability primitive (bundling queues, databases, timers, gateways, encryption etc.) means that the biggest cost of adoption is paid by the first production user. Every subsequent user after that has a much lower cost to adopt Temporal, because most of the deployment and integration niggles have been worked out. And once the code has been run and is running reliably, the long-running and repetitive nature of this workload means there is very little incentive to churn.

At minimum this should mean that user acquisition/organic growth should be strong for many years, and in terms of monetization you could see Net Revenue Retention north of 200% in the first few years of implementation, which is world-beating ([110% is good, 130% is great](https://www.lennysnewsletter.com/p/what-is-good-retention-issue-29?utm_source=url), and Snowflake is 160-180%, though these numbers are for more mature companies).


## Why Temporal will be worth 10b

Let's level-set here on what it takes to be a ~10b software company in 2022:

- New Relic: 4b valuation, 750m revenue +20% yoy
- Elastic: 8b valuation, 600m revenue +40% yoy
- Gitlab: 9b valuation, 200m revenue +60% yoy
- Hashicorp: 10b valuation, 300m revenue +50% yoy
- Confluent: 14b valuation, 400m revenue +70% yoy

So to be in the neighborhood of 10b you need at least 200-300m revenue growing 50-70%, which of course is variable based on a number of other factors including margin, expansion/churn profile, and other revenue quality metrics.

### Assessing potential

Temporal can reach this stage with just the existing open source software, but it must be complemented by a fully generally available cloud service equally capable of handling individual developers as it is large enterprises like Snap (now a [public customer](https://docs.temporal.io/blog/series-b-press)). We haven't seen what kind of growth a fully unfettered cloud service is capable of, even in terms of mature account expansion, much less being able to take on all the inbound interest, nor its ability to convert trial/free tier users.

The primary risk to Temporal reaching this milestone is the inability to build a satisfactory Cloud service in a reasonable time frame. It must move fast to build out all the table stakes accoutrements of the [Enterprise Ready](https://enterpriseready.io/) stack, while not losing customer data or experiencing fatal downtime or security breaches.

Sales don't even have to be particularly international yet (Hashicorp was 75% domestic at IPO, with Confluent 68% and Gitlab 83%), but will probably need to develop both geographically and vertically - the [top listed usecases](https://temporal.io/use-cases) are each large categories on their own, with significant (e.g. government, finance, healthcare, energy and industrials) verticals not yet represented, and there are [more](https://web.archive.org/web/20210428212024/temporal.io/usecases) not yet fully developed.

### Everything As Code

As a developer's understanding of Temporal grows, the stated benefits and applied use cases tend to shift from the basic promises on reliability and observability, to its ability to offer general purpose orchestration, automation and human-in-the-loop interaction.

I am really impressed by the [Datadog case study](https://docs.temporal.io/blog/how-datadog-ensures-database-reliability-with-temporal/#outcomes) for spelling this out: "With Temporal, a single Workflow not only replaces the manual steps but also the need for a human to be monitoring it.... We've done things that we likely wouldn't have done without Temporal." Similar has been mentioned at [Descript](https://docs.temporal.io/blog/descript-case-study#whats-next) and [Box](https://docs.temporal.io/blog/temporal-a-central-brain-for-box#whats-next).

Because workflows can wait for arbitrarily long amounts of time, and can block on human action or other external input, they are a perfect tool for automating anything long-running, including previously manual, or partially manual, processes. This helps justify the ridiculously high upper bound on the potential value of Temporal workflows, because anything that saves or eliminates human labor has both high marginal profit and linear scalability.

At the end of the day, when we are talking B2B revenue, the money doesn't come from thin air, the budget must come from somewhere, and it is very hard to get businesses to spend money on software that it wasn't spending elsewhere before....

***Unless*** you can convincingly show that the money is being spent on humans, and lost in opportunity cost. Then you unlock the big bucks.

Of course, Temporal will not capture the bulk of this value, because significant work still needs to be done by developers to realize this benefit.

### The Workflow Engines Category

The general flexibility of Temporal is both why it is difficult to pitch and yet tends to be applied to everything once understood (Index Ventures' tagline, "[Everything is a Workflow](https://www.indexventures.com/perspectives/everything-is-a-workflow-our-investment-in-temporal/)" is a very common realization once you've worked with Temporal a while). 

The formal framing of Temporal is as an **Application State Manager**, because that accurately describes the central but limited role that Temporal plays inside of a distributed system/microservice architecture (doesn't directly handle big blobs of data, doesn't run your code, but does route and persist the general state of your application spread across services). It is the one stateful service in your stack that lets everything else be stateless (or at least idempotent).

But it is often *used* as a "Workflow Engine" (of which there are [many](https://github.com/meirwah/awesome-workflow-engines), which underlines Temporal's reluctance to be lumped in the same bucket). I sometimes like to pitch Workflow Engines in general as a kind of "special purpose database", much like Search Engines and Analytics Engines: 

- Just like Search and Analytics, you could roll your own, but you'd do a poor job of it. You're fine if your usecase is trivial, but most people should reach for Elastic or Clickhouse at any decent scale.
- Just like Search and Analytics, once you understand the capabilities and implementation well, you are free to apply them to whatever use cases you can imagine.
- Unlike Search and Analytics, Workflow Engines are a sort of "[Self-Provisioning Runtime](https://www.swyx.io/self-provisioning-runtime/)" on which you run specialized software (whether using Temporal-style As-Code SDKs or JSON/YML/DAG-style Workflow definitions), rather than making isolated API calls from application code.

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

Each of the centicorn companies lays some credible claim to being more valuable as an independent entity than being one of the big 3 clouds (and therefore would lose value if acquired).

- Snowflake took [6-7 years](https://www.snowdba.com/chapter-1-snowflake-history/) to launch Azure and GCP support, and now brands itself as a standalone Data Cloud.
- Stripe has pretty much always been [on AWS](https://aws.amazon.com/solutions/case-studies/stripe/), but considers itself the "[AWS of payments](https://www.geekwire.com/2017/stripe-co-founder-john-collison-thinks-company-amazon-web-services-payments/)".
- [Cloudflare is making a very different play](https://www.swyx.io/cloudflare-go/) in order to be the "fourth major cloud".

Because of Temporal's focus on lightweight application state and orchestration of multiple services, it has a natural position between the big clouds (this is a very contrived scenario, but imagine being able to easily weave together specialized ML services from Google, with the advanced storage options from AWS, inside a well supported .NET environment on Azure).

Eventually sufficiently sized workloads will force Temporal into providing its own cloud primitives of [compute, storage, and bandwidth](https://twitter.com/swyx/status/1475857610306109440?s=20&t=zESt1zAn4WfC_fKkp04Mkg), up to and including making its own hardware.

### Forward Integration and Network Effects

As a platform tool with a significant learning curve and devops cost, Temporal has a valuable *internal* [growth loop](https://www.reforge.com/blog/growth-loops) built on improving developer experience and tangible results. However, the external network effects are near zero today. The addition of each new Temporal user doesn't materially impact future users, or existing users.

The easiest way *external* network effects could start happening is through some kind of marketplace. There's nothing inherent in Temporal's design that requires that every Workflow or Activity must be run, or even operated, by you. Yet by its nature, it has knowledge of every critical microservice in its' users organization (this "knowledge" is very decoupled for now, and will likely have to be strengthened if this becomes a project priority).

Each new user could contribute their microservices in some sort of public directory, which can then be invoked by others wishing to reuse them. This treats Temporal as a sort of super-aggregator of services, assuming it has established itself as a preferred protocol for long-running processes, much in the same way that HTTP has become the standard protocol for short-lived ones (glossing over a lot of nuance here). Temporal should respect [the Mullenweg-Gates Line](https://twitter.com/swyx/status/1360729115372920832) and only take 5% of the total value, but if they can get money flowing here then there is a ton of value to be realized by a third party ecosystem (and more efficiently than many Web3 advocates might suppose). Temporal wins when vendors on its marketplace win - up to and including every [API Economy](https://www.swyx.io/api-economy/) vendor wrapping their offerings in a Temporal Activity or Workflow for easier consumption.

This doesn't even have to happen all at once - Temporal can help offer mesh, catalog, billing, and discovery services internally at very large companies before making any of this publicly available.

### Humans in the Loop

---

protocol -> marketplace
human-machine interface