import React from "react";
import axios from "axios";
import "./App.css"
import PlayersList from './components/PlayersList'

class App extends React.Component {
  state = {
    players: []
  };
  
  componentDidMount() {
   axios
     .get("http://localhost:5000/api/players")

     .then(response => {
       
       response.data.forEach((data) => {
         this.setState({ players: [...this.state.players, data] });
       })
       
    
     })

     .catch(function(error) {
       console.log(error);
     });
  }
  render() {
   
    return (
      <div className="App">
        <h1>Players</h1>
        <PlayersList playersList={this.state.players}/>
      </div>
    );
  }
}

export default App;