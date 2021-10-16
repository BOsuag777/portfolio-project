import React from 'react'

export const MongoDB = ({ data }) => {
    return (
        <div>
        <div className="container py-5">
           <img src={data.events[3].mongodb.image} alt="..." /> 
           <h2>{data.events[3].mongodb.title}</h2>
           <p>{data.events[3].mongodb.description}</p>
        </div>
        </div>
    )
}
