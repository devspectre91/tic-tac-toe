import React from 'react'
import Board from './Board'


class Game extends React.Component {
    render() {
      return (
        <div className="game level mt-6">
          <div className="game-board level-item">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  
  export default Game;