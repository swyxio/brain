
### Intermediate

- aggregates
	- SELECT COUNT(high) FROM tutorial.aapl_historical_stock_price
	- SELECT SUM(volume) FROM tutorial.aapl_historical_stock_price
	- SELECT MIN(volume) AS min_volume, MAX(volume) AS max_volume FROM tutorial.aapl_historical_stock_price
	- SELECT AVG(high) FROM tutorial.aapl_historical_stock_price 
		- note that it ignores nulls
		- backfill with CASE WHEN null = 0
- GROUP BY year
- HAVING MAX(high) > 400
	- it's like WHERE, but for aggregate columns


### Beginner

- LIKE and ILIKE
	- WHERE "group" LIKE 'Snoop%' case sensitive
	- any location WHERE "group" ILIKE '%ludacris%'
	- WHERE "group" ILIKE 'snoop%' insensitive
	- WHERE artist ILIKE 'dr_ke' subs individual character
- IN a list
	- WHERE year_rank IN (1, 2, 3)
	- WHERE artist IN ('Taylor Swift', 'Usher', 'Ludacris')
- BETWEEN x and y
	- WHERE year_rank BETWEEN 5 AND 10
	- WHERE year_rank >= 5 AND year_rank <= 10
- IS NULL
	- WHERE artist IS NULL
- AND: 
	- WHERE year = 2012 AND year_rank <= 10 AND "group" ILIKE '%feat%'
- OR:
	- WHERE year_rank = 5 OR artist = 'Gotye'
	- WHERE year = 2013 AND ("group" ILIKE '%macklemore%' OR "group" ILIKE '%timberlake%')
- NOT and IS NOT:
	- WHERE year = 2013 AND year_rank NOT BETWEEN 2 AND 3
	- error: WHERE year = 2013 AND year_rank NOT > 3
		- fix: WHERE year = 2013 AND year_rank <= 3
	- WHERE year = 2013 AND artist IS NOT NULL
- ORDER BY
	- ORDER BY year_rank DESC
	- ORDER BY year DESC, year_rank
		- you can use column numbers ORDER BY 2, 1 DESC