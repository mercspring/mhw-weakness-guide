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
        setFilterTerm(event.target.value);


    }
    function onFilterSubmit(event){

        event.preventDefault();
        // console.log(event.target[0].value)
        const value = event.target[0].value;
        const re = new RegExp(value, 'i');

       const monsters = props.Monsters.filter(elm =>{
            return re.test(elm.attributes.name)
        });

        props.setMonsterList(monsters);
    }

    return (
        <div className="search-container">
            <h1 className="site-name">Monster Hunter Weakness Guide</h1>
            <form onSubmit={onFilterSubmit}>
                <label for="search-bar" className="search-label"> Filter </label>
                <input id="serach-bar" type="text" onChange={onFilterChange} onSubmit={onFilterSubmit} className="search-bar" value={filterTerm}></input>
            </form>
        </div>
    )
}
