import React from 'react'
import styled from 'styled-components'

export const NotFoundPage = () => {
    return (
        <MainContainer>
        <div className="container py-5 d-flex justify-content-center align-items-center h-100">
            <h3>Sorry, we can't find what you are looking for!!!</h3>
            <img src="http://vicworldwide.com/img/404.png" alt="..." style={{ width: "10rem", marginLeft: "1rem"}} />
        </div>
        </MainContainer>
    )
}


// STYLED COMPONENTS
const MainContainer = styled.div`
   height: 100vh;
`;