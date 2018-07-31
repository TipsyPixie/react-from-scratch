const asyncWrapper = (asyncFunction) => {
  return async (req, res, next) => {
    try {
      await asyncFunction(req, res);
    } catch (err) {
      next(err);
    }
  }
};

export default asyncWrapper;
