Get started

Learn how to deploy full-stack (SSR) Next.js apps to Cloudflare Pages.

Note

You can now also deploy Next.js apps to Cloudflare Workers ↗, including apps that use the Node.js "runtime" from Next.js. This allows you to use the Node.js APIs that Cloudflare Workers provides, and ensures compatibility with a broader set of Next.js features and rendering modes.

Refer to the OpenNext docs for the @opennextjs/cloudflare adapter ↗ to learn how to get started.
New apps

To create a new Next.js app, pre-configured to run on Cloudflare, run:

npm
pnpm

    yarn

Terminal window

npm create cloudflare@latest -- my-next-app --framework=next

For more guidance on developing your app, refer to Bindings or the Next.js documentation ↗.
Existing apps
1. Install next-on-pages

First, install @cloudflare/next-on-pages ↗:
Terminal window

npm install --save-dev @cloudflare/next-on-pages

2. Add wrangler.toml file

Then, add a wrangler.toml file to the root directory of your Next.js app:

wrangler.toml

    wrangler.json

name = "my-app"
compatibility_date = "2024-07-29"
compatibility_flags = ["nodejs_compat"]
pages_build_output_dir = ".vercel/output/static"

This is where you configure your Pages project and define what resources it can access via bindings.
3. Update next.config.mjs

Next, update the content in your next.config.mjs file.
next.config.mjs

 import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {};

 if (process.env.NODE_ENV === 'development') {
   await setupDevPlatform();
 }

export default nextConfig;

These changes allow you to access bindings in local development.
4. Ensure all server-rendered routes use the Edge Runtime

Next.js has two "runtimes" ↗ — "Edge" and "Node.js". When you run your Next.js app on Cloudflare, you can use available Node.js APIs — but you currently can only use Next.js' "Edge" runtime.

This means that for each server-rendered route — ex: an API route or one that uses getServerSideProps — you must configure it to use the "Edge" runtime:

export const runtime = "edge";

5. Update package.json

Add the following to the scripts field of your package.json file:
package.json

"pages:build": "npx @cloudflare/next-on-pages",
"preview": "npm run pages:build && wrangler pages dev",
"deploy": "npm run pages:build && wrangler pages deploy"

    npm run pages:build: Runs next build, and then transforms its output to be compatible with Cloudflare Pages.
    npm run preview: Builds your app, and runs it locally in workerd ↗, the open-source Workers Runtime. (next dev will only run your app in Node.js)
    npm run deploy: Builds your app, and then deploys it to Cloudflare

6. Deploy to Cloudflare Pages

Either deploy via the command line:
Terminal window

npm run deploy

Or connect a Github or Gitlab repository, and Cloudflare will automatically build and deploy each pull request you merge to your production branch.
7. (Optional) Add eslint-plugin-next-on-pages

Optionally, you might want to add eslint-plugin-next-on-pages, which lints your Next.js app to ensure it is configured correctly to run on Cloudflare Pages.
Terminal window

npm install --save-dev eslint-plugin-next-on-pages

Once it is installed, add the following to .eslintrc.json:
.eslintrc.json

{
  "extends": [
    "next/core-web-vitals",
    "plugin:eslint-plugin-next-on-pages/recommended"
  ],
  "plugins": [
    "eslint-plugin-next-on-pages"
  ]
}

Related resources

    Bindings
    Troubleshooting

Bindings

Once you have set up next-on-pages, you can access bindings from any route of your Next.js app via getRequestContext:

import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

export async function GET(request) {
  let responseText = "Hello World";

  const myKv = getRequestContext().env.MY_KV_NAMESPACE;
  await myKv.put("foo", "bar");
  const foo = await myKv.get("foo");

  return new Response(foo);
}

Add bindings to your Pages project by adding them to your wrangler.toml configuration file.
TypeScript type declarations for bindings

To ensure that the env object from getRequestContext().env above has accurate TypeScript types, install @cloudflare/workers-types ↗ and create a TypeScript declaration file ↗.

Install Workers Types:
Terminal window

npm install --save-dev @cloudflare/workers-types

Add Workers Types to your tsconfig.json file, replacing the date below with your project's compatibility date:
tsconfig.json

"types": [
     "@cloudflare/workers-types/2024-07-29"
]

Create an env.d.ts file in the root directory of your Next.js app, and explicitly declare the type of each binding:
env.d.ts

interface CloudflareEnv {
  MY_KV_1: KVNamespace;
  MY_KV_2: KVNamespace;
  MY_R2: R2Bucket;
  MY_DO: DurableObjectNamespace;
}

Other Cloudflare APIs (cf, ctx)

Access context about the incoming request from the cf object, as well as lifecycle methods from the ctx object from the return value of getRequestContext() ↗:

import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

export async function GET(request) {
  const { env, cf, ctx } = getRequestContext();

  // ...
}

Advanced Usage
Custom Worker Entrypoint

If you need to run code before or after your Next.js application, create your own Worker entrypoint and forward requests to your Next.js application.

This can help you intercept logs from your app, catch and handle uncaught exceptions, or add additional context to incoming requests or outgoing responses.

    Create a new file in your Next.js project, with a fetch() handler, that looks like this:

import nextOnPagesHandler from "@cloudflare/next-on-pages/fetch-handler";

export default {
  async fetch(request, env, ctx) {
    // do something before running the next-on-pages handler

    const response = await nextOnPagesHandler.fetch(request, env, ctx);

    // do something after running the next-on-pages handler

    return response;
  },
} as ExportedHandler<{ ASSETS: Fetcher }>;

This looks like a Worker — but it does not need its own wrangler.toml file. You can think of it purely as code that @cloudflare/next-on-pages will then use to wrap the output of the build that is deployed to your Cloudflare Pages project.

    Pass the entrypoint argument to the next-on-pages CLI with the path to your handler.

Terminal window

npx @cloudflare/next-on-pages --custom-entrypoint=./custom-entrypoint.ts

Caching

@cloudflare/next-on-pages ↗ supports caching ↗ and revalidating ↗ data returned by subrequests you make in your app by calling fetch().

By default, all fetch() subrequests made in your Next.js app are cached. Refer to the Next.js documentation ↗ for information about how to disable caching for an individual subrequest, or for an entire route.

The cache persists across deployments ↗. You are responsible for revalidating/purging this cache.
Storage options

You can configure your Next.js app to write cache entries to and read from either Workers KV or the Cache API.
Workers KV (recommended)

It takes an extra step to enable, but Cloudflare recommends caching data using Workers KV.

When you write cached data to Workers KV, you write to storage that can be read by any Cloudflare location. This means your app can fetch data, cache it in KV, and then subsequent requests anywhere around the world can read from this cache.

Note

Workers KV is eventually consistent, which means that it can take up to 60 seconds for updates to be reflected globally.

To use Workers KV as the cache for your Next.js app, add a KV binding to your Pages project, and set the name of the binding to __NEXT_ON_PAGES__KV_SUSPENSE_CACHE.
Cache API (default)

The Cache API ↗ is the default option for caching data in your Next.js app. You do not need to take any action to enable the Cache API.

In contrast with Workers KV, when you write data using the Cache API, data is only cached in the Cloudflare location that you are writing data from.

Routing static assets

When you use a JavaScript framework like Next.js on Cloudflare Pages, the framework adapter (ex: @cloudflare/next-on-pages) automatically generates a _routes.json file, which defines specific paths of your app's static assets. This file tells Cloudflare, for these paths, don't run the Worker, you can just serve the static asset on this path (an image, a chunk of client-side JavaScript, etc.)

The framework adapter handles this for you — you typically shouldn't need to create your own _routes.json file.

If you need to, you can define your own _routes.json file in the root directory of your project. For example, you might want to declare the /favicon.ico path as a static asset where the Worker should not be invoked.

You would add it to the excludes filed of your _routes.json file:
_routes.json

{
  "version": 1,
  "exclude": ["/favicon.ico"]
}

During the build process, @cloudflare/next-on-pages will automatically generate its own _routes.json file in the output directory. Any entries that are provided in your own _routes.json file (in the project's root directory) will be merged with the generated file.

Supported features
Supported Next.js versions

@cloudflare/next-on-pages supports all minor and patch version of Next.js 13 and 14. We regularly run manual and automated tests to ensure compatibility.
Node.js API support

Next.js has two "runtimes" ↗ — "Edge" and "Node.js".

The @cloudflare/next-on-pages adapter supports only the edge "runtime".

The @opennextjs/cloudflare adapter ↗, which lets you build and deploy Next.js apps to Cloudflare Workers, supports the Node.js "runtime" from Next.js. When you use it, you can use the full set of Node.js APIs that Cloudflare Workers provide.

@opennextjs/cloudflare is pre 1.0, and still in active development. As it approaches 1.0, it will become the clearly better choice for most Next.js apps, since Next.js has been engineered to only support its Node.js "runtime" for many newly introduced features.

Refer to the OpenNext docs ↗ and the Workers vs. Pages compatibility matrix for more information to help you decide which to use.
Supported Node.js APIs when using @cloudflare/next-on-pages

When you use @cloudflare/next-on-pages, your Next.js app must use the "edge" runtime from Next.js. The Workers runtime supports a broad set of Node.js APIs — but the Next.js Edge Runtime code intentionally constrains this ↗. As a result, only the following Node.js APIs will work in your Next.js app:

    buffer
    events
    assert
    util
    async_hooks

If you need to use other APIs from Node.js, you should use @opennextjs/cloudflare ↗ instead.
Supported Features
Routers

Cloudlflare recommends using the App router ↗ from Next.js.

Cloudflare also supports the older Pages ↗ router from Next.js.
next.config.mjs Properties

next.config.js — app router ↗ and `next.config.js - pages router ↗
Option	Next Docs	Support
appDir	app ↗	✅
assetPrefix	pages ↗, app ↗	🔄
basePath	pages ↗, app ↗	✅
compress	pages ↗, app ↗	N/A1
devIndicators	pages ↗, app ↗	N/A2
distDir	pages ↗, app ↗	N/A3
env	pages ↗, app ↗	✅
eslint	pages ↗, app ↗	✅
exportPathMap	pages ↗, app ↗	N/A4
generateBuildId	pages ↗, app ↗	✅
generateEtags	pages ↗, app ↗	🔄
headers	pages ↗, app ↗	✅
httpAgentOptions	pages ↗, app ↗	N/A
images	pages ↗, app ↗	✅
incrementalCacheHandlerPath	app ↗	🔄
logging	app ↗	N/A5
mdxRs	app ↗	✅
onDemandEntries	pages ↗, app ↗	N/A6
optimizePackageImports	app ↗	✅/N/A7
output	pages ↗, app ↗	N/A8
pageExtensions	pages ↗, app ↗	✅
Partial Prerendering (experimental)	app ↗	❌9
poweredByHeader	pages ↗, app ↗	🔄
productionBrowserSourceMaps	pages ↗, app ↗	🔄10
reactStrictMode	pages ↗, app ↗	❌11
redirects	pages ↗, app ↗	✅
rewrites	pages ↗, app ↗	✅
Runtime Config	pages ↗, app ↗	❌12
serverActions	app ↗	✅
serverComponentsExternalPackages	app ↗	N/A13
trailingSlash	pages ↗, app ↗	✅
transpilePackages	pages ↗, app ↗	✅
turbo	pages ↗, app ↗	🔄
typedRoutes	app ↗	✅
typescript	pages ↗, app ↗	✅
urlImports	pages ↗, app ↗	✅
webpack	pages ↗, app ↗	✅
webVitalsAttribution	pages ↗, app ↗	✅

- ✅: Supported
- 🔄: Not currently supported
- ❌: Not supported
- N/A: Not applicable

Internationalization

Cloudflare also supports Next.js' internationalized (i18n) routing ↗.
Rendering and Data Fetching
Incremental Static Regeneration

If you use Incremental Static Regeneration (ISR)14, @cloudflare/next-on-pages will use static fallback files that are generated by the build process.

This means that your application will still correctly serve your ISR/prerendered pages (but without the regeneration aspect). If this causes issues for your application, change your pages to use server side rendering (SSR) instead.

Background

Dynamic handling of static routes

@cloudflare/next-on-pages supports standard statically generated routes.

It does not support dynamic Node.js-based on-demand handling of such routes.

For more details see:

    troubleshooting generateStaticParams
    troubleshooting getStaticPaths

Caching and Data Revalidation
Revalidation and next/cache are supported on Cloudflare Pages and can use various bindings. For more information, see our caching documentation.

Troubleshooting

Learn more about troubleshooting issues with your Full-stack (SSR) Next.js apps using Cloudflare.
Edge runtime

You must configure all server-side routes in your Next.js project as Edge runtime ↗ routes, by adding the following to each route:

export const runtime = "edge";

Note

If you are still using the Next.js Pages router ↗, for page routes, you must use 'experimental-edge' instead of 'edge'.
App router
Not found

Next.js generates a not-found route for your application under the hood during the build process. In some circumstances, Next.js can detect that the route requires server-side logic (particularly if computation is being performed in the root layout component) and Next.js automatically creates a Node.js runtime serverless function ↗ that is not compatible with Cloudflare Pages.

To prevent this, you can provide a custom not-found route that explicitly uses the edge runtime:

export const runtime = 'edge'

export default async function NotFound() {
    // ...
    return (
        // ...
    )
}

generateStaticParams

When you use static site generation (SSG) ↗ in the /app directory ↗ and also use the generateStaticParams ↗ function, Next.js tries to handle requests for non statically generated routes automatically, and creates a Node.js runtime serverless function ↗ that is not compatible with Cloudflare Pages.

You can opt out of this behavior by setting dynamicParams ↗ to false:

 export const dynamicParams = false

// ...

Top-level getRequestContext

You must call getRequestContext within the function that handles your route — it cannot be called in global scope.

Don't do this:

import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'

const myVariable = getRequestContext().env.MY_VARIABLE

export async function GET(request) {
  return new Response(myVariable)
}

Instead, do this:

import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'

export async function GET(request) {
  const myVariable = getRequestContext().env.MY_VARIABLE
  return new Response(myVariable)
}

Pages router
getStaticPaths

When you use static site generation (SSG) ↗ in the /pages directory ↗ and also use the getStaticPaths ↗ function, Next.js by default tries to handle requests for non statically generated routes automatically, and creates a Node.js runtime serverless function ↗ that is not compatible with Cloudflare Pages.

You can opt out of this behavior by specifying a false fallback ↗:

// ...

export async function getStaticPaths() {
    // ...

    return {
        paths,
       fallback: false,
  }
}

Warning

Note that the paths array cannot be empty since an empty paths array causes Next.js to ignore the provided fallback value.


Static site

Note

Do not use this guide unless you have a specific use case for static exports. Cloudflare recommends using the Deploy a Next.js site guide.

Next.js ↗ is an open-source React framework for creating websites and applications. In this guide, you will create a new Next.js application and deploy it using Cloudflare Pages.

This guide will instruct you how to deploy a static site Next.js project with static exports ↗.
Before you continue

All of the framework guides assume you already have a fundamental understanding of Git ↗. If you are new to Git, refer to this summarized Git handbook ↗ on how to set up Git on your local machine.

If you clone with SSH, you must generate SSH keys ↗ on each computer you use to push or pull from GitHub.

Refer to the GitHub documentation ↗ and Git documentation ↗ for more information.
Select your Next.js project

If you already have a Next.js project that you wish to deploy, ensure that it is configured for static exports ↗, change to its directory, and proceed to the next step. Otherwise, use create-next-app to create a new Next.js project.
Terminal window

npx create-next-app --example with-static-export my-app

After creating your project, a new my-app directory will be generated using the official with-static-export ↗ example as a template. Change to this directory to continue.
Terminal window

cd my-app

Create a GitHub repository

Create a new GitHub repository by visiting repo.new ↗. After creating a new repository, prepare and push your local application to GitHub by running the following commands in your terminal:
Terminal window

git remote add origin https://github.com/<GH_USERNAME>/<REPOSITORY_NAME>.git
git branch -M main
git push -u origin main

Deploy your application to Cloudflare Pages

To deploy your site to Pages:

    Log in to the Cloudflare dashboard ↗ and select your account.
    In Account Home, select Workers & Pages > Create application > Pages > Connect to Git.
    Select the new GitHub repository that you created and, in the Set up builds and deployments section, select Next.js (Static HTML Export) as your Framework preset. Your selection will provide the following information.

Configuration option 	Value
Production branch 	main
Build command 	npx next build
Build directory 	out

After configuring your site, you can begin your first deploy. Cloudflare Pages will install next, your project dependencies, and build your site before deploying it.
Preview your site

After deploying your site, you will receive a unique subdomain for your project on *.pages.dev.

Every time you commit new code to your Next.js site, Cloudflare Pages will automatically rebuild your project and deploy it. You will also get access to preview deployments on new pull requests, so you can preview how changes look to your site before deploying them to production.

For the complete guide to deploying your first site to Cloudflare Pages, refer to the Get started guide.


