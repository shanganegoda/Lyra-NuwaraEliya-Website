import { NextRequest, NextResponse } from "next/server";

// ─── iCal URLs ────────────────────────────────────────────────────────────────
// Replace each placeholder with the real Airbnb iCal export URL for that listing.
// In Airbnb: Listing → Availability → Export Calendar → Copy link
const ICAL_URLS: Record<string, string> = {
  villa:   "https://www.airbnb.com/calendar/ical/1404692181738696422.ics?t=42c8cf8ae74e4d51bb2d8e738a0057e3",
  night:   "AIRBNB_ICAL_URL_NIGHT_LILY",
  timber:  "AIRBNB_ICAL_URL_TIMBER_LILY",
  white:   "AIRBNB_ICAL_URL_WHITE_LILY",
};

// ─── Parser ───────────────────────────────────────────────────────────────────
function parseIcalDate(raw: string): Date | null {
  // Handles: 20241201  |  20241201T140000  |  20241201T140000Z
  const clean = raw.replace(/[TZ]/g, "").replace(/[-:]/g, "");
  const y = clean.slice(0, 4);
  const m = clean.slice(4, 6);
  const d = clean.slice(6, 8);
  if (!y || !m || !d) return null;
  return new Date(`${y}-${m}-${d}`);
}

function parseIcal(text: string): { start: string; end: string }[] {
  const events: { start: string; end: string }[] = [];
  const blocks = text.split("BEGIN:VEVENT");

  for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i];
    const startMatch = block.match(/DTSTART(?:[^:]*):(\S+)/);
    const endMatch   = block.match(/DTEND(?:[^:]*):(\S+)/);
    if (!startMatch || !endMatch) continue;

    const start = parseIcalDate(startMatch[1]);
    const end   = parseIcalDate(endMatch[1]);
    if (!start || !end) continue;

    events.push({
      start: start.toISOString().slice(0, 10),
      end:   end.toISOString().slice(0, 10),
    });
  }
  return events;
}

// ─── Route ────────────────────────────────────────────────────────────────────
export async function GET(req: NextRequest) {
  const listing = req.nextUrl.searchParams.get("listing") ?? "villa";
  const url = ICAL_URLS[listing];

  // If the URL is still a placeholder, return empty (no crash)
  if (!url || url.startsWith("AIRBNB_ICAL_URL")) {
    return NextResponse.json({ bookedDates: [], placeholder: true });
  }

  try {
    const res  = await fetch(url, { next: { revalidate: 3600 } }); // cache 1 hr
    const text = await res.text();
    const bookedDates = parseIcal(text);
    return NextResponse.json({ bookedDates });
  } catch (err) {
    console.error("iCal fetch failed:", err);
    return NextResponse.json({ bookedDates: [], error: true }, { status: 200 });
  }
}
