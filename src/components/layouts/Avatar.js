import React from 'react'

export const Avatar = ({speakerImage}) => {
    return (
        <div>
            <img src={speakerImage} alt="..." style={{ width: "10rem"}} />
        </div>
    )
}
