function generateErrorS(message: string, code: number): never {
  throw { message, errorCode: code }
}

const persons = {
  age: 21,
  test: 'test',
}

const { age, test }: { age: number; test: string } = persons

console.log('Age => Test', age, test)

generateErrorS('ERROR', 420)
// generateError('ERROR', 420) // TODO: hee
