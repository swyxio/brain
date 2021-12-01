> this list used to be on https://github.com/sw-yx/uuid-list

# uuid-list

list of unique id implementations, design considerations, and resources. may also overlap somewhat with the topic of hashing

## Desirable Properties

- extremely low chance of collision
- sorting
  - chronologically sortable
  - lexicographically/alphabetically sortable? (k-sortable?)
- speed
   - [completely random hurts perf](https://www.percona.com/blog/2019/11/22/uuids-are-popular-but-bad-for-performance-lets-discuss/)
- string qualities
  - case insensitive
  - URL safe
  - 64 bits (instead of 128bits) or otherwise fixed length (bc of storage concerns)
- secure/good entropy
  - non-secure = `Math.random` + `Date.now`
  - cryptographically secure = CSPRNG - use `crypto` module in node.js
  - ?
- inputs:
  - timestamp
  - string?
- no dependencies
- no need for coordination (among different clients generating uuid's)
  
## Concepts

- https://en.wikipedia.org/wiki/Universally_unique_identifier
- RFC: A Universally Unique IDentifier (UUID) URN Namespace - https://tools.ietf.org/html/rfc4122
- k-sorting http://ci.nii.ac.jp/naid/110002673489/

    > We’re aiming to keep our k below 1 second, meaning that tweets posted within a second of one another will be within a second of one another in the id space too.

- KSUID's https://github.com/segmentio/ksuid (segment)
- FUUID https://github.com/kpdemetriou/fuuid UUIDs are compatible with regular UUIDs but are naturally ordered by generation time, collision-free and support succinct representations such as raw binary and base58-encoded strings.
  - Warning - not mature https://news.ycombinator.com/item?id=27030088
- ulid's https://github.com/ulid/spec ([instagram](http://instagram-engineering.tumblr.com/post/10853187575/sharding-ids-at-instagram), [firebase](https://firebase.googleblog.com/2015/02/the-2120-ways-to-ensure-unique_68.html))
- c4 ID's http://www.cccc.io/
- MongoDB ObjectID: https://www.mongodb.com/blog/post/generating-globally-unique-identifiers-for-use-with-mongodb
- guid alternatives https://www.softwareatscale.dev/p/guids-are-not-enough
- UUID and MySQL performance - [YouTube discussion](https://www.youtube.com/watch?v=Y5mWz4vK10A)
  - *MySQL is clustered by default on the primary key which means inserts have to be ordered, so UUID (random in nature) has bad performance in MySQL.*


## Impls

grab n go: https://www.uuidgenerator.net/

super simple dumb unique id

```js
function id () {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}
```

better uuid?

```js
https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
export function uuid() {
  var dt = new Date().getTime()
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(
    c
  ) {
    var r = (dt + Math.random() * 16) % 16 | 0
    dt = Math.floor(dt / 16)
    // eslint-disable-next-line
    return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
  return uuid
}
```


- Twitter Snowflake (2010-2014) https://blog.twitter.com/engineering/en_us/a/2010/announcing-snowflake.html
- ULID https://github.com/ulid/spec ([security concern](https://news.ycombinator.com/item?id=25871981))
- Timeflake https://github.com/anthonynsimon/timeflake ([not for security](https://news.ycombinator.com/item?id=25872009))
- fast random ID: 
  - https://github.com/lukeed/uid A tiny (134B) and fast utility to generate random IDs of fixed length
    
    ```js
    import { uid } from 'uid';
    // or: import { uid } from 'uid/secure';
    // or: import { uid } from 'uid/single';

    // length = 11 (default)
    uid(); //=> 'fsm2vsgo1pr'
    uid(); //=> 'gf34sezvoh6'

    // customize length
    uid(16); //=> 'zbb6cc3ay26omrdz'
    uid(25); //=> 'lljjmo3f39rnjudsgqvzta1rb'
    uid(32); //=> 'yrfiw88qlq1fgpm40lguz6u43gksfj4a'
    ```
  - https://github.com/lukeed/hexoid like (uid but >3x faster due to different api)
  - https://github.com/ericelliott/cuid Collision-resistant ids optimized for horizontal scaling and binary search lookup performance.
  - https://github.com/ai/nanoid A tiny (108 bytes), secure, URL-friendly, unique string ID generator for JavaScript. [Comparison vs uuid](https://blog.bitsrc.io/why-is-nanoid-replacing-uuid-1b5100e62ed2)
    
    ```js
    import { nanoid } from 'nanoid'
    model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
    ```
- uuid/v4:
  - [as of Node v14.17](https://nodejs.org/en/blog/release/v14.17.0/#uuid-support-in-the-crypto-module) you can generate UUID4's with the crypto module:
    ```js
    const { randomUUID } = require('crypto');
    console.log(randomUUID());
    // 'aa7c91a1-f8fc-4339-b9db-f93fc7233429'
    ```
  - https://digitalbunker.dev/2020/09/30/understanding-how-uuids-are-generated/
  - https://github.com/lukeed/uuid
  - https://github.com/uuidjs/uuid
  
  ```js
  import { v4 as uuidv4 } from 'uuid';
  uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
  ```
