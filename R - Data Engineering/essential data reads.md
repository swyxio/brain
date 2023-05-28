
python vs sql
- Against SQL https://news.ycombinator.com/item?id=27791539
	- For SQL https://pedram.substack.com/p/for-sql
	- industry meta https://benn.substack.com/p/analytics-is-at-a-crossroads


concepts
- Data Mesh https://martinfowler.com/articles/data-monolith-to-mesh.html
- instrumenting event analytics https://www.reforge.com/blog/why-most-analytics-efforts-fail
- feature store https://feast.dev/blog/what-is-a-feature-store/

industry meta
- https://benn.substack.com/p/analytics-is-at-a-crossroads
- https://amplifypartners.com/moderndatateamshub/
- potemkin data https://mcorrell.medium.com/potemkin-data-science-fba2b5ba5cc6
- datastack 2021 https://lakefs.io/the-state-of-data-engineering-in-2021/
- 2016 birth of dbt and modern data stack https://www.getdbt.com/blog/building-a-mature-analytics-workflow/
- atlans version of the stack https://twitter.com/prukalpa/status/1376192466005549057?s=20
- big data is dead  https://motherduck.com/blog/big-data-is-dead/
	- YOU DON'T ACTUALLY HAVE BIG DATA
		- The general feedback we got talking to folks in the industry was that 100 GB was the right order of magnitude for a data warehouse. This is where we focused a lot of our efforts in benchmarking.
		- One of our investors ... found that the largest B2B companies in his portfolio had around **1 TB** of data, while the largest B2C companies had around **10 TB** of data. Most, however, had far less data.
		- Imagine you’re a medium sized business, with a **thousand customers**.
			- Let’s say each one of your customers places a new order every day with a hundred line items. This is relatively frequent, but it is still probably less than a megabyte of data generated per day. **In three years you would still only have a gigabyte, and it would take millenia to generate a terabyte.**
		- let’s say **you have a million leads** in your marketing database, and you’re running dozens of campaigns. Your leads table is probably still less than a gigabyte, and tracking each lead across each campaign still probably is only **a few gigabytes**.
		- I worked at SingleStore in 2020-2022, when it was a fast-growing Series E company with significant revenue and a unicorn valuation. If you added up the size of our finance data warehouse, our customer data, our marketing campaign tracking, and our service logs, **it was probably only a few gigabytes**. By any stretch of the imagination, this is not big data.
	- QUERY WORKLOADS SCALE DIFFERENT THAN STORAGE
		- **Customers with giant data sizes almost never queried huge amounts of data**
		- A couple of years ago I did an analysis of BigQuery queries, looking at customers spending more than $1000 / year. 90% of queries processed less than 100 MB of data.
		- Very often when a data warehousing customer moves from an environment where they didn’t have separation of storage and compute into one where they do have it, their storage usage grows tremendously, but their compute needs tend to not really change. In BigQuery, we had a customer who was one of the largest retailers in the world. They had an on-premise data warehouse that was around 100 TB of data. When they moved to the cloud, they ended up with 30 PB of data, a 300x increase. If their compute needs had also scaled up by a similar amount, they would have been spending billions of dollars on analytics. Instead, they spent a tiny fraction of that amount.
		- There are acute economic pressures incentivizing people to reduce the amount of data they process.
	- MOST DATA IS RARELY QUERIED
		- A huge percentage of the data that gets processed is less than 24 hours old. By the time data gets to be a week old, it is probably 20 times less likely to be queried than from the most recent day. After a month, data mostly just sits there. Historical data tends to be queries infrequently, perhaps when someone is running a rare report.
		- Data storage age patterns are a lot flatter. While a lot of data gets discarded pretty quickly, a lot of data just gets appended to the end of tables. The most recent year might only have 30% of the data but 99% of data accesses. The most recent month might have 5% of data but 80% of data accesses.
	- DATA NEVER GOT THAT BIG, BUT MACHINES GOT 2 ORDERS BIGGER
		- In 2004, when the Google MapReduce paper was written, it would have been very common for a data workload to not fit on a single commodity machine. Scaling up was expensive. In 2006, AWS launched EC2, and the only size of instance you could get was a single core and 2 GB of RAM. There were a lot of workloads that wouldn’t fit on that machine. Today, however, a standard instance on AWS uses a physical server with 64 cores and 256 GB of RAM. That’s two orders of magnitude more RAM. If you’re willing to spend a little bit more for a memory-optimized instance, you can get another two orders of magnitude of RAM. How many workloads need more than 24TB of RAM or 445 CPU cores?
	- DATA IS A LIABILITY
		- The cost of keeping data around is higher than just the cost to store the physical bytes. Under regulations like GDPR and CCPA, you are required to track all usage of certain types of data. Some data needs to be deleted within a certain period of time. If you have phone numbers in a parquet file that sit around for too long in your data lake somewhere, you may be violating statutory requirements.
		- If you are keeping around old data, it is good to understand why you are keeping it. Are you asking the same questions over and over again? If that is the case, wouldn’t it be far less expensive in terms of storage and query costs to just store aggregates? Are you keeping it for a rainy day? Are you thinking that there are new questions you might want to ask? If so, how important is it? How likely is it that you’ll really need it? Are you really just a data hoarder? These are all important questions to ask, especially as you try to figure out the true cost of keeping the data.
	- Some questions that you can ask to figure out if you’re a “Big Data One-Percenter”:
		-   Are you really generating a huge amount of data?
		-   If so, do you really need to use a huge amount of data at once?
		-   If so, is the data really too big to fit on one machine?
		-   If so, are you sure you’re not just a data hoarder?
		-   If so, are you sure you wouldn’t be better off summarizing?

team 
- https://www.getdbt.com/blog/we-the-purple-people/
	- This metaphor paints a world where humans with a deep understanding of business context in a particular domain are called red people ❤️. And humans with a breadth of technical expertise are called blue people 💙. Purple people 💜 are the people in between — they have a little bit of both that enables them to translate between red and blue
- https://erikbern.com/2021/07/07/the-data-team-a-short-story.html
- https://seldo.com/posts/what-i-ve-learned-about-data-recently