# nextjs-react-webpack-gulp-babel

(todo: talk about ANALYZE_WEBPACK_BUNDLES)
(todo: adding a new `components` subdir)
(todo: universe, components, dist, test-nc and test-ib, etc)
(todo: start with list-tasks [but really start with npm install and npm init])
(todo: dev-utils dotenv.config vs devUtils.populateEnv)
(todo: redux, motion, formik)
(todo: flow; do not use any prop type anything at all ever)
(todo: recommended global plugins for IDE integrations on Windows/WSL)

This is one of those [boilerplate](https://git.xunn.io/boilerplate) futuristic web dev environments your parents warned you about.

<!-- TOC -->

- [nextjs-react-webpack-gulp-babel](#nextjs-react-webpack-gulp-babel)
    - [Simple Quick Start Guide](#simple-quick-start-guide)
    - [Feature Scope](#feature-scope)
    - [Required Reading](#required-reading)
        - [Skinny Gulp Configuration](#skinny-gulp-configuration)
        - [Server-side Routing vs Client-side Routing](#server-side-routing-vs-client-side-routing)
        - [Data *Eventually* Instead of Data Now (i.e. GraphQL, Page Size, and Lazy Loading)](#data-eventually-instead-of-data-now-ie-graphql-page-size-and-lazy-loading)
        - [One-Way Data Models, Single Source of State, "Smart" vs "Dumb" Components](#one-way-data-models-single-source-of-state-smart-vs-dumb-components)
        - [Favor Composition Over Inheritance](#favor-composition-over-inheritance)
        - [Script Tags Should Usually Not Appear In Your Components](#script-tags-should-usually-not-appear-in-your-components)
        - [Page Refreshes vs Client-side Navigation](#page-refreshes-vs-client-side-navigation)
        - [Immutability and You](#immutability-and-you)
        - [Other Considerations](#other-considerations)
    - [Available NPM Run Scripts](#available-npm-run-scripts)
    - [Other Useful Commands](#other-useful-commands)
    - [Good Questions](#good-questions)
    - [Further Research Materials](#further-research-materials)

<!-- /TOC -->

## Simple Quick Start Guide

> Recommended: explore the [ErgoDark](https://ergodark.com) [getting started documentation](https://git.xunn.io/DarkTools/ergo-provision/wikis/home)

To get started, all you have to do is clone this repo, run `npm install`, then
`npm run init` and that's it!

The initialization script takes the following actions:

1. Deletes the `.git/` directory
2. Renames this project directory to a user-defined value
3. Mutates `name`, `description`, and `url` keys in [package.json](package.json) to user-defined values
4. Renames [dist.env](dist.env) to `.env`
5. Initializes a new git repository and/or links this repository and branch to gitlab/github
6. Runs `npm run install-types` if Flow types are being used
7. Removes the line in `.gitignore` dealing with `package-lock.json`
8. Renames [.vscode/launch.dist.json](.vscode/launch.dist.json) to `.vscode/launch.json`; mutates parts of `launch.json` to user-defined values

At this point, you should take the time to **customize .env**, **connect this project to version control**, and **remove any unneeded dependencies/devDependencies from [package.json](package.json)**.

It is also recommended that you also check out the [Required Reading](#required-reading) and [FAQ](#further-research-materials) sections if you don't want to get lost.

## Feature Scope

* **Shopify** ready (see [dist.env](dist.env))
* **React** and **JSX** are fully supported
* **Webpack** and all its powers come preconfigured (webpack can be further customized in [config/next.config.js](config/next.config.js))
* **Babel** (latest JS features are available in every file everywhere **except in [babel.config.js](babel.config.js)**)
* **Next.js** Here's everything you get **FOR FREE NO EXTRA LINES OF CODE FOR YOU**:
    * [HMR](https://www.youtube.com/watch?v=9mSJSXo1to4) as a LiveReload replacement
    * [SSR](https://hackernoon.com/next-js-react-server-side-rendering-done-right-f9700078a3b6)
    * [CSR](http://krasimirtsonev.com/blog/article/deep-dive-into-client-side-routing-navigo-pushstate-hash)
    * [Styled-jsx](https://github.com/zeit/styled-jsx)
    * [Prefetch](https://nextjs.org/docs/#prefetching-pages)
    * [Code splitting](https://zeit.co/blog/next#automatic-server-rendering-and-code-splitting)
    * Can use Express, Hapi, or Koa under the hood!
* Easy and painless [SPA](https://medium.com/@pshrmn/demystifying-single-page-applications-3068d0555d46) development
Optimizations for serving static files through `static/` (not as good as Nginx, though)
* Local and remote Chrome and Node debugging support
* Ready for Jest testing
* Source maps handled automatically (mostly by Next.js itself)
* Supports and encourages [progressive web app](https://en.wikipedia.org/wiki/Progressive_Web_Apps) (think: Google Docs) development, [universal JavaScript](https://cdb.reacttraining.com/universal-javascript-4761051b7ae9) (rather than [isomorphic JavaScript](https://medium.com/@ghengeveld/isomorphism-vs-universal-javascript-4b47fb481beb)) and all the other buzzwords and phrases
* Rich server-less development (ie. no internet connection required after `npm install`)
* Ready to work behind an Nginx (or any) reverse proxy out-of-box
* Tiny gulp file (read: offload as many commands to the `scripts` key in [package.json](package.json) as possible)

***

## Required Reading

Unless you want to get stuck, you should take the time to read through these next few subsections at the very least.

### Skinny Gulp Configuration

Gulp configurations are powerful, JavaScript is fun, and all good devs love
automating routine tasks. However, with gulp's power comes performance issues.
Namely, gulp tasks take *much* longer to run compared to direct terminal
commands.

So, before you start coding up a shiny new heavy-weight gulp task to automate
some banality, consider adding an NPM script under the `scripts` key in the
`package.json` file instead. We call the philosophy of favoring light-weight
shell commands via NPM's `scripts` key over heavy-weight gulp commands "favoring
a *skinny gulp configuration*".

In keeping with the philosophy, you'll find all of this boilerplate's
functionality accessible via typical npm run syntax, i.e. `npm run
command_name_here`. Use `npm run list-tasks` to see a list of all current npm
scripts and available gulp tasks.

### Server-side Routing vs Client-side Routing

(todo)

### Data *Eventually* Instead of Data Now (i.e. GraphQL, Page Size, and Lazy Loading)

(todo)(not understanding the universality of your app can result in MASSIVE page sizes)

### One-Way Data Models, Single Source of State, "Smart" vs "Dumb" Components

(todo)

### Favor Composition Over Inheritance

(todo)

### Script Tags Should Usually Not Appear In Your Components

(todo)

### Page Refreshes vs Client-side Navigation

If you want to have a page refresh on navigation, use a plain `<a href="">` tag,
instead of the `<Link>` component Next provides.

When a `<Link>` is followed (client-side nav), `getInitialProps()` is called
client side. That means you need to ensure that it can safely be called both
ways. `componentDidMount()` is only called client side.

(todo)

### Immutability and You

(todo)

### Other Considerations

(todo)(run regenerate when you change stuff in config/)

## Available NPM Run Scripts

(todo: also, npx gulp --tasks)

<details>
    <summary><strong>dev</strong></summary>

(todo)
</details>

<details>
    <summary><strong>build</strong></summary>

(todo)
</details>

<details>
    <summary><strong>test</strong></summary>

(todo)
</details>

<details>
    <summary><strong>install-types</strong></summary>

(todo)
</details>

<details>
    <summary><strong>clean-types</strong></summary>

(todo)
</details>

<details>
    <summary><strong>prepare</strong></summary>

(todo)
</details>

<details>
    <summary><strong>start</strong></summary>

(todo)
</details>

<details>
    <summary><strong>generate</strong></summary>

(todo)
</details>

<details>
    <summary><strong>regenerate</strong></summary>

Any changes to [gulpfile.js](config/gulpfile.js) or
[next.config.js](config/next.config.js) *must* be made in the `config/`
directory and *must* be accompanied by regeneration of the root configuration
files. To trigger this, use the following command:

```bash
npm run regenerate
```
</details>

## Other Useful Commands

(todo)(npx/gulp/etc)

## Good Questions

<details>
    <summary><strong>What is this dist.env thing? (AKA: .env)</strong></summary>

(todo) [dist.env](dist.env)
</details>

<details>
    <summary><strong>What's going on in package.json?</strong></summary>

(todo) [package.json](package.json)
</details>

<details>
    <summary><strong>What's going on in babel.config.js?</strong></summary>

(todo) [babel.config.js](babel.config.js)
</details>

<details>
    <summary><strong>What's going on in next.config.js?</strong></summary>

(todo) [next.config.js](next.config.js)
</details>

<details>
    <summary><strong>Why is package-lock.js initially included in .gitignore?</strong></summary>

While incorrect and illegal for npm packages that are going to be published,
including [package-lock.js](package-lock.js) in your new project's repository
isn't initially useful thanks to semver semantics. To remove it and other
boilerplate stuff, run `npm run init`.
</details>

<details>
    <summary><strong>What are all these other files at the project root?</strong></summary>

(todo)
</details>

<details>
    <summary><strong>What's up with static/?</strong></summary>

(todo)
</details>

<details>
    <summary><strong>What's up with pages/?</strong></summary>

(todo)
</details>

<details>
    <summary><strong>What's up with flow-typed/?</strong></summary>

(todo)
</details>

<details>
    <summary><strong>What's up with config/?</strong></summary>

(todo)
</details>

<details>
    <summary><strong>What's up with components/?</strong></summary>

(todo)
</details>

<details>
    <summary><strong>Why are .vscode/, node_modules/, build/, components/, .next/, etc hidden in VS Code?</strong></summary>

Because of the workplace scope rules defined in
[.vscode/settings.json](.vscode/settings.json). You can customize them to your
heart's content. Specifically, the `files.exclude` key.
</details>

## Further Research Materials

* [Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html)
* [Redux: Basics](https://redux.js.org/basics)
* [Create React component libraries with Storybook and styled-jsx](https://medium.com/@efreyreg/create-react-component-libraries-with-storybook-and-styled-jsx-8999f423f06b)
* [Next.js Getting Started Tutorial](https://nextjs.org/learn/)
* [Migrating an app to Next.js: Lessons learned](https://medium.com/@jamischarles/lessons-learned-with-next-js-change-title-6423b2f2ab8d)
* [How Single-Page Applications Work](https://medium.com/@pshrmn/demystifying-single-page-applications-3068d0555d46)
