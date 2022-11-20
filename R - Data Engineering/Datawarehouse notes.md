- explaining snowflake https://nomorehustleporn.com/no-more-hustleporn-32/
	- https://cahana.substack.com/p/the-biggest-prize-in-software
	- snowflake vs databricks thouughts https://benn.substack.com/p/the-end-of-big-data


nice ecosystem overview https://greylock.com/greymatter/the-next-cloud-data-platform/

data mesh organization https://martinfowler.com/articles/data-monolith-to-mesh.html

why lakehouse https://overcast.fm/+lcqWQ6LV0/12:45
- 2 usecases
	- ml/ai/datascience - they like open data parquet files
	- bi tools - with fast performance
- why its hard: tech tradeoffs
	- and security/access control


types of warehouse
- https://panoply.io/data-warehouse-guide/data-warehouse-architecture-traditional-vs-cloud/#kimball-vs-inmon
	- kimball - marts
		- repositories of data belonging to particular lines of business. The data warehouse is simply a combination of different data marts that facilitates reporting and analysis. The Kimball data warehouse design uses a “bottom-up” approach.
	- inmon - warehouse
		-  regarded the data warehouse as the centralized repository for all enterprise data. In this approach, an organization first creates a normalized data warehouse model. Dimensional data marts are then created based on the warehouse model. This is known as a top-down approach to data warehousing.