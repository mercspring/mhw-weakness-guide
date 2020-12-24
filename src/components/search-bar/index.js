import React from 'react'
    const styles={
        container:{
            display: "flex",
            justifyContent: "center"
        }, 
        input:{

        }
    }

export default function SearchBar() {
    return (
        <div className="search-container">
            <label for="search-bar" className="search-label"> Filter </label>
            <input id="serach-bar" type="text" className="search-bar"></input>
        </div>
    )
}
