interface GridCellProps {
  day: number | null;
  dailyEvents: string[];
}

export default function GridCell({ day, dailyEvents }: GridCellProps) {
  return (
    <div className="min-h-24 box-padding flex flex-col">
      <span>{day ? day : "-"}</span>
    </div>
  );
}
