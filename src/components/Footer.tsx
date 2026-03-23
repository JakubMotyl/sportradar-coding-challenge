import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-white text-accent py-2 text-center">
            <div className="flex items-center justify-center gap-1">
                <span className="md:text-sm text-xs font-normal">
                    Built with React & TypeScript by
                </span>
                <Link
                    to="https://github.com/JakubMotyl"
                    className="font-bold underline md:text-sm text-xs flex items-center gap-1"
                    target="_blank"
                    rel="noreferrer"
                >
                    Jakub
                    <FaGithub className="md:text-base text-sm" />
                </Link>
            </div>
        </footer>
    );
}
