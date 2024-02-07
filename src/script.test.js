import {getMonthName} from "./script";

it('returns formated month', () => {
    const result = getMonthName(1);
    expect(result).toBe('februar');
});

it('returns formated month', () => {
    const result = getMonthName(0);
    expect(result).toBe('januar');
});