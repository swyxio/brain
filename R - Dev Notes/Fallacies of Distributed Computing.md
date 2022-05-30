---
created: 2021-12-17 15:40
updated: 2021-12-20 09:54
---

<https://www.se-radio.net/2021/07/episode-470-l-peter-deutsch-on-the-fallacies-of-distributed-computing/>

The [fallacies](https://en.wikipedia.org/wiki/Fallacy "Fallacy") are:

1. The [network](https://en.wikipedia.org/wiki/Computer_network "Computer network") is reliable;
2. [Latency](https://en.wikipedia.org/wiki/Latency_(engineering) "Latency (engineering)") is zero;
3. [Bandwidth](https://en.wikipedia.org/wiki/Throughput "Throughput") is infinite;
4. The network is [secure](https://en.wikipedia.org/wiki/Computer_security "Computer security");
5. [Topology](https://en.wikipedia.org/wiki/Network_topology "Network topology") doesn't change;
6. There is one [administrator](https://en.wikipedia.org/wiki/Network_administrator "Network administrator");
7. Transport cost is zero;
8. The network is homogeneous.

## original 4 fallacies

1. network is reliable
   1. error correction is good now
   2. but outages still not good. timeouts and failures to transmit not well handled. iPhone doesnt notify or retransmit on failure
   3. new protocols like gRPC has a deadline/timeout by default. HTTP doesnt
   4. The problem is some lower layers dont offer info to upper layers so they cant diagnose/retry
2. latency is zero
   1. tell me whether something is in process, or has happened
   2. 2 types of latency:
      1. latency of transport of indiv packets
      2. response latency, caused by
         1. application developers
         2. unreasonable expectations
         3. not considering data size vs transport speed
3. bandwidth is infinite
   3. yes bandwidth is increasing, but constrained by bandwidth of the weaker side
   4. parallelize resources in webpages
4. network is secure
   1. "security can be lost at any level"
   2. security of infra
   3. security of application
   4. security of network/environment of use - used to be within established trust boundaries, now we cant trust end users. networking within govt is also more adversarial
   5. HTTPS and SMTP over TLS hop to hop encryption being the norm is good
   6. Gmail doesnt do encrypted emails, biz model want to read your emails. NSA also discourages it in Microsoft or Apple
   7. higher awareness of phishing, malware

## Peter Deutsch added fallacies

5. topology doesnt change
   1. a lot more based on mobile devices - topology at the edge changing constantly
   2. if device moving from one network to other, you need protocol to change IP addresses, and also to maintain sessions. (eg cell phone handed off from one tower to the other)
   3. need the right addressing architecture at bottom level - IPv4 didnt do it well, not sure about IPv6
   4. "Single worst mistake you can make in the design of a system is not make an address space big enough"
6. one administrator
   1. network administrator - shouldnt need to anymore, handle locally
   2. policy administrator - requires well established standards that people actually implement
      1. internet has done a good job of being standards based
      2. best administration doesnt need an administrator - just check the standard!
7. transport cost is zero <- actually true!
   1. charge/pricing. transport cost for users is generally zero
   2. for most situation - primary usage cost is server capacity. bandwidth is flat rate. transport cost isnt zero, but usage insensitive.
      1. its bandwidth or capacity costs, not transport costs
   3. data across clouds.
8. The Network is homogeneous
   1. Standards make the network not only appear homogeneous, but be sufficiently homogeneous
   2. "The great thing about standards is that there are so many of them to choose from"
   3. best way is a community based process
   4. industry done a decent job. HTML5 is part of networking tech that the industry has done a credible job
   5. power grid - some grids are 50hz, some 60hz, 110, 220
   6. if you know what the space of heterogeneous alternatives is, then not keeping them in mind is definitely a fallacy
9. the communicating parties trust each other, or the party that you’re communicating with is trustworthy.
   1. what’s an appropriate level of trust?
   2. What are appropriate kinds of trust?
   3. What are appropriate trust guarantee? mechanisms.
   4. And there are also age old questions of business, relationships of contract of law.
   5. Big edge security problems: phishing and end user malware
   6. intentionality plays a big role

## misc notes

"Good open standards, both for software interfaces and for data formats, are more important than for software itself to be open source."

_profound_ insight from Peter Deutsch, on @jeffdoolittle's @seradio episode <https://www.se-radio.net/2021/07/episode-470-l-peter-deutsch-on-the-fallacies-of-distributed-computing/> (44-46 mins)

tweeted it https://twitter.com/swyx/status/1472746901711855617