import React from 'react'
import {Link} from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
    return (
        <FooterContainer>
            <div className="container-fluid">
                <div className="row pt-5">
                    {/* Column 1 */}
                    <div className="col-sm-3 col-xs-12 d-flex">
                        <ul className="list-inline mx-auto justify-content-center">
                            <Link>
                              <li>Lorem ipsum</li>
                            </Link>
                            <Link>
                              <li>Lorem ipsum</li>
                            </Link>
                            <Link>
                              <li>Lorem ipsum</li>
                            </Link>
                        </ul>
                    </div>
                        {/* Column 2 */}
                    <div className="col-sm-3 col-xs-12 d-flex">
                        <ul className="list-inline mx-auto justify-content-center">
                            <Link>
                              <li>Lorem ipsum</li>
                            </Link>
                            <Link>
                              <li>Lorem ipsum</li>
                            </Link>
                            <Link>
                              <li>Lorem ipsum</li>
                            </Link>
                        </ul>
                    </div>
                            {/* Column 3 */}
                    <div className="col-sm-3 col-xs-12 d-flex">
                        <ul className="list-inline mx-auto justify-content-center">
                            <Link>
                              <li>Lorem ipsum</li>
                            </Link>
                            <Link>
                              <li>Lorem ipsum</li>
                            </Link>
                            <Link>
                              <li>Lorem ipsum</li>
                            </Link>
                        </ul>
                    </div>
                        {/* Column 4 */}
                    <div className="col-sm-3 col-xs-12 d-flex">
                        <ul className="list-inline mx-auto justify-content-center">
                            <Link>
                              <li>Lorem ipsum</li>
                            </Link>
                            <Link>
                              <li>Lorem ipsum</li>
                            </Link>
                            <Link>
                              <li>Lorem ipsum</li>
                            </Link>
                        </ul>
                    </div>
                    <p className="pt-3 pb-2 pl-5 copy-right">
                        &copy;&nbsp;BMT Networks
                        {` ${new Date().getFullYear()}`}
                        &nbsp; All Rights Reseved
                    </p>
                </div>
            </div>
        </FooterContainer>
    )
}


// STYLED COMPONENTS STYLES
const FooterContainer = styled.footer`

    background: var(--primary-dark-blue);
    
    position: relative;
    bottom: 0;
    width: 100%;

    ul li {
        list-style: none;
    }

    a {
        color: var(--primary-white);
        text-decorator: none;
        &:hover {
            color: var(--primary-orange);
            text-decoration: none;
        }
    }

    .copy-right {
        color: var(--primary-white)
    }
`;