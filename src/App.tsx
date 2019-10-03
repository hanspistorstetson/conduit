import React from "react";
import { connect } from 'react-redux'

import { IToggleState } from './index'
import Header from './components/Header'
import Home from "./components/Home"

interface StateProps {
  appName: string
}

interface OwnProps {

}

type IProps  = StateProps & OwnProps

class App extends React.Component<IProps, {}> {

  render() {
    return (
      <div>
        <Header appName={this.props.appName} />
        <Home />
      </div>
    );
  }
}

const mapStateToProps = (state: IToggleState) => ({
    appName: state.appName
})

export default connect(mapStateToProps)(App)
