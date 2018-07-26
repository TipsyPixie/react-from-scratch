// @flow
const asyncWrapper = (asyncFunction: (mixed, mixed) => mixed) => {
  return async (req: mixed, res: mixed, next: mixed => mixed) => {
    try {
      await asyncFunction(req, res)
    } catch (err) {
      next(err);
    }
  }
};

export default asyncWrapper;
