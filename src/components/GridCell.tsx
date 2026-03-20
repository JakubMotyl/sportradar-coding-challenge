import type { CalendarEvent } from "../types";

interface GridCellProps {
    day: number | null;
    dailyEvents: CalendarEvent[];
}

export default function GridCell({ day, dailyEvents }: GridCellProps) {
    console.log(dailyEvents);
    return (
        <div className="md:h-24 h-20 md:px-2 px-1 py-1 flex flex-col gap-0.5 overflow-y-auto bg-white">
            <span className="font-black text-accent md:text-xs text-[0.6rem]">
                {day || "-"}
            </span>
            <div className="flex flex-col gap-1">
                {dailyEvents.map((event, id) => (
                    <div
                        key={id}
                        // Events with status "played" are marked with bright red, events with status "scheduled" are marked with light green
                        className={`flex md:flex-row flex-col md:items-center items-start md:gap-1 gap-0.5 md:text-xs text-[0.6rem] p-px rounded cursor-pointer ${event.status === "played" ? "bg-red-300" : "bg-green-300"}`}
                    >
                        <p className="font-medium whitespace-nowrap">
                            {event.timeVenueUTC?.slice(0, 5) || "TBA"}
                        </p>
                        <span className="truncate w-full">
                            {event.homeTeam?.officialName || "TBA"} vs{" "}
                            {event.awayTeam?.officialName || "TBA"}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
