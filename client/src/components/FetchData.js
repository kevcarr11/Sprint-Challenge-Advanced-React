import React, { Component } from 'react'
import Axios from 'axios';

export default class FetchData extends Component {
  constructor() {
    super()
    this.state = {
      players: []
    }
  }
  componentDidMount()  {
    this.fetchPlayers();
  }

  componentDidUpdate(prevProps, prevState) {

  }

  fetchPlayers = () => {
    Axios.get('http://localhost:5000/api/players')
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        data component 
      </div>
    )
  }
}
