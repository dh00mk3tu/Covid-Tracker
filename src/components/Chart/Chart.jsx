import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';  
import styles from './Chart.module.css';

const Chart = ({data, country}) => {
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
                    label : "Confirmed Cases",
                    borderColor: "#3333ff",
                    fill: true,
                }, 
                {
                    data: dailyData.map(({deaths}) =>deaths),
                    label : "Deaths",
                    borderColor: "#b8393e",
                    fill: true,
                }],
            }}
        />) : null
    );

    const barChart = (
        data.confirmed
        ? (
            <Bar>
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'rgba(133, 1, 150, 0.9)',
                            'rgba(0, 129, 75, 0.9)',
                            'rgba(122, 0, 0, 0.9)'
                        ]
                    }]
                }}
                options= {{
                    legend: {display:false},
                    title: {display: true, text:`Status of ${country}`},
                }}
            </Bar>
        ) : null
    )
    return (
        <div className={styles.container}>
            {lineChart}    
        </div>
    )
}

export default Chart;