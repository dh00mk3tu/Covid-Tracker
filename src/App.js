import React from 'react';

// Importing Components
// Cards Component
// import Cards from './components/Cards/Cards';


import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

class App extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                {/* Calling Display Cards */}
                <Cards/> 
                {/* Calling Country Picker drop down component */}
                <CountryPicker/>
                <Chart/>
            </div>
        )
    }
}

export default App;