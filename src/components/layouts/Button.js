import styled from "styled-components";

export const Button = styled.button`
    background-color: transparent;
    background-repeat: no-repeat;
    border-color: var(--dark-red);
    &:hover {
        background-color: var(--primary-tomato);
        border-color: var(--primary-red);
    }
    &:focus {
        background: var(--primary.tomato) !important;
        border-color: var(--primary-tomato) !important;
    }
`;