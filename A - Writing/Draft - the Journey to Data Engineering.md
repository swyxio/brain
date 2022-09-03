## paradigm lost

- shtick
	- why are you not rich?
	- this talk will change the way you think about your tech career
- What does it mean to be Full Stack?
- the standard paradigm: frontend/backend
	- the stupid chart
	- people happy https://2021.stateofjs.com/en-US/opinions
		- but not paid https://survey.stackoverflow.co/2022/#salary-comp-total
		- why not rich 
	- 2010 https://s2.studylib.net/store/data/017738962_1-def8fa4e10b06cfb07eb8f06875cdfed-768x994.png
	- 2015 https://www.freecodecamp.org/news/our-1-600-hour-javascript-coding-curriculum-d4f151b782d2/
	- 2017 https://www.freecodecamp.org/news/a-roadmap-to-becoming-a-web-developer-in-2017-b6ac3dddd0cf/
	- 2022 https://www.freecodecamp.org/learn
		- https://www.freecodecamp.org/news/freecodecamp-certifications/
		- 2021 https://www.freecodecamp.org/news/building-a-data-science-curriculum-with-advanced-math-and-machine-learning/
	**- client-server, then three tier architecture: client-server-db**
		- LAMP stack, MEAN stack, MERN stack, JAM stack, FOFE/BOFE
		- https://docs.aws.amazon.com/whitepapers/latest/serverless-multi-tier-architectures-api-gateway-lambda/three-tier-architecture-overview.html
		- https://managementmania.com/en/three-tier-architecture
		- maybe in modern paradigm, it is client-server-db-devops
	- name your fave apps 
		- holotypes https://twitter.com/arthurwuhoo/status/1470489178186170374/photo/1
- Motivational questions
	- how do you build this https://hacker-recommended-books.vercel.app/category/0/all-time/page/2/2
	- arxiv sanity
	- search engine
	- shazam https://news.ycombinator.com/item?id=32520593
	- all the app types
	- talk about the feature progress path
		- blog -> features
			- ...
			- AB test
				- AB test of AB tests? https://engineering.linkedin.com/blog/2019/06/detecting-interference--an-a-b-test-of-a-b-tests
		- app -> features
- 4 departures:
	- The Local First App
		- here is the standard paradigm
			- https://appwrite-todo-with-svelte.vercel.app/#/todos so slow
		- PWA
		- the WASM app: figma
		- client-serverless-server
		- client-server-offline-first
			- https://github.com/jlongster/absurd-sql
			- https://techcrunch.com/2022/08/04/rill-wants-to-rethink-bi-dashboards-with-embedded-database-and-instant-ux/
			- https://stopa.io/post/296
			- appsync https://medium.com/capgemini-norway/destroying-backends-with-amplify-appsync-graphql-api-5521c0e62a4c
			- https://www.inkandswitch.com/local-first/
			- https://riffle.systems/essays/prelude/
		- client-edge-serverless-server
			- deno
		- examples
	- The Long Running Jobs
		- queues
		- schedulers
			- fails all the time
		- temporal pitch
		- this is a job: 
	- Data Engineering Iceberg
		- https://benn.substack.com/p/the-data-os yc data 
		- data blind spot
			- https://twitter.com/swyx/status/1528906372917604352/photo/1
			- python > js https://www.hntrends.com/2022/june.html?compare=Python&compare=TypeScript&compare=golang&compare=JavaScript&compare=Ruby&compare=Rust&compare=Java&compare=C%2B%2B&compare=C&compare=kotlin
			- https://survey.stackoverflow.co/2022/#salary-comp-total
		- Analytical usecase
			- ETL
			- ELT
			- ELT+reverseETL https://medium.com/memory-leak/reverse-etl-a-primer-4e6694dcc7fb
			- EtLT?
			- ML:
			  - Explore, Label, Optimize
			  - Cleaning + Modeling + Training + Predicting + Deployment + Monitoring
			  - https://www.jcchouinard.com/machine-learning/ breakdown of DE, DA, MLE
			  - Exciting: Computer Vision, Self Driving, NLP, Deep Learning, Ethics
			  - Boring: Recommendation ([Embeddings](https://blog.twitter.com/engineering/en_us/topics/insights/2018/embeddingsattwitter)),  Classification/NLP, Search & Ranking, Anomaly Detection, A/B Testing, Spam/Fraud Risk
		- Operational usage
			- V = f(d)
			- feedback
			- consistency
			- live
			- 2000: amazon a store for every customer https://www.youtube.com/watch?v=F9c1Y7hgGwE
			- 2010: google-yahoo
			- 2016: netflix https://twitter.com/TrungTPhan/status/1445768114109435923
			- 2020: tiktok-google https://www.inc.com/jason-aten/tiktok-just-ended-googles-15-year-rein-as-worlds-most-popular-web-domain.html 
	- Software 3.0
		- https://thealgorithmicbridge.substack.com/p/stable-diffusion-is-the-most-important
		- x https://medium.com/nerd-for-tech/prompt-engineering-the-career-of-future-2fb93f90f117
			- meme https://miro.medium.com/max/1376/1*bSyi3uamxCzRjia2IwIBFw.png
		- capabilities (Markov models, Large Language Models)
			- how large is large https://miro.medium.com/max/565/1*9pt5d4D7aGJqUqpra1tMzg.png
				- https://miro.medium.com/max/582/1*C-KNWQC_wXh-Q2wc6VPK1g.png
			- translation https://towardsdatascience.com/software-3-0-how-prompting-will-change-the-rules-of-the-game-a982fbfe1e0
				- generating SQL https://blog.seekwell.io/gpt3
				- explaining jokes https://twitter.com/karpathy/status/1511359920804876298/photo/1
			- Coding:
				- copilot
				- https://storage.googleapis.com/deepmind-media/AlphaCode/competition_level_code_generation_with_alphacode.pdf
				- alpha go, alphafold
			- Poetry, Emojis, Lists: https://blog.andrewcantino.com/blog/2021/04/21/prompt-engineering-tips-and-tricks/#a-few-more-examples
			- filling in text: https://generative.ink/posts/methods-of-prompt-programming/#by-demonstration-n-shot
			- image filling in
				- figma https://twitter.com/RemitNotPaucity/status/1562319004563173376?s=20&t=fPSI5JhLzkuZLFB7fntzoA
				- outfilling photoshop https://old.reddit.com/r/StableDiffusion/comments/wyduk1/show_rstablediffusion_integrating_sd_in_photoshop/
			- text to image
				- generative adversarial models https://machinelearningmastery.com/what-are-generative-adversarial-networks-gans/
				- llama https://pub.towardsai.net/i-spent-15-in-dall-e-2-credits-creating-this-ai-image-and-heres-what-i-learned-52f352912025
				- medieval wifi https://twitter.com/benjamin_hilton/status/1519417377720524800
				- https://www.craiyon.com/
					- https://twitter.com/weirddalle/status/1554080896797622273
					- https://twitter.com/weirddalle/status/1553782316832800768
					- https://twitter.com/weirddalle/status/1557723658462035969
					- https://twitter.com/weirddalle/status/1551584953045258240
					- https://twitter.com/weirddalle/status/1554125991307612160
					- https://twitter.com/timsoret/status/1560339610588282880
					- https://twitter.com/maccaw/status/1561716215760011264
					- https://twitter.com/JIYUKENKYU_jp/status/1554758475368243200
				-  https://twitter.com/fabianstelzer/status/1561019187451011074
			- image to image https://old.reddit.com/r/StableDiffusion/comments/wy7oa5/img2img_is_just_unreal_im_stunned/
				- https://huggingface.co/spaces/huggingface/diffuse-the-rest
				- restoring art https://www.reddit.com/r/StableDiffusion/comments/wyaz3s/i_used_img2img_to_devandalize_ecce_homo/
				- image prompt https://twitter.com/simonw/status/1563898516950265856
			- video to video 
				- https://twitter.com/karenxcheng/status/1564626773001719813
				- https://twitter.com/paultrillo/status/1562106954096381952
			- tricking humans https://www.theguardian.com/technology/2022/jul/23/google-fires-software-engineer-who-claims-ai-chatbot-is-sentient
				- fooling humans https://maraoz.com/2020/07/18/openai-gpt3/
				- art contest 
				- helping you sleep https://anchor.fm/deepdreams
			- business ideas https://ideasai.com/
				- racoon heist https://twitter.com/simonw/status/1555626060384911360
				- not picking up humans https://www.aiweirdness.com/gpt-3-tries-pickup-lines/
				- optimizing titles https://minimaxir.com/2022/08/gpt3-blog-title-optimizer/
			- 
		- this will be a job https://promptbase.com/
		- there's a book https://generative.ink/posts/methods-of-prompt-programming/
			- https://dallery.gallery/the-dalle-2-prompt-book/
- So. what does it mean to be full stack?
	- PWAMVCCRUDETL
	- 








- first start with blog search engine
- then want to track search entries that are being typed but not answered
	- ryan kulp monetized this with fomo integrations people were searching for https://saasclub.io/podcast/ryan-kulp-fomo-324/
- listing
	- add upvotes
	- add comments
	- add social graph
	- add peer recommendations
		- filtter recommendations https://twitter.com/levelsio/status/1562105769390215169
- ???
	- optimization/matchmaking
	- enrichment? information extraction
	- anomaly detection?
	- speech recognition, computer vision
- ???
- feature usage analysis -> PM -> ship features
- A/B testing - shorter cycle
- Recommendations - shortest cycle + personalized
	- https://engineering.atspotify.com/2020/04/reach-for-the-top-how-spotify-built-shortcuts-in-just-six-months/



https://erikbern.com/2021/07/07/the-data-team-a-short-story.html
evolution of data team

really big
- feature stores 
	- https://engineering.linkedin.com/blog/2022/open-sourcing-feathr---linkedin-s-feature-store-for-productive-m


similar journey 
 - the social media cycle https://twitter.com/lessin/status/1551931628305502208/photo/1 digital media attention food chain
 - bespoke -> professional -> algorithmic
- https://stratechery.com/2022/instagram-tiktok-and-the-three-trends/
	- time -> rank -> recommend -> generate
	- - filtter recommendations https://twitter.com/levelsio/status/1562105769390215169