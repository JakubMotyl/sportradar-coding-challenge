import { describe, it, expect } from "vitest";
import { generateCalendarGrid } from "../utils/calendarUtils";

describe("generateCalendarGrid", () => {
    it("should generate correct grid for February 2024 (leap year, starts on Thursday)", () => {
        const year = 2024;
        const month = 2;
        const result = generateCalendarGrid(year, month);
        expect(result.length).toBe(35);
        expect(result[0]).toBe(null);
        expect(result[3]).toBe(1);
    });
    it("should generate correct grid for July 2024 (starts on Monday)", () => {
        const year = 2024;
        const month = 7;
        const result = generateCalendarGrid(year, month);
        expect(result.length).toBe(35);
        expect(result[0]).toBe(1);
        expect(result[34]).toBe(null);
    });
});
