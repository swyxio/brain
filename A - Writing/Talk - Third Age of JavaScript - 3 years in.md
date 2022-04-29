
https://share.icloud.com/photos/01721IYGavAAYFR_x8SRw-nbg

## Original talk

- If the First Age was about building out a language, and the Second Age was about users exploring and expanding the language, the Third Age is about clearing away legacy assumptions and collapsing layers of tooling.
- In summary: Third Age JS tools will be
	-   Faster
	-   ESM first
	-   Collapsed Layers (One thing doing many things well instead of many things doing one thing well)
	-   Typesafe-er (built with a strongly typed language at core, and supporting TS in user code with zero config)
	-   Secure-er (from dependency attacks, or lax permissions)
	-   Polyglot
	-   Neo-Isomorphic (recognizing that much, if not most, JS should run first at buildtime or on server-side before ever reaching the client)
- The result of all of this work is **both a better developer experience** (faster builds, industry standard tooling) and **user experience** (smaller bundles, faster feature delivery). It is the final metamorphosis of JavaScript from site scripting toy language to full application platform.


## Updated talk

Framework for new developments
- 1. Validation of current bets
	- ESM is growing
	- IE11 deader
	- State of JS 2021
		- React ecosystem npm charts/downloads https://twitter.com/swyx/status/1498761714153947137/photo/1
		- Nextjs default
- 2. Incrementally adoptable tools
	- eng manager whose #1 priority is reducing yarn start time from minutes to seconds
	- Tooling shift
		- Node -> Deno
			- https://github.com/elsaland/elsa
			- https://github.com/boa-dev/boa
		- Webpack -> Vite
		- Babel -> swc
		- Jest -> vitest
		- Prettier ->  dprint?
		- eslint -> rslint?
		- nvm -> fnm
		- dprint / rslint
		- TypeScript -> notypescript??
			- Prisma
			- edgedb builder https://www.edgedb.com/
		- Rust won?
			- but swc choosing go
			- https://leerob.io/blog/rust
		- Qwik, Solidjs
		- bun: https://github.com/Jarred-Sumner/bun (zig)
		- Partytown
		- Module federation/microfrontends fail
	- Browser IDEs
		- Stackblitz - WebContainers
		- Gitpod
		- GH Codespaces https://github.blog/2021-08-11-githubs-engineering-team-moved-codespaces/
		- Coder.com, Replit
	- Monorepos emerging
		- turborepo
		- nx
- 3. New architectures
	- VC funding - Deno, Rome, Remix, Flightcontrol, Xstate
	- "Neo-isomorphic": ISR, bootloaders, No SSGs
		- eleventy
		- gatsby v4
		- React 18/server components
		- metaframeworks
			- Nestjs, Remix, Redwood and Blitz
	- Smart client vs Smart servers
		- https://www.swyx.io/client-server-battle
		- https://github.com/jlongster/absurd-sql
	- Incremental First, Edge Second
		- no need for node
		- cheaper than lambda
		- minimal build times
		- deno, cloudflare workers
		- https://nextjs.org/docs/advanced-features/middleware
	- Rise of Web Standards
		- clientside: Remix
		- serverside: CF Workers and Deno- Wordpress
		- by 2025 more than 50%
- 4. New languages
	- WASM
		- https://www.w3.org/2019/12/pressrelease-wasm-rec.html.en
		- https://suborbital.network/ vs fermyon? v different
		- https://www.infoworld.com/article/3651503/the-rise-of-webassembly.html
			- https://medium.com/disney-streaming/introducing-the-disney-application-development-kit-adk-ad85ca139073
	- Blazor/.NET
	- Flutter/Dart
	- Liveview/Phoenix
	- Hotwire/Rails
	- Streamlit/Python
	- React for everything else
		- Dagster
		- Temporal

- opportunities
	- Beginner: Teach
		- scrimba
		- courselift ryan chenkie
		- josh comeau
		- egghead
		- frontendmasters
	- Intermediate: self provisioning runtimes
		- serverless cloud
		- begin/temporal
		- dev/prod isolation??
	- Advanced: **Bring back the open web**
		- wordpress https://twitter.com/swyx/status/1507028477345558531
			- JS weight - 500kb https://httparchive.org/reports/state-of-javascript - rising 19% in 2020
				- 36% unused https://almanac.httparchive.org/en/2021/javascript#fig-4
				- 84% jquery 8% react https://almanac.httparchive.org/en/2021/javascript#fig-25
			- low code/no code - budibase, builder.io, prismic/plasmic/stackblitz
			- "visual basic for React"  utopia.app
		- desktop vs mobile
			- https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide/#monthly-200901-202203 56% mobile 41% desktop
			- https://www.mobiloud.com/blog/mobile-apps-vs-mobile-websites
			- make hardware


## discard pile
- BaaS
	- supabase, convex, hasura, 
	- planetscale, xata
- telemetry back into dev - sentry, replay, apollo engine
	- https://www.apollographql.com/docs/devtools/editor-plugins/#performance-insights