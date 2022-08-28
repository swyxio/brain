
# 9 Ways to Pitch DevTools

pitch for the small
pitch for the very large


late swyx notes: on pricing
- cost factor, 
- time to market
- maybe talk about roadmap



example with lightstep - otel required rewrite - only for big teams



- Fast (1 sentence)
	- benchmarks/social proof - "at", "since", "during",  "behind"
	- tagline - x without y, mission - "with", "without", "in ? secs"
	- analogies - "X for Y", "from"
- Medium (1 paragraph)
	- storytelling/storybrand
	- nerd snipe - magic demo with "wow"
	- category, 2x2 map
Deep (?)
	- inevitability/opportunity
	- argument by requirements
	- sum of the parts/how it works

---

3 dimensions
- absolutes
- objective
- relative

---

- Storytelling - telling relatable personal/origin story
	- https://twitter.com/nathanbaugh27/status/1550822914823491584?s=21&t=__V2E370IrSJL1RpBm-WNw
	- trungtphan "public narrative" https://twitter.com/trungtphan/status/1362787679696416772
	- sequoia pitch deck? https://twitter.com/thealexbanks/status/1551562534926241793?s=21&t=T4AzbDwvl03vkxuFDQ3FYQ
- Nerd snipe - magic solution to an important problem
    -   a weaponised form of pitching-by-usecases. Takes 3 steps:
    -   Engage them with a familiar hard problem
        -   youtube [video processing](https://www.youtube.com/watch?v=aFLU6T15seY)/[google build system](https://www.youtube.com/watch?v=q0KGYwNbf-0)
        -   uber driver onboarding/checkr learning path
        -   [amazon one click buy example](https://www.youtube.com/watch?v=-QqIyICyXbU)
        -   [how hard it is to do serverless retries](https://aws.amazon.com/blogs/compute/using-amazon-sqs-dead-letter-queues-to-replay-messages/)
    -   Their solution: write the logic, provision the scheduler, maintain the state machine, instrument logs, add queues, add DLQs, make it secure (isolated and encrypted)
    -   Our solution: what if you could write the whole thing end to end in 1 function, with everything provisioned for you
- Focus on how it works/sum of the parts
    
    -   no fluff, no benefits, no features, no usecases, just factual presentation of raw building blocks for people who sling building blocks all day. Let them figure out what to do with us - show, don’t tell.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/07f971b9-fa6c-4d6c-a700-5a9d72e22e8d/Untitled.png)
    
    -   Temporal System combines database, queues, timer/scheduler, rate limiting gateway, workers, service discovery, event sourcing schema/state machine, and a client SDK to work with all of that. UI, CLI for control and observability. How much of this would you have to write/are your teams managing today?
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c2ca6215-0898-4740-8e09-f746ba8ffe6d/Untitled.png)
        
    -   There are 3 major moving parts - Temporal Server, Workers, and Clients.
        
    
    ```
      ![Untitled](<https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ffb9fdf6-594e-4aed-94b4-d067fe6be32c/Untitled.png>)
    ```
- Argument by Requirements
    -   Geoffrey Moore template: _For (target customer) who (statement of the need or opportunity), the (product name) is a (product category) that (statement of key benefit – that is, compelling reason to buy). Unlike (competitive alternative) our product (primary statement of differentiation)._
        
        -   For **platform teams** who **support exponentially growing microservices and developers**, Temporal is a {category_name} that **greatly improves reliability, scalability, observability, and developer velocity by design**. Unlike **Argo, Step Functions, and Airflow**, our product offers idiomatic SDKs for writing “workflows as code”, abstracting over the hard parts of event sourcing and letting regular developers ship scalable services confidently _without being distributed systems experts._
    -   Focus on system design requirements [](https://www.swyx.io/why-temporal/)[https://www.swyx.io/why-temporal/](https://www.swyx.io/why-temporal/)
        
        The most valuable, mission-critical workloads in any software company are long-running and tie together multiple services.
        
        -   **Because this work relies on unreliable networks and systems**:
            -   You want to standardize timeouts and retries.
            -   You want offer "reliability on rails" to every team.
        -   **Because this work is so important**:
            -   You must never drop any work.
            -   You must log all progress.
        -   **Because this work is complex**:
            -   You want to easily model dynamic asynchronous logic...
            -   ...and reuse, test, version and migrate it.
        
        **Finally, you want all this to scale**. The same programming model going from small usecases to millions of users without re-platforming. Temporal is the best way to do all this — by writing idiomatic code known as **"workflows"**.
        - manifestos
	        - http://oldblog.antirez.com/post/redis-manifesto.html
	        - https://principles.planetscale.com/
					- 12 factor app
					- jamstack
					- https://principledgraphql.com/
- Analogies (useful for nontechnical users)
    
    -   Lean on existing familiarity with other tools as a cognitive shortcut - We are “X for Y”. Downside - all analogies are flawed/incomplete. But - at least we grab attention fast.
    -   “React for the Backend” [works](https://changelog.com/jsparty/208) [very](https://docs.google.com/presentation/d/1AarTDS7Xf6twyPk45LhUWAY70KPKH1Vb6DFj4IZ-Nt0/edit) [well](https://docs.google.com/presentation/d/1sJSqNy-t-kVxzrWlqMTp_03nI7Zo8Znr7k0f0C6L9ig/edit) in JavaScript messaging (multiple confs/podcasters reaching out about it)
    -   “autosaving Google Docs” analogy
    -   “Evernote for apps” → app can leave notes for other apps (from Charles)
    -   Sidekiq, Bull.js, RabbitMQ on steroids
    -   “If-This-Then-That for Developers”. “Zapier for Developers”
    -   The one stateful service that lets everything else be stateless.
    -   “Distributed system in a box”, “we hired all the top distsys engineers so you don’t have to”
    -   Containers → Container Orchestration, Microservice → Microservice Orchestration
    -   “Return to Mainframe”
- 2 x 2 Market Map
    -   Help draw comparisons with and distinguish from familiar solutions (very frequently asked) by situating it within axes that users will care about (pick 2):
        -   Monolithic vs Distributed
        -   Simple/In Memory vs Transactional/Event Sourced
        -   Workflows as YAML/JSON vs Workflows as Code (aka Low Code vs High Code)
        -   No logging/tracing vs Fully Observable
        -   Simple/Unencrypted vs Securable/Auditable
        -   Handrolled vs Prebuilt
        -   Open Source vs Proprietary
    -   other inspirations
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d333da29-c888-405a-94ea-ef2abf2f70ac/Untitled.png)
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/309499e0-a743-433c-8c1c-7fee6126a783/Untitled.png)
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/23b72825-1824-425e-b3b3-88d1011f4c50/Untitled.png)
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f149b819-415b-4b72-a2d3-5b1475ae1051/Untitled.png)
- Social Proof
    
    -   Inspired by Cialdini’s [Principles of influence](https://cxl.com/blog/cialdinis-principles-persuasion/)
        1.  Reciprocity
        2.  Commitment/consistency (used case by case)
        3.  [Social proof](https://cxl.com/blog/is-social-proof-really-that-important/);
            -   Emphasis on trends/historical positioning
        4.  Authority;
        5.  Liking (brand
        6.  Scarcity (use for events)
        7.  Unity ([his newest addition](https://cxl.com/blog/cialdini-unity/))
    
    1.  Case Studies
    2.  Meetup talks
    3.  Job listings
    4.  Authority endorsements
        1.  Mitchell, Bob Muglia
    5.  Founder background/ Project origin story
        1.  specific, authentic storytelling with brand names
    6.  Team background
        1.  cumulative years of distsys experience
    7.  Investors
        1.  trendline: 0-unicorn in 2 years
- Size of Opportunity - Historical Inevitability
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/39a86cd2-8bec-4c7e-ab90-ec8eb0f014e1/Untitled.png)
    
    [](https://excalidraw.com/#json=6451456521535488,4kbxX3bXx1cralmPV0E7kQ)[https://excalidraw.com/#json=6451456521535488,4kbxX3bXx1cralmPV0E7kQ](https://excalidraw.com/#json=6451456521535488,4kbxX3bXx1cralmPV0E7kQ)
    
    this is all extremely tentative and we can debate what the higher layers are
    
    but most users just see us as a “retries and timeouts” framework because we only tell them we are about Reliability
    
    to drive deeper usage + distinguish ourselves from the rest of the pack, need to transcend and open their minds as to increasingly larger parts of system design we can handle


## misc ideas

-   Rhetoric - Ethos, Logos, Pathos
- https://hooshmand.net/one-sentence-persuasion/ People will do anything for those who encourage their dreams, justify their failures, allay their fears, confirm their suspicions and help them throw rocks at their enemies.
- https://www.ivp.com/saas-fundraising-handbook/#anchor-72
