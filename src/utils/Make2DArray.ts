export function make2DArray(width: number = 5, height: number = 5): number[][] {
    return Array.from({length: height}, () => Array.from({length: width}, () =>  0))
}