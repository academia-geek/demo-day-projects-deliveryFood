import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { usersReducer } from "./reducers/usersReducer";
// import { productsReducer } from "./reducers/productsReducer";


const reducers = combineReducers({
  users: usersReducer,
  // products: productsReducer,
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
)