import React from 'react'

export const NodeJS = ({ data }) => {
    return (
        <div>
        <div className="container py-5">
           <img src={data.events[0].nodejs.image} alt="..." />
           <h2>{data.events[0].nodejs.title}</h2>
           <p>{data.events[0].nodejs.description}</p>
        </div>
        </div>
    )
}
