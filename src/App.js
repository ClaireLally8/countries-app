import React from 'react';
import axios from 'axios';
import './App.css';

import countries from './components/countries'

class App extends React.Component {
  state = {
    countryData: []
  }

  componentDidMount() {
    axios.get(`https://restcountries.eu/rest/v2/all`)
      .then(res => {
        const countryData = res.data;
        this.setState({ countryData });
      })
  }

  render() {
    return (
      <ul>
        { this.state.countryData.map(country => <li>{country.name}</li>)}
      </ul>
    )
  }
}

export default App;
