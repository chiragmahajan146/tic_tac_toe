/* eslint-disable arrow-body-style */
import React from 'react';

const History = ({ history, moveTo, currentMove }) => {
  return (
    <ul>
      {history.map((_, move) => {
        return (
          <li key={move}>
            <button
              type="button"
              onClick={() => {
                moveTo(move);
              }}
            >
              {move === 0 ? `go to game start` : `Go to move # ${move}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default History;