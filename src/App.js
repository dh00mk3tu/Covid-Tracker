import React from 'react';

// Importing Components
// Cards Component
// import Cards from './components/Cards/Cards';


import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
    // Declaring state instead of Constructor because why not. 
    state = {
        // Populating the fetched data to data{}
        data: {},
        country: '',
    }

    // Data fetched from the API here
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});

    }

    handleCountryChange = async (country) => {
        console.log(country);
    }

    render() {
        const {data} = this.state;
        return (
            <div className={styles.container}>

                {/* Calling Display Cards */}
                <Cards data={data}/> 

                {/* Calling Country Picker drop down component */}
                <CountryPicker handleCountryChange={this.componentWillUnmounthandleCountryChange}/>

                {/* Calling Chart to display the data visually */}
                <Chart/>

            </div>
        )
    }
}

export default App;