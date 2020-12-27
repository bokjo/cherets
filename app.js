function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('ERROR', 420);
