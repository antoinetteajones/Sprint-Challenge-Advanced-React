import React, {Component} from 'react';
import './App.css';
import axios from "axios";
import PlayerCard from "./components/PlayerCard";
import Navbar from "./component/NavBar";

class App extends Component {
  constructor(props){
    console.log("Conturctor Invoked")
    super(props);
    this.state ={
      player: []
    };
  }

  componentDidMount(){
    console.log("CDM Invoked");
    axios
    .get("http://localhost:5000/api/players")
      .then(response =>{
        console.log(response.data)
        this.setState({
          player: response.data
        })
        
      })
      .catch(error => {
        console.log("ERROR", error)
      })
  }
  render(){
    console.log("Render Invoked")
  return (
    <div className="App">
      <Navbar />
      <h1>Players</h1>
      <div>
      {this.state.player.map(player => (
          <PlayerCard
          key={player.id}
          name={player.name}
          country={player.country}
          searches={player.searches}/>
        ))}
        </div>
        
      </div>
      );
    }
    
}

export default App;

