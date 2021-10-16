import React from 'react'
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { Button } from "../layouts/Button";
import { Avatar } from "../layouts/Avatar";


// IMPORT AVATARS
import avatar1 from "../../avatars/avatar-1.png";
import avatar2 from "../../avatars/avatar-2.png";
import avatar3 from "../../avatars/avatar-3.png";
import avatar4 from "../../avatars/avatar-4.png";


const SPEAKERS = [
    {
        id: 0,
        spkImg: avatar1,
        name: "Peter Gregory",
        occupation: "Team Lead in The best company of the world",
        description: 
        "You will see output with no errors, but several warnings. This means the check was successful, but you should go through the warnings to see if there is anything more you can do to make your project safe for production. We are not going to go deeper  into this, but keep in mind that you should check your project before production  use to look for any relevant issues. ",
    },
    {
        id: 1,
        spkImg: avatar2,
        name: "Masher Anderson",
        occupation: "Team Lead in The best company of the world",
        description: 
        "You will see output with no errors, but several warnings. This means the check was successful, but you should go through the warnings to see if there is anything more you can do to make your project safe for production. We are not going to go deeper  into this, but keep in mind that you should check your project before production  use to look for any relevant issues. ",
    },
    {
        id: 2,
        spkImg: avatar3,
        name: "Mike Anderson",
        occupation: "Team Lead in The best company of the world",
        description: 
        "You will see output with no errors, but several warnings. This means the check was successful, but you should go through the warnings to see if there is anything more you can do to make your project safe for production. We are not going to go deeper  into this, but keep in mind that you should check your project before production  use to look for any relevant issues. ",
    },
    {
        id: 3,
        spkImg: avatar4,
        name: "Bob Larry",
        occupation: "Team Lead in The best company of the world",
        description: 
        "You will see output with no errors, but several warnings. This means the check was successful, but you should go through the warnings to see if there is anything more you can do to make your project safe for production. We are not going to go deeper  into this, but keep in mind that you should check your project before production  use to look for any relevant issues. ",
    },
]

export const List = () => {
    let {id} = useParams();
    let speaker = SPEAKERS[parseInt(id, 4)]
    return (
        <MainContainer>
            <div className="container mb-5">
                <div className="card">
                   <Avatar speakerImage={speaker.spkImg} />
                   <h3>{speaker.name}</h3>
                   <div className="card-body px-0">
                       <h5 className="card-title">{speaker.occupation}</h5>
                       <p className="card-text">{speaker.description}</p>
                       <Link to="/services">
                           <Button className="btn btn-primary text-uppercase">
                               back to speakers
                           </Button>
                       </Link>
                   </div>
                </div>
            </div>
        </MainContainer>
    )
}


// STYLED COMPONENTS STYLES
const MainContainer = styled.div`
   background: var(--primary-dark-blue);
   padding: 4rem 0 0;
   padding-bottom: 4rem;
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
       padding-top: 1rem;
       color: var(--primary-red)
   }

   h5 {
       color: var(--primary-tomato);
   }

   p {
       color: var(--primary-orange);
   }
`;