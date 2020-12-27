import {React, useState} from 'react'
const styles = {
    container: {
        display: "flex",
        justifyContent: "center"
    },
    input: {

    }
}

export default function Header(props) {
    const [filterTerm, setFilterTerm] = useState('')

    function onFilterChange(event){
        const value = event.target.value;
        const re = new RegExp(value, 'i');

       const monsters = props.Monsters.filter(elm =>{
            return re.test(elm.attributes.name)
        });

        props.setMonsterList(monsters);
        setFilterTerm(value)


    }

    return (
        <div className="search-container">
            <h1 className="site-name">Monster Hunter Weakness Guide</h1>
            <div>
                <label for="search-bar" className="search-label"> Filter </label>
                <input id="serach-bar" type="text" onChange={onFilterChange} className="search-bar" value={filterTerm}></input>
            </div>
        </div>
    )
}
