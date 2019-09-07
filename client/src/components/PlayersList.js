import React from "react";
import PlayerCard from './PlayerCard'

const PlayersList = props => {
  console.log(props.playersList);
  
  return (
    <div className="PlayersListContainer">
          {props.playersList.map((player) => {
             return <PlayerCard key={player.id} player={player} />
      })}
    </div>
  );
};

export default PlayersList;
