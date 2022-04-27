This is the current state of my talk prep for my React Miami 2022 talk: Temporal - React for the Backend.

Slides are here: https://docs.google.com/presentation/d/1xRcSGKxBrknMBkAcT9qGj4KQrWPU_hiNhtKDh5sOhi4/edit?usp=sharing

## current talk plan

### Part 0

- You have more power than you know. Frontend > React. React > Frontend.
- what does being a React developer mean to you? What does "I know React" mean to you?
	- "I use React in my job"
	- "I know all the React APIs"
	- "I know React internals"
	- React is the most popular framework of all time https://www.npmtrends.com/@angular/core-vs-angular-vs-react-vs-vue
	- "I understand React's principles"
		- recognize good solutions
		- create them
- Intro me - Head of DX
	- Product (API Design, Integrations, Tooling)
	- Content (Docs, Writing, Speaking)
	- Community (Support, Connection, Events)
- What is Temporal?
	- Temporal is the open source runtime for managing distributed application state at scale.
	- mention about the history and users
	- The most valuable, mission-critical workloads in any software company are long-running and tie together multiple services.
	- rauchg mention: https://twitter.com/rauchg/status/1316808665370820609?s=20

### Part 1: The Problem

- How do you solve this problem?
	- "full stack uber clone"
	- youtube: distributed media transcoding
	- tweet undos https://twitter.com/swyx/status/1513301310434529288
	- requirements - reliable (never lose user data), scalable, responsive...
	- send people to temporal.io/react talk?

### Part 2: The “Solutions”

- state of solutions - bad problems
	- microservices hairball
	- patchwork - ryland chart and aws chart
	- programming model
- basic building blocks https://twitter.com/swyx/status/1470831554406408195
	- https://www.swyx.io/why-temporal/#30-second-pitch
	
### Part 3: Applying Lessons

- Lessons from React
	- React Components
		- jquery hairball. too low level
		- contained local state vs Renderer
		- apply: decompose 
	- React Hooks
		- Minimal
			- apply: set of APIs
		- Composable
			- apply: custom functionality
	- React Suspense
		- https://17.reactjs.org/docs/concurrent-mode-suspense.html#what-is-suspense-exactly
		- UX -> DX making async easy
			- timers
	- React devtools
	- React community
	
### Part 4: The API

- Designing the API
	- workflows
	- activities
		- retries
		- exponential backoff https://622a7dcda0cc740008dd0443--blissful-borg-8305c0.netlify.app/tutorials/temporal/retry-policy
	- timers
		- custom functionality
		- wf.condition -> mention acemarke
	- signals & queries


### Part 5: Results

- Social proof
	- Netflix, Snap, Datadog
	- Flightcontrol, Xstate
	- UI, testing/replay utility
	- Job opps
	- download chart
	- Fundraising


### Fin

- Fin
	- Go Forth and Solve problems
	- if you backend engineer, tell them
	- React is the most popular framework of all time https://www.npmtrends.com/@angular/core-vs-angular-vs-react-vs-vue
	- 7 lessons https://www.notion.so/7-Lessons-to-Outlive-React-3a8ed4db297c43a49464bbe3338cce36



## original talk plan

- You have more power than you know. Frontend > React. React > Frontend.
- what does being a React developer mean to you? What does "I know React" mean to you?
	- "I use React in my job"
	- "I know all the React APIs"
	- "I know React internals"
	- React is the most popular framework of all time https://www.npmtrends.com/@angular/core-vs-angular-vs-react-vs-vue
	- "I understand React's principles"
		- recognize good solutions
		- create them
- Intro me - Head of DX
	- Product (API Design, Integrations, Tooling)
	- Content (Docs, Writing, Speaking)
	- Community (Support, Connection, Events)
- What is Temporal?
	- Temporal is the open source runtime for managing distributed application state at scale.
	- mention about the history and users
	- The most valuable, mission-critical workloads in any software company are long-running and tie together multiple services.
	- rauchg mention
- Nerd Snipe
	- How do you solve this problem?
		- "full stack uber clone"
		- youtube: distributed media transcoding
		- tweet undos https://twitter.com/swyx/status/1513301310434529288
		- requirements - reliable (never lose user data), scalable, responsive...
		- send people to temporal.io/react talk?
	- state of solutions - bad problems
		- microservices hairball
		- patchwork - ryland chart and aws chart
		- programming model
	- basic building blocks https://twitter.com/swyx/status/1470831554406408195
		- https://www.swyx.io/why-temporal/#30-second-pitch
- Lessons from React
	- React Components
		- jquery hairball. too low level
		- contained local state vs Renderer
		- apply: decompose 
	- React Hooks
		- Minimal
			- apply: set of APIs
		- Composable
			- apply: custom functionality
	- React Suspense
		- https://17.reactjs.org/docs/concurrent-mode-suspense.html#what-is-suspense-exactly
		- UX -> DX making async easy
			- timers
	- React devtools
	- React community
- Designing the API
	- workflows
	- activities
		- retries
		- exponential backoff https://622a7dcda0cc740008dd0443--blissful-borg-8305c0.netlify.app/tutorials/temporal/retry-policy
	- timers
		- custom functionality
		- wf.condition -> mention acemarke
	- signals & queries
	- child workflows
- How does it work?
	- Worker vs Server separation
	- Replay - event sourced
	- just like react git analogy
	- Persisted
	- Distributed
	- show Temporal architecture talk
- Social proof
	- Netflix, Snap, Datadog
	- Flightcontrol, Xstate
	- UI, testing/replay utility
	- Job opps
	- download chart
	- Fundraising
- Fin
	- Go Forth and Solve problems
	- if you backend engineer, tell them
	- React is the most popular framework of all time https://www.npmtrends.com/@angular/core-vs-angular-vs-react-vs-vue
	- 7 lessons https://www.notion.so/7-Lessons-to-Outlive-React-3a8ed4db297c43a49464bbe3338cce36


## pre-pre-planning

Must hit
- What is Temporal
- Core APIs
- Origin story

Things to demo
- code samples
- Nextjs example

Quotes
- Flightcontrol
- Xstate 