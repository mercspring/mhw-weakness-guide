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
        <div className="monster-card">
            <h2>{props.name}</h2>
            <div className="wrapper" >
                <div className="ailments" >
                    {props.monsterInfo.relationships.ailments ? <Ailments hidden={size === "large" ? true : false} monsterInfo={props.monsterInfo} /> : null}
                </div>
                <div className="wiki-link">wiki link</div>
                <Weaknesses monsterInfo={props.monsterInfo} hidden={size === "large" ? true : false} />
                <div onClick={onClick} className={size === "large" ? "cover flex" : "clicked cover flex"} >
                    <img src={process.env.PUBLIC_URL + "/img/monsters/" + props.img} />
                    <span className={size === "large" ? "monster-type view-table" : "hide-table monster-type"}>{props.monsterInfo.relationships.species.data.id}</span>
                </div>
            </div>
        </div>
    )
}
