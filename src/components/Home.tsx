import React from 'react'
import { connect } from 'react-redux'

import { IToggleState } from '../index'

import Banner from './Banner'
import MainView from './MainView'

interface OwnProps {

}

interface StateProps {
    appName: string
}

type IProps = OwnProps & StateProps

class Home extends React.Component<IProps> {
    render() {
        return (
            <div className="home-page">
                <Banner appName={this.props.appName} />

                <div className="container page">
                    <div className="row">
                        <MainView />

                        <div className="col-md-3">
                            <div className="sidebar">
                                <p>Popular Tags</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: IToggleState) => ({
    appName: state.appName
})

export default connect(mapStateToProps)(Home)