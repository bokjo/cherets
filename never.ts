function generateError(message: string, code: number): never {
  throw { message, errorCode: code }
}

generateError('ERROR', 420)
