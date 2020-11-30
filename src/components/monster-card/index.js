import React from 'react'

export default function MonsterCard(props) {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h2>{props.img}</h2>
            <img src={process.env.PUBLIC_URL + "/img/monsters/" + props.img}></img>
        </div>
    )
}
