# Moving to Obsidian as a Public Second Brain

I've gone through many versions of notetaking systems in the past decade, from literal "in memory" storage, to [writing cheatsheets](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet),  to blogging everything publicly, to storing private notes in OneNote, then SimpleNote, then Notion. For focused topics, I have a long history of making [markdown repos on GitHub accumulating thousands of stars](https://publish.obsidian.md/swyx/README#Rollup+of+my+Lists). I've also considered [Evernote](https://evernote.com/), [Joplin](https://joplinapp.org/) and [Roam](https://roamresearch.com/) and its less culty competitors [Foam](https://foambubble.github.io/foam/) and [Athens](https://www.athensresearch.org/).

[Two months ago](https://twitter.com/swyxio/status/1465976030477230080) I moved my notes to [Obsidian](https://obsidian.md/), and I've been fairly happy with the result. Time for a good ole experience report!

> You can check out the repo, [sw-yx/brain](https://github.com/sw-yx/brain) or the published Obsidian site [https://publish.obsidian.md/swyx/](https://publish.obsidian.md/swyx/)

## Why a -Public- Second Brain?

I'll assume you already know [the benefits of Building a Second Brain](https://www.swyx.io/tiago-forte-second-brain) - I was a [mentor for the course](https://www.listennotes.com/podcasts/the-swyx-mixtape/second-brain-1-the-capture-UQ7nt-6fr5c/) if you need a quick intro. Here my focus is on convincing you why your S.B. should be *public*:

- [Learning in Public](https://www.swyx.io/learn-in-public/) increases your [Luck Surface Area](https://www.swyx.io/create-luck/#luck-surface-area)
- Creating reusable/referenceable [Open Source Knowledge](https://youtu.be/XoATf7xGoUY) helps you compound knowledge work + [save keystrokes](https://www.hanselman.com/blog/do-they-deserve-the-gift-of-your-keystrokes) when helping people
- Having a [Digital Garden](https://www.swyx.io/digital-garden-tos) to grow drafts in public with lower expectations than blog/social media is inspiring to others - aka [Working with the Garage Door Up](https://notes.andymatuschak.org/Work_with_the_garage_door_up)
- One "monorepo" for all your notes frees you/your readers from having to remember where you put your notes + makes related notes more discoverable 
	- aka [Personal Content Warehouse](https://twitter.com/swyx/status/1337519894644940802)?

## My Criteria for Second Brain Tooling

As I reached the limits of SimpleNote/Notion/GitHub, I thought about these factors for my next notetaking tool:

- **Markdown based**: Friction slows down your speed of thought. Unacceptable.
	- **If your editor gets in the way then you are paying cognitive overhead.** Notion's blocks are great until you try to select text or move around blocks and it doesn't do what you want.
	- **If your editor uses proprietary data formats it will be hard to migrate/render**. If you do this right your notes should outlive Notion. And if you wish to render notes publicly from Notion, keep in mind [even expert programmers face a lot of hurdles](https://twitter.com/adamwathan/status/1483523307651670020) because Notion is not an API first company (dev experience will always be a second class citizen). Markdown is Lindy.
	- (Nice to have) WYSIWYG Markdown writing experience like [Typora](https://typora.io/).
- **Git**: I'm inherently interested in explorable histories of ideas (for [history surfing](https://github.com/pomber/git-history)/idea archaeology), and Git is the only version control system worth considering these days.
- **Mobile app**: Again, a friction point - I have ideas in the shower, on a walk, or otherwise away from the computer, so I need a mobile app. To some extent, if I use Markdown, then that can be a [Narrow Waist](https://www.swyx.io/narrow-waists) interface where I can use apps that speak Markdown and Git, like [GitJournal](https://blog.dendron.so/notes/fDCVPEo3guCFWPdxokXHU/#gitjournal).
- **Bidirectional Linking**: truly the feature popularized by Roam - I think networked thought is [ideal](https://twitter.com/swyx/status/1337519894644940802) and [some of the ways that people use it](https://www.nateliason.com/blog/roam) are truly mindblowing (I'm not personally there yet)
	- (Nice to have) Graph visualization of links, although I have my doubts about how useful this is in practice
- **Publish with Search**: If you are Git and Markdown based, then GitHub does view and search fine, but the navigation, display and search experience could probably be improved with custom CSS, link previews, backlink lists, Table of Contents tracking, and so on.
- **(Nice to have) Image and File storage**: Being able to store arbitrary images and files freely without friction/consideration of cost would be nice, but in practice i'm so word- and resource-heavy that this has not actually come up as a pain point in the last 2 months

Notably lacking among these desirables is the idea that the notetaking service should be free. As a serious knowledge worker intent on making this work for the next 40-60 years of my life, I'm quite happy paying $5-20 a month for something that is going to last that I don't have to maintain myself.

These factors are why I chose [Obsidian](https://obsidian.md/), with [Obsidian Publish](https://obsidian.md/publish) (which is still relatively new and leaves some things to be desired).

I admit I was also influenced by Ezell and others in the [Coding Career Community](https://ezell.dev/brain/Ideas/How+to+Create+Value) who have been talking about Obsidian for over a year.

## Obsidian Tips

- **Use the [PARA system](https://fortelabs.co/blog/para/)**
	- It has the right level of simplicity and effectiveness out of any system I've tried, which has always spiraled out of control.
	- I'm very much not perfect at this (but nobody is). I'm much better at keeping A's and R's than P's, which I still tend to manage in my head.
- **Sync through iCloud and GitHub**
	- Obsidian has a great ecosystem of core and community plugins. Honestly the main one I get the most use out of is Obsidian Git, which I have set up to sync every 20 minutes.
	- For the mobile app, you have to use iCloud, which I finally bit the bullet and started paying for after ~10 years of ignoring the stupid iCloud nag.
- **Obsidian Publish**
	- You can customize the landing page, which I think is important for reader experience.
	- The search isn't fulltext search, so it leaves a lot to be desired.
	- You still have to manually publish changes, which feels weird.
	- You can also customize the CSS and JS, which I haven't yet but feels like an opportunity.

Overall, I'm the happiest I've ever been with my public notes so far and feel I've been both unblocked and more productive with Obsidian. Not all my notes are public, of course, so I still keep some stuff in Notion.