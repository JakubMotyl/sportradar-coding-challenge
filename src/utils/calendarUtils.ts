export const weekDays: string[] = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
];

// Generates an array of days for a given year and month
export const generateCalendarGrid = (
  year: number,
  month: number,
): (number | null)[] => {
  // For month = 1 -> it's January for us, but February for JS
  // Passing day 0 returns the last day of the previous month
  const daysInMonth = new Date(year, month, 0).getDate();
  const firstDay = new Date(year, month - 1, 1).getDay();
  // Calculate how many empty cells are needed before the 1st of the month
  // If the 1st is Monday (1 + 6) % 7 = 0 empty cells needed
  const startingEmptyCells = (firstDay + 6) % 7;

  // Spread operator unpacks elements from both arrays, combining them into one big Array instead of two arrays inside one
  const currentCellsArray = [
    ...Array(startingEmptyCells).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  // Calculate how many empty cells are needed at the end to complete the week
  // If current length is 31 -> 4 empty cells needed
  const remainingEmptyCells = (7 - (currentCellsArray.length % 7)) % 7;
  return [...currentCellsArray, ...Array(remainingEmptyCells).fill(null)];
};
