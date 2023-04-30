export const middleware = (store) => (next) => (action) => {
  console.log("State Before Action", action, store.getState());
  return next(action);
};
