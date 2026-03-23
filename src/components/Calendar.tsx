import GridCell from "./GridCell";
import { weekDays, generateCalendarGrid } from "../utils/calendarUtils";
import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import type { CalendarEvent } from "../types";
import { useState } from "react";

interface CalendarProps {
    events: CalendarEvent[];
}

export default function Calendar({ events }: CalendarProps) {
    const [year, setYear] = useState(2024);
    const [month, setMonth] = useState(1);

    // Date text
    const date = new Date(year, month - 1);
    const monthName = date.toLocaleString("en-US", { month: "long" });
    const fullDateName = `${monthName} ${year}`;

    const daysArray = generateCalendarGrid(year, month);

    return (
        <section className="max-w-7xl mx-auto bg-white rounded overflow-hidden shadow-sm">
            <div className="box-padding flex justify-center">
                <div className="flex items-center justfify-center gap-1">
                    <button className="cursor-pointer md:text-xl text-base">
                        <MdOutlineKeyboardArrowLeft />
                    </button>
                    <p className="font-semibold uppercase md:text-base text-sm">
                        {fullDateName}
                    </p>
                    <button className="cursor-pointer md:text-xl text-base">
                        <MdOutlineKeyboardArrowRight />
                    </button>
                </div>
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
                    const formattedMonth = String(month).padStart(2, "0");
                    const dateString = `${year}-${formattedMonth}-${formattedDay}`;

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
