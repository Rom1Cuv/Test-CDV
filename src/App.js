import React from 'react';
import FloorPannel from './components/PanneauAscenseur';
import FloorList from './components/ListeDesEtages'
import './App.css';

export default function App() {
  return (
    <div className="App" style={{display:'flex', justifyContent:'space-around'}}>
      <FloorPannel />
      <FloorList />
      
    </div>
  );
}


