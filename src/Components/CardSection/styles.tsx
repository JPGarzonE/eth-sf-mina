import styled from "styled-components"

export const CardSectionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
`

export const Card = styled.div`
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    max-width: 300px;
    cursor: pointer;
    background: #1e212d;
    border: 4px solid #1e212d;
    position: relative;

    &:hover,
    &:focus,
    &:active{
        color: rgb(211 17 255);
        border-color: rgb(211 17 255);
    }
`

export const CardTitle = styled.h2`
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
`

export const CardText = styled.p`
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
`
