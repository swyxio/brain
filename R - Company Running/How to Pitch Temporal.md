# How to Pitch Temporal

## Ways to pitch Temporal

See separate doc [](https://www.notion.so/7-Ways-to-Pitch-Temporal-24be86b4acdf4170ac2edcbcc6eca115)[https://www.notion.so/swyx/7-Ways-to-Pitch-Temporal-24be86b4acdf4170ac2edcbcc6eca115](https://www.notion.so/swyx/7-Ways-to-Pitch-Temporal-24be86b4acdf4170ac2edcbcc6eca115)

**How people talk about Temporal in the wild**

-   [](https://www.reddit.com/r/golang/comments/rsxrhl/orchestration_engine_recommendations/)[https://www.reddit.com/r/golang/comments/rsxrhl/orchestration_engine_recommendations/](https://www.reddit.com/r/golang/comments/rsxrhl/orchestration_engine_recommendations/)
-   [](https://news.ycombinator.com/item?id=24214735)[https://news.ycombinator.com/item?id=24214735](https://news.ycombinator.com/item?id=24214735) (submitted by swyx!)
-   the kind of complicated problems Temporal makes go away: [](https://www.youtube.com/watch?v=q0KGYwNbf-0)[https://www.youtube.com/watch?v=q0KGYwNbf-0](https://www.youtube.com/watch?v=q0KGYwNbf-0)
-   For pitching orchestration and workflows, Maxim really likes [how the Camunda founder does it](https://www.youtube.com/watch?v=EegrVoPTRbQ)

## General Technical Audiences

-   1 sentence
    -   "Temporal is the open source microservices orchestration platform for running mission critical code at any scale."
-   30 second (from [Charles + Liang](https://temporaltechnologies.slack.com/archives/C025MMBNTEV/p1644359403801589))
    -   "Temporal is an open source platform that transparently manages software application state at scale, making it more reliable to run, more productive to evolve and easier to operate. Developers interact with Temporal entirely as code so it fits in your existing architecture, development and deployment decisions. Developed from over a decade of experience at Amazon, Google, Microsoft and Uber, Temporal is used in production by the world's most innovative companies like Snapchat, Netflix, Instacart and Stripe.”
-   2 minutes
    -   our landing page video [](https://www.youtube.com/watch?v=f-18XztyN6c)[https://www.youtube.com/watch?v=f-18XztyN6c](https://www.youtube.com/watch?v=f-18XztyN6c)
-   10 minutes
    -   [](https://www.youtube.com/watch?v=WRYozSljSpw)[https://www.youtube.com/watch?v=WRYozSljSpw](https://www.youtube.com/watch?v=WRYozSljSpw)
-   30 minutes [](https://www.youtube.com/watch?v=umsYzbDtj18)[https://www.youtube.com/watch?v=umsYzbDtj18](https://www.youtube.com/watch?v=umsYzbDtj18)
    -   3 min Intro
        -   Who are we/Origins of Temporal
        -   Temporal in 1 Slide
        -   Orchestration vs Choreography
    -   5 min Problems We Solve
        -   Resilience
            -   timeouts and retries
            -   worker outages & backpressure
            -   transactional updates
        -   Programming Model
        -   Observability
        -   Scalability
            -   scalable in _workers_
                -   load balancing
                -   service discovery
            -   scalable in _persistence_
                -   sharding
            -   scalable in _engineers_
                -   dynamic registration in SDK
        -   others: Testing, Security (DataConverter), Versioning, Archival, Task Routing, Replication
    -   10 min how does it work
        -   sequence diagram: workflow engine
        -   sequence diagram: task queues
        -   sequence diagram: task timers
        -   sequence diagram: ACID
        -   architecture diagram
            -   multiple hosts, multiple stores
            -   sharding
            -   membership, routing
            -   scalable task queues/"transactional outbox"
            -   elasticsearch
            -   batch operations eg "Terminate all flows which match this criteria started by $USER".
        -   CAP theorem - CP
            -   deterministic execution
            -   any part of system can go down
    -   5 min how we solve the stated problems vs Alternatives
        -   SDKs
        -   Temporal Web and Visibility API
        -   Scalability
            -   any part of the system can be scaled
        -   Alternatives
            -   Step Functions
            -   Airflow
            -   Camunda
    -   5 min Use cases and Case Studies
        -   Infrastructure Provisioning
        -   Distributed Transactions
        -   Data Pipelines
        -   Long Running Processes
        -   [temporal.io/usecases](http://temporal.io/usecases)
        -   Briefly mention case studies: Box, Checkr, Coinbase
    -   2 min Conclusions and Homework
        -   Temporal Cloud vs Self Hosting
        -   External Resources

## For People Already Familiar with Step Functions

## For People Already Familiar with BPMN

## For Enterprise architects