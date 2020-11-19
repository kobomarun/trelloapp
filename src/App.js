import React, { useState } from 'react';

import data from './data.json';
import './App.css';
import Board from 'react-trello';
import Dashboard from './component/Dashboard'
import Menu from './component/Menu'

function App() {
  const [ view, setView] = useState(true);

  return (
    <div className="App">
      <h1>Welcome To Trello APP</h1>
      <ul className="menu">
            <li onClick={() => setView(false)}>My Dashboard</li>
            <li onClick={() => setView(true)}>My Board</li>
        </ul>
     
      {
        view  ? (<div style={{display:'block'}}>
          <h1  style={{textAlign:'left'}}>My Board</h1>
            <Board 
              data={data}
              draggable 
              editable={true} 
              canAddLanes={true} 
            />
            </div>
        )
      : <Dashboard  data={data}/>}
       
      
    </div>
  );
}

export default App;
