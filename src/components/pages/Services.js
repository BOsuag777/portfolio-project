import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../layouts/Button";

// IMPORT AVATARS
import avatar1 from "../../avatars/avatar-1.png";
import avatar2 from "../../avatars/avatar-2.png";
import avatar3 from "../../avatars/avatar-3.png";
import avatar4 from "../../avatars/avatar-4.png";

export const Services = () => {
    return (
        <MainContainer>
            <div className="container">
                <div className="row mx-auto justify-content-center">
                    {/* SPEAKER 1 */}
                    <div className="card col-md-6 p-2">
                        <img src={avatar1} alt="..." className="card-img-top mx-auto" />
                        <div className="card-body">
                            <h3 className="card-title text-center pb-2">Peter Gragory</h3>
                            <h5>
                                Subject: <b>NODE JS</b>
                            </h5>
                            <p>You will see output with no errors, but several warnings. This means the check was
                                successful, but you should go through the warnings to see if there is anything more
                                you can do to make your project safe for production. We are not going to go deeper
                                into this, but keep in mind that you should check your project before production
                                use to look for any relevant issues.</p>
                            <Link to="/service/List/0">
                               <Button className="btn btn-primary text-uppercase">more info</Button>
                            </Link>
                        </div>
                    </div>
                    {/* SPEAKER 2 */}
                    <div className="card col-md-6 p-2">
                        <img src={avatar2} alt="..." className="card-img-top mx-auto" />
                        <div className="card-body">
                            <h3 className="card-title text-center pb-2">Masher Anderson</h3>
                            <h5>
                                Subject: <b>Django </b>
                            </h5>
                            <p>You will see output with no errors, but several warnings. This means the check was
                                successful, but you should go through the warnings to see if there is anything more
                                you can do to make your project safe for production. We are not going to go deeper
                                into this, but keep in mind that you should check your project before production
                                use to look for any relevant issues.</p>
                            <Link to="/service/List/1">
                               <Button className="btn btn-primary text-uppercase">more info</Button>
                            </Link>
                        </div>
                    </div>
                     {/* SPEAKER 3 */}
                     <div className="card col-md-6 p-2">
                        <img src={avatar3} alt="..." className="card-img-top mx-auto" />
                        <div className="card-body">
                            <h3 className="card-title text-center pb-2">Van Damm</h3>
                            <h5>
                                Subject: <b>React js</b>
                            </h5>
                            <p>You will see output with no errors, but several warnings. This means the check was
                                successful, but you should go through the warnings to see if there is anything more
                                you can do to make your project safe for production. We are not going to go deeper
                                into this, but keep in mind that you should check your project before production
                                use to look for any relevant issues.</p>
                            <Link to="/service/List/2">
                               <Button className="btn btn-primary text-uppercase">more info</Button>
                            </Link>
                        </div>
                    </div>
                     {/* SPEAKER 1 */}
                    <div className="card col-md-6 p-2">
                        <img src={avatar4} alt="..." className="card-img-top mx-auto" />
                        <div className="card-body">
                            <h3 className="card-title text-center pb-2">Bruce Lee</h3>
                            <h5>
                                Subject: <b>Lua Expart</b>
                            </h5>
                            <p>You will see output with no errors, but several warnings. This means the check was
                                successful, but you should go through the warnings to see if there is anything more
                                you can do to make your project safe for production. We are not going to go deeper
                                into this, but keep in mind that you should check your project before production
                                use to look for any relevant issues.</p>
                            <Link to="/service/List/3">
                               <Button className="btn btn-primary text-uppercase">more info</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </MainContainer>
    )
}

// STYLED COMPONENTS STYLES
const MainContainer = styled.div`
   background: var(--primary-dark-blue);
   .card-img-top {
       width: 10rem;
   }

   @media (min-width: 768px) {
       .col-md-6 {
           max-width: 40% !important;
       }
   }

   .card {
       margin: 1rem !important;
       background: transparent;
   }

   h3 {
       color: var(--primary-red)
   }

   h5 {
       color: var(--primary-tomato);
   }

   p {
       color: var(--primary-orange);
   }
`;