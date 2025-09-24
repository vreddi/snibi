# Technology Stack

- [Technology Stack](#technology-stack)
  - [Database](#database)
    - [MySQL, PlantScale, Prisma, Drizzle, tRPC, Pusher, React Query](#mysql-plantscale-prisma-drizzle-trpc-pusher-react-query)
  - [API Layer](#api-layer)
  - [Auth Layer](#auth-layer)
    - [Service (`Clerk`, `WorkOS`) vs Package (`OpenAuth`, `AuthJS`, `BetterAuth`)](#service-clerk-workos-vs-package-openauth-authjs-betterauth)
  - [Client Framework](#client-framework)
    - [React](#react)
    - [`Next.js` vs `tanstack-start` vs `Vite`](#nextjs-vs-tanstack-start-vs-vite)
    - [Router](#router)
    - [`Next.js` vs `tanstack-router` vs `react-router`](#nextjs-vs-tanstack-router-vs-react-router)
  - [Style System](#style-system)
  - [Package Management](#package-management)
    - [`pnpm` vs `bun`](#pnpm-vs-bun)
  - [Backend host](#backend-host)
  - [DB Host](#db-host)
  - [Payments](#payments)
  - [Captcha, ratelimiting etc](#captcha-ratelimiting-etc)
  - [Analytics](#analytics)
  - [File upload](#file-upload)
    - [`UploadThing` vs `Convex`](#uploadthing-vs-convex)
  - [Monorepos](#monorepos)

## Database

> 🏆 Convex

### MySQL, PlantScale, Prisma, Drizzle, tRPC, Pusher, React Query

## API Layer

## Auth Layer

> 🏆 Clerk

### Service (`Clerk`, `WorkOS`) vs Package (`OpenAuth`, `AuthJS`, `BetterAuth`)

I want ease of a service and not think a lot about auth and have all the heavy lifting done from the start for free.

`clerk` is simple to get started with. It also handles payments and there are in-built components that helps in improving focus on the core product components.

`workOS` is great if we want to build for enterprise and are tired of SAML, Okta, and all the other related things. Want a solution that scales to sizes like OpenAI, Cursor and PlanetScale.

## Client Framework

### React

### `Next.js` vs `tanstack-start` vs `Vite`

> 🏆 Next.js

### Router

### `Next.js` vs `tanstack-router` vs `react-router`

> 🏆 Next.js

We want the homepage (snibi.com) to be static and our application to be dynamic (app.snibi.com).

## Style System

> 🏆 Tailwind + shadcn

## Package Management

> 🏆 pnpm

### `pnpm` vs `bun`

`bun` is not a pleasant experience in a big monorepo setup. Its getting there but its not ready yet.

Both `pnpm` and `bun` would cash the packages you install in a global cache. No network request is needed on each install.

## Backend host

> 🏆 Vercel

Cloudflare would be cheaper. Vercel is just simpler and gets so much right. With Fluid compute, Vercel got a little cheaper.

## DB Host

> 🏆 Convex

## Payments

> 🏆 Stripe

## Captcha, ratelimiting etc

hCaptcha?

## Analytics

> 🏆 Posthog

## File upload

> 🏆 UploadThing

### `UploadThing` vs `Convex`

## Monorepos

> 🏆 Nx
