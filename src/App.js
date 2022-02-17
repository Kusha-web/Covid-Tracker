import React from 'react';
import './App.css';
import { Cards, Chartcomponent, CountryPicker } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchData } from './api';
import covidPng from '../src/images/covid19_icon.png';

class App extends React.Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
  }

  handleCountryChange = async (country) => {
    //fetching the data
    const fetchedData = await fetchData(country);

    console.log(fetchedData);
    //set the state
    this.setState({data: fetchedData, country: country});
  }

  render() {
  return (
    <div className="app">
      <h1 style={{textAlign: 'center'}}>Covid 19 - Tracker<img className='image' src={covidPng} alt='Covid' height='10%' width='10%'></img></h1>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Cards data={this.state.data}/>
      <Chartcomponent data={this.state.data} country={this.state.country}/>
    </div>
  );
  }
}

export default App;
