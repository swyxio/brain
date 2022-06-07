
# The End of Localhost

**It looks likely that most development will *not* be done on `localhost` in future.**

Make a wishlist for the average rich-country developer in 2030:
- Fast gigabit internet is *cheap* and *everywhere* (5G or mesh wifi)
- Dev machines (laptops, tablets, VR goggles) are *cheap* and have multiday battery life
- Your apps build in a second *regardless of scale*, with tests and staging environments/deploy previews ~instantly live after every keystroke
- Your personal dev environment travels with you no matter which device you use
- Any app's environmental dependencies are immediately available to any teammate ramping up on it - no docs, no runbook
- You can go from idea to first customer in a weekend, using a combination of low-code builders and backends-as-a-service
- You can scale up from MVP to unicorn in weeks, using one of the serverless or "new Heroku" platforms, and auth/payments/database/communication needs handled by world-class SaaS teams

You will notice that most of these items enable (even *require*) you to run things "live" on the cloud, not `localhost`.

Perhaps most importantly, the time wasted fixing bugs between dev and prod environments **goes from 1-4 hours a week down to 0**, if you can simply eliminate the discrepancy between dev and prod (realistically, you will always have *some* discrepancy between staging and prod. 

To [paraphrase Bob Metcalfe](https://www.wired.com/2012/04/ff-andreessen/), if the browser reduced operating systems to "a poorly debugged set of device drivers", then **the cloud is reducing the dev machine to a poorly debugged set of environment mocks**.

[INSERT MEME: My machine can't simulate the cloud - then we'll make you work on the cloud]

In [my original tweet](https://twitter.com/swyx/status/1533910738942562304) calling out this trend

That's it, that's the blogpost. The rest of this article is elaborating with examples, trends, and anecdata.


## But I Need To Code on a Plane?

Maybe stop flying so much. Or get a good audiobook and rest your eyes. Maybe even talk to your neighbor! (if they seem social)

## Inevitability by Human History

One of the ironic tensions of humanity is that we **say** we want free will, self sufficiency and decentralization, but our **actions** tend toward the hive mind, interdependence and central infrastructure. 

- There are a long list of critical life essentials on which we are not self sufficient. Many historians mark agriculture as a starting point of civilization - meaning that *centralizing our food source* helped us move past a subsistence agriculture. Water supply and sanitation centralized [in the 1700s](https://en.wikipedia.org/wiki/History_of_water_supply_and_sanitation). Electricity has basically been centralized from the start.
- Closer to modern times we're also seeing everything we use move to the cloud, from movies/TV (from huge VHS and DVD libraries to a monthly Netflix/Disney/HBO subscription), games (from box games to free-to-play MOBAs and MMORPGs, Google Stadia, xCloud and PS Now), and knowledge (from Encyclopaedia to Wikipedia)
- Even in the B2B domain: 
	- Salesforce's "no software" move to SaaS was just the first in a long history of moving every imaginable application to the cloud
	- GAE/AWS/Azure moved the datacenter to the cloud
	- Box and Dropbox moved file storage to the cloud
	- Most recently [Suhail Doshi's Mighty app](https://www.producthunt.com/stories/suhail-doshi-s-new-company-mighty-is-a-faster-browser-streamed-from-the-cloud) is moving even the *browser* to the cloud

To argue *against* `localhost` eventually going the way of the Dodo is to do the developer equivalent of asserting that most people want to run their own generators or grow their own food.


## Developers Are Already Reliant on The Cloud

Now, you might argue that developers take so much pride in their tools that they will go out of their way to be self sufficient in them. And yet:

- Every [Slack](https://hn.algolia.com/?dateRange=all&page=0&prefix=false&query=status.slack.com&sort=byPopularity&type=story) and [GitHub](https://hn.algolia.com/?dateRange=all&page=0&prefix=true&query=github%20is%20down&sort=byPopularity&type=story) outage is basically celebrated as a Developer "Snow Day" (unscheduled holiday due to acts of god)
- Most companies run separate Build/CI/CD infrastructure anyway - in other words most apps don't get *deployed* without first going through some cloud infra.

There's a difference between "I use CircleCI"


Dev inner loop



things that are no longer local

- Thin platforms https://news.ycombinator.com/item?id=31571566
- browser (mighty app)
- production infrastructure
- CI/CD
- caching of builds with turborepo
- dropbox