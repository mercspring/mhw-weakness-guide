import React from 'react'
import './style.css'

export default function Weaknesses(props) {
    function setPhysiology(weakness, type) {
        let returnString;
        returnString = decodePhysiology(weakness);
        if(props.monsterInfo.attributes.physiology[type+"Alt"] != undefined){
            returnString = returnString + "(" + decodePhysiology(props.monsterInfo.attributes.physiology[type+"Alt"]) + ")"
        }
        return returnString
    }
    function decodePhysiology(weakness){
        if (weakness === 3) {
            return "⭐⭐⭐"
        } else if (weakness === 2) {
            return  "⭐⭐"
        } else if (weakness === 1) {
            return "⭐"
        } else if (weakness === 0) {
            return "❌"
        }

    }
    return (
        <div className={props.hidden ? "Weaknesses table hide-table" : "Weaknesses table view-table"}>
            <table className="element-table">
                <tbody>
                    <tr>
                        <td className="fire icon"></td>
                        <td> {setPhysiology(props.monsterInfo.attributes.physiology.fire, "fire")} </td>
                    </tr>
                    <tr>
                        <td className="water icon"></td>
                        <td>{setPhysiology(props.monsterInfo.attributes.physiology.water, "water")}</td>
                    </tr>
                    <tr>
                        <td className="thunder icon"></td>
                        <td>{setPhysiology(props.monsterInfo.attributes.physiology.thunder, "thunder")}</td>
                    </tr>
                    <tr>
                        <td className="ice icon"></td>
                        <td>{setPhysiology(props.monsterInfo.attributes.physiology.ice, "ice")}</td>
                    </tr>
                    <tr>
                        <td className="dragon icon"></td>
                        <td>{setPhysiology(props.monsterInfo.attributes.physiology.dragon, "dragon")}</td>
                    </tr>
                </tbody>
            </table>
            <table className="status-table">
                <tbody>
                    <tr>
                        <td className="poison icon"></td>
                        <td>{setPhysiology(props.monsterInfo.attributes.physiology.poison, "poison")}</td>
                    </tr>
                    <tr>
                        <td className="sleep icon"></td>
                        <td>{setPhysiology(props.monsterInfo.attributes.physiology.sleep, "sleep")}</td>
                    </tr>
                    <tr>
                        <td className="paralysis icon"></td>
                        <td>{setPhysiology(props.monsterInfo.attributes.physiology.paralysis, "paralysis")}</td>
                    </tr>
                    <tr>
                        <td className="blast icon"></td>
                        <td>{setPhysiology(props.monsterInfo.attributes.physiology.blast, "blast")}</td>
                    </tr>
                    <tr>
                        <td className="stun icon"></td>
                        <td>{setPhysiology(props.monsterInfo.attributes.physiology.stun, "stun")}</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}
