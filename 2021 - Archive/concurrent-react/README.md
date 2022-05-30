# NOTE: THIS REPO IS NOW UNMAINTAINED. I don't expect to return to it again. If someone would like to take over, get in touch.

## 2021 updates

Please follow https://github.com/reactwg/react-18/discussions from now on

## 2020 updates

- **Switched batching model from Expiration Times to Lanes**: https://github.com/facebook/react/pull/18796. 
- **preparing to use Chrome native scheduler**: https://github.com/facebook/react/pull/19121
- **changing effect traversal for Suspense and Offscreen trees**: https://github.com/facebook/react/pull/19322
- React 17 had [changes to event delegation](https://reactjs.org/blog/2020/08/10/react-v17-rc.html#changes-to-event-delegation) so as to enable React 18 and 17 trees to coexist in the same app
- **React Server Components**
  - [talk](https://www.youtube.com/watch?v=TQQPAU21ZUw&feature=emb_title) (annotated with [timestamps](https://twitter.com/swyx/status/1341122002866749440?s=20)
  - [RFC](https://github.com/josephsavona/rfcs/blob/server-components/text/0000-server-components.md)
  - [demo](https://github.com/reactjs/server-components-demo/)
  - [swyx demo livestream](https://www.youtube.com/watch?v=La4agIEgoNg)

## ⚛️ Concurrent-React-Notes

Welcome to `concurrent-react-notes` - a great place to learn about Concurrent React!

> If you are looking for notes from before the launch of Concurrent React at ReactConf 2019, see the [/legacy](/legacy/README.md) folder.

Everything here is information since launch, assuming you have seen the official introductory talks from the React team and [read the official docs](https://reactjs.org/docs/concurrent-mode-intro.html).

These are personal notes, so they _will_ have an editorial bias. But you are welcome to open issues, contribute, and discuss with me.

## Demos

- https://github.com/gaearon/suspense-experimental-github-demo
- [autocomplete dropdown example](https://mobile.twitter.com/sebastienlorber/status/1188742291818721280)

## Concurrent

- React Podcast: Andrew Clark on Concurrent Mode ([podcast](https://reactpodcast.com/70))

Suspense is declarative loading states. Concurrent Mode is a way to coordinate them in a more intentional way.

(source: [Dan](https://mobile.twitter.com/dan_abramov/status/1189276304232865793))

The point of Concurrent Mode is it's easy to choose what's required and what's deferred. You wrap the deferred stuff into its own <Suspense> and you're good to go. So whenever you add a new widget, you can decide whether it should delay page transition, or if should load after.

(source: [Dan](https://mobile.twitter.com/dan_abramov/status/1189275628677357569))

"Concurrent Mode" is ok but I prefer calling it "React on Acid" - [Dan](https://mobile.twitter.com/dan_abramov/status/1189235810337525767)

In fact, Concurrent Mode is aimed to enable _better_ offscreen culling because it can optimistically “warm up” and pre-render next likely items without blocking and jank.

(source: [Dan](https://mobile.twitter.com/dan_abramov/status/1187920574926016513))

another thing enabled by Concurrent Mode is partial and progressive hydration. Which directly benefits low end.

(source: [Dan](https://mobile.twitter.com/dan_abramov/status/1169364691044491264))

You may see unexpected issues in Concurrent Mode because a render can be aborted.

(source: [Dan](https://mobile.twitter.com/dan_abramov/status/1161973331979132929))

Is Concurrent Mode just a workaround for “virtual DOM diffing” overhead? Some people got that impression. Let me clarify why we’re working on it:

1. Time slicing keeps React responsive while it runs your code. Your code isn’t just DOM updates or “diffing”. It’s any JS logic you do in your components! Sometimes you gotta calculate things. No framework can magically speed up arbitrary code.
2. Making updates really fast is a great goal. However, how many of the interactions in apps you use are “very fast updates to existing nodes”, as opposed to “replacing a part of the screen with new content”? Go ahead and count them.
3. When you replace a part of screen with new content (like when you click on my tweet or scroll it down), there’s fewer shortcuts a library can do. You gotta create those DOM nodes, possibly transform the data, and run some calculations. This is CPU work.
4. You can optimize it somewhat. But this work has to be done. What’s interesting though — is _when_ you do it. Traditional model is “fetch data, then mount”. This means you’re stuck wasting CPU cycles not doing anything useful while waiting for data and more code to arrive.
5. No amount of “reactivity” solves that. It’s not a problem of handling new inputs — it’s a scheduling problem. Concurrent React starts rendering “in memory” immediately, even while code and data for some components is still loading.
6. The goal is to be responsive regardless of whether CPU or IO is lagging behind. So you want to _interleave_ CPU and IO work. Let components render “in memory” while data for others is still streaming in, and show the final result when it’s ready. Not “fetch and mount”.
7. Showing updates as fast as possible seems like an obvious goal. But is it, always? I don’t think it is when you fetch (IO). User perception research shows that a fast succession of loading states (flashing and hiding spinners) makes the transition feel _slower_.
8. So you wanna remove “virtual”. But if a UI library can’t start rendering code “in memory” and its every “render” has to produce an immediate visible UI update, it loses the ability to coordinate screen updates and optimize them for human perception.
9. You can’t be faster than “done”. Rendering “in memory” before all the data is ready is faster by definition than waiting for the whole thing. You can try to fix it by rendering to screen early — but showing loading states too fast feels janky and you get too many reflows.
10. CPU and IO are two sides of the same coin. You have to solve both. Removing “in memory” virtual representation means that for one of most common transitions (replacing part of a screen) you have to choose between janky loading sequence or starting work too late. Both suck.
11. What if there was a layer that, due to “virtual” component output, can start rendering as soon as you click (rather than when you finish fetching), continue in background as more code arrives, and coordinate screen paints for minimal jank and flicker? That’s Concurrent React.
12. When we started working on Concurrent React, we had no idea about the IO side of this question or coordinating loading states. But if you think about how to bring best experience to the user regardless of their network and device, you’re gonna have to think about IO a lot.
13. Concurrent React is still in development. It was a multi-year project. We are actively dogfooding it now, and there’s still work to polish the APIs and ensure common UI patterns are covered well. We want to make sure it’s super solid before it’s marked as stable.
14. I can’t resist some demo time. We’re currently working on new React DevTools. One of the ways it improves performance is by only serializing props for selected element. But do you see the downside of adding asynchronous data? Note the flashing “Loading...” in the right pane.
15. We can’t fetch that data “faster”. It’s asynchronous by nature. But what if we can let Concurrent React coordinate the screen updates for minimal jank? It looks like this. Right pane updates are slightly delayed but you can hardly perceive that. So smooth!
16. **Our goal with Concurrent React is to make this experience the default.** You don’t need to coordinate loading sequences for minimal jank — React does that. Computations don’t need to stall the thread either. And we can start work as early as possible thanks to being “virtual”.

(source: [Dan](https://mobile.twitter.com/dan_abramov/status/1120971795425832961))

Concurrent mode lets us yield to network responses and process them earlier than if we blocked. If that processing needs to send another request, it gets sent out earlier for better parallelism.

(source: [Seb](https://mobile.twitter.com/sebmarkbage/status/1189009831417405440))

## Suspense

Here are the concerns solved by Suspense:

- Single declarative way to specify loading states decoupled from _what_ is loading (GraphQL, REST, JS bundle, images) and where in the tree
- Graceful orchestration of those loading states (control over reveal order, avoiding flicker)
- Suspense also offers some new capabilities that data sources can take advantage of. For example, a response can gradually “unlock” deeper levels of data as it streams. That’s not new... but with declarative loading states, it means the app can also “unlock” UI in coordinated way.
- I like to think of Suspense as a way to find balance between technological and UX extremes. Technologically, streaming data and rendering immediately as it comes is fastest. UX-wise, it would be terrible to see every component load separately and shift layout every few ms.
- Suspense lets us choose well-defined boundaries where we’re willing to show loading states. That lets us stream data as it comes (and start rendering immediately) but only show result to the user in places we agreed to, in order we agreed to, and with a frequency that feels good.
- And let’s not forget it’s not just about data. Suspense doesn’t care what we’re waiting for. It uses the same mechanism for code, data, and any other async things you need. So you can stream code and data in parallel, and the app can “unlock” deeper loading states as we fetch.

(source: [Dan](https://twitter.com/dan_abramov/status/1190275834961178624))

Suspense decouples three things:

1. Visual presentation of loading states
2. Where data is being read
3. How data is requested and streamed in

“You can show something before the whole response comes in?” Yep 👍

“You can force different sections of UI to reveal in a top-down order even if their code or data loads in a different sequence” Yep 👍

“You can kick off a fetch early but wait before transition?” Yep 👍

This is counter-intuitive because we’re used to those things being coupled together. We’re used to manually orchestrating them. To me this is as big a mental shift as React was from manually managing the DOM.

(source: [Dan](https://mobile.twitter.com/dan_abramov/status/1189884884543774721))

The whole point of Suspense is you can pass the data down and read() it where needed. So optional data doesn't block the required parts from rendering.

(source: [Dan](https://mobile.twitter.com/dan_abramov/status/1189229077703614464))

Suspense doesn't handle:

- Retry patterns
- Throttling
- Error handling
- Sequential fetching
- Circuit breaker patterns
- Interruption/cancellation
- Deterministically testing it all!

(source: [David](https://mobile.twitter.com/DavidKPiano/status/1190267697327677445))

### [Suspense Demo for Library Authors](https://github.com/gaearon/suspense-experimental-github-demo)

## SuspenseList

In SuspenseList a nested fragment is one row and all Suspense boundaries in it are treated as a single unit. This turns out to be a very useful abstraction over lists of things where each item composed of several Suspense boundaries (which will be more common with animations).

(source: [Seb](https://twitter.com/sebmarkbage/status/1197730725555949568))

## useTransition

useTransition() lets us skip/delay the "recessed" state. That's when we had to hide some _existing_ content and show a spinner instead. Delaying that is usually better.

However, we want to get to the "skeleton" state as soon as possible. We don't want to wait for _everything_.

So useTransition() lets us wait for all the boundaries _outside_ to be ready. But once they're ready, we show the new page, and let the rest of the content in their own <Suspense> boundaries load incrementally. Potentially with <SuspenseList> to coordinate their reveal order.

When you setState(), some components stay on the page, and some components get unmounted or newly mounted, right?

"Recessed" boundaries already exist on the page. Hiding them is bad because you hide _existing_ content.

"Skeleton" are new boundaries. You haven't seen them yet.

For example, if you navigate from Feed to Profile, hiding the whole top-level app (including tabbar) would be bad. Because we already showed it before. It's bad to temporarily hide existing content.

But it's ok that on Profile page, "Photos" section might still be loading.

(source: [Dan](https://mobile.twitter.com/dan_abramov/status/1189561524718899200))

So the way you can think of useTransition is it only delays it for as long as needed to prevent a bad loading state. And by bad, we essentially mean “hiding existing content”. That’s why it waits for existing Suspense boundaries. But it doesn’t wait for new boundaries because we want to show the other content (outside of them) as soon as possible.

There are some cases when this is insufficient. Maybe some “new” loading state is also “bad” and you really want to avoid it. This is undocumented but passing unstable_avoidThisFallback={true} to Suspense marks it as undesirable even when newly mounted. In that case useTransition will prefer to stay on the previous page for longer than to show it.

(source: [Dan](https://github.com/facebook/react/issues/17401#issuecomment-555961300))

## Relay

- Joe Savona: Data Fetching With Suspense In Relay ([Youtube](https://www.youtube.com/watch?v=Tl0S7QkxFE4&list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh&index=15&t=0s))

## SSR, Progressive and Selective Hydration

"We’re actively investing into SSR but started from the client side (progressive hydration of Suspense boundaries). Unfortunately we can’t squeeze complex features into the existing SSR due to its architecture. We’re starting work on a new one."

(source: [Dan](https://mobile.twitter.com/dan_abramov/status/1189730578050011136))

### Progressive Hydration

- Dan's Demos https://mobile.twitter.com/dan_abramov/status/1200111677833973760
  - Simulate loading: https://codesandbox.io/s/floral-worker-xwbwv
  - with event replaying and shared state

## Batched Mode

“Batched” mode is like a limited version of concurrent mode that enables batching but none of the other features (time slicing, priorities, delayed Suspense, etc).

(source: [Andrew](https://mobile.twitter.com/acdlite/status/1175084727348412419))

## Writing a Cache

"If you have a cache and feel like eviction criteria are ad-hoc and unclear, it can help to have an explicit object that represents the caching lifetime. As long as you hold onto that object, you can read from the cache. Losing the reference to it means eviction. This has implications for data fetching. The classic fetch-on-render pattern (like fetch in componentDidMount or effect) with local state is relatively easy to do because it *does* tie data lifetime to a well-defined thing. React state! It lives while component is mounted. One of the many problems with this data fetching approach is that the cache is too local. If two components use the same data, you have to fetch it twice. Or lift it up. Redux is an extreme version of that. By lifting a cache too high, it no longer has a well-defined lifetime! One way you could try to solve this is with manual invalidation methods. Maybe you clear the cache on (some?) route changes or invalidate particular parts of it when necessary. It’s pretty hard to do manually in a consistent way though. Usually leads to bugs. This is really the key flaw with our early Suspense demos from a year ago. The “fetch-on-render” pattern that mirrors “fetch in componentDidMount” could work if we’re fine caching forever. But if we want cache invalidation, we need something to “anchor” that invalidation to. In Relay, that “anchor” is called “query reference”. My understanding is that Relay does refcounting for them.

In Suspense experimental docs, we use an explicit “resource” to represent the caching lifetime. But this is annoying in practice because you have to manage that object. What if that lifetime was managed automatically? For that to work, you need two ingredients:

1. Some way to gather data dependencies from a screen
2. A lifetime to which to tie the fetched data

Relay does (1) for GraphQL. We’re working on something more generic for REST etc. But this thread is about (2). Tying it to the component hierarchy doesn’t work very well today because on route transitions, you still want to hold onto the data from the previous screens by default. Otherwise Back button becomes slow. So what do we tie the cache lifetime to?
@sebmarkbage has an intriguing idea to solve (2) by integrating (1) closer with the routing system. Below the router level, we lose some information about user intent (did we move to a new page or navigate in history). But user expectations depend on user intent.

That is all to say cache invalidation and expiration is a hard problem. But you can make it manageable if you anchor it to something with a well-defined timeline. Now you “just” need to decide what it is, and why that makes sense."


(source: [Dan](https://twitter.com/dan_abramov/status/1202052703813357574))

## Meta

- Reflections on the lead up to Suspense https://mobile.twitter.com/dan_abramov/status/1184987041676845056
- Suspense and Hooks https://mobile.twitter.com/dan_abramov/status/1154501240019197952
- credits for people who worked on Concurrent https://twitter.com/dan_abramov/status/1187434146844553218
- the prerequisites for Concurrent https://mobile.twitter.com/acdlite/status/1187440140018282497
