# uuid-list

list of unique id implementations, design considerations, and resources. may also overlap somewhat with the topic of hashing

> this list used to be on https://github.com/sw-yx/uuid-list

## Desirable Properties

<a href="https://twitter.com/alexxubyte/status/1570430639836639239/photo/1"><img src="https://pbs.twimg.com/media/FctKVyQaIAINUk2?format=jpg&name=4096x4096" height=300 /> </a>

- extremely low chance of collision
- sorting
  - chronologically sortable
  - lexicographically/alphabetically sortable? (k-sortable?)
- speed
   - [completely random hurts perf](https://www.percona.com/blog/2019/11/22/uuids-are-popular-but-bad-for-performance-lets-discuss/)
   - another perf discussion on hn https://news.ycombinator.com/item?id=31721983
- string qualities
  - case insensitive
  - URL safe
  - 64 bits (instead of 128bits) or otherwise fixed length (bc of storage concerns)
- secure/good entropy
  - non-secure = `Math.random` + `Date.now`
  - cryptographically secure = CSPRNG - use `crypto` module in node.js
  - dont leak MAC address
- opacity
- inputs:
  - timestamp
  - string?
- no dependencies
- no need for coordination (among different clients generating uuid's)
	- recent discussion https://twitter.com/davidfowl/status/1563728728802619393
  
## Concepts

- A brief history of the UUID https://segment.com/blog/a-brief-history-of-the-uuid/
- How UUIDs are generated https://digitalbunker.dev/2020/09/30/understanding-how-uuids-are-generated/
- https://en.wikipedia.org/wiki/Universally_unique_identifier
- comparisons of UUID impls https://encore.dev/blog/go-1.18-generic-identifiers
- RFC: A Universally Unique IDentifier (UUID) URN Namespace - https://tools.ietf.org/html/rfc4122
- k-sorting http://ci.nii.ac.jp/naid/110002673489/ 
  - "We’re aiming to keep our k below 1 second, meaning that tweets posted within a second of one another will be within a second of one another in the id space too."
- guid alternatives https://www.softwareatscale.dev/p/guids-are-not-enough
- UUID and MySQL performance - [YouTube discussion](https://www.youtube.com/watch?v=Y5mWz4vK10A)
  - *MySQL is clustered by default on the primary key which means inserts have to be ordered, so UUID (random in nature) has bad performance in MySQL.*


**⚠️ Cutting edge** as of 2021-2022 the IETF is currently working on standardizing UUIDv6, v7, v8, and Max UUID: https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html (this URL may break)


## Simple UID Impls

- grab n go a single ID: https://www.uuidgenerator.net/
- browser built in: `[window.crypto.randomUUID()](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID) // 36b8f84d-df4e-4d49-b662-bcde71a8764f`
	- available on [Bun]([url](https://github.com/oven-sh/bun-types/blob/master/crypto.d.ts#L3627)), [Deno]([url](https://deno.land/std@0.151.0/uuid/v5.ts?s=validate)), [Nodejs]([url](https://nodejs.org/api/crypto.html#cryptorandomuuidoptions))
- super simple dumb unique id function
  ```js
  function id () {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
  ```
- simple uuid function
  ```js
  // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
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
  - https://github.com/ai/nanoid A tiny (108 bytes), secure, URL-friendly, unique string ID generator for JavaScript. https://zelark.github.io/nano-id-cc/  [Comparison vs uuid](https://blog.bitsrc.io/why-is-nanoid-replacing-uuid-1b5100e62ed2)
    
    ```js
    import { nanoid } from 'nanoid'
    model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
    ```
  - A maintained ulid generator in Node https://www.npmjs.com/package/ulidx
  - Faster nanoid generator https://github.com/rustq/napi-nanoid
  - Yet another random ID generator https://www.npmjs.com/package/hyperid

### JS UUID/v4

- uuid/v4:
  - [as of Node v14.17](https://nodejs.org/en/blog/release/v14.17.0/#uuid-support-in-the-crypto-module) you can generate UUID4's with the crypto module:
    ```js
    const { randomUUID } = require('crypto');
    console.log(randomUUID());
    // 'aa7c91a1-f8fc-4339-b9db-f93fc7233429'
    ```
  - https://github.com/lukeed/uuid
  - https://github.com/uuidjs/uuid
    ```js
    import { v4 as uuidv4 } from 'uuid';
    uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    ```

## Major UUIDs

Much of this list derives from the ongoing UUIDv6 IETF draft: https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-04.html (HN: https://news.ycombinator.com/item?id=31715119)

- Twitter Snowflake (2010-2014) https://blog.twitter.com/engineering/en_us/a/2010/announcing-snowflake.html
  - created by [Twitter, used at Discord/Instagram](https://en.wikipedia.org/wiki/Snowflake_ID)
	- 64 bits - time sortable, with machine ID ([may be PII](https://twitter.com/osterman/status/1563740738684620800?s=20&t=1EW4Du5AJ9aLBzE7C1vNng)) 
	- Impl: https://github.com/RobThree/IdGen
- Universally Unique Lexicographically Sortable Identifier - [[ULID](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#ULID)] by A. Feerasta[](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#section-1-6.1.1)  
	- ulid's https://github.com/ulid/spec ([instagram](http://instagram-engineering.tumblr.com/post/10853187575/sharding-ids-at-instagram), [firebase](https://firebase.googleblog.com/2015/02/the-2120-ways-to-ensure-unique_68.html))
	- C#/.Net impl https://github.com/Cysharp/Ulid
  - https://github.com/ulid/spec ([security concern](https://news.ycombinator.com/item?id=25871981))
  - UUID can be suboptimal for many use-cases because:
    - It isn't the most character efficient way of encoding 128 bits of randomness
    - UUID v1/v2 is impractical in many environments, as it requires access to a unique, stable MAC address
    - UUID v3/v5 requires a unique seed and produces randomly distributed IDs, which can cause fragmentation in many data structures
    - UUID v4 provides no other information than randomness which can cause fragmentation in many data structures
  - Features
    - 128-bit compatibility with UUID
    - 1.21e+24 unique ULIDs per millisecond
    - Lexicographically sortable!
    - Canonically encoded as a 26 character string, as opposed to the 36 character UUID
    - Uses Crockford's base32 for better efficiency and readability (5 bits per character)
    - Case insensitive
    - No special characters (URL safe)
    - Monotonic sort order (correctly detects and handles the same millisecond)
- [[LexicalUUID](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#LexicalUUID)] by Twitter[](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#section-1-6.2.1)
- [[Snowflake](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#Snowflake)] by Twitter[](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#section-1-6.3.1)
- [[Flake](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#Flake)] by Boundary[](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#section-1-6.4.1)
- [[ShardingID](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#ShardingID)] by Instagram[](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#section-1-6.5.1)
- [[KSUID](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#KSUID)] by Segment[](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#section-1-6.6.1)
  - KSUID is for K-Sortable Unique IDentifier. It is a kind of globally unique identifier similar to a RFC 4122 UUID, built from the ground-up to be "naturally" sorted by generation timestamp without any special type-aware logic. In short, running a set of KSUIDs through the UNIX sort command will result in a list ordered by generation time.
  - WARNING: the string encoding of KSUID uses Base-62 encoding, and so has both uppercase and lowercase letters; this means depending on your string sorting, you might sort the identifiers differently - i.e. we lose our requirement for sortability depending on the system. For instance, Postgres sorts lowercase before uppercase, whereas most algorithms sort uppercase before lowercase, which could lead to some very nasty & hard-to-identity bugs. (It's worth noting that this impacts any encoding scheme which uses both upper and lower case letters, so it isn't just limited to KSUID) https://encore.dev/blog/go-1.18-generic-identifiers
- C4 ID's http://www.cccc.io/
	- Universally Unique － Universally Consistent - without communicating
	- They are better for identification then filenames, URLs, and UUIDs. C4 IDs are an encoding of a SHA-512 hash that is shorter and more ergonomic than hex and yet packed with features.
	- **Identification**. Unique for different files. The same for identical files. A single ID for any number of files. Anyone can produce an ID. Not effected by filename. Not effected by time. Internet not required. Eliminates duplication. Files can be linked indelibly. Indelible Metadata.
  - **Ergonomics** Starts with 'c4', and is 90 characters long. Double click always selects the entire ID. No special characters. URL and Filename safe. Easy to recognize in any context. 64 bytes compressed. Regex: c4[1-9A-HJ-NP-Za-km-z]{88} Full text search friendly. Easy to compare visually. 7 Matching digits in a row is 1 in 2.2 trillion.
  - **Security** Cannot be forged. Cannot be guessed. Does not leak information. Cryptographically secure. Base 58 encoded SHA-512
-   [[Elasticflake](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#Elasticflake)] by P. Pearcy[](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#section-1-6.7.1)    
-   [[FlakeID](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#FlakeID)] by T. Pawlak[](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#section-1-6.8.1)
-   [[Sonyflake](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#Sonyflake)] by Sony[](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#section-1-6.9.1)
-   [[orderedUuid](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#orderedUuid)] by IT. Cabrera[](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#section-1-6.10.1)
-   [[COMBGUID](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#COMBGUID)] by R. Tallent[](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#section-1-6.11.1)
-   [[SID](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#SID)] by A. Chilton[](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#section-1-6.12.1)
-   [[pushID](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#pushID)] by Google[](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#section-1-6.13.1)
-   [[XID](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#XID)] by O. Poitrey[](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#section-1-6.14.1)
-   [[ObjectID](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#ObjectID)] by MongoDB[](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#section-1-6.15.1)  
-   [[CUID](https://www.ietf.org/id/draft-peabody-dispatch-new-uuid-format-03.html#CUID)] by E. Elliott




## Lesser Known UUIDs

- Timeflake https://github.com/anthonynsimon/timeflake ([not for security](https://news.ycombinator.com/item?id=25872009))
  -  Timeflake is a 128-bit, roughly-ordered, URL-safe UUID. Inspired by Twitter's Snowflake, Instagram's ID and Firebase's PushID.
  - **Fast.** Roughly ordered (K-sortable), incremental timestamp in most significant bits enables faster indexing and less fragmentation on database indices (vs UUID v1/v4).
  - **Unique enough.** With 1.2e+24 unique timeflakes per millisecond, even if you're creating 50 million of them *per millisecond* the chance of a collision is still 1 in a billion. You're likely to see a collision when creating 1.3e+12 (one trillion three hundred billion) timeflakes per millisecond.*
  - **Efficient.** 128 bits are used to encode a timestamp in milliseconds (48 bits) and a cryptographically generated random number (80 bits).
  - **Flexible.** Out of the box encodings in 128-bit unsigned int, hex, URL-safe base62 and raw bytes. Fully compatible with uuid.UUID.
- FUUID https://github.com/kpdemetriou/fuuid UUIDs are compatible with regular UUIDs but are naturally ordered by generation time, collision-free and support succinct representations such as raw binary and base58-encoded strings.
  - Warning - not mature https://news.ycombinator.com/item?id=27030088
- NewId: https://github.com/phatboyg/NewId
	- A sequential id generator that works across nodes with no collisions
	- an embedded unique ID generator that produces 128 bit (16 bytes) sequential IDs. It is inspired from snowflake and flake
- TUID https://github.com/tanglebones/pg_tuid 
  - "A TUID is like a UUID (it conforms to UUID v4) but instead of being fully random (except for 6 bits for the version) it is prefixed with the time since epoch in microseconds."
  - Note that the JS implementation uses `Math.random`, making it less secure than UUID which uses the crypto module. [More info from @nosovk and @kurtextrem]([url](https://github.com/sw-yx/brain/pull/36)).
- XID https://github.com/rs/xid
  - https://encore.dev/blog/go-1.18-generic-identifiers
- Internal Google ID system
	- "IIRC internally google used an ID for logging events that was a combo of Mac address and microsecond time. There might have been something in there for cpuid. Leaked data but was internal only so not a problem." - [Joe Beda](https://twitter.com/jbeda/status/1563729743224373249?s=20&t=1EW4Du5AJ9aLBzE7C1vNng)
- MongoDB ObjectID: https://www.mongodb.com/blog/post/generating-globally-unique-identifiers-for-use-with-mongodb
   

## Misc

Time based OTP https://github.com/susam/mintotp