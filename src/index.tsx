import React from "react";
import ReactDOM from "react-dom";
import { createStore, Reducer, Store } from "redux";

import App from "./App";

enum ToggleActionTypes {
  TOGGLE = "TOGGLE"
}

export interface IToggleAction {
  type: ToggleActionTypes.TOGGLE;
}

type ToggleActions = IToggleAction;

interface IToggleState {
  readonly checked: boolean;
}

const defaultState: IToggleState = { checked: false };

const reducer: Reducer<IToggleState, ToggleActions> = function(
  state = defaultState,
  action
) {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, checked: !state.checked };

    default:
      return state;
  }
};

const store: Store<IToggleState, any> = createStore(reducer, undefined);

ReactDOM.render(<App store={store} />, document.getElementById("root"));
