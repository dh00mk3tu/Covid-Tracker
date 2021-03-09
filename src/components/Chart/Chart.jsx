import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';  
import styles from './Chart.module.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() =>{
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        console.log("daily data",dailyData);
        fetchAPI();
    },[]);

    const lineChart = (
        dailyData.length !== 0
        ? (
        <Line
            data= {{ 
                labels: dailyData.map(({date})=>date),
                datasets: [{
                    data: dailyData.map(({confirmed}) =>confirmed),
                    label : "Confirmed",
                    borderColor: "#3333ff",
                    fill: true,
                }, 
                {
                    data: dailyData.map(({deaths}) =>deaths),
                    label : "Deaths",
                    borderColor: "#33453ff",
                    fill: true,
                }],
            }}
        />) : null
    );
    return (
        <div className={styles.container}>
            {lineChart}    
        </div>
    )
}

export default Chart;