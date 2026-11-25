"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle, ArrowLeftRight, BusFront, CalendarDays, ChevronDown, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const cities = [
  "Bengaluru",
  "Bangalore",
  "Chennai",
  "Hyderabad",
  "Kochi",
  "Mumbai",
  "Mysuru",
  "Pune",
  "Tirupati",
  "Vijayawada",
  "Visakhapatnam",
];

function dateInputForOffset(offset: number) {
  const date = new Date();
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() + offset);
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60_000);
  return localDate.toISOString().slice(0, 10);
}

export default function BusSearchForm() {
  const router = useRouter();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState(() => dateInputForOffset(0));
  const [error, setError] = useState("");
  const today = dateInputForOffset(0);
  const tomorrow = dateInputForOffset(1);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (from === to) {
      setError("Choose two different cities for your journey.");
      return;
    }
    setError("");
    const query = new URLSearchParams({ from, to, date });
    router.push(`/search?${query.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/80 bg-white p-5 shadow-[0_24px_70px_rgba(12,38,69,0.16)] sm:p-7 lg:p-8"
      aria-label="Search for a bus"
    >
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-sky px-4 py-2 text-sm font-bold text-navy">
          <BusFront size={18} strokeWidth={2.1} aria-hidden="true" />
          Bus booking
        </div>
        <p className="text-sm font-medium text-slate-500">Your next journey is a few details away</p>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-[minmax(0,1.05fr)_3.25rem_minmax(0,1.05fr)_minmax(0,1.15fr)_10.5rem] md:items-stretch">
        <label className="relative flex min-h-[104px] flex-col justify-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-sky-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-sky-100">
          <span className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-500">
            <MapPin size={15} className="text-ocean" aria-hidden="true" />
            Leaving from
          </span>
          <select
            required
            value={from}
            onChange={(event) => { setFrom(event.target.value); setError(""); }}
            className="mt-2 w-full cursor-pointer appearance-none bg-transparent pr-6 text-base font-semibold text-ink outline-none sm:text-lg"
          >
            <option value="">Select departure city</option>
            {cities.map((city) => <option key={city} value={city}>{city}</option>)}
          </select>
          <ChevronDown size={16} className="pointer-events-none absolute bottom-5 right-4 text-slate-400" aria-hidden="true" />
        </label>

        <button
          type="button"
          onClick={() => { setFrom(to); setTo(from); setError(""); }}
          aria-label="Swap departure and destination"
          className="mx-auto flex h-10 items-center justify-center gap-2 rounded-full px-3 text-sm font-semibold text-ocean transition hover:bg-sky md:my-auto md:h-11 md:w-11 md:px-0"
        >
          <ArrowLeftRight size={19} aria-hidden="true" />
          <span className="md:sr-only">Swap cities</span>
        </button>

        <label className="relative flex min-h-[104px] flex-col justify-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-sky-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-sky-100">
          <span className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-500">
            <MapPin size={15} className="text-ocean" aria-hidden="true" />
            Going to
          </span>
          <select
            required
            value={to}
            onChange={(event) => { setTo(event.target.value); setError(""); }}
            className="mt-2 w-full cursor-pointer appearance-none bg-transparent pr-6 text-base font-semibold text-ink outline-none sm:text-lg"
          >
            <option value="">Select destination city</option>
            {cities.map((city) => <option key={city} value={city}>{city}</option>)}
          </select>
          <ChevronDown size={16} className="pointer-events-none absolute bottom-5 right-4 text-slate-400" aria-hidden="true" />
        </label>

        <div className="flex min-h-[104px] flex-col justify-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-sky-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-sky-100">
          <label htmlFor="journey-date" className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-500">
            <CalendarDays size={15} className="text-ocean" aria-hidden="true" />
            Departure date
          </label>
          <input
            id="journey-date"
            type="date"
            required
            min={today}
            value={date}
            onChange={(event) => { setDate(event.target.value); setError(""); }}
            className="mt-2 w-full bg-transparent text-base font-semibold text-ink outline-none sm:text-lg"
          />
          <div className="mt-2 flex items-center gap-4 text-xs font-bold">
            <button type="button" aria-pressed={date === today} onClick={() => { setDate(today); setError(""); }} className={`transition hover:text-ocean ${date === today ? "text-ocean" : "text-slate-500"}`}>Today</button>
            <button type="button" aria-pressed={date === tomorrow} onClick={() => { setDate(tomorrow); setError(""); }} className={`transition hover:text-ocean ${date === tomorrow ? "text-ocean" : "text-slate-500"}`}>Tomorrow</button>
          </div>
        </div>

        <Button
          type="submit"
          className="min-h-[58px] rounded-2xl px-5 text-base font-extrabold shadow-lg shadow-ocean/20 hover:-translate-y-0.5 md:my-auto md:min-h-[68px]"
        >
          <Search size={19} strokeWidth={2.4} aria-hidden="true" />
          Search Buses
        </Button>
      </div>
      <p className={`mt-3 flex min-h-5 items-center gap-2 text-sm ${error ? "text-rose-700" : "text-slate-500"}`} role="status" aria-live="polite">
        {error ? <AlertCircle size={16} aria-hidden="true" /> : null}
        {error || "Choose two cities and a date to prepare your search."}
      </p>
    </form>
  );
}
