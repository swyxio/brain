mascot name and history
https://www.vertabelo.com/blog/the-history-of-slonik-the-postgresql-elephant-logo/


postgres architecture https://twitter.com/samokhvalov/status/1326579896244527104/photo/1
https://pgstats.dev/

postgres pain points https://www.socallinuxexpo.org/sites/default/files/presentations/solving-postgres-wicked-problems.pdf
- upgrading pain points
	- https://news.ycombinator.com/item?id=31873063
	- RDS doesnt do zero downtime upgrades

postgres concurrency and perf
- vs sqlite https://www.twilio.com/blog/sqlite-postgresql-complicated

## RLS

for multi tenant saas
https://news.ycombinator.com/item?id=32241820 with warnings

## postgres ecosystem

- timeseries
	- timescaledb
		- https://news.ycombinator.com/item?id=29096541
	- influx?
	- why time series special category? https://www.xaprb.com/blog/2014/06/08/time-series-database-requirements/
- OLAP
	- Clickhouse

spanner vs aurora vs calvin https://twitter.com/markcallaghandb/status/1555935983668908033?s=21&t=NXQT8gUyVgxas9tANzTDNQ


newsql players https://twitter.com/criccomini/status/1559707794349010949?s=21&t=zsoIYmluQHBReWSYaIKD1 cockroach and tidb and yugabyte


## basics


https://news.ycombinator.com/item?id=32498648
https://postgresapp.com/

## Extra Notes

https://www.crunchydata.com/developers/playground/
- Postgres modes to know
  - `\h` all commands
    - `\h create database` help on specific command
  - `\l` list all databases
  - `\d {tablename}` show all tables and objects
    - `\d+ {tablename}` extended information such as each table's size on disk.
  - `\pset pager 0` turns off pagination
  - `\timing` turns on a timer
  - `\q` quit
