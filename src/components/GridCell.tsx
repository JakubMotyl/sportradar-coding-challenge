import type { CalendarEvent } from "../types";

interface GridCellProps {
    day: number | null;
    dailyEvents: CalendarEvent[];
}

export default function GridCell({ day, dailyEvents }: GridCellProps) {
    console.log(dailyEvents);
    return (
        <div className="h-24 px-2 py-1 flex flex-col gap-0.5 overflow-y-auto bg-white">
            <span className="font-black text-accent text-xs">{day || "-"}</span>
            <div className="flex flex-col gap-1">
                {dailyEvents.map((event, id) => (
                    <div
                        key={id}
                        // Events with status "played" are marked with bright red, events with status "scheduled" are marked with light green
                        className={`flex items-center gap-1 text-xs p-px rounded cursor-pointer ${event.status === "played" ? "bg-red-300" : "bg-green-300"}`}
                    >
                        <p className="font-medium">
                            {event.timeVenueUTC?.slice(0, 5) || "TBA"}
                        </p>
                        <span className="truncate">
                            {event.homeTeam?.officialName || "TBA"} vs{" "}
                            {event.awayTeam?.officialName || "TBA"}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
