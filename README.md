# FreshLane Supermarket

Digital storefront for a local neighborhood supermarket — browse products, place online orders, click & collect or home delivery.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Documentation

All product and technical specifications live in [`docs/`](docs/README.md).

| Doc | Purpose |
|-----|---------|
| [PLANNING.md](PLANNING.md) | Architecture, stack, design direction |
| [PROGRESS.md](PROGRESS.md) | Change log and decisions |
| [docs/DEVOPS.md](docs/DEVOPS.md) | Deploy, env vars, hosting |

## MVP Pages

- **Customer**: Home, Products, Categories, Offers, About, Contact, Cart, Checkout, Account, Orders
- **Admin**: Dashboard shell at `/admin`

## Stack

Next.js 16 · TypeScript · Tailwind CSS · Mock data (Phase 2: Postgres + API)

## Deploy

Hosted on [Vercel](https://supermarket-neon.vercel.app) — see [docs/DEVOPS.md](docs/DEVOPS.md).
