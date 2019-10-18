
## No longer Fresh!

> ⚠️ These are now merely reverse-chronoligical links on concurrent react - no longer actively updated as we expect an official release soon

## React Team Public Communication


- 8 Aug 2019: [React v16.9.0 and the Roadmap Update](https://reactjs.org/blog/2019/08/08/react-v16.9.0.html)
- 27 Nov 2018: [React 16.x Roadmap](https://reactjs.org/blog/2018/11/27/react-16-roadmap.html) blogpost with Suspense timeline
- 20 Nov 2018: [Context.write RFC](https://github.com/acdlite/rfcs/blob/context-write/text/0000-context-write.md) - necessary for Serverside Suspense
- 13 Nov 2018: [React Conf Recap](https://reactjs.org/blog/2018/11/13/react-conf-recap.html) - with Suspense talks included
- 25 Oct 2018: [React Suspense keynote and Jared Palmer at React Conf 2018](https://www.youtube.com/watch?v=WXYPpY_mElQ) - [Github](https://github.com/jaredpalmer/react-conf-2018)
  , [Slides](https://github.com/jaredpalmer/react-conf-2018/blob/master/MovingToReactSuspense.key)
- 23 Oct 2018: [React 16.6 release: React.lazy, .memo, and static contextType](https://reactjs.org/blog/2018/10/23/react-v-16-6.html)
- 2 Oct 2018: [Summary of acdlite's talk at Framework Summit on React Roadmap](https://www.reddit.com/r/reactjs/comments/9ksj2l/acdlites_react_roadmap_presentedframework_summit/?) - Reddit recap, [Talk Video](https://www.youtube.com/watch?v=xrLIeSYRKIc&feature=youtu.be&a=)
- 18 Aug 2018: [Transcript of @sophiebits' Q&A on Reactiflux](https://www.reactiflux.com/transcripts/sophie-alpert-2/) - covering Suspense, offscreen rendering, and misc React Native questions
- 15 Aug 2018: [React.lazy PR](https://github.com/facebook/react/pull/13398) - Github (after adding [promises as component types](https://github.com/facebook/react/pull/13397)), [Usage example](https://twitter.com/kentcdodds/status/1047165818608410624))
- 2 Aug 2018: [Time Slicing Umbrella Issue](https://github.com/facebook/react/issues/13306) - (Github)
- 13 Jul 2018: [Suspense Umbrella Issue](https://github.com/facebook/react/issues/13206) tracking the remaining issues before official release (Github)
- 28 Apr 2018: [Zeit Day: React Suspense and SSR](https://spectrum.chat/notifications?thread=5b655762-55d2-490f-b3be-d86485ff50db) Notes from @acdlite's presentation at Zeit Day - [video here](https://www.youtube.com/watch?v=z-6JC0_cOns) and a bit of [Twitter discussion](https://twitter.com/acdlite/status/1001163729965232128). [Demo code is here](https://github.com/acdlite/suspense-ssr-demo)
- 23 Apr 2018: [Explanation of the double buffering Update Queue in ReactUpdateQueue.js](https://github.com/facebook/react/blame/5550ed4a8f33ff562e807175b8f35a1f9e037670/packages/react-reconciler/src/ReactUpdateQueue.js#L10) - comments in react source code
- 27 Mar 2018: [Update on Async Rendering](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html) blogpost on migration path for the deprecated and new lifecycle methods
- 20 Mar 2018: [Suspense! ReactFest](https://www.youtube.com/watch?v=6g3g0Q_XVb4) 2nd Dan Abramov demo on Suspense
- 1 Mar 2018: [JSConf Iceland - Beyond React 16](https://www.youtube.com/watch?v=v6iR3Zk4oDY) - (Time Slicing Demo ([Live](https://timeslicing-unstable-demo.surge.sh/), [Code](https://github.com/facebook/react/tree/master/fixtures/unstable-async/time-slicing)), Suspense Demo ([Live](https://build-twykjydwfh.now.sh/), [Code](https://github.com/facebook/react/tree/master/fixtures/unstable-async/suspense)))
- 1 Mar 2018: [Sneak Peek: Beyond React 16](https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html) blogpost
- 23 Feb 2018: [The Suspense PR](https://github.com/facebook/react/pull/12279) especially the [tests](https://github.com/acdlite/react/blob/7166ce6d9b7973ddd5e06be9effdfaaeeff57ed6/packages/react-reconciler/src/__tests__/ReactSuspense-test.js)

## Code To Check Out

- 9 Aug 2019: [use-subscription v1.0](https://www.npmjs.com/package/use-subscription) - official React hook that safely manages subscriptions in concurrent mode.
- 30 Jun 2019: New SuspenseList Component - [Github](https://github.com/facebook/react/pull/15902), [forward and backward revealOrder](https://github.com/facebook/react/pull/15918), [swallowing tail](https://github.com/facebook/react/pull/15946)
- 7 Jan 2019: React-aldrin by Fredrik Hoglund - Suspense based Server Renderer - [Github](https://github.com/Ephem/react-aldrin), [Twitter](https://twitter.com/EphemeralCircle/status/1082264727294758912)
- 25 Oct 2018: Jared Palmer Suspensify ReactConf Demo of Suspense - [Github](https://github.com/jaredpalmer/react-conf-2018)
- 24 Oct 2018: testing Suspense's maxDuration - [Github](https://github.com/kentcdodds/suspense-max-duration-issue?fbclid=IwAR1ZYaFXCplCK0O2hcHQXu1kVCNuVJ_-oxgkeZiBD8Zxz_dnerHJzSNs7uQ) and [Twitter](https://twitter.com/kentcdodds/status/1055292963545264128)
- 11 Oct 2018: v16.6 canary release - [React Suspense fixture](https://codesandbox.io/s/w0n9ok3mqw), [JSConf Iceland Movie Demo](https://codesandbox.io/s/90xvln6xp) both on CodeSandBox
- 8 Oct 2018: Kent C Dodds' Fundamental Suspense - [Tweet](https://twitter.com/kentcdodds/status/1049322616727564289), [Gist](https://gist.github.com/kentcdodds/2510249a3fc5c9dce82ccee80396fc6a)
- 29 Sep 2018: Tejas Kumar's React suspense Pokedex - demo app for React Boston 2018 talk. [Github](https://github.com/TejasQ/react-suspense-pokedex), [Site](https://suspense-pokedex.now.sh/), Talk video pending
- 25 Sep 2018: [kentcdodds/react-suspense-simple-example](https://github.com/kentcdodds/react-suspense-simple-example) - walkthrough of writing a suspense cache from scratch - for Salt Lake City Frontend Meetup ([Video](https://www.youtube.com/watch?v=7LmrS2sdMlo&feature=youtu.be&a=))
- 22 Sep 2018: [topheman/react-fiber-experiments](https://react-fiber-experiments.surge.sh/) - exploration of React Fiber features. [Github](https://github.com/topheman/react-fiber-experiments), [Blogpost](http://dev.topheman.com/discover-react-suspense/), [Reddit discussion](https://www.reddit.com/r/reactjs/comments/9hzrsv/try_react_suspense_right_now/)
- 12 Sep 2018: [@swizec visualizing large datasets with Suspense and Time Slicing](https://medium.com/@swizec/how-to-use-react-suspense-and-time-slicing-to-visualize-large-datasets-b35dd86d3756) - [Github](https://github.com/Swizec/react-suspense-starter/blob/dataviz-demo/src/App.js), [Demo](https://dist-exhowcijhf.now.sh/)
- 4 Sep 2018: [@pshrmn's @curi/router](https://curi.js.org) - [intro tweet](https://twitter.com/pshrmn/status/1036776780936499200) with [suspense demo](https://codesandbox.io/s/6vplvz9z83) and [Twitch clone](https://codesandbox.io/s/github/pshrmn/curi-react-suspense-demo) - [Twitter convo](https://twitter.com/pshrmn/status/1036793476078350336)
- 31 Aug 2018: [Building a Polyfill for React Suspense](https://hackernoon.com/building-a-polyfill-for-react-suspense-f1c7baf18ca1) - Userland polyfill - [Github](https://github.com/transitive-bullshit/react-suspense-polyfill) and [Reddit](https://www.reddit.com/r/reactjs/comments/9bvlap/building_a_polyfill_for_react_suspense/?utm_term=b96e4216-f1c5-4077-8e21-a91b56afbcf3&utm_medium=search&utm_source=reddit&utm_name=reactjs&utm_content=1)
- 28 Aug 2018: [@ericclemmons React.lazy example](https://github.com/ericclemmons/react.lazy-example) - (with caution from [Seb](https://twitter.com/sebmarkbage/status/1034677541762564096))
- 18 Aug 2018: [@TejasKumar\_'s Suspense Demo at GrillJS](https://codesandbox.io/s/jnqw46y79) - CodeSandbox
- 17 Aug 2018: [@mweststrate using mobx and suspense](https://twitter.com/mweststrate/status/1030479604656553984) - Codesandbox
- 15 Aug 2018: [react-async-elements](https://github.com/palmerhq/react-async-elements) Suspense-friendly async React elements for common situations e.g. Img and Script
- 10 Aug 2018: [React Router Suspense](https://github.com/palmerhq/router-suspense) Jared Palmer's take on a suspense-ready version of React Router
- 10 Aug 2018: [React Suspense Starter](https://github.com/palmerhq/react-suspense-starter) prerelease, prebuilt version of React with Suspense enabled
- 2 Aug 2018: [JSConf Iceland React Suspense demo code](https://github.com/facebook/react/tree/master/fixtures/unstable-async/suspense) - Movie demo code hosted [here](https://build-twykjydwfh.now.sh/), hit ? to show cache and click to load resources
- 2 Aug 2018: [JSConf Iceland Time Slicing demo code](https://github.com/facebook/react/tree/master/fixtures/unstable-async/time-slicing)
- 29 Jul 2018: [basic Suspense Demo gist](https://gist.github.com/bvaughn/76237e82b725c62287b4d8116505b339) from Brian Vaughn's [devtools + suspense livestream](https://www.youtube.com/watch?v=5RzOiibu8sg)
- 26 Jul 2018: [Sunil Pai's CSS Suspense library](https://github.com/threepointone/css-suspense) - including [Twitter prediscussion](https://twitter.com/threepointone/status/1022590660094947329)
- 17 May 2018: [Peggy Rayzis' React Apollo 3.0 with Suspense demo at ReactEurope](https://github.com/peggyrayzis/react-europe-apollo) Slides, demo, and graphql Server. [Talk video](https://www.youtube.com/watch?v=fCXYA3lZTbo).
- 29 Apr 2018: [@acdlite React Suspense SSR demo](https://github.com/acdlite/suspense-ssr-demo) code for Andrew's ZEIT day talk.
- 24 Apr 2018: [React Suspense Server Renderer](https://github.com/acdlite/react/commit/0e8d322b70d61a334bc94195ed2929787fe5f4ed) just a prototype - not an official PR
- 23 Apr 2018: [react-suspense-redux-cache](https://www.npmjs.com/package/react-suspense-redux-cache) another toy integration of redux with suspense (not production)
- 22 Apr 2018: [React “Suspense” + RESTore Demo](https://github.com/coreh/RESTore/tree/master/examples/react) experimental restful data store, example of react suspense integration
- 20 Apr 2018: [redux-suspense](https://github.com/alexeyraspopov/redux-suspense) experimental integration of redux with react suspense
- 13 Apr 2018: [James Please' fetchers API](https://gist.github.com/jamesplease/16218201e9226891bbc3645759d21712) - a gist with some ideas
- 2 Apr 2018: [hitchcock](https://github.com/pomber/hitchcock) - Rodrigo Pombo's take on cache provider
- 29 Mar 2018: [simple-cache-provider](https://github.com/facebook/react/tree/master/packages/simple-cache-provider) from the React Team
- 17 Mar 2018: [Pete gleeson's ..future clone](https://github.com/petegleeson/create-create-fetcher/blob/master/src/future/index.js)
- 9 Mar 2018: [@reactions/fetch](https://github.com/reactions/fetch) suspense-ready component
- 9 Mar 2018: [karl's demo clone](https://github.com/karl/react-async-io-testbed)
- 3 Mar 2018: [React's `create-subscription` package](https://github.com/facebook/react/blob/master/packages/create-subscription/README.md) For library authors to have an async-safe way to hook into React as it [can be tricky](https://gist.github.com/bvaughn/d569177d70b50b58bff69c3c4a5353f3)
- 4 Mar 2018: [Benoit Zugmeyer's demo clone](https://github.com/BenoitZugmeyer/react-suspense-demo)
- 1 Mar 2018: [async React Apollo demo](https://dev-blog.apollodata.com/a-first-look-at-async-react-apollo-10a82907b48e)
- 1 Mar 2018: [Jared Palmer's test app with suspense](https://codesandbox.io/s/github/jaredpalmer/react-suspense-playground)
- 19 Oct 2017: [Rodrigo Pombo's didact fiber](https://engineering.hexacta.com/didact-fiber-incremental-reconciliation-b2fe028dcaec) - simplified attempt to create a React Fiber clone, might be easier to understand than real React

## Concurrent React/React Fiber general info

- 9 Aug 2019: [use-subscription v1.0](https://www.npmjs.com/package/use-subscription) - official React hook that safely manages subscriptions in concurrent mode.
- 29 May 2019: Scheduling is the Future - aweary's talk on React scheduling and Just Noticeable Difference - [Youtube](https://www.youtube.com/watch?v=Iyrf52cwxQI)
- 28 Apr 2019: React Batched Mode - mentions deprecating `ConcurrentMode` altogether - [PR](https://github.com/facebook/react/pull/15502) - [done in this PR](https://github.com/facebook/react/pull/15532)
- 13 Apr 2019: About React Suspense and Concurrent Mode - [@pomber on Dev.to](https://dev.to/pomber/about-react-suspense-and-concurrent-mode-21aj)
- 11 Apr 2019: New Fiber Scheduler rewrite - [Github PR](https://github.com/facebook/react/pull/15387)
- 10 Apr 2019: A hueristic replacement of React.Suspense maxDuration uses [Just Noticeable Difference](https://github.com/facebook/react/pull/15367) to calculate the timeout after [removing hard-coded 150ms](https://github.com/facebook/react/pull/15367/files#diff-a409dc1b2c8ece1cc1fa28fe42b481ceL1829)
- 4 Apr 2019: React.Suspense maxDuration attribute has been removed from Flow - [Github](https://github.com/facebook/flow/pull/7613)
- 2 Apr 2019: React.Suspense maxDuration prop has been removed from React - [Github](https://github.com/facebook/react/pull/15272)
- 7 Mar 2019: Scheduling in React - [Philipp Spiess Blog](https://philippspiess.com/scheduling-in-react/)
- 19 Feb 2019: "Concurrent Mode is about prioritizing updates, not components. Components still update together. But CM lets certain updates interrupt other updates. And prevents React from blocking browser paint" - [Twitter](https://twitter.com/dan_abramov/status/1097831099730968576?s=12)
- 20 Nov 2018: Jared Palmer on Hooks and Suspense on React Podcast - [Podcast](https://reactpodcast.com/29)
- 4 Nov 2018: Metaphor for how Concurrent React works - illustrator with two queues - [Twitter](https://twitter.com/dan_abramov/status/1059059596835340288)
- 30 Oct 2018: Click event priorities are special cased - [Twitter](https://twitter.com/acdlite/status/1057330782224535552)
- 24 Oct 2018: How maxDuration works with defaultDuration - [Twitter](https://twitter.com/dan_abramov/status/1055298410767675398?s=20), [more Twitter](https://twitter.com/dan_abramov/status/1061344382375395329)
- 17 Oct 2018: Dan Abramov on what ReactDOM.createRoot does - [Twitter](https://twitter.com/dan_abramov/status/1052690486438313984)
- 6 Oct 2018: Introduction of new lifecycle, `getDerivedStateFromError` and how it compares to `componentDidCatch` - [Reddit](https://www.reddit.com/r/reactjs/comments/9lp0k3/new_lifecycle_method_getderivedstatefromerror/), [PR](https://github.com/facebook/react/pull/13746)
- 11 Sep 2018: Considering rename to [Concurrent React](https://twitter.com/dan_abramov/status/1036940380854464512) - [Confirmed](https://github.com/facebook/react/pull/13732))
- 7 Sep 2018: Algorithms in React - comparing the Stack Reconciler to the Fiber Reconciler by going through the source code. Last section on Suspense also. [Talk Slides](https://speakerdeck.com/koba04/algorithms-in-react)
- 21 Aug 2018: Rendering while suspending - an important part of Suspense and why we want to call it Concurrent rather than Async - [Twitter](https://twitter.com/dan_abramov/status/1032053804886372352)
- 18 Aug 2018: swyx@React Rally: Why React is -not- Reactive - [Youtube](https://www.youtube.com/watch?v=nyFHR0dDZo0), [Slides](http://swyx.io/ReactRally)
- 18 Aug 2018: Brandon Dail@React Rally: Algebraic Effects, Fibers, Coroutines - [Youtube](https://www.youtube.com/watch?v=7GcrT0SBSnI), [Slides](http://fibers-effects-react-rally.surge.sh/#/), [Transcript](http://fibers-effects-react-rally.surge.sh/#/?presenter)
- 18 Aug 2018: Ryan Florence@React Rally: Route Recalculating - [Youtube](https://www.youtube.com/watch?v=X-kA8B2QzjY), [Twitter](https://twitter.com/ryanflorence/status/1031597914584363008)
- 24 Jul 2018: [Async React Rollout/Adoption Plan](https://github.com/facebook/react/issues/13206#issuecomment-407535077) on the React Suspense Umbrella tracker issue.
- 24 Jun 2018: [Discussion between @sebmarkbage, @dan_abramov et al on state management](https://twitter.com/sebmarkbage/status/1011003586799517696) long twitter thread.
- 20 Jun 2018: [Brian Vaughn demoing prototype of new async-ready Profiler devtool](https://twitter.com/brian_d_vaughn/status/1009588924992221185) youtube walkthru with [followup here](https://twitter.com/brian_d_vaughn/status/1009977215176491008)
- 17 Jun 2018: [Michael Jackson on React Components (The Frontside Podcast)](https://frontsidethepodcast.simplecast.fm/f938c562) React suspense discussion 35 mins in
- 3 May 2018: [Michael Jackson and Jay Phelps on Topics in React (Modern Web Podcast)](https://www.youtube.com/watch?v=2IIISbHFzsI) First part discusses Async react and React suspense
- 19 Apr 2018: [Toru Kobayashi: Async Rendering slide deck](https://speakerdeck.com/koba04/ready-for-async-rendering) - [writeup here in Japanese](https://logmi.jp/302611)
- 10 Apr 2018: [Podcast: Andrew Clark on Async React](https://changelog.com/reactpodcast/6) on the React Podcast
- 4 Apr 2018: [@dan_abramov chart on where each lifecycle fits into commit or render phase](https://twitter.com/dan_abramov/status/981712092611989509)
- 3 Apr 2018: [Michel Westrate on Async Rendering and its impact on MobX](https://egghead.simplecast.fm/94ad357b)
- 2 Apr 2018: [Mark Erikson on Async Rendering and its impact on Redux](https://youtu.be/nOoWpdSvChc?t=13m49s)
- 30 Mar 2018: [Async Render Devtools Chrome extension lets you put Lag Radar on any site (from @swyx)](https://twitter.com/swyx/status/979809563632336896)
- 26 Mar 2018: [@acdlite on scheduling updates at different priorities](https://twitter.com/acdlite/status/978412930973687808) and avoiding starvation
- 23 Mar 2018: [@acdlite on the difference between async and sync rendering in React](https://twitter.com/acdlite/status/977291318324948992)
- 15 Mar 2018: [@acdlite on React API preferences](https://twitter.com/acdlite/status/974437383939743746)
- 11 Mar 2018: [@dan_abramov on async rendering](https://twitter.com/dan_abramov/status/972838329367584768)
- 11 Mar 2018: [@dan_abramov on React team credits](https://twitter.com/dan_abramov/status/972856536073687040)
- 1 Mar 2018: [@dan_abramov on JSConf demo credits](https://twitter.com/dan_abramov/status/969173182811987968)
- 28 Feb 2018: [Dan Abramov on the future of React](https://changelog.com/reactpodcast/3) on the React Podcast
- 19 Sep 2017: [Async React with non react views](https://gist.github.com/acdlite/f31becd03e2f5feb9b4b22267a58bc1f)

## React Suspense-specific

- 8 Apr 2019: Track Event Time as the Start Time for Suspense - [Github PR](https://github.com/facebook/react/pull/15358)
- 18 Feb 2019: "I regret using Promises for Suspense." - [Twitter](https://twitter.com/sebmarkbage/status/1097704449437384704)
- 7 Jan 2019: React-aldrin by Fredrik Hoglund - Suspense based Server Renderer - [Github](https://github.com/Ephem/react-aldrin), [Twitter](https://twitter.com/EphemeralCircle/status/1082264727294758912)
- 23 Oct 2018: Post React 16.6 release: "The longer term vision for suspense is that every component import is dynamic" - [@danabramov](https://twitter.com/dan_abramov/status/1054940536161865729)
- 11 Oct 2018: Suspense enabled; Placeholder renamed to Suspense - [PR](https://github.com/facebook/react/pull/13799)
- 10 Oct 2018: New API for react-cache - [Github Summary by @jaredpalmer](https://github.com/facebook/react/pull/13337#issuecomment-425974864)
- 6 Oct 2018: [@sebmarkbage on the concerns with global state/cache in Suspense API design and opportunities for innovation](https://twitter.com/sebmarkbage/status/1048564845782728706) - Twitter
- 5 Oct 2018: [The Suspense is killing Redux](https://medium.com/@ryanflorence/the-suspense-is-killing-redux-e888f9692430) - comparison between Redux and Suspense from Ryan Florence
- 1 Oct 2018: [Renamed simple-cache-provider to react-cache](https://github.com/facebook/react/pull/13755)
- 25 Sep 2018: [kentcdodds/react-suspense-simple-example](https://github.com/kentcdodds/react-suspense-simple-example) - walkthrough of writing a suspense cache from scratch - for Salt Lake City Frontend Meetup ([Video](https://www.youtube.com/watch?v=7LmrS2sdMlo&feature=youtu.be&a=))
- 13 Sep 2018: [@dan_abramov on why Code Splitting with Suspense is different from prior approaches](https://twitter.com/dan_abramov/status/1040055368632750080)
- 11 Sep 2018: [Tejas Kumar](https://twitter.com/tejaskumar_)'s talk on Suspense allowing for more streamlined User Interfaces at React Day Berlin's Open Source meetup ([Video](https://www.youtube.com/watch?v=JHtKhLPBqxw))
- 4 Sep 2018: [@curi/router](https://curi.js.org) demo - [intro tweet](https://twitter.com/pshrmn/status/1036776780936499200) with [suspense demo](https://codesandbox.io/s/6vplvz9z83) and [Twitch clone](https://codesandbox.io/s/github/pshrmn/curi-react-suspense-demo)
- 31 Aug 2018: [Building a Polyfill for React Suspense](https://hackernoon.com/building-a-polyfill-for-react-suspense-f1c7baf18ca1) - Userland polyfill - [Github](https://github.com/transitive-bullshit/react-suspense-polyfill) and [Reddit](https://www.reddit.com/r/reactjs/comments/9bvlap/building_a_polyfill_for_react_suspense/?utm_term=b96e4216-f1c5-4077-8e21-a91b56afbcf3&utm_medium=search&utm_source=reddit&utm_name=reactjs&utm_content=1)
- 21 Aug 2018: [Todo lo que debes saber sobre React Suspense](https://yeisondaza.com/todo-lo-que-debes-saber-sobre-react-suspense) (spanish) blogpost about general knowledge to use React Suspense
- 21 Aug 2018: [Dan](https://twitter.com/dan_abramov/status/1032053023936262144) on how Suspense does partial rendering and async render isn't necessarily slower than sync render
- 6 Aug 2018: [dan](https://twitter.com/dan_abramov/status/1026513611269840898) and [@sebmarkbage on when to use preload() vs read()](https://twitter.com/sebmarkbage/status/1026514420908744704)
- 2 Aug 2018: [JSConf Iceland React Suspense demo code](https://github.com/facebook/react/tree/master/fixtures/unstable-async/suspense)
- 29 Jul 2018: [bvaughn playing with Devtools + Suspense](https://www.youtube.com/watch?v=5RzOiibu8sg) - demos Placeholder, createRoot for the first time
- 13 Jul 2018: [Suspense Umbrella Issue](https://github.com/facebook/react/issues/13206) tracking the remaining issues before official release (Github)
- 13 Jun 2018: [Code splitting with React suspense](https://twitter.com/acdlite/status/1007062696141787136) screenshot of sample API shipping to Facebook staff
- 31 May 2018: [@reach/router example for suspense](https://github.com/reach/router/tree/ed177fa6960cbe05b3e62841e233d363002e7eed/examples/suspense)
- 25 May 2018: [@swyx React Suspense talk](https://www.youtube.com/watch?v=DzpLKwjmFw8) a makeup from ReactNYC ([slides](https://slides.com/swyx/react-suspense))
- 17 May 2018: [@ken_wheeler's ReactEurope keynote, including React Suspense](https://www.youtube.com/watch?v=QFk6YwMz8nc) and the simple-cache-provider API ([slides](http://reacteurope2018.surge.sh/#/) and [code](https://github.com/FormidableLabs/react-europe-demos))
- 15 May 2018: [@pete_gleeson's ANZCoders talk on how the createFetcher API and promise throwing works](https://www.youtube.com/watch?v=DsTsZ6cgPtw&feature=youtu.be&a)
- 26 Apr 2018: [@jaredpalmer prediction on react routers with suspense](https://twitter.com/jaredpalmer/status/989478105948606464)
- 24 Apr 2018: [@ryanflorence on how Context will work with Suspense](https://twitter.com/ryanflorence/status/988877331715448832)
- 24 Apr 2018: [React Suspense Server Renderer](https://github.com/acdlite/react/commit/0e8d322b70d61a334bc94195ed2929787fe5f4ed) just a prototype - not an official PR
- 30 Mar 2018: [@jaredpalmer / @mjackson working out react router in a Suspense world](https://twitter.com/jaredpalmer/status/979753531291979776)
- 29 Mar 2018: [React Suspense: The Interactive Experience](https://slides.com/swyx/react-suspense#/) [background slides](https://slides.com/swyx/background-thread) Swyx's talk at ReactNYC Mar 2018
- 29 Mar 2018: [React Suspense Debouncing use case](https://github.com/acdlite/react/blob/7166ce6d9b7973ddd5e06be9effdfaaeeff57ed6/packages/react-reconciler/src/tests/ReactSuspense-test.js#L573)
- 17 Mar 2018: [create-create-fetcher](https://github.com/petegleeson/create-create-fetcher) Pete Gleeson's attempt to make createFetcher with React 16.2
- 15 Mar 2018: [Ryan Florence on React suspense preloaders](https://www.youtube.com/watch?v=KyKvlnNGDxk)
- 11 Mar 2018: [attempt to make Suspense in React 16.2](https://medium.com/@pete_gleeson/creating-suspense-in-react-16-2-dcf4cb1a683f)
- 10 Mar 2018: [@acdlite on coroutines](https://twitter.com/acdlite/status/972542669040865280)
- 8 Mar 2018: [Harry Wolff video on React Suspense](https://www.youtube.com/watch?v=U1CpNtVdxM4) video
- 7 Mar 2018: [Bartosz Szczecinski: Understanding React Suspense](https://medium.com/@baphemot/understanding-react-suspense-1c73b4b0b1e6) blogpost
- 6 Mar 2018: [@dan_abramov: Suspense expiration time mechanics](https://twitter.com/dan_abramov/status/971092374691766273) and [here too](https://twitter.com/dan_abramov/status/971187182621872128) - [source](https://github.com/facebook/react/blob/e1a106a071dff17737a7afb49a0b71899d60c248/packages/react-reconciler/src/ReactFiberScheduler.js#L998)
- 5 Mar 2018: [@dan_abramov: difference between Commit and Reconcile](https://twitter.com/dan_abramov/status/970683705768513536)
- 5 Mar 2018: [Fredrik Hoglund on react supense and SSR](https://blogg.svt.se/svti/react-suspense-server-rendering/) blogpost
- 4 Mar 2018: [React-Redux and React async rendering](https://github.com/reactjs/react-redux/issues/890#issuecomment-370521609) github discussion
- 4 Mar 2018: [@dan_abramov on why Suspense is not a HOC](https://twitter.com/dan_abramov/status/970363058030772225)
- 4 Mar 2018: [@acdlite: Suspend means "don't commit", not "dont reconcile"](https://twitter.com/acdlite/status/970495397125750784)
- 3 Mar 2018: [Luca Matteis: React Suspense for the layman](https://medium.com/@lmatteis/react-suspense-for-the-layman-caae7f48686f) blogpost
- 2 Mar 2018: [Swyx: A walkthrough of that React Suspense Demo](https://dev.to/swyx/a-walkthrough-of-that-react-suspense-demo--4j6a) blogpost
- 2 Mar 2018: [@dan_abramov on render idempotency vs purity, and algebraic effects](https://twitter.com/dan_abramov/status/969629411996766208)
- 1 Mar 2018: [@acdlite on how Suspense works](https://twitter.com/acdlite/status/969171217356746752)
- 1 Mar 2018: [@acdlite on the original idea for Suspense being SSR](https://twitter.com/acdlite/status/969368473443774464)
- 1 Mar 2018: [@acdlite: you can suspend inside gDSFP and setState](https://twitter.com/acdlite/status/969428655238557697)

## Time Slicing-specific

- 24 Oct 2018: Incoming helper to do high pri and low pri updates together - [Twitter](https://twitter.com/dan_abramov/status/1055300192927408128)
- 7 Sep 2018: [Live version of JSConf Time Slicing Demo](https://timeslicing-unstable-demo.surge.sh/)
- 3 Sep 2018: [Time slicing and the `hidden` attribute](https://github.com/oliviertassinari/react-swipeable-views/issues/453#issuecomment-417939459) - [further commentary on Twitter](https://twitter.com/dan_abramov/status/1036280032723955713)
- 2 Aug 2018: [JSConf Iceland Time Slicing demo code](https://github.com/facebook/react/tree/master/fixtures/unstable-async/time-slicing)
- 2 Aug 2018: [Time Slicing Umbrella Issue](https://github.com/facebook/react/issues/13306) - (Github)
- 31 May 2018: [@reach/router example for time slicing](https://github.com/reach/router/tree/ed177fa6960cbe05b3e62841e233d363002e7eed/examples/time-slicing)
- 29 Mar 2018: [mobz/lag-radar](https://github.com/mobz/lag-radar) the radar used in Dan's demo

## Streaming SSR specific

- 2 May 2019: React-lightyear - successor to React-aldrin - [Github](https://github.com/Ephem/react-lightyear)
- 7 Jan 2019: React-aldrin by Fredrik Hoglund - Suspense based Server Renderer - [Github](https://github.com/Ephem/react-aldrin), [Twitter](https://twitter.com/EphemeralCircle/status/1082264727294758912)
- 10 Oct 2018: [@EphemeralCircle's talk slides on Suspense SSR](https://async-ssr-presentation.fredrikhoglund.com)
- 21 Aug 2018: [Jared palmer on single-pass SSR](https://twitter.com/jaredpalmer/status/1030895900527403009)
- 2 May 2018: [@EphemeralCircle's Streaming SSR proof of concept (non React Suspense)](https://github.com/Ephem/streaming-ssr-progress-poc) link to [live version and discussion](https://twitter.com/EphemeralCircle/status/991617640945930241)
- 29 Apr 2018: [@acdlite React Suspense SSR demo](https://github.com/acdlite/suspense-ssr-demo) code for Andrew's ZEIT day talk.

## History

- 22 Feb 2017: [React Fiber vs Stack Demo](https://github.com/claudiopro/react-fiber-vs-stack-demo/)
- 16 Mar 2017: [Lin Clark's A Cartoon Intro to Fiber](https://www.youtube.com/watch?v=ZCuYPiUIONs)
- 16 Mar 2017: [React Performance End to End](https://www.youtube.com/watch?v=bvFpe5j9-zQ) Sebastian's presentation at ReactConf 2017
- 15 Dec 2016: [Why, What, and How of React Fiber](https://www.youtube.com/watch?v=crM1iRVGpGQ) google hangout with kent dodds, lin clark, dan abramov, brian vaughn and andrew clark demoing the sierpinski triangle
- 18 Jul 2016: [React Fiber architecture](https://github.com/acdlite/react-fiber-architecture) from Andrew Clark
- 12 Apr 2016: [React-Basic](https://github.com/reactjs/react-basic) Sebastian's Conceptual notes on how React works
- 2 Mar 2016: [First Github disccussion of what became the Fiber rewrite](https://github.com/facebook/react/issues/6170) with timeslicing/suspense/context/error boundaries named
- 16 Aug 2014: [Jordan Walke first tweet about Async rendering](https://twitter.com/jordwalke/status/500587022890061824)
- 4 Jun 2010: [BigPipe: Pipelining web pages for high performance](https://www.facebook.com/notes/facebook-engineering/bigpipe-pipelining-web-pages-for-high-performance/389414033919/) original idea for streaming SSR [related discussion](https://twitter.com/dan_abramov/status/990388105759940609)
