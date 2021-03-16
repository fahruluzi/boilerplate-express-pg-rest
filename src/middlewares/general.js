module.exports = (req, res, next) => {
  // add code for middleware
  res.sendSuccess = (data, message = null, status = 200) => {
    return res.status(status).send({
      success: true,
      data: data,
      message: message ? message : "success",
    });
  };

  res.sendError = (errors, message = null, status = 400) => {
    return res.status(status).send({
      success: false,
      errors: errors,
      message: message ? message : "bad_request",
    });
  };

  return next(); // use next to go next router
};
