function addNumbers(n1: number, n2: number): number {
  return n1 + n2
}

function printResult(num: number): void {
  console.log('Result: ', num)
}

let combineValues: (a: number, b: number) => number

combineValues = addNumbers
// combineValues = printResult

console.log(combineValues(5, 5))
