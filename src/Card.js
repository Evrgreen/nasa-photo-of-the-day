import React from "react";
import styled from "styled-components"
const CardContainer = styled.div`
position:absolute;
left:0;
bottom:0;
width:100%;
background:#2a222f;
`;

export default function Card(props){
    return(
        <CardContainer>
            <h2>{props.data.title}</h2>
            <h3>By: {props.data.copyright}</h3>
            <p className="card__date">{props.data.date}</p>
            <p className="card__desc">{props.data.explanation}</p>
        </CardContainer>
    )
}

