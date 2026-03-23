import Navbar from "./components/Navbar";
import Calendar from "./components/Calendar";
import EventDetails from "./components/EventDetails";
import AddEventForm from "./components/AddEventForm";
import eventsData from "../src/data/events.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import type { CalendarEvent } from "./types";
function App() {
    const [events, setEvents] = useState<CalendarEvent[]>(eventsData.data);

    function handleAddEvent(e: CalendarEvent) {
        setEvents((prev) => [...prev, e]);
    }

    return (
        <BrowserRouter>
            <Navbar />
            <main className="md:h-[calc(100dvh-4rem)] h-[calc(100dvh-3rem)] p-2 md:p-4 lg:p-8">
                <Routes>
                    <Route path="/" element={<Calendar events={events} />} />
                    <Route
                        path="/add-event"
                        element={
                            <AddEventForm handleAddEvent={handleAddEvent} />
                        }
                    />
                    <Route
                        path="/event/:id"
                        element={<EventDetails events={events} />}
                    />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
