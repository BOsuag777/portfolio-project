import React from 'react'
import { NavLink, Route, Redirect } from 'react-router-dom';
import eventsData from "../../data/Events.json";


// NESTED COMPONENTS
import { NodeJS } from './NodeJS';
import { MongoDB } from './MongoDB';
import { ExpressJS } from './ExpressJS';
import { ReactJS } from './ReactJS';

export const Portfolio = () => {
    return (
        <>
           <div className="container py-5">
            <h2 className="text-center mt-5 pt-3 text-uppercase">Portfolio</h2>
            <NavLink exact to="/portfolio/nodejs" className="btn btn-secondary p-2 m-2">
                Node JS
            </NavLink>
            <NavLink to="/portfolio/mongodb" className="btn btn-secondary p-2 m-2">
                Mongo DB
            </NavLink>
            <NavLink to="/portfolio/expressjs" className="btn btn-secondary p-2 m-2">
                Express JS
            </NavLink>
            <NavLink to="/portfolio/reactjs" className="btn btn-secondary p-2 m-2">
                React JS
            </NavLink>
            <Route path="/portfolio/nodejs" render={() => <NodeJS  data={ eventsData } />}/>   
            <Route path="/portfolio/mongodb" render={() => <MongoDB  data={ eventsData } />}/>   
            <Route path="/portfolio/expressjs" render={() => <ExpressJS data={ eventsData } />}/>  
            <Route path="/portfolio/reactjs" render={() => <ReactJS data={ eventsData } />}/>  
            </div> 
        </>
    )
}
