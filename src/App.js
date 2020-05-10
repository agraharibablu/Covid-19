import React from 'react';
import styles from './App.module.css';
import { Cards, Chart, CountryPicker } from './components';

import coronaImage from './images/covid19.png';

import { fetchData } from './api';
 
class App extends React.Component {

state = {
    data: {},
    country: '',
}

async componentDidMount(){

    const fetchdata = await fetchData();

this.setState({data: fetchdata });
}

handleCountryChange = async (country) => {
   
    const fetchedData = await fetchData(country);
    // fetch the data

    // set the state
    //console.log(fetchedData);
    //console.log(country);
    this.setState({data: fetchedData, country: country });
}

    render(){
        const { data , country} = this.state;
        return(
          
        <div className={styles.container}>
            <img className={styles.image} src={coronaImage} alt='COVID-19' />
            <Cards data={data} />
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart data={data} country={country} />
            <h3 className="bablu">Developed By: Bablu Agrahari</h3>
        </div>
        
        );
    }
}
export default App;