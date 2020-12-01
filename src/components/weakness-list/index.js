import React from 'react'

export default function Weaknesses(props) {
    return (
        <div className={props.hidden ? "Weaknesses hide-table" : "Weaknesses view-table"}>
            <table>
                <tr>
                    <td className="fire icon"></td>
                    <td>⭐⭐⭐</td>
                </tr>
                <tr>
                    <td className="water icon"></td>
                    <td>⭐⭐⭐</td>
                </tr>
                <tr>
                    <td className="thunder icon"></td>
                    <td>⭐⭐⭐</td>
                </tr>
                <tr>
                    <td className="ice icon"></td>
                    <td>⭐⭐⭐</td>
                </tr>
                <tr>
                    <td className="dragon icon"></td>
                    <td>⭐⭐⭐</td>
                </tr>
            </table>
            <table className="status-table">
                <tr>
                    <td className="poison icon"></td>
                    <td>⭐⭐⭐</td>
                </tr>
                <tr>
                    <td className="sleep icon"></td>
                    <td>⭐⭐⭐</td>
                </tr>
                <tr>
                    <td className="paralysis icon"></td>
                    <td>⭐⭐⭐</td>
                </tr>
                <tr>
                    <td className="blast icon"></td>
                    <td>⭐⭐⭐</td>
                </tr>
                <tr>
                    <td className="stun icon"></td>
                    <td>⭐⭐⭐</td>
                </tr>
            </table>
        </div>
    )
}
