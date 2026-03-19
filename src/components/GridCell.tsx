import type { CalendarEvent } from "../types";

interface GridCellProps {
  day: number | null;
  dailyEvents: CalendarEvent[];
}

export default function GridCell({ day, dailyEvents }: GridCellProps) {
  console.log(dailyEvents);
  return (
    <div className="min-h-24 box-padding flex flex-col">
      <span>{day ? day : "-"}</span>
    </div>
  );
}
