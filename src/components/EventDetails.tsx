import { useParams, Link } from "react-router-dom";
import type { CalendarEvent } from "../types";

interface EventDetailProps {
    events: CalendarEvent[];
}

export default function EventDetail({ events }: EventDetailProps) {
    const { id } = useParams();

    // Check if any event with this url exists
    const event = events.find((e) => {
        const home = e.homeTeam?.officialName || "TBA";
        const away = e.awayTeam?.officialName || "TBA";
        const eSlug = `${e.dateVenue}-${home}-vs-${away}`
            .replaceAll(" ", "-")
            .toLowerCase();

        // Return the event when matches the id
        return eSlug === id;
    });

    if (!event) {
        return (
            <div className="bg-white p-8 rounded shadow-sm text-center">
                <h2 className="text-2xl font-bold mb-4 text-red-600">
                    Event not found!
                </h2>
                <Link
                    to="/"
                    className="text-accent hover:underline font-semibold"
                >
                    Back to Calendar
                </Link>
            </div>
        );
    }

    return (
        <section className="flex flex-col items-center gap-6 md:gap-8 max-w-2xl bg-white mx-auto rounded shadow-sm py-4 px-2 sm:px-6">
            {/* HEADER */}
            <div className="flex flex-col items-center text-center">
                <p className="text-blue-400 font-bold uppercase text-lg md:text-xl">
                    {event.originCompetitionName}
                </p>
                <span className="text-gray-500 font-medium text-sm md:text-base">
                    {event.stage.name}
                </span>
            </div>

            {/* MAIN CONTENT */}
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-6 sm:gap-4 items-center w-full">
                {/* HOME TEAM */}
                <div className="event-details-container order-1">
                    <div className="team-logo">
                        {event.homeTeam?.officialName[0] || "TBA"}
                    </div>
                    <p className="text-black font-semibold text-center text-sm md:text-base">
                        {event.homeTeam?.officialName || "TBA"}
                    </p>
                </div>

                {/* RESULT + DATE */}
                <div className="flex flex-col items-center gap-2 order-2">
                    <div className="flex items-center gap-2 rounded bg-accent py-2 px-4 text-xl md:text-2xl shadow-accent shadow-sm">
                        <p className="font-black text-white">
                            {event.result?.homeGoals || "-"}
                        </p>
                        <span className="text-white text-base">:</span>
                        <p className="font-black text-white">
                            {event.result?.awayGoals || "-"}
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-gray-500 font-semibold">
                        <p className="text-sm md:text-base">
                            {event.dateVenue}
                        </p>
                        <p className="-mt-0.5 text-[10px] md:text-xs tracking-tighter">
                            {event.timeVenueUTC} UTC
                        </p>
                    </div>
                </div>

                {/* AWAY TEAM */}
                <div className="event-details-container order-3">
                    <div className="team-logo">
                        {event.awayTeam?.officialName[0] || "TBA"}
                    </div>
                    <p className="text-black font-semibold text-center text-sm md:text-base">
                        {event.awayTeam?.officialName || "TBA"}
                    </p>
                </div>
            </div>

            {/* Winner */}
            <div className="flex flex-col items-center">
                <span className="text-gray-500 uppercase font-semibold text-xs md:text-sm">
                    Winner
                </span>
                <p className="italic text-green-500 text-lg md:text-xl font-bold uppercase">
                    {event.result?.winner || "TBA"}
                </p>
            </div>
        </section>
    );
}
