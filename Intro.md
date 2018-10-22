---
name: Introduction
route: /
---

# Introduction: What is Concurrent React?

Concurrent React is an umbrella name for a new set of APIs resulting from the React Fiber rewrite.
It was previously known as "Async React".

The new name emphasizes React's new ability to concurrently render, suspend, and resume rendering frames
in the background _while remaining interactive_ (aka not destroying old frames while rendering the next).
This ability helps Concurrent React apps adapt to the user's device and network,
allowing for fast interactions to feel instant while slower interactions feel responsive.

Concurrent React includes features like **Time Slicing** and **React Suspense**.
New libraries have also been introduced in relation to these features, like `scheduler` and `react-cache`.

As of 15 Oct 2018 these features were available under the `@canary` tag, or `v16.6.0-alpha.8af6728`:

- [react](https://www.npmjs.com/package/react/v/16.6.0-alpha.8af6728)
- [react-dom](https://www.npmjs.com/package/react-dom/v/16.6.0-alpha.8af6728)
- [react-cache](https://www.npmjs.com/package/react-cache/v/16.6.0-alpha.8af6728)
- [scheduler](https://www.npmjs.com/package/scheduler/v/16.6.0-alpha.8af6728)
- [create-subscription](https://www.npmjs.com/package/create-subscription/v/16.6.0-alpha.8af6728)

This site is an attempt to sum up the state of knowledge with regards to Concurrent React.
It is curated by [swyx](http://twitter.com/swyx) and is not to be taken as a replacement for any
of the official communication from the React team.

## ⚠️ Unstable APIs ⚠️

This site is for early adopters only. Be warned that many APIs here are completely unstable.

It will be impossible to keep up with all the changes so examples may break when copy-pasted.

We will also write about APIs without the `unstable_` prefix, but it is very much implied.
We will note the current API at the start and for the rest of the section drop the `unstable_` prefix.
For example, see the next section on `<ConcurrentMode>`.

## Getting Started with `<ConcurrentMode>`

_Current API: `React.unstable_ConcurrentMode`_

Concurrent React is not enabled by default in React 16.
Instead, you'll have to opt-in to it in React 16.6 on up:

```js
const container = document.getElementById('root');
ReactDOM.render(
  <ConcurrentMode>
    <App />
  </ConcurrentMode>,
  container
);
```

This opt-in nature is very handy for incrementally converting an existing app to use Concurrent React features.
**The other Concurrent React features will not work without this wrapper component as a parent.**

_Note: Your app must be `<StrictMode>` compliant first before you apply `ConcurrentMode` - [read more about StrictMode in the docs](https://reactjs.org/docs/strict-mode.html)_

## Alternatively; `ReactDOM.createRoot`

_Current API: `ReactDOM.unstable_createRoot`_

If you use this instead of `ReactDOM.render`, `ReactDOM.createRoot` automatically opts into Concurrent mode for your whole app. For more info, see the separate Roots doc.

```js
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
```

## What is Time Slicing?

Time Slicing is a generic way to ensure that high-priority updates don’t get blocked by a low-priority update.

**Problems it solves**: When rendering is **CPU-bound**.

## What is React Suspense?

React Suspense is a generic way for components to suspend rendering while they load data from a cache.

**Problems it solves**: When rendering is **I/O-bound**.

It is a fundamentally new capability that

- lets you render a component tree “in background”
- while components are fetching data, and
- display them only after the whole tree is ready.

For slow connections, it gives you full control over where and when to show a placeholder.
It doesn’t destroy the previous view while this is happening.

---

> Next: [Time Slicing](apis/time-slicing.md)

---

**Recommended Sources for further info:**

- [React 16.3 and 16.4 Umbrella Issue](useful for pre-rendering via createBatch)
- [Codesandbox with running example](https://codesandbox.io/s/w0n9ok3mqw)
- [JSConf Iceland 2018 Demo](https://www.youtube.com/watch?v=nLF0n9SACd4)
- [Beyond React 16 Blogpost](https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html)
