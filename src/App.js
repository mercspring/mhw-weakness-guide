import React from 'react';
import MonsterCard from './components/monster-card';
import SearchBar from './components/search-bar';
import Header from './components/header';
import { Monsters } from './data/monsters.js';
import "./index.css";
function App() {
  //  const monsters = Monsters; 
  return (
    <div className="App">
      <Header/>
      <div style={{ display: "flex", flexWrap: "wrap", width: "95vw", justifyContent:"center"}}>
        {Monsters.map((elm, index) => {
          return <MonsterCard key={index} monsterInfo={elm} img={elm.icon} name={elm.attributes.name} />
        })}
      </div>
    </div>
  );
}

export default App;
