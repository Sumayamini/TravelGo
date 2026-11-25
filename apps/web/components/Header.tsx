"use client";

import Link from "next/link";
import { useState } from "react";
import {
  BusFront,
  CircleHelp,
  LogIn,
  Menu,
  Ticket,
  Tag,
  UserRoundPlus,
  X,
} from "lucide-react";

const navigation = [
  { label: "Offers", href: "/#offers", icon: Tag },
  { label: "My Bookings", href: "/my-bookings", icon: Ticket },
  { label: "Help", href: "/help", icon: CircleHelp },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-[0_3px_18px_rgba(18,52,91,0.04)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-7 lg:px-8">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2.5"
          aria-label="BusGo home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-white shadow-sm">
            <BusFront size={22} strokeWidth={2.2} aria-hidden="true" />
          </span>
          <span className="text-[21px] font-extrabold tracking-tight text-navy">
            Bus<span className="text-ocean">Go</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navigation.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-sky hover:text-navy"
            >
              <Icon size={17} strokeWidth={1.9} aria-hidden="true" />
              {label}
            </Link>
          ))}
          <Link
            href="/login"
            className="ml-1 inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-navy transition hover:bg-sky"
          >
            <LogIn size={17} strokeWidth={1.9} aria-hidden="true" />
            Login
          </Link>
          <Link
            href="/signup"
            className="ml-1 inline-flex items-center gap-2 rounded-lg bg-navy px-4 py-2.5 text-sm font-bold text-white transition hover:bg-ocean"
          >
            <UserRoundPlus size={17} strokeWidth={2} aria-hidden="true" />
            Sign Up
          </Link>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-navy transition hover:bg-sky lg:hidden"
        >
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-slate-100 bg-white px-4 py-3 shadow-lg lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-1">
            {navigation.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-sky"
              >
                <Icon size={18} aria-hidden="true" />
                {label}
              </Link>
            ))}
            <div className="my-1 border-t border-slate-100" />
            <Link
              href="/login"
              onClick={closeMenu}
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-sky"
            >
              <LogIn size={18} aria-hidden="true" />
              Login
            </Link>
            <Link
              href="/signup"
              onClick={closeMenu}
              className="flex items-center gap-3 rounded-lg bg-navy px-3 py-3 text-sm font-bold text-white transition hover:bg-ocean"
            >
              <UserRoundPlus size={18} aria-hidden="true" />
              Sign Up
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
