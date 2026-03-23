import { useState } from "react";
import type { CalendarEvent } from "../types";
import { useNavigate } from "react-router-dom";

interface AddEventFormProps {
    handleAddEvent: (e: CalendarEvent) => void;
}

export default function AddEventForm({ handleAddEvent }: AddEventFormProps) {
    const [form, setForm] = useState<CalendarEvent>({
        status: "scheduled",
        dateVenue: "",
        timeVenueUTC: "",
        stadium: "",
        homeTeam: {
            officialName: "",
        },
        awayTeam: {
            officialName: "",
        },
        result: null,
        stage: {
            id: "regular",
            name: "Regular Season",
        },
        originCompetitionName: "Custom Event",
    });

    const navigate = useNavigate();

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        setForm((prev) => {
            if (name === "homeTeam") {
                return {
                    ...prev,
                    homeTeam: { officialName: value },
                };
            }
            if (name === "awayTeam") {
                return {
                    ...prev,
                    awayTeam: { officialName: value },
                };
            }

            return {
                ...prev,
                [name]: value,
            };
        });
    }

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        handleAddEvent(form);
        navigate("/");
    }

    return (
        <section className="flex flex-col items-center gap-6 md:gap-8 max-w-2xl bg-white mx-auto rounded shadow-sm py-4 px-2 sm:px-6">
            <form
                action="#"
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-8"
            >
                {/* Home Team */}
                <div className="form-box">
                    <label htmlFor="homeTeam" className="form-box-title">
                        Home Team
                    </label>
                    <input
                        type="text"
                        id="homeTeam"
                        name="homeTeam"
                        onChange={handleChange}
                        placeholder="FC Barcelona"
                        maxLength={30}
                        className="form-box-input"
                        autoComplete="off"
                        required
                    />
                </div>
                {/* Away Team */}
                <div className="form-box">
                    <label htmlFor="awayTeam" className="form-box-title">
                        Away Team
                    </label>
                    <input
                        type="text"
                        id="awayTeam"
                        name="awayTeam"
                        onChange={handleChange}
                        placeholder="Real Madrid"
                        maxLength={30}
                        className="form-box-input"
                        autoComplete="off"
                        required
                    />
                </div>

                <div className="flex items-center justify-between gap-20">
                    {/* Date */}
                    <div className="form-box">
                        <label htmlFor="dateVenue" className="form-box-title">
                            Date
                        </label>
                        <input
                            type="date"
                            id="dateVenue"
                            name="dateVenue"
                            onChange={handleChange}
                            className="form-box-input"
                            required
                        />
                    </div>
                    {/* Time */}
                    <div className="form-box">
                        <label
                            htmlFor="timeVenueUTC"
                            className="form-box-title"
                        >
                            Time
                        </label>
                        <input
                            type="time"
                            id="timeVenueUTC"
                            name="timeVenueUTC"
                            onChange={handleChange}
                            className="form-box-input"
                            required
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="md:text-lg text-base font-semibold border-2 border-accent rounded py-0.5 px-4 bg-white text-accent cursor-pointer hover:text-white hover:bg-accent duration-200"
                    >
                        Add Event
                    </button>
                </div>
            </form>
        </section>
    );
}
