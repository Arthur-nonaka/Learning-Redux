function reducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENTAR":
      return state + 1;
    case "REDUZIR":
      return state - 1;
    default:
      return state;
  }
}

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("ACTION: ", action);
  console.log("PREV STATE", store.getState());
  next(action);
  console.log("BEFO STATE", store.getState());
  console.groupEnd();
  return next(action);
};

const { applyMiddleware, compose } = Redux;
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(logger));

const store = Redux.createStore(reducer, enhancer);

store.dispatch({ type: "INCREMENTAR" });
