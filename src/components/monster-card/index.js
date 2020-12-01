import React, { useState } from 'react'
import Weaknesses from '../weakness-list'
import Ailments from '../ailment-list'
import './index.css'

export default function MonsterCard(props) {
    const [size, setSize] = useState("large")
    function onClick() {
        if (size === "large") {
            setSize("small");
        } else {
            setSize("large")
        }
    }
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h2>{props.img}</h2>
            <div className="wrapper">
                <div className="helper">
                    <Ailments monsterInfo={props.monsterInfo}/>
                </div>
                <Weaknesses monsterInfo={props.monsterInfo} hidden={size === "large" ? true : false} />
                <div className="image-background">
                    <img onClick={onClick} className={size === "large" ? null : "clicked"} src={process.env.PUBLIC_URL + "/img/monsters/" + props.img}></img>
                </div>
            </div>
        </div>
    )
}
