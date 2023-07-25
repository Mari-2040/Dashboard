import React from 'react';
import Chart  from 'react-apexcharts'

const RadarChart = () => {
    const state : any =  {
          
        series: [{
          name: 'Series 1',
          data: [80, 50, 30, 40, 100, 20],
        }],
        options: {
          chart: {
            height: 350,
            type: 'radar',
          },
          title: {
            text: 'Basic Radar Chart'
          },
          xaxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June']
          }
        },
      
      
      };


    return (
    <Chart options={state.options} series={state.series} type="radar" height={350}  />
    )

}

export default RadarChart