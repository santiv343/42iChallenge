/* eslint-disable */
import React from 'react';
import Chess from '~/helpers/chess';
import Knight from '~/components/knight';

export const ExampleComponent = (props) => {


  const [reactBoard, setReactBoard] = React.useState(Chess.putHorseIn(4, 4));
  const [possibleMoves, setPossibleMoves] = React.useState([])

  React.useEffect(() => {
    knightPossibleMoves(4, 4)
  }, [])

  const knightPossibleMoves = (x, y) => {
    const moves = [{
      x: 2,
      y: -1,
    }, {
      x: 2,
      y: 1,
    }, {
      x: 1,
      y: -2,
    }, {
      x: 1,
      y: 2,
    },
    {
      x: -2,
      y: -1,
    }, {
      x: -2,
      y: 1,
    }, {
      x: -1,
      y: -2,
    }, {
      x: -1,
      y: 2,
    },
    ];

    const pm = []

    for (let i = 0; i < moves.length; i++) {
      const xP = x - moves[i].x
      const yP = y - moves[i].y
      if (xP >= 0 && yP >= 0) {
        pm.push({
          x: xP,
          y: yP
        })
      }
    }

    setPossibleMoves(pm)
  }

  const isValid = (x, y) => {
    if (possibleMoves.find(e => e.x === x && e.y === y)) {
      return true;
    }
  }

  return (
      <div className="ExampleComponent"> {
        reactBoard.map((row, y) => {
          return (< div key={`row${y}`}className="row" > {
            row.map((rColumn, x) => {
              if (rColumn === 1) {
                return <Knight key={`${x},${y}`}/>
              }
              if (isValid(x, y)) {
                return <div key={`${x},${y}`} onClick={
                  () => setReactBoard(Chess.putHorseIn(x, y), knightPossibleMoves(x, y))
                } style={{ backgroundColor: 'wheat' }} className="rColumn" />
              } else {
                if ((x + y) % 2 !== 0) {
                  return <div key={`${x},${y}`} onClick={() => alert('Posicion invalida')} className="rColumn" />
                } else {
                  return <div key={`${x},${y}`} style={{ backgroundColor: 'gray' }} onClick={() => alert('Posicion invalida')} className="rColumn" />
                }
              }
            })
          } </div>)
        })
      } </div>
  )
}