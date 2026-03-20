import GridCell from "./GridCell";
import { weekDays, generateCalendarGrid } from "../utils/calendarUtils";
import eventsData from "../data/events.json";
import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
    MdEventNote,
} from "react-icons/md";

export default function Calendar() {
    const year = 2024;
    const month = 1;

    const daysArray = generateCalendarGrid(year, month);

    const events = eventsData.data;

    return (
        <section className="max-w-7xl mx-auto bg-white rounded overflow-hidden">
            <div className="flex items-center justify-between box-padding">
                <div className="flex items-center gap-2">
                    <button className="cursor-pointer md:text-xl text-base">
                        <MdOutlineKeyboardArrowLeft />
                    </button>
                    <p className="font-semibold uppercase md:text-base text-sm">
                        JANUARY 2024
                    </p>
                    <button className="cursor-pointer md:text-xl text-base">
                        <MdOutlineKeyboardArrowRight />
                    </button>
                </div>
                <button className="flex items-center font-semibold md:gap-2 gap-1 md:text-base text-sm bg-accent text-white md:py-2 py-1.5 md:px-4 px-2 rounded cursor-pointer hover:scale-95 duration-300">
                    Create
                    <MdEventNote className="md:text-xl text-base" />
                </button>
            </div>
            {/* Display weekdays */}
            <div className="grid grid-cols-7 border-t border-b border-accent">
                {weekDays.map((day) => (
                    <div
                        className="text-center md:text-base text-sm py-1 font-medium"
                        key={day}
                    >
                        {day}
                    </div>
                ))}
            </div>
            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-px bg-accent">
                {daysArray.map((day, index) => {
                    // Render empty cells for days from the previous month
                    if (day === null) {
                        return (
                            <GridCell
                                key={`empty-${index}`}
                                day={null}
                                dailyEvents={[]}
                            />
                        );
                    }

                    // Format day to match JSON - instead of '2024-01-3' -> '2024-01-03'
                    const formattedDay = String(day).padStart(2, "0");
                    const dateString = `${year}-01-${formattedDay}`;

                    // Filter events that match the date
                    const dailyEvents = events.filter(
                        (element) => element.dateVenue === dateString,
                    );

                    return (
                        <GridCell
                            key={day}
                            day={day}
                            dailyEvents={dailyEvents}
                        />
                    );
                })}
            </div>
        </section>
    );
}
