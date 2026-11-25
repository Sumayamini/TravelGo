# BusGo — Project Brief

## Product

BusGo is an original bus-booking platform for journeys across India. The web app is built with Next.js App Router, TypeScript, and Tailwind CSS. The repository also contains a separate Expo app, which is not part of the current BusGo web phase.

## Brand and design

- Original BusGo branding; do not copy RedBus or AbhiBus branding, assets, proprietary code, or exact designs.
- Deep navy/blue primary colors, sky-blue accents, white and light-grey surfaces, readable typography, and responsive layouts.
- Keep operator inventory, sample/demo content, and unimplemented services clearly distinguished.

## Planned architecture

- Web: Next.js App Router, TypeScript, Tailwind CSS, shadcn-compatible UI, and Lucide React.
- Backend in a later phase: Supabase PostgreSQL, Auth, Realtime, and Storage.
- Payments in a later phase: Razorpay test mode.
- Optional maps in a later phase: Google Maps with manual fallback.
- Deployment target: Vercel, after server and authorization features are ready.

## Current phase: Web foundation

- Responsive homepage, global navigation, and footer.
- Reusable UI primitives and shared site shell.
- Existing route/date search form and a clearly unavailable results page.
- Initial customer, booking, operator, and admin route structure using explicit Phase 1 placeholders.
- No live bus inventory, booking, seat locking, account persistence, payments, maps, or admin/operator authorization.

## Implementation rules

- Keep changes incremental and configuration changes scoped.
- Use server components by default and client components only for interactions.
- Keep credentials in environment variables; never expose service-role or payment secrets to the browser.
- Do not claim a route placeholder is implemented functionality.
- Run web lint, TypeScript checks, and relevant tests after changes.
- Maintain `PROJECT_STATUS.md` and `README.md`.
