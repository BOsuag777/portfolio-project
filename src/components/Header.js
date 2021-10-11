import React from "react";
import Typed from "react-typed";

export const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Web development and websites promotions</h1>
                <Typed 
                   className="typed-text"
                   strings={["Web Design", "Web Develoment", "Facebook Ads SMM", "Google Ads"]}
                   typeSpeed={40}
                   backSpeed={60}
                   loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}
