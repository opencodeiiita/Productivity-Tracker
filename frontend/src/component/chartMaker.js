import React, { Component, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import Button from '@mui/material/Button';
import './chartMaker.css';
function App() {
    const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));

    const handleChange = newValue => {
        setValue(newValue);
    };
    var [data, setData] = useState({
        dataPie: {
            labels: [],
            datasets: [
                {
                    data: [],
                    // backgroundColor: [
                    // 	"rgba(75,192,192,0.4)",
                    // 	"rgba(255,77,255,1)",
                    // 	"rgba(75,192,192,1)",
                    // 	"rgba(220,220,220,1)",
                    // ],
                    backgroundColor: [],
                },
            ],
        },

        first: '',
        second: '',
        third: '12:00',
        fourth: '12:00',
    });
    // const dataPie = state;
    // const  data  = date;
    const handleSubmit = () => {
        const temp = data;
        console.log(data);
        console.log(temp);
        console.log(temp.dataPie.labels);
        setData({
            dataPie: {
                labels: [...temp.dataPie.labels, temp.first],
                datasets: [
                    {
                        data: [...temp.dataPie.datasets[0].data, temp.second],
                        backgroundColor: [
                            ...temp.dataPie.datasets[0].backgroundColor,
                            'rgb(' +
                                Math.floor(Math.random() * 255) +
                                ',' +
                                Math.floor(Math.random() * 255) +
                                ',' +
                                Math.floor(Math.random() * 255) +
                                ')',
                        ],
                    },
                ],
            },
            first: '',
            second: '',
            third: '12:00',
            fourth: '12:00',
        });
    };

    const handleNumChange = evt => {
        let a = parseInt(evt.target.value);
        setData({
            ...data,
            [evt.target.name]: a,
        });
    };
    const handleTextChange = evt => {
        let a = evt.target.value;
        setData({ ...data, [evt.target.name]: a });
    };
    const handleStartTimeChange = evt => {
        let a = evt.target.value;
        setData({
            ...data,
            [evt.target.name]: a,
        });
    };
    const handleEndTimeChange = evt => {
        let a = evt.target.value;
        setData({
            ...data,
            [evt.target.name]: a,
        });
    };
    // console.log(data.dataPie.labels);
    return (
        <React.Fragment>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    marginTop: '20px',
                    border: 'solid 1px white',
                }}
            >
                <h2 style={{ paddingTop: '20px' }}>Pie Chart Maker</h2>
                <div className="chart-container" id="cs" style={{ width: '30vw' }}>
                    <Pie data={data.dataPie} />
                </div>
                <input
                    id="txtInput"
                    type="text"
                    value={data.first}
                    name="first"
                    onChange={evt => handleTextChange(evt)}
                    placeholder="Name of task"
                    style={{
                        marginBottom: '10px',
                        marginTop: '10px',
                    }}
                />
                <input
                    id="txtInput"
                    type="number"
                    value={data.second}
                    name="second"
                    onChange={evt => handleNumChange(evt)}
                    placeholder="Time(In minutes)"
                />
                <div className="timeDiv">
                    <div className="timeText">Start Time</div>
                    <input
                        id="txtInput"
                        type="time"
                        value={data.third}
                        step="900"
                        name="third"
                        placeholder="Starting Time"
                        onChange={evt => handleStartTimeChange(evt)}
                        style={{
                            marginBottom: '10px',
                            marginTop: '10px',
                            width: '350px',
                            color: 'lightpink',
                        }}
                    />
                </div>
                <div className="timeDiv">
                    <div className="timeText"> End Time</div>
                    <input
                        id="txtInput"
                        type="time"
                        name="fourth"
                        value={data.fourth}
                        onChange={evt => handleEndTimeChange(evt)}
                        step="900"
                        placeholder="Ending Time"
                        style={{
                            color: 'lightpink',
                            width: '350px',
                        }}
                    />
                </div>
                <Button
                    onClick={() => {
                        handleSubmit();
                    }}
                    style={{
                        backgroundColor: 'purple',
                        marginTop: '15px',
                        color: 'white',
                        marginBottom: '15px',
                    }}
                >
                    Add data to chart
                </Button>
            </div>
        </React.Fragment>
    );
}
export default App;
