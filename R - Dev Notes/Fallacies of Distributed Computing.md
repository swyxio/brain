---
created: 2021-12-17 15:40
---

<https://www.se-radio.net/2021/07/episode-470-l-peter-deutsch-on-the-fallacies-of-distributed-computing/>

## original fallacies

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


## peter deutsch fallacies

5. topology doesnt change
	1. a lot more based on mobile devices - topology at the edge changing constantly
	2. if device moving from one network to other, you need protocol to change IP addresses, and also to maintain sessions. (eg cell phone handed off from one tower to the other)
	3. need the right addressing architecture at bottom level - IPv4 didnt do it well, not sure about IPv6
	4. "Single worst mistake you can make in the design of a system is not make an address space big enough"
6. one administrator
7. transport cost is zero
8. ?
9. we all trust with each other