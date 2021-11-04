/* eslint-disable */
import React from 'react';
import Chess from '~/helpers/chess';

export const ExampleComponent = (props) => {
  const [reactBoard, setReactBoard] = React.useState(Chess.board);
  React.useEffect(() => {
    const randomX = Math.floor(Math.random() * (8));
    const randomY = Math.floor(Math.random() * (8));
    setTimeout(() => setReactBoard(Chess.putHorseIn(randomX, randomY)), 200);
  }, []);
  return (
    <div className="ExampleComponent">
      {reactBoard.map(row => {
        return (<div className="row">
          {row.map(rColumn => {
            if (rColumn === 1) {
              return (
                <div className="rColumn">
                  <img src="images/piece.png" />
                </div>)
            }
            return <div className="rColumn" />
          })}
        </div>)
      })}
    </div>
  )
}
