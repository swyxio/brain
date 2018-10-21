---
name: Misc APIs
menu: APIs
---

# Misc APIs

Other related APIs have been introduced with Concurrent React, but don't have official names as features.

## `React.lazy` Example

_Current API: `React.lazy`_

`React.lazy` allows lazy loading of components, ideal for code-splitting.

```js
import React, {lazy} from 'react'

// static
import button from './Button'

// dynamic, code split
const Button = lazy(() => import ('./Button'))
```

[Read more in the RFC](https://github.com/reactjs/rfcs/blob/gaearon-patch-2/text/0000-lazy.md)

## `React.memo` Example

_Current API: `React.memo`_

`React.memo` is a higher-order component version of the `React.PureComponent` class.
During an update, the previous props are compared to the new props.
If they are the same, React will skip rendering the component and its children.

Unlike userspace implementations, `memo` will not add an additional fiber to the tree.

The first argument must be a functional component; it does not work with classes.

`memo` uses shallow comparison by default, like `React.PureComponent`.
A custom comparison can be passed as the second argument.

```js
import React, { memo } from 'react';

const areChildPropsEqual = (prevProps, nextProps) => prevProps.nested.id === nextProps.nested.id;
const MemoChildComponent = memo(ChildComponent, areChildPropsEqual);
```

[Read more in the RFC](https://github.com/reactjs/rfcs/blob/gaearon-patch-1/text/0000-memo.md).

---

**Recommended Sources for further info:**

- [React.memo PR](https://github.com/facebook/react/pull/13748) ([renamed from React.pure](https://github.com/facebook/react/pull/13905))
- [React.lazy PR](https://github.com/facebook/react/pull/13398)
