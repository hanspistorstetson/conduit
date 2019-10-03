import React from 'react'

interface IProps {
    appName: string
}

const Banner = ({ appName }: IProps) => {
    return (
        <div className="banner">
            <div className="container">
                <h1 className="logo-font">
                    {appName.toLowerCase()}
                </h1>
                <p>A place to share your knowledge</p>
            </div>
        </div>
    )
}

export default Banner