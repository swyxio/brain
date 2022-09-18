1990s
- https://overcast.fm/+H1YPGUu6Q/11:00 - MDS - mainframe - teradata - cognos BI
- oracle, sap, businessobjects (BI)
- olap invention https://overcast.fm/+x8z9ZeTiE . olap cubrs precalculate everything. pre indexing all the dimensions and measures (https://overcast.fm/+x8z_nL6u0). 7 dimsensions too much. dimensional relational model helps to do this for more dimensions (maybe columnar db)


https://www.slideshare.net/HadoopSummit/the-ecosystem-is-too-damn-big
2006-2016 hadoop
problems with hadoop https://sapphireventures.com/blog/what-is-the-open-data-ecosystem-and-why-its-here-to-stay/

https://matt-rickard.com/diseconomies-of-scale-at-google/
- 2004 - map reduce
- 2003 - google file system
- 2006 - hadoop and hdfs
- 2008 - google dremel - enterprise data warehouse https://overcast.fm/+IexeaWJgs/08:00
- spawned cloudera, hortonworks, databricks
- 2017 - cloudera ipo https://news.crunchbase.com/business/morning-report-ahead-clouderas-ipo-pricing-key-slides-roadshow/ from 4bn to 2bn
- 2018 - merged https://news.crunchbase.com/venture/the-ever-cheaper-cloudera-hortonworks-merger/


“master data management collapsed under its own weight “
https://overcast.fm/+x8z-L-oRY/27:00


tristan timeline of MDS
- https://www.getdbt.com/blog/future-of-the-modern-data-stack/


https://www.freecodecamp.org/news/the-rise-of-the-data-engineer-91be18f1e603/
2011-2013 rise of data engineer

https://multithreaded.stitchfix.com/blog/2016/03/16/engineers-shouldnt-write-etl/
2016 

https://benn.substack.com/p/why-do-people-want-to-be-analytics
rise of sexiness



2019 - data mesh https://martinfowler.com/articles/data-monolith-to-mesh.html
- response https://cnr.sh/essays/what-the-heck-data-mesh


2010 - data lake https://www.dataversity.net/brief-history-data-lakes/
2020 - lakehouse https://tdwi.org/articles/2020/03/10/arch-all-welcome-to-the-lakehouse.aspx


https://overcast.fm/+IexfoKBtc/27:33 airflow copied fb data swarm and data bee

- https://fly.io/blog/all-in-on-sqlite-litestream/
	- In the beginning of our story, back in the '70s, there were [Codd's rules,](https://www.oreilly.com/library/view/sql-in-a/9780596155322/ch01s01s01.html) defining what we now call "[relational databases](https://en.wikipedia.org/wiki/Relational_database)", also known today as "databases". You know them, even if you don't: all data lives in tables; tables have columns, and rows are addressable with keys; C.R.U.D.; schemas; a textual language to convey these concepts. The language, of course, is SQL, which prompted a Cambrian explosion of SQL databases, from Oracle to DB2 to Postgres to MySQL, throughout the '80s and '90s.
	- It hasn't all been good. The 2000s got us XML databases. But our industry atoned by building some [great columnar databases](https://www.vertica.com/secrets-behind-verticas-performance/) during the same time. By the 2010s, we saw dozens of large-scale, open-source distributed database projects come to market. Now anyone can spin up a cluster and query terabytes of data.
	- First came the database tier. Later, with [memcached](https://memcached.org/) and [Redis](https://fly.io/blog/all-in-on-sqlite-litestream/redis.io), we got the caching tier. We've got [background job tiers](https://sidekiq.org/) and we've got [routing tiers](https://www.pgbouncer.org/) and distribution tiers.

- https://benn.substack.com/p/the-end-of-big-data first-wave big data companies like Cloudera, Hortonworks, and MapR, hyped the same narrative: We have tons of data, and we’re going to change the world with it.
	- https://benn.substack.com/p/the-end-of-big-data/comment/5957489?s=r
	- I'll age myself by saying that I remember Impala, and also was at the first Databricks Strata tutorial circa 2014. I started using both Databricks and Snowflake relatively early on--2016/2017. And while I love, love, LOVE your posts, I think there's one thing you get wrong here. Before roughly 2019, Databricks wasn't at all "a big, fast database that you can write SQL and Python against." Yes, you could query tables with SQL, but all of the underlying stuff you had to do with s3 and cluster management made it feel a lot more like Hadoop than Redshift or Snowflake. So much so that my DS/ML teams used Databricks because we liked python, but it was totally infeasible to make our Analytics team use it instead of Snowflake.
	- That all changed in 2020 when Databricks released Delta and very slowly integrated it into their product offering. Delta is basically OSS Snowflake, and since then, Databricks and Snowflake have been slowly converging. Finally in the last year or so Delta feels a lot like Snowflake (with a nice UI, simplified SQL clusters like Snowflake warehouses, etc.). So it really is a big, fast database that you can program with python, scala, SQL.


2019 acquisitions - looker google 2.6b and tableau salesforce 15.7b
https://www.getdbt.com/blog/a-wave-of-acquisitions-in-business-intelligence/


https://www.dremio.com/subsurface/comparison-of-data-lake-table-formats-iceberg-hudi-and-delta-lake/
- from Hive
- to Iceberg, Hudi, Delta Lake


https://news.ycombinator.com/item?id=18990469
history of postgres as ingres vs oracle
unforking of citus data and acquisition by msft
jun 2022 open source enterprise features

https://news.ycombinator.com/item?id=31848594
big data became data
- pii issues

## when is big data too big?
- https://specbranch.com/posts/one-big-server/#the-capabilities-of-one-server
- One server today is capable of:

-   [Serving video files at 400 Gbps](https://people.freebsd.org/~gallatin/talks/euro2021.pdf) (now [800 Gbps](http://nabstreamingsummit.com/wp-content/uploads/2022/05/2022-Streaming-Summit-Netflix.pdf))
-   [1 million IOPS on a NoSQL database](https://www.scylladb.com/2017/05/10/faster-and-better-what-to-expect-running-scylla-on-aws-i3-instances/)
-   [70k IOPS in PostgreSQL](https://www.enterprisedb.com/blog/pgbench-performance-benchmark-postgresql-12-and-edb-advanced-server-12)



## juicy stories

- oracle paid people to sidetrack mysql?
	- https://news.ycombinator.com/item?id=5435893
- 
MDS is dead 
- i think this is an important read and reflects the mood shift i’ve been seeing among MDS folks this year. important to not be caught off guard with our messaging. https://www.linkedin.com/posts/ethanaaron_snowflakesummit-data-analytics-activity-6942877586976890880-NvGT/?utm_source=linkedin_share&utm_medium=member_desktop_web