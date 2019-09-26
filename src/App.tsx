import React from "react";
import { Store } from "redux";

interface IState {
  checked: boolean;
}
interface IProps {
  store: Store;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      checked: false
    };
  }

  render() {
    const { store } = this.props;
    const onClick = () => store.dispatch({ type: "TOGGLE" });
    return (
      <div>
        <h1>To-dos</h1>
        <div>
          Learn Redux&nbsp;
          <input
            type="checkbox"
            checked={!!this.state.checked}
            onClick={onClick}
          />
        </div>
        {this.state.checked ? <h2>Done!</h2> : null}
      </div>
    );
  }
}

export default App;
