import GridCell from "./GridCell"
import { weekDays, generateCalendarGrid } from "../utils/calendarUtils"
import eventsData from '../data/events.json'

export default function Calendar() {
    const year = 2024;
    const month = 1;

    const daysArray = generateCalendarGrid(year, month);

    const events = eventsData.data;
    console.log(events)

    return (
        <section className="max-w-6xl mx-auto">
            <div>
                JANUARY 2024
            </div>
            {/* Display weekdays */}
            <div className="grid grid-cols-7 gap-2 py-1">
                {weekDays.map(day => (
                    <div className="bg-amber-200" key={day}>{day}</div>
                ))}
            </div>
            {/* Calendar grid */}
            <div className="grid grid-cols-7">

                {daysArray.map((day, index) => {
                    // Render empty cells for days from the previous month
                    if (day === null) {
                        return <GridCell key={`empty-${index}`} day={null} dailyEvents={[]} />
                    }

                    // Format day to match JSON - instead of '2024-01-3' -> '2024-01-03'
                    const formattedDay = String(day).padStart(2, '0');
                    const dateString = `${year}-01-${formattedDay}`;

                    // Filter events that match the date
                    const dailyEvents = events.filter(element => element.dateVenue === dateString)

                    return (
                        <GridCell key={day} day={day} dailyEvents={dailyEvents} />
                    )
                })}
            </div>
        </section>
    )
}
