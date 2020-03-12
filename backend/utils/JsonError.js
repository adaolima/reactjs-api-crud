function getErrorName(status) {
  switch (status) {
    case 200:
      return "OK";
    case 400:
      return "Bad Request";
    case 404:
      return "Not Found";
    case 500:
      return "Internal Server Error";
    default:
      return "Undefined";
  }
}

function JsonError(req, res, message) {
  const error = {
    timestamp: new Date().toISOString(),
    status: res.statusCode,
    error: getErrorName(res.statusCode),
    message,
    path: req.path,
    method: req.method
  };
  return error;
}

module.exports = JsonError;
