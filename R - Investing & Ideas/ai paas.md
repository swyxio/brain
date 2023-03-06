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
3. smol data
	- we make shit smaller faster
	- **Privacy/own servers - [security issues](https://news.ycombinator.com/item?id=34910249)**
	- stage 2 on RLHF 
1. PaaS concerns
	- abtesting - rollout canaries
	- audit logs/change notifications
	- help to generate adversarial examples
2. open data
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
	- https://www.datarobot.com/
	- scale spellbook
	- https://humanloop.com/
	- helicone
	- https://honeyhive.ai/
	- numberstation https://overcast.fm/+w94WoPpFo/14:16
	- https://promptlayer.com/ 

## industry people on smol models

- clement of hf https://overcast.fm/+_gdYlxC60/17:54 generally agree
- https://www.linkedin.com/in/ivanvendrov/ liked it at anthropic