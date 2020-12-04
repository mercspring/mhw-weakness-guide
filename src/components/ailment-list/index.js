import React from 'react'

export default function Ailments(props) {

    return (
        <table className={props.hidden ? "hide-table" : "view-table"}>
            <tbody>
                {props.monsterInfo.relationships.ailments.data.map((elm, index) => {
                    let type, icon;
                    if (elm.id === "fireBlight") {
                        type = "Fire Blight"
                        icon = "fire"
                    } else if (elm.id === "iceBlight") {
                        type = "Ice Blight"
                        icon = "ice"
                    } else if (elm.id === "waterBlight") {
                        type = "Water Blight"
                        icon = "water"
                    } else if (elm.id === "dragonBlight") {
                        type = "Dragon Blight"
                        icon = "dragon"
                    } else if (elm.id === "thunderBlight") {
                        type = "Thunder Blight"
                        icon = "thunder";
                    } else if (elm.id === "strongRoar") {
                        type = "Strong Roar";
                        icon = "strong-roar";
                    } else if (elm.id === "weakRoar") {
                        type = "Weak Roar";
                        icon = "weak-roar";
                    } else if (elm.id === "sleep") {
                        type = "Sleep";
                        icon = "sleep";
                    } else if (elm.id === "stun") {
                        type = "Stun";
                        icon = "stun";
                    } else if (elm.id === "poison") {
                        type = "Poison";
                        icon = "poison";
                    } else if (elm.id === "effluvialBuildup") {
                        type = "Effluvial Buildup";
                        icon = "effluvial-buildup";
                    } else if (elm.id === "blastBlight") {
                        type = "Blast Blight";
                        icon = "blast";
                    } else if (elm.id === "paralysis") {
                        type = "Paralysis";
                        icon = "paralysis";
                    } else if (elm.id === "bleeding") {
                        type = "Bleeding";
                        icon = "bleeding";
                    } else if (elm.id === "defenseDown") {
                        type = "Defense Down";
                        icon = "defenese-down";
                    } else {
                        type = "unknown";
                    }
                    return <tr key={index}><td className={`icon ${icon}`}></td><td>{type}</td></tr>
                })}

            </tbody>
        </table>
    )
}
