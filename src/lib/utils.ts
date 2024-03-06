import { MAX_SAFE_INTEGER } from "../constants/constants";

const isSafeNumber = (value: number): boolean => {
    return typeof value === 'number' && Math.abs(value) <= MAX_SAFE_INTEGER;
}


export { isSafeNumber };