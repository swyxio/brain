---
name: Roots
menu: APIs
---

# Roots

These are concurrent-ready attachment points for React onto the DOM.

## `ReactDOM.createRoot and Root.render`

API: `ReactDOM.createRoot`

Instead of `ReactDOM.render`, `ReactDOM.createRoot` creates a Concurrent root for React. It also doesn't assume the first render is synchronous (aka you can suspend even on the first render, which useful for prerendering via `root.createBatch()`).

Roots expose a number of methods, the main of which is `Root.render`:

```js
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
```

## `ReactDOM.createBlockingRoot`

API: `ReactDOM.createBlockingRoot

Create a Batched Mode root. It does not support `createBatch`.


```js
const container = document.getElementById('root');
const root = ReactDOM.createBlockingRoot(container);
root.render(<App />);
```



> ⚠️ Everything below here is EVEN MORE UNSTABLE/UNTESTED THAN IN THE REST OF THIS PAGE SO IT IS PRETTY DAMN UNRELIABLE YOU HAVE BEEN WARNED ⚠️

## `Root.prerender`

_Current API: `Root.prerender()`_

Does render phase work but does not commit yet.

```js
const root = ReactDOM.createRoot(containerEl);
const work = root.prerender(<App />);
// ... other async work ...
work.commit();
```

## `Root.createBatch`

Only for concurrent roots.

```js
const root = createRoot(containerEl);
const batch = root.createBatch();
log.app('batch.render()');
batch.render(createElement(TestApp));
batch.then(
  wrap(() => {
    log.app('batch.commit()');
    batch.commit();
  })
);
```

## `ReactDOM.createLazyRoot`

_API: `ReactDOM.unstable_createLazyRoot`_

Start rendering even without a container:

```js
let containerEl;
const root = ReactDOM.unstable_createLazyRoot(function getContainer() {
  return containerEl;
});
const work = root.prerender(<App />);

// no container until now!
containerEl = await promiseForContainer;
work.commit();
```

---

> Next: [Community Demos](/community/demos.md)

---

**Recommended Sources for further info:**

- Coordinating Async react - [gist](https://gist.github.com/acdlite/f31becd03e2f5feb9b4b22267a58bc1f)
- [createRoot proposal](https://github.com/facebook/react/issues/10366)
