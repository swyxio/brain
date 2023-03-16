stunt ideas
- github first responder - close issues, re-ping on issues, close
	- summary view of top issues


## why

- smol models are powerful motivator
	- stable diffusion
	- whisper https://archive.is/FEGf1
- privacy/ownership
- speed
	- https://github.com/hwchase17/langchainjs/issues/62#issuecomment-1450627944
- cost
- predictability/alignment

trends
- large models are actually becoming democratized
	- OpenAI has great brand but
	- FB released LLaMA https://ai.facebook.com/blog/large-language-model-llama-meta-ai/  
	- Google released FLAN 20B fully open source
- foundationa models
	- https://txt.cohere.ai/ai-is-eating-the-world/

alex bowe
https://github.com/FMInference/FlexGen
- FlexGen is a high-throughput generation engine for running large language models with limited GPU memory (e.g., a 16GB T4 GPU or a 24GB RTX3090 gaming card!). FlexGen allows high-throughput generation by IO-efficient offloading, compression and large effective batch sizes.

## 5 step plan

updated in https://docs.google.com/document/d/1S0IlBTti_qmcXiTjqcCzaciC-q7s0LrNKbsyQaRx2lk/edit#
1. prompt injection
	- prompt suggestion
	- cloudflare for prompts aka PDN
		- The value of CloudFlare comes from its network, not the software they run. https://news.ycombinator.com/item?id=34800182
2. caching
	1. simple caching for supabase clippy
	- speculative querying/preloading based on recent behavior?
		- have to integrate with hotjar and segment?
		- Alessio example - if i load data in a notebook i'm likely to want to run whisper later
		- gptcommit - nutlope - speculatively run on git add instead of git commit
	- monitor drift https://news.ycombinator.com/item?id=35069839
1. smol data
	- we make shit smaller faster
	- **Privacy/own servers - [security issues](https://news.ycombinator.com/item?id=34910249)**
	- stage 2 on RLHF 
	- eliezer on alpaca https://twitter.com/ESYudkowsky/status/1635577836525469697
2. PaaS concerns
	- abtesting - rollout canaries
	- audit logs/change notifications
	- help to generate adversarial examples
3. open data
	- donate your data
	- sharable profile of open data hackers
	- “data management platform”?

You received a $9,500 counter offer on albatross.ai
You sent a $1,500 offer on albatross.ai
smol.ai **$500.00** Renews at $79.98/yr
ant.dev $720/year

https://twitter.com/elizalian/status/1623065312706072576?s=46&t=ofyFRrmR_qpgz1gc0cAvIQ



from watching andrew ng stanford cs230 lecture 3
- get data comes before training the models
- how about we flip it? large model then get data
- ready fire aim
- reinvent software engineer and machine learning for the age of foundational modela


https://twitter.com/kevinafischer/status/1624629889306595329
- competition
	- https://twitter.com/didntgetthemem0/status/1624863929364103169?s=20
	- https://twitter.com/yairhaimo/status/1625001332296896513?s=20
	- https://snorkel.ai/
		- warm start + finetuning https://snorkel.ai/better-not-bigger-how-to-get-gpt-3-quality-at-0-1-the-cost/
	- https://www.datarobot.com/
	- scale spellbook
	- https://humanloop.com/
	- helicone
	- https://honeyhive.ai/
	- numberstation https://overcast.fm/+w94WoPpFo/14:16
	- https://promptlayer.com/ 
	- vellum - YC W23 https://news.ycombinator.com/item?id=35042836
	- guardrails https://github.com/ShreyaR/guardrails


## industry people on smol models

- clement of hf https://overcast.fm/+_gdYlxC60/17:54 generally agree
- emad
	- https://twitter.com/EMostaque/status/1635645058274795520?s=20
	- Fits with my stance that small customised open & standardised models (alone or combined) beat large general models.
- treybig
	- 1.  I think its really confusing to software engineers today how you go from big model (including which one to start with) to something production grade - which model to big, how to align, should you fine tune, should you quantize, how do you get to the cost/latency characteristics needed, what is the "pareto optimal" curve across cost/accuracy/latency, etc
	- and then there are so, so, so many ways to generate data and align now, and then other architectures like training these smaller models on FM generated data, etc
	- i think if something just made this trivially simple it would be interesting