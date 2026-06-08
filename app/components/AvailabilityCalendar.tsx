"use client";

import { useState, useEffect, useCallback } from "react";
// listing tabs removed — showing Complete Villa only
import { ChevronLeft, ChevronRight, RefreshCw } from "lucide-react";

// ─── Listing ──────────────────────────────────────────────────────────────────
const VILLA = {
  id: "villa",
  label: "Complete Villa",
  tag: "Entire Property",
  desc: "The full villa — all three rooms, entire property exclusively yours.",
  capacity: "Up to 12 guests",
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
const DAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

function toYMD(d: Date) {
  return d.toISOString().slice(0, 10);
}

function isDateBooked(
  ymd: string,
  booked: { start: string; end: string }[]
): boolean {
  return booked.some((b) => ymd >= b.start && ymd < b.end);
}

function buildMonth(year: number, month: number): (Date | null)[] {
  const first = new Date(year, month, 1);
  const last  = new Date(year, month + 1, 0);
  const cells: (Date | null)[] = [];
  for (let i = 0; i < first.getDay(); i++) cells.push(null);
  for (let d = 1; d <= last.getDate(); d++) cells.push(new Date(year, month, d));
  return cells;
}

// ─── Single month calendar ────────────────────────────────────────────────────
function MonthGrid({
  year,
  month,
  booked,
  isLoading,
}: {
  year: number;
  month: number;
  booked: { start: string; end: string }[];
  isLoading: boolean;
}) {
  const today = toYMD(new Date());
  const cells = buildMonth(year, month);

  return (
    <div className="flex-1 min-w-[280px]">
      <p className="font-playfair text-lg text-[#0f0e0c] mb-5 text-center">
        {MONTHS[month]} {year}
      </p>

      {/* Day headers */}
      <div className="grid grid-cols-7 mb-2">
        {DAYS.map((d) => (
          <div key={d} className="text-center font-inter text-[10px] text-[#a8a49e] tracking-widest py-1">
            {d}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 gap-px bg-[#e8e6e1]">
        {cells.map((date, idx) => {
          if (!date) {
            return <div key={`empty-${idx}`} className="bg-[#faf9f6] aspect-square" />;
          }

          const ymd    = toYMD(date);
          const isPast = ymd < today;
          const isToday   = ymd === today;
          const booked_   = !isLoading && isDateBooked(ymd, booked);

          return (
            <div
              key={ymd}
              className={`aspect-square flex items-center justify-center relative
                ${isPast        ? "bg-[#faf9f6]"            : ""}
                ${!isPast && !booked_ ? "bg-white"         : ""}
                ${booked_ && !isPast  ? "bg-[#a11d2b]"     : ""}
                ${isLoading           ? "animate-pulse"      : ""}
              `}
            >
              <span
                className={`font-inter text-xs
                  ${isPast          ? "text-[#d4d1cc]"             : ""}
                  ${isToday         ? "font-semibold"              : ""}
                  ${booked_ && !isPast ? "text-white"              : ""}
                  ${!isPast && !booked_ ? "text-[#0f0e0c]"        : ""}
                `}
              >
                {date.getDate()}
              </span>
              {isToday && !booked_ && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#a11d2b]" />
              )}
              {booked_ && !isPast && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="absolute inset-0 opacity-0" />
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function AvailabilityCalendar() {
  const today       = new Date();
  const [offset,  setOffset]    = useState(0);          // months from today
  const [booked,  setBooked]    = useState<{ start: string; end: string }[]>([]);
  const [loading, setLoading]   = useState(true);

  const fetchBooked = useCallback(async () => {
    setLoading(true);
    try {
      const res  = await fetch(`/api/availability?listing=villa`);
      const data = await res.json();
      setBooked(data.bookedDates ?? []);
    } catch {
      setBooked([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchBooked(); }, [fetchBooked]);

  // Two months to display
  const m1 = new Date(today.getFullYear(), today.getMonth() + offset, 1);
  const m2 = new Date(today.getFullYear(), today.getMonth() + offset + 1, 1);

  const canGoPrev = offset > 0;
  const canGoNext = offset < 10;;

  return (
    <>
      {/* ── Page header ── */}
      <section className="pt-36 pb-14 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-[#a11d2b] text-[10px] tracking-[0.35em] uppercase font-inter mb-5">
            Live Availability
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl text-[#0f0e0c] mb-6">
            Check Availability
          </h1>
          <p className="font-inter text-[#6b6861] text-base max-w-xl leading-relaxed">
            Our calendar syncs directly with Airbnb — dates shown in{" "}
            <span className="inline-block w-3 h-3 bg-[#a11d2b] rounded-sm align-middle mx-1" />
            burgundy are booked. White dates are available to reserve.
          </p>
        </div>
      </section>

      {/* ── Listing info strip ── */}
      <section className="bg-white border-b border-[#e8e6e1] py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
          <div className="flex-1">
            <p className="font-inter text-[10px] text-[#a8a49e] tracking-[0.2em] uppercase mb-1">
              {VILLA.tag}
            </p>
            <p className="font-playfair text-xl text-[#0f0e0c]">{VILLA.label}</p>
            <p className="font-inter text-sm text-[#6b6861] mt-0.5">{VILLA.desc}</p>
          </div>
          <div className="flex items-center gap-6">
            <div>
              <p className="font-inter text-[10px] text-[#a8a49e] tracking-widest uppercase mb-1">Capacity</p>
              <p className="font-inter text-sm text-[#0f0e0c]">{VILLA.capacity}</p>
            </div>
            <button
              onClick={fetchBooked}
              disabled={loading}
              className="text-[#a8a49e] hover:text-[#0f0e0c] transition-colors disabled:opacity-40"
              title="Refresh"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Calendar ── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Month navigation */}
          <div className="flex items-center justify-between mb-10">
            <button
              onClick={() => setOffset((o) => o - 1)}
              disabled={!canGoPrev}
              className="w-9 h-9 border border-[#e8e6e1] flex items-center justify-center hover:border-[#0f0e0c] transition-colors disabled:opacity-25"
            >
              <ChevronLeft className="w-4 h-4 text-[#6b6861]" />
            </button>

            <p className="font-inter text-xs text-[#a8a49e] tracking-widest uppercase">
              {MONTHS[m1.getMonth()]} – {MONTHS[m2.getMonth()]} {m2.getFullYear()}
            </p>

            <button
              onClick={() => setOffset((o) => o + 1)}
              disabled={!canGoNext}
              className="w-9 h-9 border border-[#e8e6e1] flex items-center justify-center hover:border-[#0f0e0c] transition-colors disabled:opacity-25"
            >
              <ChevronRight className="w-4 h-4 text-[#6b6861]" />
            </button>
          </div>

          {/* Two months side by side */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
            <MonthGrid year={m1.getFullYear()} month={m1.getMonth()} booked={booked} isLoading={loading} />
            <div className="hidden lg:block w-px bg-[#e8e6e1] self-stretch" />
            <MonthGrid year={m2.getFullYear()} month={m2.getMonth()} booked={booked} isLoading={loading} />
          </div>

          {/* Legend */}
          <div className="mt-10 flex items-center gap-8 pt-8 border-t border-[#e8e6e1]">
            <div className="flex items-center gap-2.5">
              <span className="w-4 h-4 bg-white border border-[#e8e6e1]" />
              <span className="font-inter text-xs text-[#6b6861]">Available</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-4 h-4 bg-[#a11d2b]" />
              <span className="font-inter text-xs text-[#6b6861]">Booked</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-4 h-4 bg-[#faf9f6] border border-[#e8e6e1]" />
              <span className="font-inter text-xs text-[#6b6861]">Past</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-4 h-4 bg-white border border-[#e8e6e1] flex items-end justify-center pb-0.5">
                <span className="w-1 h-1 rounded-full bg-[#a11d2b]" />
              </span>
              <span className="font-inter text-xs text-[#6b6861]">Today</span>
            </div>
          </div>

          {/* Book CTA */}
          <div className="mt-12 border border-[#e8e6e1] p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <p className="font-playfair text-xl text-[#0f0e0c] mb-1">Ready to Book?</p>
              <p className="font-inter text-sm text-[#6b6861]">
                Select your dates on Airbnb to instantly confirm your reservation.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.airbnb.co.uk/rooms/1404692181738696422"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#0f0e0c] text-white font-inter text-sm tracking-wider hover:bg-[#a11d2b] transition-colors duration-300"
              >
                Book on Airbnb
              </a>
              <a
                href="/contact"
                className="px-6 py-3 border border-[#e8e6e1] text-[#6b6861] font-inter text-sm tracking-wider hover:border-[#a8a49e] transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
