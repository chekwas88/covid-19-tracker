import React, {useState, useEffect} from 'react';
import {fetchDaily} from '../../api';
import {Line, Bar} from 'react-chartjs-2';
import styles from './charts.module.css';

const Charts = ({data, country}) => {
    const [dailydata, setDailyData] = useState([]);

    useEffect(() => {
        const fetchDailyData = async () => {
            setDailyData( await fetchDaily());
        }
        fetchDailyData()
    }, [])

    const LineChart = (
       dailydata.length &&  (<Line 
            data={{
                labels: dailydata.map(({date}) => date),
                datasets: [{
                    data: dailydata.map(({confirmed}) => confirmed),
                    label: 'infected',
                    borderColor: '#3333ff',
                    fill: true
                },
                {
                    data: dailydata.map(({deaths}) => deaths),
                    label: 'deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, .5)',
                    fill: true
                }
            ]
            }}
        />)
    );

    const BarChart = (
        data.confirmed && (<Bar 
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'people',
                    backgroundColor: [
                        'rgba(0, 255, 0, .5)',
                        'rgba(0, 0, 255, .5)',
                        'rgba(255, 0, 0, .5)',
                    ],
                    data: [data.confirmed.value, data.recovered.value, data.deaths.value]
                }]
            }}
            options={{
                legend: {display: false},
                title: {display: true, text: `Current state in ${country}`}
            
            }}
        />)
    )

    return (
        // dailydata.length > 0 &&  (<Line 
        //     data={{
        //         labels: '',
        //         datasets: []
        //     }}
        // />)
        <div className={styles.container}>
           
            {country ? BarChart : LineChart}
        </div>
    )

   
}

export default Charts;