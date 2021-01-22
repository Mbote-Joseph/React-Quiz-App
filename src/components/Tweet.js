import React from 'react'
import './../App.css'
function Tweet(props) {
    return (
        <div className="tweet">
            <h1>{props.name}</h1>
            <p><i>{props.tweet}</i></p>
            <h3>{props.likes}</h3>
        </div>
    )
}

export default Tweet
