---
created: 2021-12-01 01:35
updated: 2022-04-26 12:12
---


## rishi raman
 
 - quillsql
 - embedded analytics
	 - alerts
	 - series A+ company to have real enterprise customers
 - cofounders
	 - S20, sean W20
	 - working at toyota ventures right now
	 - taking angel money, scout money
	 - shut down due to call center
	 - close to something
	 - sell the product vs 
 - second company
 - dont tell brittnay
 - raise seed in jan/feb
 - dont want pple to know 
	 - 

## palette.dev - amila welihinda

- YC got in
- raised 1.3m
- oss for 8 years
	- electtron  react boilerplate
		- consulting
		- optimized shitty slow electron apps. used to take 20s to startup
	- linting
	- js infra background
	- realized real user monitoring
- perf eng at aws
	- cut render time in half - not related to profiling, but learned to MEASURE EVERYTHING
	- so many webapps slow, vscode
	- biz interest to make these apps fasts
- prototype of chrome devtools powered by end user session to make perf debugging really easy
	- feels too easy
	- session replay but from devtools
	- replay frames, stack traces, profile the frontend with <1% overhead
- tauri gonna run into a few issue
	- have to rebuild chrome
	- size of application being downloaded
- traction
	- past series B
		- video conf platforms/whiteboarding
		- will be integrating with steve ruiz
		- some interest with notion
			- we will be readdy for notion in 6 months 
			- every click, function call
				- between start/stop api
				- decide sampling rate - 1%, 2%
			- "we are like amplitude"
- used firefox profiler to get it working
- work in both the browser and electron
	- tldraw
	- leftonread (YC company)
		electron
		can see latency in render process
- can see jank, render flamegraphs
- have prototype working for serverless nodejs context
	- no one is profiling nextjs in vercel, not even datadog
- can offer serverside view and clientside view side by side
- who are you competing with?
	- competing with chrome devtools
	- sentry doesnt profile the web. no company is profiling the web
	- profiler is a program that samples the stack of a program at time intervers
		- or tracing <- sentry does this
	- "palette is a true profiling solution"
		- you cant think of a profile without function calls
	- replay.io -> doesnt profile produciton
		- debugging, not performance
- developers want a profiler
	- in CI/CD
	- based on real user data - the most valuable data
	- anything other than real user metrics are proxy for UX
- team
	- first hire last week
	- 1 contractor for a while
	- hiring aggressively
	- now because have demo
- stack
	- static analysis in TS
	- migrating to rust
	- graphql, prisma
	- nextjs
	- supabase
		- pg+timescaledb => timescale cloud
		- didnt like influxdb
	- vitess thru planetscale
		- moved off -> a lot of requirements for ts data
	- why not clickhouse
		- want to reduce tools that we use
		- timescale can query 20m records in a second bc everything fetched from disk in materialized view
		- didnt want all events in separate stack
		- 2 weeks retention
- deal -> SAFE
- want VC?
	- bootstrapped too slow
- size of mkt - growing. increasing imptnce
	- top new alternatives to ddog
	- modern profiler - sentry kind of a toy
	- profiling on the web


## tldraw visit

okso.app
trbl.dev
globs.design

faasaas -> the intermediate cloud
- you want something in between my cloud and your client

ideas for tldraw
- myspace - url component
- subdomakns and custom domaisn for tldraw
- okso.app embeddable pages with navigation and breadcrumbs
- code editor and code hosting - dont need to edit tldraw source code to contribute custom components
- interactive/learnable programming - connectable components 
- icon library
- marketing 
	- rotation
	- things you take for granted/cant unsee
- read - 
	- crdts go brr - 5000x faster than automerge
	- seth and james from melbourne



Screenflow 9

## old laptop ground

highpri watching
- https://www.loom.com/share/6b38e6382a9c46e1936d6076b9faf685
- https://www.youtube.com/watch?v=kIFjDV_zHaQ
- https://www.vmware.com/content/dam/digitalmarketing/vmware/en/pdf/docs/vmware-kubernetes-up-running-dive-into-the-future-of-infrastructure.pdf

related reads
- https://news.ycombinator.com/item?id=31217448
- https://cloudedjudgement.substack.com/p/the-modern-data-cloud-warehouse-vs?s=r
- https://rakgarg.substack.com/p/the-great-splunkbundling?s=r
- https://maximebeauchemin.medium.com/the-downfall-of-the-data-engineer-5bfb701e5d6b
- https://www.dataliftoff.com/data-warehouses-are-the-past-present-and-future/
- https://semistructured.substack.com/p/why-i-joined-dbt-labs?s=r
- https://towardsdatascience.com/airbyte-worth-the-hype-d2f25d0a7ca5
- https://www.georgesequeira.com/writing/zapier-the-5b-unbundling-opportunity/
- https://airbyte.com/blog/etl-framework-vs-etl-script
- https://maximebeauchemin.medium.com/functional-data-engineering-a-modern-paradigm-for-batch-data-processing-2327ec32c42a
- https://www.getdbt.com/coalesce-2021/dbt-core-v1-reveal/
- https://docs.aws.amazon.com/whitepapers/latest/data-warehousing-on-aws/introducing-amazon-redshift.html
	- https://medium.com/@deepaksethi.ocp/aws-redshift-whitepaper-84e013272841
- https://www.vldb.org/pvldb/vol11/p2209-kersten.pdf
- https://databricks.com/blog/2022/04/05/announcing-generally-availability-of-databricks-delta-live-tables-dlt.html
- https://www.loom.com/share/50817ab3e8104499803ea1de5d91faff
	- https://www.prnewswire.com/news-releases/uniform-raises-28m-in-series-a-funding-round-led-by-insight-partners-301435875.html?utm_campaign=marketing&utm_source=linkedin
- https://softwareengineeringdaily.com/2020/02/13/setting-the-stage-for-platform-engineering/
- https://shahadarsh.com/2020/10/12/platform-engineering/

casual reads
- https://matklad.github.io//2022/04/25/why-lsp.html
- https://www.wave.com/en/blog/early-execution/
- https://blog.replit.com/dns
- CJC angel thread https://twitter.com/cjc/status/1489749609849122823
- https://growth.eladgil.com/book/chapter-4-building-the-executive-team/firing-executives/
- https://www.youtube.com/watch?v=T4VtBcmbbSs&t=1s
- https://ahrefs.com/academy/blogging-for-business/lesson-1-1 and https://app.ahrefs.com/dashboard
- https://neverworkintheory.org/2022/04/21/decline-of-sourceforge.html
- https://twitter.com/copernicussw/status/1513923651787059209?s=21&t=sOVkIBA5VSxf7S4h2nlOcg
- https://future.a16z.com/managing-your-mental-health-while-running-a-startup/


tweet
- 15min/day - 50 days
1hr/week - indefinite
2hrs/week - indefinite
10hr/week - 1-6mths
30hr/1month a year


fun
- https://twitter.com/Redpoint/status/1493999205945335808
- https://quuxplusone.github.io/blog/2022/01/06/memcached-interview/
- https://www.vulture.com/2020/11/eva-green-answers-every-question-we-have-about-the-dreamers.html


## Completely ungroomed dumping ground

todo: swyxkit lazy loading

todo spark joy CSS Filter Demos
If you do choose to work with filters, there are a number of sites that demo great
capabilities with CSS filter effects. Here are just a few:
• HTML5 Demos (<http://bit.ly/21SARYv>), the source of the preceding images
. CSS Filter Playground by Bennett Feely (<http://bennettfeely.com/filters/>
• CSSReflex(<http://www.cssreflex.com/css-generators/filter/>
• My personal favorite, CSSGram (<http://una.im/CSSgram>) by Una Kravets, which
mixes filters to make some great Instagram-like effects
Keep in mind that animating filters can be very costly. I tend to avoid animating
them, or use a setTimeout that will apply the attribute or CSS strictly for the time I
need it, and then remove it.

- <https://www.notion.so/temporalio/Ryland-s-Temporal-manifesto-f523e64e0a8e40d8a9da638ef91b7c06>
- <https://news.ycombinator.com/item?id=29299986>
- <https://blog.cloudflare.com/developer-expert-program/>
- <https://www.ejorgenson.com/blog/50-first-levers?utm_source=brainpint&utm_medium=email&utm_campaign=positive_accidents&utm_term=2021-12-01>
- <https://medium.com/analytics-vidhya/how-i-put-my-mind-under-version-control-24caea37b8a5>
- follow <https://panelbear.com/blog/tech-stack/>
- <https://esteetey.dev/be-a-dev-detective-with-sourcegraph>
- <https://isovalent.com/blog/post/2021-12-08-ebpf-servicemesh>
- <https://github.blog/2021-12-09-introducing-stack-graphs/>
- <https://every.to/almanack/oatly-the-new-coke-821556>
- <https://calvinfo.substack.com/p/yc-ultras-nyc-fusion>
- <https://nickwignall.com/self-awareness/>
- <https://sahilbloom.substack.com/p/the-cold-email-guide?utm_source=brainpint&utm_medium=email&utm_campaign=positive_accidents&utm_term=2021-12-01>
- <https://www.demandcurve.com/playbooks/product-hunt>
- <https://www.demandcurve.com/playbooks/influencer-creator-marketing>
- <https://www.demandcurve.com/playbooks/2021-marketing-tools-beginners-guide>
- <https://www.demandcurve.com/playbooks/above-the-fold>
- <https://commoncog.com/blog/playing-to-play-playing-to-win/>
- <https://amaca.substack.com/p/how-i-got-wealthy-without-working?utm_source=convertkit&utm_medium=email&utm_campaign=Travelling+Back+in+Time%20-%207085386>
- <https://lethain.com/platform-product-fit/>
- <https://peterattiamd.com/my-nutritional-framework/>
- <https://xconomy.com/national/2013/10/01/microsoft-research-memo-analysis/>
- <https://danielyxie.github.io/bitburner/>

## long term todo

<https://ethereum.org/en/developers/>

- <https://research.paradigm.xyz/cartoon-guide-to-perps>

- <https://www.paradigm.xyz/2021/05/everlasting-options/>

- <https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698>

- LIP notes: <https://borisreitman.com/privacy.html>

- LIP notes 2: <https://news.ycombinator.com/item?id=26891227>

- Todo: factorio

- Todo: threejs

- Todo: jayclouse <https://courses.jayclouse.com/courses/1173157/lectures/27501628>

- todo: learn css <https://web.dev/learn/css/>

- todo: images <https://www.smashingmagazine.com/2021/04/image-optimization-pre-release/>

- todo: davella <https://slowgrowth.com/lesson/master-youtube-essential-gear/>

- todo: <https://developers.notion.com/>

- todo: <https://scottjehl.thinkific.com/courses/take/lfwp/lessons/10023485-an-introduction-from-scott>

- todo: add lenny newsletter referral

- todo: try veed.io

- read: <http://www.craftinginterpreters.com/contents.html>



### substack pubs

Lenny's Newsletter
Lenny's Newsletter
Paid Subscriber

Edit
Alex Danco's Newsletter
Alex Danco's Newsletter
Free Subscriber

Edit
The Analytics Engineering Roundup
The Analytics Engineering Roundup
Free Subscriber

Edit
A
Art Dev
Free Subscriber

Edit
The Bear Cave
The Bear Cave
Free Subscriber

Edit
C
Calvin's Field Notes
Free Subscriber

Edit
Check your Pulse
Check your Pulse
Free Subscriber

Edit
chiefofstuff
chiefofstuff
Free Subscriber

Edit
Chinese Characteristics
Chinese Characteristics
Free Subscriber

Edit
Cloud Irregular
Cloud Irregular
Free Subscriber

Edit
C
Community Playbooks
Free Subscriber

Edit
Constine's Newsletter
Constine's Newsletter
Free Subscriber

Edit
The Curiosity Chronicle
The Curiosity Chronicle
Free Subscriber

Edit
CWS Market Review
CWS Market Review
Free Subscriber

Edit
Default Wisdom
Default Wisdom
Free Subscriber

Edit
The Diff
The Diff
Free Subscriber

Edit
Drawing Links
Drawing Links
Free Subscriber

Edit
E
Editorial’s Newsletter
Free Subscriber

Edit
An Engineering Self-Study
An Engineering Self-Study
Free Subscriber

Edit
EthHub
EthHub
Free Subscriber

Edit
Fact of the Day 1
Fact of the Day 1
Free Subscriber

Edit
First 1000
First 1000
Free Subscriber

Edit
The Flywheel
The Flywheel
Free Subscriber

Edit
Gwern.net Newsletter
Gwern.net Newsletter
Free Subscriber

Edit
H
Harvey Multani
Free Subscriber

Edit
Inverted Passion Community Newsletter
Inverted Passion Community Newsletter
Free Subscriber

Edit
J
Jeff’s Newsletter
Free Subscriber

Edit
J
Julie Young's Newsletter
Free Subscriber

Edit
L
Lessons From The Crisis
Free Subscriber

Edit
Lolita's Newsletter
Lolita's Newsletter
Free Subscriber

Edit
luttig's learnings
luttig's learnings
Free Subscriber

Edit
M
Midnight on the Market Momentum
Free Subscriber

Edit
Net Interest
Net Interest
Free Subscriber

Edit
Newcomer
Newcomer
Free Subscriber

Edit
no-code report
no-code report
Free Subscriber

Edit
Noahpinion
Noahpinion
Free Subscriber

Edit
Normcore Tech
Normcore Tech
Free Subscriber

Edit
Not Boring by Packy McCormick
Not Boring by Packy McCormick
Free Subscriber

Edit
On Substack
On Substack
Free Subscriber

Edit
P
Plasmic’s Newsletter
Free Subscriber

Edit
The Premoney List
The Premoney List
Free Subscriber

Edit
Product Lessons
Product Lessons
Free Subscriber

Edit
Programming Feedback for Advanced Beginners
Programming Feedback for Advanced Beginners
Free Subscriber

Edit
Quick Brown Fox by Salman Ansari
Quick Brown Fox by Salman Ansari
Free Subscriber

Edit
R
Recommender Alignment Newsletter
Free Subscriber

Edit
Reflect Changelog
Reflect Changelog
Free Subscriber

Edit
Remains of the Day
Remains of the Day
Free Subscriber

Edit
Software at Scale
Software at Scale
Free Subscriber

Edit
Sriram Krishnan -  Montage Sequence
Sriram Krishnan - Montage Sequence
Free Subscriber

Edit
TJCX
TJCX
Free Subscriber

Edit
TK News by Matt Taibbi
TK News by Matt Taibbi
Free Subscriber

Edit
Trove Dispatch
Trove Dispatch
Free Subscriber

Edit
T
Tyler’s Musings
Free Subscriber

Edit
Week in Clubhouse
Week in Clubhouse
Free Subscriber

Edit
The Weekly Shuffle
The Weekly Shuffle
Free Subscriber

Edit
Wellness Wisdom by Patricia Mou
Wellness Wisdom by Patricia Mou
Free Subscriber

Edit
W
wongmjane
Free Subscriber

Edit
W
World Builders
Free Subscriber

Edit
Y
Yehuda Katz
Free Subscriber

Edit