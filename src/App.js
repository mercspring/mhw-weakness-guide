import React from 'react';
import MonsterCard from './components/monster-card'
import {Monsters} from './data/monsters.js'
import "./index.css";
function App() {
//  const monsters = Monsters; 
  return (
    <div className="App">
      {Monsters.map((elm, index) =>{
      return <MonsterCard monsterInfo = {elm} img={elm.icon} name={elm.attributes.name}/>
      })}
      {/* <MonsterCard monsterInfo = {Monsters[1]}img={Monsters[1].icon} name={Monsters[1].attributes.name}/> */}
    </div>
  );
}

export default App;
