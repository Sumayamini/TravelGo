# BusGo

BusGo is an original bus-booking experience for journeys across India. The current delivery is **Phase 1: responsive web foundation and route scaffolds**. It does not connect to live operator inventory or provide bookings, authentication, payment processing, or admin authorization.

## Requirements

- Node.js 20 or later
- npm

## Install and run

In the VS Code PowerShell terminal:

```powershell
cd "C:\Users\admin\OneDrive\Desktop\travelling app"
npm install
npm run dev:web
```

Open `http://localhost:3000`. To validate the web app:

```powershell
npm run lint:web
npm run typecheck:web
npm run build --workspace @travelgo/web
```

The existing npm workspace identifier remains `@travelgo/web` for compatibility with the current monorepo. The web product is branded BusGo. The existing Expo app has not been rebranded or changed in this phase.

## Phase 1 route structure

- `/` — BusGo homepage and search form
- `/search` — search results placeholder (no operator inventory)
- `/bus/[tripId]` — bus/trip detail route scaffold
- `/select-seats/[tripId]` — seat selection route scaffold
- `/checkout/[tripId]` — passenger and checkout route scaffold
- `/booking/success/[bookingId]` and `/booking/[bookingId]` — confirmation/details route scaffolds; these do not confirm a real booking
- `/my-bookings`, `/profile`, `/help`
- `/login`, `/signup` — UI-only forms; details are not sent or stored
- `/admin`, `/admin/buses`, `/admin/routes`, `/admin/trips`, `/admin/bookings` — unprotected placeholders, not an admin console
- `/operator` — unprotected placeholder, not an operator workspace

Sample route cards are promotional ideas only. They are not seeded service inventory, and no fabricated fares or availability are shown.

## Web architecture

- `apps/web/app/` — Next.js App Router route pages and route scaffolds
- `apps/web/components/` — shared navigation, shell, placeholders, and homepage sections
- `apps/web/components/ui/` — reusable shadcn-compatible Tailwind UI primitives
- `apps/web/lib/utils.ts` — shared class-name utility
- `apps/mobile/` — existing, separate Expo application; not modified for BusGo Phase 1

The web app uses Next.js App Router, TypeScript, Tailwind CSS, Lucide React, and shadcn-compatible local UI conventions. Future integrations should be introduced behind server-side adapters in later phases.

## Environment variables

No environment variables are needed to run Phase 1. `.env.example` contains empty placeholders for planned integrations only. Do not populate or expose server secrets in client-side variables.

## Planned integrations — not configured

### Supabase

Supabase Auth, PostgreSQL, Realtime, Storage, RLS policies, migrations, and seed data are **not implemented**. No Supabase project or dashboard setup is required for Phase 1. In the backend phase, create a development project, add reviewed versioned migrations and clearly identified demo seed data, then configure the environment values in `.env.local` and the deployment provider. Do not use production credentials for local/demo work.

### Razorpay

No payment orders, checkout, signatures, or webhooks are implemented. A Razorpay test account and dashboard configuration are not required now. In the payment phase, use test-mode credentials and configure the webhook only after server-side order creation and signature verification exist.

### Google Maps

Maps and autocomplete are not implemented. No Google Cloud project, billing profile, or API key is required now. If enabled in a later phase, restrict the browser key to the deployed domains and only the required Maps APIs; keep server-only credentials out of browser code.

### Vercel

This phase does not deploy the application. No Vercel dashboard changes are required to run it locally. Before production deployment, verify the workspace root/build settings, configure only the required environment variables, and test the deployed routes and security configuration.

## Manual dashboard steps

**None are required for Phase 1.** Supabase, Razorpay, Google Maps, and Vercel setup are intentionally deferred until their corresponding features are implemented and can be securely configured and tested.

## Next phases

1. Establish validated domain models and Supabase migrations/RLS.
2. Add demo inventory through a clearly labelled adapter and seed workflow.
3. Implement secure search, trip details, transactional seat locks, and booking rules.
4. Add account, admin, and operator authorization; then payment test-mode flow.
5. Add realtime updates, optional maps, automated integration tests, and deployment.

Do not treat any Phase 1 placeholder as authorization, inventory, a reservation, or a payment receipt.
