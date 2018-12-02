export function generateRandomInteger(min, max): number {
    return Math.floor(min + Math.random()*(max + 1 - min));
}
