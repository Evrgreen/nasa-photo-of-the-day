import React from "react";

export default function Card(props){
    return(
        <div>
            <h2>{props.data.title}</h2>
            <h3>By: {props.data.copyright}</h3>
            <p className="card__date">{props.data.date}</p>
            <p className="card__desc">{props.data.explanation}</p>
        </div>
    )
}

