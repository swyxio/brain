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

## Bun

bun

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
- OOTB TS and JSX support
	- using tsc and swc https://deno.land/manual/typescript/overview#how-does-it-work
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
- Deno FS APIs like `Deno.readFile`: https://deno.com/deploy/docs/runtime-api#deno-apis
	- https://deno.com/deploy/docs/runtime-fs
- Web APIs
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
- npm compatibility
- built in SQLite
- Temporary
	- Poor Docs - no API reference
	- Discord community
	- install involves sudo run curl script
- No pricing 


## What is the future

- JavaScript Containers
- FaaSaaS https://twitter.com/KentonVarda/status/1524033314448891905
	- Deno Subhosting https://deno.com/deploy/subhosting
- Edge Databases
	- Cloudflare Workers KV


