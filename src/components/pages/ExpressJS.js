import React from 'react'

export const ExpressJS = ({ data }) => {
    return (
        <div className="container py-5">
           <img src={data.events[1].expressjs.image} alt="..." />
           <h2>{data.events[1].expressjs.title}</h2>
           <p>{data.events[1].expressjs.description}</p>
        </div>
    )
}
