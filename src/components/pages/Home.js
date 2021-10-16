import React from 'react'
import { Header } from '../layouts/Header';
import Particles from 'react-particles-js';
import styled from 'styled-components';

export const Home = () => {
    return (
        <>

        <MainContainer className="home-main-container">
        <Particles 
           className="particles-canvas"
           params={{
             particles: {
               number:  {
                 value: 30, 
                 density: {
                   enable: true,
                   value_area: 900
                 },
               },
               shape: {
                 type: "circle",
                 stroke: {
                   width: 6,
                   color: "#f9ab00"
                 },
               },
    
             }
           }}
        />
        <Header />
        <div className="container">
            <h1 className="display-5 text-uppercase py-5 text-center">
                Welcome to 2021 Javascript Conference
            </h1>
            <p>
            Django includes the check management command for checking your project at any
            time. This command inspects the applications installed in your Django project and
            outputs any errors or warnings. If you include the --deploy option, additional
            checks only relevant for production use will be triggered.
            </p>
            <div className="form-box">
                <h3 className="display-6 text-uppercase text-center py-3">
                    register and reserve your seat 
                </h3>
                <form>
                    <div className="row mr-auto">
                        <div className="col-md-6 mb-4">
                            <input type="text" className="form-control" placeholder="First Name" />
                        </div>
                        <div className="col-md-6 mb-4">
                            <input type="text" className="form-control" placeholder="Last Name" />
                        </div>
                        <div className="col-md-6 mb-4">
                            <input type="text" className="form-control" placeholder="Your Phone Number" />
                        </div>
                        <div className="col-md-6 mb-4">
                            <input type="text" className="form-control" placeholder="Email" />
                        </div>
                    </div>
                    <button className="btn btn-primary text-uppercase">
                        reserve your seat
                    </button>
                </form>
            </div>
        </div>
       </MainContainer>
       
       </>
    );
}


// STYLED COMPONENTS STYLES
const MainContainer = styled.div`
   h1 {
       color: var(--primary-tomato);
   }
   p {
       color: var(--primary-orange);
   }
   h3 {
       color: var(--primary-tomato);
   }

   .form-box {
       padding: 6rem 0;
   }

   form {
       width: 50rem;
       margin: 0 auto;
   }
   
   @media(max-width: 760px) {
       form {
           width: 100%;
       }
   }

   @media(min-width: 760px) {
    form {
        width: 100%;
    }
   }

   button {
       width: 100%;
       background: transparent;
       border-color: var(--primary-red);
       &:hover {
           background: var(--primary-tomato);
           border-color: var(--primary-red);
       }
       &:focus {
           background: var(--primary-tomato);
           border-color: var(--primary-tomato);
       }
   }

   input {
       background: var(--primary-red);
       opacity: 0.7;
   }
   
`