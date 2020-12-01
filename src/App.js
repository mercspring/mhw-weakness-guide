import React from 'react';
import MonsterCard from './components/monster-card'
import {Monsters} from './data/monsters.js'
function App() {
//  const monsters = Monsters; 
  return (
    <div className="App">
      <MonsterCard monsterInfo = {Monsters[1]}img={Monsters[1].icon} name={Monsters[1].attributes.name}/>
      
    </div>
  );
}

export default App;
