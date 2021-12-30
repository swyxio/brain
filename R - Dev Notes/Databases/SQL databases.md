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