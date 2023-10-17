
>  **Software 3.0 and The Emerging AI Developer Landscape**
 > Everyone has gone AI mad, and there is a lot of noise, hype, and demos, but not a lot of guidance on practical usecases. We will go over a mental model of who is doing what and explain both where the opportunities are and where the non-AI developer can start going down the rabbit hole.
 

Target 25 mins
- 5 mins: DATA Timeline, data proof points
	- madness
		- AI AI I/O
		- agents rise
		- no adoption in enterprise? https://twitter.com/bentossell/status/1686387000260358145
			- HN quotes
		- sarah guo quote
	- People
	- publication speed overwhelming
	- AGI foom https://x.com/swyx/status/1653887955474460672?s=20
		- and AGI fears -> wait but why, not kill everyone memes
		- https://x.com/swyx/status/1653885657448841216?s=20
	- open source AI model development https://x.com/swyx/status/1653891330668658689?s=20 and transformers variants https://x.com/swyx/status/1653890389039013889?s=20
	- chegg textbooks and stackoverflow collapsing
	- Who's making money from AI
		- Jasper
		- Midjourney
		- Copilot
		- ChatGPT
		- Character.ai
		- Agents?
		- Case Studies
			- Levelsio
			- Headlime
			- Zapier AI
			- Notion AI
			- Vercel AI
- 5 mins: TREND:  Rise of the AI Engineer
	- What is Software 3.0?
		- Software 1.0 vs 2.0
		- Software 3.0 -> code is impt
		- ???
	- https://huyenchip.com/2023/08/16/llm-research-open-challenges.html
		[1. Reduce and measure hallucinations](https://huyenchip.com/2023/08/16/llm-research-open-challenges.html#1_reduce_and_measure_hallucinations)  
		[2. Optimize context length and context construction](https://huyenchip.com/2023/08/16/llm-research-open-challenges.html#2_context_learning)  
		[3. Incorporate other data modalities](https://huyenchip.com/2023/08/16/llm-research-open-challenges.html#3_incorporate_other_data_modalities)  
		[4. Make LLMs faster and cheaper](https://huyenchip.com/2023/08/16/llm-research-open-challenges.html#4_make_llms_faster_and_cheaper)  
		[5. Design a new model architecture](https://huyenchip.com/2023/08/16/llm-research-open-challenges.html#5_design_a_new_model_architecture)  
		[6. Develop GPU alternatives](https://huyenchip.com/2023/08/16/llm-research-open-challenges.html#6_develop_gpu_alternatives)  
		[7. Make agents usable](https://huyenchip.com/2023/08/16/llm-research-open-challenges.html#7_make_agents_usable)  
		[8. Improve learning from human preference](https://huyenchip.com/2023/08/16/llm-research-open-challenges.html#8_improve_learning_from_human_preference)  
		[9. Improve the efficiency of the chat interface](https://huyenchip.com/2023/08/16/llm-research-open-challenges.html#9_improve_the_efficiency_of_the_chat_interface)  
		[10. Build LLMs for non-English languages](https://huyenchip.com/2023/08/16/llm-research-open-challenges.html#10_build_llms_for_non_english_languages)
	- Disciplines of the AI Engineer
		- Prompt Engineering & Structured Responses
		- AI UX
		- OSS AI - Hosting & Infra
			- beware local LLM u curve
		- OSS AI - Finetuning & Evals
		- AI Productivity Devtools
		- Tooling for AI
		- AI Agents
- 5 mins: EXAMPLES: Latent Space Highlights
	- Fundamentals: Datasets, Benchmarks, Algorithms
	- Celebs: Geohot, Chris Lattner, Code Interpreter, Rise of AI Engineer, Replit, Reverse Prompt Eng
	- Unintuitive lessons
		- Bitter Lesson - encoding things is a temporary boost
		- RAG - second brain 
		- Code always better
			- Replit model
		- Larger not always better
			- Chinchilla - Llama
			- Phi-1 data paper, tinystories
			- we have tricks to scale - Geohot 1.7tr
			- tshirt sizing of models
		- Raw datasets are overrated
			- dont need to keep updating every year
			- Deep learning on datasets -> 4 kinds of training
			- https://twitter.com/altryne/status/1661236778458832896
			- llama 2 - estimated cost 2.5b
		- Agents are the future
- 5 mins: Landscape presentation
	- equal weighting categories is mistaken
		- https://twitter.com/swyx/status/1701472499840532853/photo/2
	- survey
	- Foundation Model
		- openai
		- anthropic
	- Libraries/Frameworks
		- LangChain
		- LlamaIndex
		- Deepset Haystack
		- Vercel AI
		- Semantic Kernel
		- Guardrails
		- Guidance
	- Vector DBs
		- Vector DBs
	- OSS Hosting/Training
		- ?
	- Misc
		- Prompt management
		- Monitoring/observability
 - 5 mins Latent Space University
		- reuse stuff from cityjs talk
		- 0: learn how to prompt
		1. **OpenAI GPT3 API Basics (completed)**
			1. what is a token https://twitter.com/swyx/status/1653893171787747329
		2. **Prompt Tooling and Memory (completed)**
		3. **Code Generation with GPT3 (completed)**
		4. Image Generation with Dall-E, Stability AI, Lexica, and Midjourney (in production)
		5. Speech-to-Text with Whisper (tbd)
		6. Finetuning & Running Open Source Models (tbd)
		7. AI Agents
- YOU ARE NOT TOO OLD
	- https://www.latent.space/p/not-old
	- Opportunities of the AI Engineer
		- Prompt Engineering
		- AI UX
		- OSS AI - Hosting & Infra
		- OSS AI - Finetuning & Evals
		- AI Productivity Devtools
		- Tooling for AI
		- AI Agents
	- consider
		- Ethics, Sourcing
		- security - software 2.0 security
		- Multimodality
	- What to rule out:
		- AGI hard
		- Google vs OpenAI vs Meta wars
		- Xrisk, Regulation, Law
		- Threadbois
