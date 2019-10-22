---
name: React Suspense (for data fetching)
menu: APIs
---

# React Suspense (for data fetching)

React Suspense is a generic way for components to suspend rendering while they load data from a cache. React Suspense for code-splitting [has been released](https://reactjs.org/blog/2018/10/23/react-v-16-6.html), so this primarily deals with Suspense for data-loading.

**Problems it solves**: When rendering is **I/O-bound**.

## Not-yet-confirmed APIs

- [useDeferredValue and useTransition](https://github.com/facebook/react/pull/17058/)

## Important Concepts

- Reading from a cache during render
  - **suspending** on cache miss to fetch data
  - showing a **fallback** UI if the duration of the suspense exceeds a threshold
  - **resuming** render when the fetch is fulfilled and the cache read obtains a value
- Render is only complete and committed to the DOM when either:
  - a hueristic ([Just Noticeable Difference](https://github.com/facebook/react/pull/15367)) decides that a **fallback** UI is shown
  - OR: all sibling and child suspenders within a `<Suspense>` boundary have resolved.

In other words, they "render together or not at all"

Cache implementations are independent of React Suspense;
the React team has published an unmaintained reference implementation called `react-cache`
that also supports key-based invalidation and preloading but they are not strictly necessary for React Suspense to work.

Caches should be idempotent and should **throw promises** to resolve data fetches. React will suspend
rendering while that promise is pending. In the event of a timeout, react renders the fallback. When
the promise resolves, rendering resumes. If the promise rejects, the rejection can be handled by
an error boundary (a component that implements
[`componentDidCatch`](https://reactjs.org/docs/react-component.html#componentdidcatch)).

- Update 10 Apr 2019: A heuristic replacement of maxDuration uses [Just Noticeable Difference](https://github.com/facebook/react/pull/15367) to calculate the timeout after [removing hard-coded 150ms](https://github.com/facebook/react/pull/15367/files#diff-a409dc1b2c8ece1cc1fa28fe42b481ceL1829)
- Update 4 Apr 2019: maxDuration has been removed and [replaced with a heuristic and different mechanism instead](https://github.com/facebook/react/pull/15272)
- Update 27 Jan 2019: [maxDuration is too hard to explain, will be dropped for something else](https://twitter.com/sebmarkbage/status/1089704030920556549)

## `<Suspense>` Example

_Current API: `React.Suspense`_

`<Suspense>` sets a "catchment area" for all suspenders thrown by its children.

```js
// inside render...
<Suspense fallback={<Spinner size="medium" />}>
  <ChildComponent id={id} />
</Suspense>
```

`<Suspense>` works outside of a Concurrent root (in 16.6.0~16.8.6), and will always show the fallback UI even if momentarily.

Please see our [`react-cache` section](/apis/react-cache.md) for how to write suspenders.

Also see the React Suspense Fixture: [CodeSandBox](https://codesandbox.io/s/w0n9ok3mqw)

## `<SuspenseList>` Example

```js
<SuspenseList revealOrder="together"/>
<SuspenseList revealOrder="forwards"/>
<SuspenseList revealOrder="backwards"/>

// tail api
// https://github.com/facebook/react/blob/4eeee358e12c1408a4b40830bb7bb6956cf26b47/packages/react-reconciler/src/__tests__/ReactSuspenseList-test.internal.js

<SuspenseList revealOrder="forwards" tail="hidden">
  <Suspense fallback={<Text text="Loading A" />}>
    <A />
  </Suspense>
  <Suspense fallback={<Text text="Loading B" />}>
    <B />
  </Suspense>
  <Suspense fallback={<Text text="Loading C" />}>
    <C />
  </Suspense>
</SuspenseList>


<SuspenseList revealOrder="forwards" tail="collapsed">
  <Suspense fallback={<Text text="Loading A" />}>
    <A />
  </Suspense>
  <Suspense fallback={<Text text="Loading B" />}>
    <B />
  </Suspense>
  <Suspense fallback={<Text text="Loading C" />}>
    <C />
  </Suspense>
</SuspenseList>
```

control the reveal order of a list of suspense Items - refresh and see these demos and how they load:


- SuspenseList Demos:
  - https://eddie-cooro.github.io/suspense-list-forwards-demo/
  - https://eddie-cooro.github.io/suspense-list-together-demo/


---

> Next: [React Cache](/apis/react-cache.md)

---

**Recommended Sources for further info:**

- JSConf Iceland 2018 - [Video](https://www.youtube.com/watch?v=nLF0n9SACd4)
- Suspense! ReactFest 2018 - [Video](https://www.youtube.com/watch?v=6g3g0Q_XVb4)
- [React Suspense Umbrella Issue](https://github.com/facebook/react/issues/13206)
- React Suspense and SSR @ Zeit Day - [Video](https://www.youtube.com/watch?v=z-6JC0_cOns) and [Demo code](https://github.com/acdlite/suspense-ssr-demo)
- SuspenseList Demos:
  - https://eddie-cooro.github.io/suspense-list-forwards-demo/
  - https://eddie-cooro.github.io/suspense-list-together-demo/
