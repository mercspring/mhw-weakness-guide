import React from 'react'

export default function Weaknesses(props) {
    function setPhysiology(weakness){
        if(weakness === 3){
            return "⭐⭐⭐"
        } else if(weakness === 2 ){
            return "⭐⭐"
        } else if(weakness === 1 ){
            return "⭐"
        } else if(weakness === 0){
            return "❌"
        }
    }
    return (
        <div className={props.hidden ? "Weaknesses hide-table" : "Weaknesses view-table"}>
            <table>
                <tr>
                    <td className="fire icon"></td>
                    <td>{setPhysiology(props.monsterInfo.attributes.physiology.fire)}</td>
                </tr>
                <tr>
                    <td className="water icon"></td>
                    <td>{setPhysiology(props.monsterInfo.attributes.physiology.water)}</td>
                </tr>
                <tr>
                    <td className="thunder icon"></td>
                    <td>{setPhysiology(props.monsterInfo.attributes.physiology.thunder)}</td>
                </tr>
                <tr>
                    <td className="ice icon"></td>
                    <td>{setPhysiology(props.monsterInfo.attributes.physiology.ice)}</td>
                </tr>
                <tr>
                    <td className="dragon icon"></td>
                    <td>{setPhysiology(props.monsterInfo.attributes.physiology.dragon)}</td>
                </tr>
            </table>
            <table className="status-table">
                <tr>
                    <td className="poison icon"></td>
                    <td>{setPhysiology(props.monsterInfo.attributes.physiology.poison)}</td>
                </tr>
                <tr>
                    <td className="sleep icon"></td>
                    <td>{setPhysiology(props.monsterInfo.attributes.physiology.sleep)}</td>
                </tr>
                <tr>
                    <td className="paralysis icon"></td>
                    <td>{setPhysiology(props.monsterInfo.attributes.physiology.paralysis)}</td>
                </tr>
                <tr>
                    <td className="blast icon"></td>
                    <td>{setPhysiology(props.monsterInfo.attributes.physiology.blast)}</td>
                </tr>
                <tr>
                    <td className="stun icon"></td>
                    <td>{setPhysiology(props.monsterInfo.attributes.physiology.stun)}</td>
                </tr>
            </table>
        </div>
    )
}
