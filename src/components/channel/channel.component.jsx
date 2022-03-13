import React from 'react'
import "./channel.styles.scss";

const Channel = ({name}) => {
    
    return (

        <div className="channel">
            <span className="channel__icon">#</span>{name}
        </div>

    )
}

export default Channel;