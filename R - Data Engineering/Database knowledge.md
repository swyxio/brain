the first SQL db - System R https://en.wikipedia.org/wiki/IBM_System_R

db decision tree https://twitter.com/alexxubyte/status/1576961080454021121/photo/1


write db from scratch/ build your own database
- https://dbfromzero.com/
- https://www.reddit.com/r/databasedevelopment/comments/unj8d1/getting_started_with_database_development/
- https://www.databass.dev/
- https://www.awelm.com/posts/simple-db/
- https://www.amazon.com/Database-System-Implementation-Hector-Garcia-Molina/dp/0130402648
- http://www.databaselecture.com/
- https://cstack.github.io/db_tutorial/
- https://leanpub.com/how-query-engines-work
- https://build-your-own.org/blog/20230127_byor/

what snowflake does ontop of just being a db
- https://twitter.com/squarecog/status/1566472243399446528?s=21&t=cImxWUUEdJWHnQyrsmPXoA
- metadata catalogs, user management, security, views


bigquery https://overcast.fm/+5PHEijBNg 
- bigquery had separation of storage and compute first before snowflake
- data sharing - globally addressable data so stuff is not siloed
- active data warehouse is under 100gb
- snowflake vs redshift was 30tb but only large custs do that
- 90% queries under 100mb

how to do db replication https://twitter.com/teej_m/status/1521300456483352576?s=21&t=bSCCzeDkGxb-QNornEz5Qg

apache pinot [https://youtu.be/_lqdfq2c9cQ](https://youtu.be/_lqdfq2c9cQ)

things to know about databases https://news.ycombinator.com/item?id=31895623
- 


3 types of data (vinoth hudi)
- postgres - mutability
- event stream - support deduplication - high scale
- api - smaller scale, but high variety - salesforce, hubspot etc


large tech co
- CDC streams 
	- flink stream processing
	- send to CDW
- flexible between batch and stream
- fivetran - lock this stream in - not possible to get stream out into kafka topic
- onehouse focuses on actual storage management
	- gave up query layer - have people who ran presto for 2.5 yrs





embedded key value db's
https://notes.eatonphil.com/whats-the-big-deal-about-key-value-databases.html


HTAP ecosystem
- https://overcast.fm/+H1YOVNmx0
- https://www.singlestore.com/blog/the-recipe-for-a-singlestore-database/
	- http://nms.csail.mit.edu/~stavros/pubs/hstore.pdf
- 
differential dataflow
- http://michaelisard.com/pubs/differentialdataflow.pdf
- https://planetscale.com/blog/how-planetscale-boost-serves-your-sql-queries-instantly
- https://news.ycombinator.com/item?id=33610996

benchmarks
- https://benchmark.clickhouse.com/

desirable database properties https://www.singlestore.com/blog/engineers-guide-building-database-for-data-intensive-applications/
- Horizontal vs vertical **scalability**
- Column-oriented vs row-**oriented** storage
- **Physical storage** choices
- How to protect from data loss? replication, tiering, incremental backup/restore
- How to make queries go fast? - query accelerator, planning, vectorized execution

sqlite problems

[https://news.ycombinator.com/item?id=31340253](https://news.ycombinator.com/item?id=31340253)


time series data
- https://questdb.io/blog/2020/07/01/we-put-a-sql-database-on-the-internet/
- timescale db


k/v stores 
- https://news.ycombinator.com/item?id=31796311 comparison of 4 incl redis


## comparisons
- https://docs.yugabyte.com/latest/comparisons/


## Mysql vs Postgres
https://twitter.com/mscccc/status/1476246801174966272?s=20
- MySQL - simpler, easier to operate, backups, replication, failover, upgrades (infra engs like)
- Postgres - postgis, jsonb, hstore (product engs like)

https://percona.podbean.com/e/all-things-open-source-database-advocacy-and-alloydb-percona-database-podcast-76-w-gabe-weiss/
- some people dont like oracle tech
- postgres truly vendor neutral  - more supportive of plugins like alloydb - google’s scalable postgres backend
-  turns postgres into HTAP - 45mins in - analytics stuff on postgres

Why planetscale not postgres
- https://twitter.com/rbranson/status/1461031251691773953
- Both Postgres and MySQL not addressing needs like schema evolution, data migrations, understanding cost and performance factors, operational overhead, scalability, compliance, integration, and geographically diverse deployments.
- Vitess focus on MySQL helps ship stuff like database import functionality

problems with postgress
https://twitter.com/kylelf_/status/1536687193430818818?s=21&t=FifLwSLw3DOD7qOzV5uSOw
serverless postgres https://neon.tech/blog/hello-world/


## nosql

nodql base and bugs - bitcoin havk https://martin.kleppmann.com/2014/11/25/hermitage-testing-the-i-in-acid.html


## build uour own baby database

https://github.com/pingcap/talent-plan
This series provides information on TinySQL and TinyKV, which are distributed databases in Go.

Courses include:

TP 301: TinySQL, a distributed relational database in Go
TP 302: TinyKV, a distributed key value database in Go