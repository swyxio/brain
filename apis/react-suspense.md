---
name: React Suspense
menu: APIs
---

# React Suspense

React Suspense is a generic way for components to suspend rendering while they load data from a cache. React Suspense for code-splitting [has been released](https://reactjs.org/blog/2018/10/23/react-v-16-6.html), so this primarily deals with Suspense for data-loading.

**Problems it solves**: When rendering is **I/O-bound**.

## Important Concepts

- Reading from a cache during render
  - **suspending** on cache miss to fetch data
  - showing a **fallback** UI if the duration of the suspense exceeds a threshold
  - **resuming** render when the fetch is fulfilled and the cache read obtains a value
- Render is only complete and committed to the DOM when either:
  - `maxDuration` is exceeded and the **fallback** UI is shown. React ships with built in maxDuration expiry limits (up to 5 seconds, iirc), and will use the smaller of the builtin limit or of whatever you specify (see below).
  - OR: all sibling and child suspenders within a `<Suspense>` boundary have resolved. In other words, they "render together or not at all".

Cache implementations are independent of React Suspense;
the React team maintains a reference implementation called `react-cache`
that also supports key-based invalidation and preloading but they are not strictly necessary for React Suspense to work.

Caches should be idempotent and should **throw promises** to resolve data fetches.

## maxDuration is NOT actual Duration

This is not final but priorities have an associated duration that may supercede the duration you set. `ReactDOM.createRoot().render()` has normal priority (which means it is allowed to suspend for max 5 seconds). [Source](https://twitter.com/dan_abramov/status/1061344382375395329). Inside high priority "intentional" events it is 100ms in prod. [Source](https://twitter.com/dan_abramov/status/1055298410767675398?s=20)

Actual duration works like `Math.min(how long it took, maxDuration of Suspense, duration associated with priority of update)`.

Update Jan 27 2019: [maxDuration is too hard to explain, will be dropped for something else](https://twitter.com/sebmarkbage/status/1089704030920556549)

## `<Suspense>` Example

_Current API: `React.Suspense`_

`<Suspense>` sets a "catchment area" for all suspenders thrown by its children.

```js
// inside render...
<Suspense maxDuration={1000} fallback={<Spinner size="medium" />}>
  <ChildComponent id={id} />
</Suspense>
```

`<Suspense>` works outside of a Concurrent root, but will act as though `maxDuration` is always 0 (i.e. it will always show the fallback UI even if momentarily, just like in normal React)

Please see our `react-cache` section for how to write suspenders.

Also see the React Suspense Fixture: [CodeSandBox](https://codesandbox.io/s/w0n9ok3mqw)

---

> Next: [React Cache](/apis/react-cache.md)

---

**Recommended Sources for further info:**

- JSConf Iceland 2018 - [Video](https://www.youtube.com/watch?v=nLF0n9SACd4)
- Suspense! ReactFest 2018 - [Video](https://www.youtube.com/watch?v=6g3g0Q_XVb4)
- [React Suspense Umbrella Issue](https://github.com/facebook/react/issues/13206)
- React Suspense and SSR @ Zeit Day - [Video](https://www.youtube.com/watch?v=z-6JC0_cOns) and [Demo code](https://github.com/acdlite/suspense-ssr-demo)
