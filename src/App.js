import React, {Component} from 'react';
import {Card, CountryPicker, Chart} from './components'
import styles from './App.module.css';
import {fetchData} from './api';
import coronaImage from './images/corona.png'
class App extends Component{
  state = {
    data: {},
    country: ''
  }
  async componentDidMount() {
   const result =  await fetchData()
    this.setState({data: result})
  }

  handleCountryChange = async (country) => {
    const result =  await fetchData(country)
    this.setState({data: result, country: country})
    
  }
  render(){
    const {data, country} = this.state;
    return (
      <div className={styles.container}>
        <img className={StyleSheet.image} src={coronaImage} alt="covid-19" />
        <Card data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/>
      </div>
    );
  }
}

export default App;
