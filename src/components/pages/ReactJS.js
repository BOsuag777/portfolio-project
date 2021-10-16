import React from 'react'

export const ReactJS = ({ data }) => {
    return (
        <div className="container py-5">
           <img src={data.events[2].reactjs.image} alt="..." />
           <h2>{data.events[2].reactjs.title}</h2>
           <p>{data.events[2].reactjs.description}</p>
        </div>
    )
}
