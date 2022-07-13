## The Third Age of JavaScript on the Server

## What's Wrong with Node.js

- Nothing!
- But...
	- https://deno.land/manual/node
	- CommonJS
	- Node builtin modules are bloated
	- Node module resolution is non-standards based
	- Node requires `package.json` metadata file
	- Node doesnt support remote HTTP imports

## Deno

Deno Deploy
- May 2018: Announced https://www.youtube.com/watch?v=M3BM9TB-8yA&vl=en
- May 2020: Deno 1.0
- Jul 2020: TS -> JS
- Aug 2020: Deno Registry
- Mar 2021: Deno Company
- Oct 2021: Deno Deploy Beta
- Nov 2021: Slack + Deno https://api.slack.com/future
- Dec 2021: Deno + TC39
- Mar 2022: Supabase + Deno
- Apr 2022: Netlify + Deno
- May 2022: WICG
- Jun 2022: Deno + Sequoia Series A
- - 84k stars

## Bun

- Speed claims
	- 260k RPS on macOS as a server
	- **20x faster installs**: On Linux, `bun install` tends to install packages 20x - 100x faster than `npm install`. On macOS, it’s more like 4x - 80x. https://twitter.com/jarredsumner/status/1544460938442448896
	- **28x faster starts**: Instead of waiting 170ms for your npm client to start for each task, you wait 6ms for bun.
	- FFI: 3ns to go from JavaScript <> native code with `bun:ffi` (on my machine, an M1 Pro with 64GB of RAM)
		-   5x faster than napi (Node v17.7.1)
		-   100x faster than Deno v1.21.1
	- React SSR: Bun's custom build of react-dom/server improves React SSR performance by 1.5x - 2x, depending on the output format https://twitter.com/jarredsumner/status/1544580094328418304
	- runs 266 tests that SSR with react-dom 40% faster than jest can print its version number https://twitter.com/jarredsumner/status/1542824445810642946
	- Bun can bundle over 1 million lines of JavaScript (input) per second. https://twitter.com/jarredsumner/status/1544460943987380229
- 90% Node-API compat https://github.com/oven-sh/bun/issues/158
- Bun.serve
- Bun.write
- bun:sqlite
- https://news.ycombinator.com/item?id=31993429
- TypeScript & JSX support is builtin, powered by Bun's JavaScript transpiler
-   ESM & CommonJS modules are supported (internally, bun.js uses ESM)
-   Many npm packages "just work" with bun.js (when they use few/no node APIs)
-   tsconfig.json `"paths"` is natively supported, along with `"exports"` in package.json
-   `fs`, `path`, and `process` from Node are partially implemented
-   Web APIs like [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/fetch), [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response), [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL) and more are builtin
-   [`HTMLRewriter`](https://developers.cloudflare.com/workers/runtime-apis/html-rewriter/) makes it easy to transform HTML in bun.js
-   Starts [4x faster than Node](https://twitter.com/jarredsumner/status/1499225725492076544) (try it yourself)
-   `.env` files automatically load into `process.env` and `Bun.env`
-   top level await

## Cloudflare Workers

- https://blog.cloudflare.com/workers-open-source-announcement/
unreleased

## Common featureset

### WinterCG

- https://wintercg.org/
	-   Bloomberg
	-   Cloudflare
	-   Deno
	-   Igalia
	-   Node.js
	-   Shopify
	-   Vercel
- https://proposal-common-min-api.deno.dev/
	- compare: https://deno.com/deploy/docs/runtime-api#web-apis

### Deno vs Bun

Common
- Http/2 Support
- ESM HTTP imports
- fetch
	- https://deno.com/deploy/docs/runtime-fetch
- WebSockets
- env vars: - `Deno.env.get` vs `Bun.env` - not more `dotenv`
- OOTB TS and JSX support
	- using tsc and swc https://deno.land/manual/typescript/overview#how-does-it-work
	- deno.json vs tsconfig.json + bunfig.toml
- `Request` and `Response` objects
- running locally - `brew install`
- Foreign Function Interface https://deno.land/manual/runtime/ffi_api
- https://deno.land/manual/node/cheatsheet
	- `install` / `vendor`
	- `repl` https://deno.land/manual/tools/repl
	- `task`
	- `lint`
	- `fmt`
	- `bundle`
	- `test` incl `coverage`
	- `doc`  https://deno.land/manual/tools/documentation_generator
	- `compile` https://deno.land/manual/tools/compiler

Unique - Deno
- ESM HTTP imports only
- v8 (Google) - can attach Chrome Devtools
- Deno FS APIs like `Deno.readFile`: https://deno.com/deploy/docs/runtime-api#deno-apis
	- https://deno.com/deploy/docs/runtime-fs
- Web APIs https://deno.com/blog/every-web-api-in-deno
	- https://deno.land/manual/runtime/location_api
	- https://deno.land/manual/runtime/web_storage_api
	- https://deno.land/manual/runtime/workers
- Permission APIs
	- https://deno.land/manual/runtime/permission_apis
- `deno run --allow-net=:8000 --watch ./main.js`
- Great Docs
	- manual: https://deno.land/manual/node
	- tutorial with supabase, discord, fauna, dynamodb, firebase https://deno.com/deploy/docs/tutorial-postgres and https://deno.com/deploy/docs/examples and tailwind https://deno.land/manual/jsx_dom/twind
- Metaframework: https://deno.com/blog/fresh-is-stable
	- https://fresh.deno.dev/
- LSP: https://deno.land/manual/language_server/overview
- Embedded: https://deno.land/manual/embedding_deno
- Third party ecosystem:
	- https://deno.land/x
	- stdlib: https://deno.land/std@0.148.0
	- std/node polyfills https://deno.land/manual/node/std_node
		- https://deno.land/manual/node/dnt Deno to Node
- Github action/`deployctl` CLI
- Deno deploy
	- 34 regions https://deno.com/deploy/docs/regions
	- Playground Editor: https://dash.deno.com/new
	- Git Integration and Crash logs https://deno.com/deploy/docs/deployments - production vs preview pointers
	- Organization support https://deno.com/deploy/docs/organizations
	- Brotli/Gzip automatic compression https://deno.com/deploy/docs/compression respecting weak Etags
	- Runtime sockets: https://deno.com/deploy/docs/runtime-sockets for outbound TCP/TLS
	- Pricing: https://deno.com/deploy/docs/pricing-and-limits
	- communication between instances https://deno.com/deploy/docs/runtime-broadcast-channel
- Temporary
	- No community yet
	

Unique - Bun
- Node.js resolution algorithm - npm compatibility
- new levels of performance based on javascriptcore (Apple)
- built in SQLite
- Bundling
	- CSS Modules
	- CSS Loader
- Much Smaller Ecosystem
	- https://github.com/mattreid1/baojs
- QOL stuff
	- TOML imports
	- copy as markdown https://twitter.com/jarredsumner/status/1495621672979816454
	- bun bun https://twitter.com/jarredsumner/status/1547168137379921923
	- bun live
- Temporary
	- Poor Docs - no API reference, no deploy docs
	- Discord community
		- https://twitter.com/jarredsumner/status/1546722821191000065
	- install involves `curl -fsSL https://bun.sh/install | bash`
	- Next.js support very partial https://github.com/oven-sh/bun#using-bun-with-nextjs
- No pricing 


## What is the future

- JavaScript Containers
- FaaSaaS https://twitter.com/KentonVarda/status/1524033314448891905
	- Deno Subhosting https://deno.com/deploy/subhosting
- Edge Databases
	- Cloudflare Workers KV


