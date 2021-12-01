---
name: react-cache
menu: APIs
---

# `react-cache`

`react-cache` is a reference React Suspense cache implementation maintained by the React team.
It was previously known as `simple-cache-provider`.
[The entire codebase](https://github.com/facebook/react/blob/master/packages/react-cache/src/ReactCache.js) is less than 200 lines of Flow-typed code. You can see usage examples in the [Suspense fixture](https://github.com/facebook/react/blob/master/fixtures/unstable-async/suspense/src/components/UserPage.js).

**Note: `react-cache` is under very active development - this document is more likely than the others to be out of date.** For example, `createCache` no longer exists. 

This was last updated on Nov 13 2018.

## Important Concepts

- **reading**
- **invalidating**
- **preloading**

## `createResource` and `resource.read(key)` Example

_Current API: `reactCache.unstable_createResource`_

`createResource` creates a `resource` out of a callback returning a promise.

The primary method of a `resource` is `read`. A mental model of `resource.read(key)`:

- The resource checks against a key and a `cache`.
- If cache miss:
  - It calls the callback to obtain the data fetch Promise
  - Throws the promise
  - When the promise resolves, stores the response in `cache` against the key
  - Start over
- If cache read succeeds:
  - Synchronous read of the cached value into the render function

Note: You used to need a `cache` argument, as in `Resource.read(cache)`, but this was dropped along with some other API changes in v2.0.0. [PR here](https://github.com/facebook/react/pull/13337)

```js
const FooResource = createResource(id => fetch(`/foo/${id}`)); // return a promise, or async/await

// inside render...
const fooResponse = FooResource.read(id); // suspends if not in cache; renders if in cache
return <div> {fooResponse} </div>;
```

You don't need a key if you just want the whole cache to map through:

```js
FooResource.read().map(user => (
  // user is an object with an `id` field as well as the rest of the data
))}
```

Alternative Example with Image Loading:

```js
const ImageResource = createResource(
  src =>
    new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve(src);
      img.src = src;
    })
);

// suspending <Img /> component
const Img = ({ src, alt, ...rest }) => (
  <img src={ImageResource.read(src)} alt={alt} {...rest} />
);
```

## `resource.preload(key)`

`resource.preload(key)` is like `resource.read(key)` except it does not throw and suspend rendering.
Thus it has the effect of "warming" the cache in the background.


Other APIs:

- `Resource.invalidate()` has been deprecated since it now uses LRU caching
- `unstable_setGlobalCacheLimit` sets the LRU limit

---

> Next: [hidden](/apis/hidden.md)

---

**Recommended Sources for further info:**

- v2.0.0 API change PR: [PR here](https://github.com/facebook/react/pull/13337)
- [`react-cache` source](https://github.com/facebook/react/blob/master/packages/react-cache/src/ReactCache.js)
