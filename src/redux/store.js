import { CalculatorReducer } from "./CalculatorReducer/CalculatorReducer";
import thunk from "redux-thunk";

import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { DashboardInformationReduser } from "./DashboardReducer/DashboardReducer";
import { AppReducer } from "./App/AppReducer";

const rootReducer = combineReducers({
  calculator: CalculatorReducer,
  dashboard: DashboardInformationReduser,
  app: AppReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
