import {React, useState} from 'react';
import MonsterCard from './components/monster-card';
import SearchBar from './components/search-bar';
import Header from './components/header';
import { Monsters } from './data/monsters.js';
import "./index.css";
import "./css-reset.css";
function App() {
  //  const monsters = Monsters; 
const [monsterList, setMonsterList] = useState(Monsters)
  return (
    <div className="App">
      <Header setMonsterList={setMonsterList} Monsters={Monsters}/>
      <div style={{ display: "flex", flexWrap: "wrap", width: "95vw", justifyContent:"center"}}>
        {monsterList.map((elm, index) => {
          return <MonsterCard key={index} monsterInfo={elm} img={elm.icon} name={elm.attributes.name} />
        })}
      </div>
    </div>
  );
}

export default App;
