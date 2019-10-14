import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Card from 'react-bootstrap/Card'
import DarkModeSwitch from './components/darkModewitch';

export default class FetchData extends Component {
  constructor(props) {
    super()
    this.state = {
      players: []
    }
  }
  componentDidMount()  {
    this.fetchPlayers();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if(prevState.players !== this.state.players) {
  //     this.setState({ players: [] })
  //     this.fetchPlayers();
  //   }
  // }

  fetchPlayers = () => {
    Axios.get('http://localhost:5000/api/players')
    .then(res => {
      this.setState({
        players: res.data
      });
    })
    .catch(err => console.log(err));
  }
  render() {
    return (

      <>
        <DarkModeSwitch />

        <div className="App">
        {this.state.players.map((player, index) => (
        <div key={index}>
        <Card bg="info" text="white" style={{ width: '12rem' }}>
          <Card.Header>{player.name}</Card.Header>
          <Card.Body>
            <Card.Title>{player.country}</Card.Title>
            <Card.Text>Searches: {player.searches}</Card.Text>
          </Card.Body>
        </Card>
        <br />
        </div> 
        ))}
        </div>
      </>
    )
  }
}

