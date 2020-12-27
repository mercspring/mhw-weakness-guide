import React from 'react'
const styles = {
    container: {
        display: "flex",
        justifyContent: "center"
    },
    input: {

    }
}

export default function Header() {
    return (
        <div className="search-container">
            <h1 className="site-name">Monster Hunter Weakness Guide</h1>
            <div>
                <label for="search-bar" className="search-label"> Filter </label>
                <input id="serach-bar" type="text" className="search-bar"></input>
            </div>
        </div>
    )
}
