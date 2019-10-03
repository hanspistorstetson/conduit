import React from 'react'

interface OwnProps {

}

interface StateProps {
    appName: string
}

type IProps = OwnProps & StateProps

class Header extends React.Component<StateProps> {
    render() {
        return (
            <nav className="navbar navbar-light">
                <div className="container">
                    <a className="navbar-brand">
                        {this.props.appName.toLowerCase()}
                    </a>
                </div>
            </nav>
        )
    }
}

export default Header