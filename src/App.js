import React from 'react';

// Importing Components
// Cards Component
// import Cards from './components/Cards/Cards';


import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
    render() {
        return (
            <div className={styles.container}>

                {/* Calling Display Cards */}
                <Cards/> 
                {/* Calling Country Picker drop down component */}
                <CountryPicker/>
                {/* Calling Chart to display the data visually */}
                <Chart/>

            </div>
        )
    }
}

export default App;