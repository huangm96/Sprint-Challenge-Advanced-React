import React from "react";


const PlayerCard = props => {
  console.log(props.player);

  return (
    <div className="PlayerCardContainer">
      <h2>{props.player.name}</h2>
      <h2>---{props.player.country}</h2>
    </div>
  );
};

export default PlayerCard;
