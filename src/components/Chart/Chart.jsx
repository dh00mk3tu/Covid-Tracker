import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';  
import styles from './Chart.module.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState({});

    useEffect( () =>{
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    }, [dailyData]);

    const lineChart = (
        dailyData[0] 
        ? (
        <Line
            data= {{ 
                labels: DailyData(({date})=>date),
                datasets: [{
                    data: dailyData(({confirmed}) =>confirmed),
                    label : "Confirmed",
                    borderColor: "#3333ff",
                    fill: true,
                }, 
                {
                    data: dailyData(({deaths}) =>deaths),
                    label : "Deaths",
                    borderColor: "#33453ff",
                    fill: true,
                }],
            }}
        />) : null
    );
    return (
        <h1>Charts</h1>
    )
}

export default Chart;