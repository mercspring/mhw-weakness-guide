import React, { useState } from 'react';
import Weaknesses from '../weakness-list';
import Ailments from '../ailment-list';
import './index.css';

export default function MonsterCard(props) {
    const [size, setSize] = useState("large")
    function onClick() {
        if (size === "large") {
            setSize("small");
        } else {
            setSize("large")
        }
    }

    function getMonsterType() {
        return props.monsterInfo.relationships.species.data.id.replace(/([A-Z])/g, " $1").toLowerCase();
    }
    return (
        <div className="monster-card">
            <h2 className="monster-name">{props.name}</h2>
            <div className="wrapper" >
                <div className="ailments flex" >
                    {props.monsterInfo.relationships.ailments ? <Ailments hidden={size === "large" ? true : false} monsterInfo={props.monsterInfo} /> : null}
                </div>
                <div className={size === "small" ? "wiki-link view-table flex" : "hide-table wiki-link flex"}>
                    <a href={"https://monsterhunterworld.wiki.fextralife.com/" + props.monsterInfo.attributes.name.replace(/ /, "+")} target="_blank">Wiki🔗</a>
                </div>
                <Weaknesses monsterInfo={props.monsterInfo} hidden={size === "large" ? true : false} />
                <div onClick={onClick} className={size === "large" ? "cover flex" : "clicked cover flex"} >
                    <img loading="lazy" src={process.env.PUBLIC_URL + "/img/monsters/" + props.img} />
                    <span className={size === "large" ? "monster-type view-table" : "hide-table monster-type"}>{getMonsterType()}</span>
                </div>
            </div>
        </div>
    )
}
