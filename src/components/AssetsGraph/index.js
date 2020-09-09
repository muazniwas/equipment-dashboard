import React from 'react';
import './styles.css';
import Chart from 'react-apexcharts';

const AssetsGraph = ({ dataPoints }) => {
    let categories = []
    let data = []
    dataPoints.map(datapoint => {
        categories.push(datapoint.label);
        data.push(datapoint.value);
    })
    const options = {
        chart: {
            id: 'equipment-summary-chart'
        },
        xaxis: {
            title: {
                text: "Equipment Type",
            },
            categories
        }
    }
    const series = [{
        name: 'equipment-count',
        data
    }]
    return (
        <div className="Chart-wrap">
            <Chart options={options} series={series} type="bar" width={'100%'} height={500} />
        </div>
    );
}

export default AssetsGraph;