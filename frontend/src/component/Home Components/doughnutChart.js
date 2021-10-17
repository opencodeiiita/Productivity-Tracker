import React from 'react';
import {Pie} from 'react-chartjs-2';
import './HomeComponents.css'
const data = {
     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],

    datasets: [{
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
            '#8dace7',
            '#71deb9',
            '#ef869e'
        ],
        hoverBackgroundColor: [
            '#7097e1',
            '#4dd6a7',
            '#eb6886'
        ]
    }]
};

class PieExample extends React.Component {

    render() {
        return (
            <div>
                <h2> Pie Representation </h2>
                <br />
                <div className="piechart">
                <Pie data={data} />
                </div>
            </div>
        )
    }
}


export default PieExample;
