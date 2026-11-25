# BusGo project status

## Phase 1 — Web foundation

- [x] Rebrand the web homepage, login/signup screens, shared navigation, and footer as BusGo.
- [x] Add a shared site shell and reusable shadcn-compatible Button, Card, and Badge UI primitives.
- [x] Preserve the route/date search interaction and keep search results explicitly unavailable.
- [x] Add initial route scaffolds for customer, booking, admin, and operator URLs.
- [x] Mark booking, payment, account, inventory, and admin/operator features as unimplemented.
- [x] Document the architecture, setup commands, future integrations, and the absence of required dashboard setup.
- [x] Pass web ESLint and TypeScript checks and produce the optimized Next.js build.
- [x] Browser-check responsive widths, mobile navigation, search submission, and all requested Phase 1 routes.

## Deferred

- Supabase schema, migrations, RLS, authentication, and seed data.
- Demo inventory adapter, search results, trip details, seat map, atomic seat locks, and booking engine.
- Razorpay test-mode orders, verified webhooks, idempotency, and refunds.
- Protected admin/operator workspaces, audit logs, customer profiles, and bookings.
- Realtime availability, optional Google Maps, integration tests, and Vercel deployment.

## Known limitations

- The search form navigates to an explicit no-inventory placeholder; it does not search seeded or operator inventory.
- Authentication forms, profile pages, booking pages, admin pages, and operator pages are route/UI scaffolds only.
- No automated unit or integration test suite has been added yet.
- `npm install` reports six dependency advisories in the existing workspace tree; broad dependency upgrades are deferred.

## Existing repository note

The workspace began as TravelGo with a separate Expo mobile app. The web experience is now branded BusGo; the Expo app and its configuration remain unchanged. Internal npm workspace identifiers remain unchanged for compatibility.

## Run locally

From the repository root in the VS Code terminal:

```powershell
npm install
npm run dev:web
```

No dashboard setup or environment variables are needed for Phase 1.
