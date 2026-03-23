import { Link } from "react-router-dom";
import { MdCalendarMonth, MdEventNote } from "react-icons/md";

export default function Navbar() {
    return (
        <nav className="md:h-16 h-12 md:px-8 px-4 py-1 flex items-center justify-between bg-white w-full">
            <Link
                to="/"
                className="flex items-center md:gap-2 gap-1 md:text-base text-sm font-bold text-accent"
            >
                <MdCalendarMonth />
                <span>SportCal</span>
            </Link>
            <div className="flex items-center md:gap-4 gap-2">
                <Link
                    to="/"
                    className="flex items-center font-semibold md:gap-2 gap-1 md:text-base text-sm bg-white text-black border border-accent md:py-2 py-1.5 md:px-4 px-2 rounded cursor-pointer hover:scale-95 duration-300"
                >
                    Calendar
                </Link>
                <Link
                    to="/add-event"
                    className="flex items-center font-semibold md:gap-2 gap-1 md:text-base text-sm border border-accent bg-accent text-white md:py-2 py-1.5 md:px-4 px-2 rounded cursor-pointer hover:scale-95 duration-300"
                >
                    <MdEventNote />
                    <span>Add Event</span>
                </Link>
            </div>
        </nav>
    );
}
