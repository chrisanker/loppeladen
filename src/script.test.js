import {getMonthName} from "./script";

it('returns formated month', () => {
    const result = getMonthName(1);
    expect(result).toBe('februar');
});