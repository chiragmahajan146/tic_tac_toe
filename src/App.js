import React from 'react';
import Board from './components/Board';
import './Styles/root.scss';
const App = () => {
  return (
    <div className="app">
      <h1>Tic TAc Toe</h1>
      <Board />
    </div>
  );
};
export default App;
