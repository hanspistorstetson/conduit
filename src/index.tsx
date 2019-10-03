import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore, Reducer, Store } from "redux";

import App from "./App";

enum ToggleActionTypes {
  TOGGLE = "TOGGLE"
}

export interface IToggleAction {
  type: ToggleActionTypes.TOGGLE;
}

type ToggleActions = IToggleAction;

export interface IToggleState {
  readonly checked: boolean;
  readonly appName: string
  readonly articles: String[] 
}

const defaultState: IToggleState = { checked: false, appName: 'conduit', articles: []};

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

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
