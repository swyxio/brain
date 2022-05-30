bigquery https://overcast.fm/+5PHEijBNg 
- bigquery had separation of storage and compute first before snowflake
- data sharing - globally addressable data so stuff is not siloed
- active data warehouse is under 100gb
- snowflake vs redshift was 30tb but only large custs do that
- 90% queries under 100mb

how to do db replication https://twitter.com/teej_m/status/1521300456483352576?s=21&t=bSCCzeDkGxb-QNornEz5Qg

apache pinot [https://youtu.be/_lqdfq2c9cQ](https://youtu.be/_lqdfq2c9cQ)

  

  

sqlite problems

[https://news.ycombinator.com/item?id=31340253](https://news.ycombinator.com/item?id=31340253)


time series data
- https://questdb.io/blog/2020/07/01/we-put-a-sql-database-on-the-internet/
- timescale db


## comparisons
- https://docs.yugabyte.com/latest/comparisons/


## Mysql vs Postgres
https://twitter.com/mscccc/status/1476246801174966272?s=20
- MySQL - simpler, easier to operate, backups, replication, failover, upgrades (infra engs like)
- Postgres - postgis, jsonb, hstore (product engs like)

Why planetscale not postgres
- https://twitter.com/rbranson/status/1461031251691773953
- Both Postgres and MySQL not addressing needs like schema evolution, data migrations, understanding cost and performance factors, operational overhead, scalability, compliance, integration, and geographically diverse deployments.
- Vitess focus on MySQL helps ship stuff like database import functionality



## postgres ecosystem

- timeseries
	- timescaledb
		- https://news.ycombinator.com/item?id=29096541
	- influx?
	- why time series special category? https://www.xaprb.com/blog/2014/06/08/time-series-database-requirements/
- OLAP
	- Clickhouse