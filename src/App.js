import React from 'react';

// Importing Components
// Cards Component
// import Cards from './components/Cards/Cards';


import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Cards/>
                <CountryPicker/>
                <Chart/>
            </div>
        )
    }
}

export default App;