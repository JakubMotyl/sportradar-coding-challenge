import Navbar from "./components/Navbar";
import Calendar from "./components/Calendar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <main className="md:h-[calc(100dvh-4rem)] h-[calc(100dvh-3rem)] p-2 md:p-4 lg:p-8">
                <Routes>
                    <Route path="/" element={<Calendar />} />
                    <Route path="/add-event" element={""} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
