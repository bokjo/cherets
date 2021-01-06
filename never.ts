function generateError(message: string, code: number): never {
  throw { message, errorCode: code }
}

generateError('ERROR', 420)
type Che = string | number

function tests(n1: number): Che {
  return 'Hehe'
}
