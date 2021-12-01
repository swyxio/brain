---
created: 2021-12-01 01:53
updated: 2021-12-01 01:59
---

> This list used to be at <https://github.com/sw-yx/cli-cheatsheet/>

# cli-cheatsheet

helpful libraries and resources for _building_ Node.js CLIs. Not [a list of CLIs](https://github.com/agarrharr/awesome-cli-apps).

I put together a 90 minute Egghead.io [Course](https://egghead.io/courses/build-custom-cli-tooling-with-oclif-and-typescript?af=95qfq1) and [Workshop](https://github.com/sw-yx/egghead-cli-workshop/) on how to put these tools together, if you like video learning. I also make some money if you watch those videos if you want to help :)

## CLI Design Thinking

- **12 Factor CLI Apps** ([Blogpost](https://medium.com/@jdxcode/12-factor-cli-apps-dd3c227a0e46), [Talk](https://www.youtube.com/watch?v=Izx3-KSuaM8)): Jeff Dickey's list of requirements for UX.

- **Heroku CLI Style Guide** ([Guide](https://devcenter.heroku.com/articles/cli-style-guide), [Talk](https://www.youtube.com/watch?v=PHiDG-_XoRk), [Talk](https://www.youtube.com/watch?v=a6ud5MkVN_s)): Heroku's CLI Style Guide.

- **CLI Guidelines** ([Guide](https://clig.dev/), [Source](https://github.com/cli-guidelines/cli-guidelines)): An open-source guide to help you write better command-line programs, taking traditional UNIX principles and updating them for the modern day.

- **[The Poetics of CLI Command Names](https://smallstep.com/blog/the-poetics-of-cli-command-names/)**: Command naming anti-patterns and excellent names

- **CLI State Machines** ([Gist](https://gist.github.com/sw-yx/3af1e264b8460af8897768045b2c229f)): My little thoughts on state management

- **Add a dry run mode for expensive commands** like [gatsby dry-run](https://github.com/gatsbyjs/gatsby/issues/16384)

- [The Art of Command Line](https://github.com/jlevy/the-art-of-command-line/blob/master/README.md)

## Frameworks

- [**Commander**](https://github.com/tj/commander.js/): Built by TJ, used in `create-react-app`, `vue-cli`, and many others. Key feature: pluggability. [**Vorpal**](https://github.com/dthree/vorpal) is another framework inspired by Commander and is seeking maintainers
- [**Oclif**](https://github.com/oclif/oclif): Built by Heroku, used in [Heroku](https://github.com/heroku/cli) and [Salesforce](https://developer.salesforce.com/tools/sfdxcli) CLI's. Key feature: pluggability.
- [**Sade**](https://github.com/lukeed/sade): Built by lukeed, used in [tsdx](https://github.com/palmerhq/tsdx). Key feature: lightweight?
- [**Gluegun**](https://github.com/infinitered/gluegun): Built by Infinite Red, used in [Ignite](https://github.com/infinitered/ignite) and [AWS Amplify](https://github.com/aws-amplify/amplify-cli). Key feature: templating/filesystem
- [**Ink**](https://github.com/vadimdemedes/ink): Built by Vadim & Sindre. Key Feature: React Components and Yoga Layout. See also [import-jsx](https://npm.im/import-jsx)
- [**Scritch**](https://github.com/jamiebuilds/scritch): Built by Jamie, used at Eventbrite. Key Feature: compose multiple scripts regardless of language into one CLI.
- [**Yargs**](https://github.com/yargs/yargs): Built by [bcoe](https://github.com/bcoe), used by `webpack-cli`, `mocha`, `react-native`, `nyc`, and 14,343 other modules.
- [**arg**](https://github.com/vercel/arg): Built by [Vercel](https://github.com/vercel), used by `vercel`, `ncc`, `micro`, `serve`, and many others. Key Feature: [tiny](https://packagephobia.now.sh/result?p=arg)
- [**cac**](https://github.com/cacjs/cac): Built by [Egoist](https://github.com/egoist), used by `create-nuxt-app` and many others.
- Pastel for React-ink - used in Twilio <https://www.twilio.com/blog/building-conference-cli-in-react>

> New: see CLUI <https://blog.repl.it/clui>

Inspiration from other languages - the <http://charm.sh/> universe.

## Utility Libraries

### Performance Optimization

- [@babel/plugin-transform-modules-commonjs](https://github.com/react-native-community/cli/pull/152/) ([twitter tip](https://mobile.twitter.com/thymikee/status/1092885415365877760))
- [@salesforce/lazy-require](https://www.npmjs.com/package/@salesforce/lazy-require)
- [v8-compile-cache](https://github.com/zertosh/v8-compile-cache)

For performance logging, you can try `process.htime()` instead of `console.time()` (altho the latter uses the former under the hood)

### Update Management/Nagging

- <https://github.com/yeoman/update-notifier#readme>

### Context/Config

**Context from Git/CI**

- <https://www.npmjs.com/package/env-ci>
- <https://www.npmjs.com/package/git-repo-info>
- <http://npm.im/parse-git-config> - Parse .git/config into a JavaScript object. sync or async.
- <https://www.npmjs.com/package/parse-gitignore>
- <https://www.npmjs.com/package/git-remote-origin-url>
- <https://www.npmjs.com/package/parse-github-url>
- <https://www.npmjs.com/package/ci-info>
- <https://www.npmjs.com/package/is-docker>

**Context from filesystem/PATH**

- <https://github.com/npm/node-which> Like running `which`: Find the first instance of an executable in the PATH.
- <https://github.com/szwacz/fs-jetpack> filesystem access
- <https://github.com/sindresorhus/find-up> search up the parents path for where files are located
- <https://www.npmjs.com/package/resolve> to simulate Node `require.resolve`
  - <https://www.npmjs.com/package/relative> generate relative filepaths e.g. `relative('a/b/c', 'a/d') // ../../d`
- if dealing with yarn workspaces: <https://www.npmjs.com/package/find-yarn-workspace-root>
- File watching
  - <https://www.npmjs.com/package/cpx> (copying with watch functionality)
  - <https://www.npmjs.com/package/chokidar> (recommended)
  - <https://www.npmjs.com/package/sane>
  - [Sapper Watcher](https://github.com/sveltejs/sapper/blob/845c54bf8fa470756d5670408a112596a04ba9cc/src/api/dev.ts)
    - <https://www.npmjs.com/package/cheap-watch>
  - [VSCode's per-platform watchers](https://github.com/Microsoft/vscode/tree/61587049cb6f0801d8f1c6d6a612c7ab71fc7113/src/vs/workbench/services/files/node/watcher)
- File finding
  - <https://www.npmjs.com/package/glob> (dominant)
  - <https://www.npmjs.com/package/glob-fs>
  - <https://www.npmjs.com/package/file-regex>
  - <https://github.com/pillarjs/path-to-regexp> Turn a path string such as /user/:name into a regular expression.
- Dependency resolution
  - <https://www.npmjs.com/package/precinct>

**Config validation**

- <https://github.com/hapijs/joi> used by React Native CLI for validation
- yup
- validate.js
- json-schema <https://simonplend.com/how-can-you-handle-request-validation-in-your-express-based-api/>
- <https://ajv.js.org/> <https://twitter.com/ArrowoodTech/status/1324424901458120704>
- <https://www.npmjs.com/package/jest-validate> from Jest but not Jest specific

**Loading config from json, rc file, etc***

- <https://github.com/DavidWells/configorama>
- <https://github.com/davidtheclark/cosmiconfig> Find and load configuration from a package.json property, rc file, or CommonJS module. [Check `searchPaths` to implement XDG spec compliance.](https://github.com/davidtheclark/cosmiconfig/issues/152)
  - replaces <https://github.com/dominictarr/rc>, an old rc-file finder with some different design choices

_don't need but nice to know: <https://www.npmjs.com/package/read-package-json>_

> Beware the race condition when you check if file exists and then open it. the file could be deleted in betwee. instead, just open the file and handle the error if it doesnt exist.

**Loading/Storing config from a persistent store**

> ⚠️ Be aware of [the XDG spec](https://standards.freedesktop.org/basedir-spec/basedir-spec-latest.html). Sindre's libraries use [`env-paths`](https://github.com/sindresorhus/env-paths#pathsconfig) to get paths compliant with this.

- <https://github.com/sindresorhus/conf> simple config storing (maybe try [conf-cli](https://github.com/natzcam/conf-cli) to manipulate if needed) the successor to [configstore](https://github.com/sindresorhus/conf#how-is-this-different-from-configstore)
- <https://github.com/jonschlinkert/data-store> conf like datastore but in the shclinkerverse

### 🌟Input

- <https://npm.im/enquirer> (recommended)
  - combine with <https://www.npmjs.com/package/fuzzy> for fuzzy matching
- <https://npm.im/inquirer>
- <https://npm.im/prompts>
- <https://npm.im/email-prompt>

**Stdin Parsing**

- <https://npm.im/get-stdin> (eg when you want to receive pipe results `cat mydata.json | mycli`)

**Argument Parsing**

- <https://npm.im/meow>
- <https://npm.im/arg>
- <https://npm.im/minimist> (hasn't been updated in a while though)
  - <https://www.npmjs.com/package/cliclopts>

> ⚠️ Your framework may come with parsing built in

**Input/Stdin/Argument Processing**

make sure to also normalize inputted stuff before you compare

- `path.resolve(str1) === path.resolve(str2)`
- <https://npm.im/normalize-url>
- <https://github.com/sindresorhus/compare-urls>

### 🌟Processing

**Command execution**

- <https://npm.im/shelljs> - xplatform shell command execution
- <https://npm.im/cross-spawn> (also a cross platform solution to node's spawn and spawnSync)
- <https://npm.im/execa> (recommended)
  - execa best practices:
    - use `preferLocal: true`
    - try not to mix streams and promises. use `stdio: 'inherit'` to pipe stdout/stderr up
    - [avoid `shell: true` unless absolutely necessary](https://github.com/sindresorhus/execa#shell)

Remember Windows users for cross-platform nodejs ([Guide](https://github.com/ehmicky/cross-platform-node-guide/blob/master/docs/4_terminal/shell.md#cmdexe)). e.g. dont execute pkg.json or shell commands with single quotes instead of escaped double quotes

Sometimes processes can spawn processes. This is troublesome for watch/reload features. Kill them all with [`tree-kill`](https://www.npmjs.com/package/tree-kill).

You'll probably also use these in conjunction with port monitors (e.g. the process you're working with opens a port, like CRA for [Netlify Dev](https://github.com/netlify/netlify-dev-plugin/)):

- <https://github.com/Rich-Harris/port-authority#readme>
- <https://github.com/mikeal/getport#readme>
- <https://github.com/sindresorhus/get-port#readme>

If child_processes are going to be a key part of your CLI, be sure to [read the docs](https://nodejs.org/api/child_process.html) and [this guide](https://www.freecodecamp.org/news/node-js-child-processes-everything-you-need-to-know-e69498fe970a/) to be aware of the API.

You may also want to poll for conditions to be true to execute async processes:

- <https://www.npmjs.com/package/p-wait-for>

**Spinners/Loaders**

- <https://npm.im/ora> (recommended)
- <https://www.npmjs.com/package/cli-ux#cliaction>
- <http://npm.im/log-update> Log by overwriting the previous output in the terminal. Useful for rendering progress bars, animations, etc.
- <https://www.npmjs.com/package/cli-spinners>
- <https://npm.im/listr> for progress lists
- <https://www.npmjs.com/package/progress-estimator> remembers previous execution times, estimates them next time

**Templating**

- <https://www.npmjs.com/package/copy-template-dir>
- <https://www.npmjs.com/package/consolidate>
- <https://www.npmjs.com/package/ejs> (Gluegun has this built in)
- <https://www.npmjs.com/package/pupa> (sindresorhus' templating)
- <https://www.npmjs.com/package/replace-string> (string replace with multiple matches)
- <https://www.npmjs.com/package/cpy> (copy files using streams)
- Mustache and handlebars <https://www.npmjs.com/package/handlebars>
- Liquid templating (from Shopify) <https://github.com/Shopify/liquid>
- <https://github.com/amwmedia/plop>: "basically glue code between inquirer prompts and handlebar templates"
- Angular Schematics <https://angular.io/guide/schematics>
- Yeoman generator <https://yeoman.io/>
  - specifically you can just use the filesystem commands <https://yeoman.io/authoring/file-system.html>

**Temp folders**

- <https://www.npmjs.com/package/tempy> (create unique temp directories)
- <https://www.npmjs.com/package/tmp> (very popular. can remove on exit)

### 🌟Output

**Files**

- ensure directory exists: <https://stackoverflow.com/questions/13542667/create-directory-when-writing-to-file-in-node-js>
  - simple replacement for `fs.existsSync(path.resolve/path.join)` <http://npm.im/path-exists>
  - also <https://www.npmjs.com/package/make-dir>
- encrypt files: <https://medium.com/@brandonstilson/lets-encrypt-files-with-node-85037bea8c0e>
- writing large files: <https://www.npmjs.com/package/write-file-atomic>
- navigating node_modules using the same package npm uses: <https://github.com/npm/arborist/>

**Icons & Coloring**

- <https://npm.im/chalk> (recommended - also see [Related Packages](https://github.com/chalk/chalk#related))
- <https://npm.im/kleur>
- <https://npm.im/cfonts>
- <https://npm.im/tinycolor2> (some interesting APIs, handy with React Ink)
- <https://npm.im/log-symbols> (colored xplatform unicode symbols for success/info/warning/error)
- <https://npm.im/figures> (Unicode symbols with Windows CMD fallbacks)
- <https://npm.im/gradient-string> VERY nice color gradient text

Note that you may want to offer the option to [FORCE_COLOR](https://twitter.com/swyx/status/1166431071711498240) in CI logging.

**PrettyPrinting**

- <https://npm.im/pretty-bytes>
- <https://www.npmjs.com/package/prettyjson>
- <https://www.npmjs.com/package/concordance>

there are also react based renderers

- react ink
- <https://github.com/Yomguithereal/react-blessed>

**Boxing**

- <https://www.npmjs.com/package/term-size> Get Terminal Size
- <https://npm.im/boxen>
- <https://www.npmjs.com/package/sign-bunny>

**Tables**

- <https://www.npmjs.com/package/cli-table>
- <https://www.npmjs.com/package/cli-ux#clitable>
- <https://www.npmjs.com/package/ascii-table>

**Banners**

- <https://github.com/patorjk/figlet.js> - helps sets width dependent on terminal size

**Debug Logging**

- <https://www.npmjs.com/package/debug> (note that you might not need this, Node's inbuilt [`util.debuglog`](https://nodejs.org/api/util.html#util_util_debuglog_section) does a lot of the same h/t [@stefanjudis](https://twitter.com/stefanjudis/status/1148232306735362056))
- <https://github.com/winstonjs/winston>
- <https://github.com/pinojs/pino>
- <https://github.com/klaussinani/signale>
- <https://github.com/pimterry/loglevel>
- <https://github.com/log4js-node/log4js-node>
- <https://github.com/nuxt/consola>
- <https://github.com/baryon/tracer>
- <https://github.com/trentm/node-bunyan>
- [React Native CLI has very simple logging](https://github.com/react-native-community/cli/blob/3f116721eb30071b04a2957f8bd02a81954699de/packages/tools/src/logger.ts) with verbose mode you can still with just chalk dependency
- In Github Issue Templates, tell your users to report versions: <https://www.npmjs.com/package/envinfo>

You often also find specialized logger tools for each domain, like [@dazn/lambda-powertools-logger](https://www.npmjs.com/package/@dazn/lambda-powertools-logger) for AWS Lambda, but at their core they all support the core pattern of Log Levels `DEBUG`, `INFO`, `WARN` and `ERROR`.

### Plugin/Release Management

- <https://www.npmjs.com/package/live-plugin-manager>
- <https://www.npmjs.com/package/pacote> (used in npm cli)
- <https://www.npmjs.com/package/gh-release-fetch> (very low level pull from github)
- <https://www.npmjs.com/package/require-package-name> (get package names as if local files were modules)
- <https://www.npmjs.com/package/semantic-release>

> ⚠️ None of these are offline-first. Keen on finding one that respects offline first.

### Dependency installs and Upgrading Scaffolds

- [make dependency installs silent!](https://github.com/react-native-community/cli/pull/292/files#diff-e24c0f8cadacd6e6b19fb64414998d99R78)
- [`upgrade` command based on git diffs](https://github.com/react-native-community/cli/pull/348)
- Yarn or NPM detection: <http://npm.im/yarn-or-npm>

```bash
import { spawn, hasYarn } from 'yarn-or-npm'
// optionalDir for installing?
const prefixFlag = hasYarn() ? '--cwd' : '--prefix'
spawn.sync(['install', prefixFlag, optionalDir], { stdio: 'inherit' })
```

### Error Stacks/Error Handling

- <https://github.com/sindresorhus/clean-stack> Removes the mostly unhelpful internal Node.js entries.
- <https://github.com/tapjs/stack-utils> Captures and cleans stack traces
- [node-cleanup](https://www.npmjs.com/package/node-cleanup) - add a callback for when Node is terminated

### Serving Files

- <https://github.com/lukejacksonn/servor> zero dependency fileserver focused on SPA usecase
- <https://www.npmjs.com/package/serve> general local fileserver utility
- <https://github.com/lukeed/sirv/tree/master/packages/sirv-cli> lukeed's alternative to `serve`

### Misc

- <https://npm.im/stmux> for `tmux` like UI
- <https://www.npmjs.com/package/cli-ux> general Heroku CLI utils including OS notification
- <https://github.com/jeroenouw/cgx> Generate all the recommended files (pre-filled) for the Github community standards. (Issue templates, code of conduct, etc)
- <https://github.com/vercel/pkg> packaging as executable (so no requirement for node or npm)
- <https://github.com/kefranabg/readme-md-generator> generate READMEs
- <https://github.com/netlify/netlify-dev-plugin/pull/227/files> disable clearing of screen like with React-Scripts
- <https://github.com/DanWebb/jdown> for parsing a directory of markdown files into json, just wonderful
  - Other Markdown tools
    - `gray-matter`
    - `remark`
- <https://www.npmjs.com/package/random-item> for randomized selection from a list
- <https://www.npmjs.com/package/uuid> UUID for tagging a machine for analytics. see also <https://github.com/lukeed/uuid>
- <https://www.npmjs.com/package/redact-env> redact env var secrets
- <https://github.com/marionebl/svg-term-cli> record terminal session as animated svg for docs
- <https://github.com/sinclairzx81/zero> for 3d animated scenes in the terminal (idk dont ask)
- [node-cleanup](https://www.npmjs.com/package/node-cleanup) - add a callback for when Node is terminated

> New: see CLUI <https://blog.repl.it/clui>

## Other useful lists

- <https://github.com/bcoe/awesome-cross-platform-nodejs>

## Beginner Tutorials

- <https://www.twilio.com/blog/how-to-build-a-cli-with-node-js>
