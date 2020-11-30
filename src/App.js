import React from 'react';
import MonsterCard from './components/monster-card'
import {Monsters} from './data/monsters.js'
function App() {
//  const monsters = Monsters; 
  return (
    <div className="App">
      <MonsterCard img={Monsters[1].icon} name={Monsters[1].attributes.name}/>
      
    </div>
  );
}

export default App;
