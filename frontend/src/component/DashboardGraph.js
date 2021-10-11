import { Typography,  makeStyles } from "@material-ui/core";
import Card from '@mui/material/Card';
import React from "react";
import {Bar} from 'react-chartjs-2';
import  PersistentDrawerLeft from "../component/PersistentDrawer"
const state = {
  labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  datasets: [
    {
      label: 'Productive Time',
      backgroundColor:[
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(155, 80, 80, 0.2)',
      ],

      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(155, 80, 80, 1)',

      ],
      borderWidth: 2,
      data: [18, 10, 5, 15, 12, 7, 2]
    }
  ]
}
const  test = {
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: 'Days',
        color: '#911',
        font: {
          family: 'Comic Sans MS',
          size: 20,
          weight: 'bold',
          lineHeight: 1.2,
        },
        padding: {top: 5, left: 0, right: 0, bottom: 5}
      }, 
     
    },
    y: {
      min:0,
      max:24,
      
      display: true,
      title: {
        display: true,
        text: 'Time(in hours)',
        color: '#191',
        font: {
          family: 'Times',
          size: 20,
          style: 'normal',
          lineHeight: 1.2
        },
        padding: {top: 5, left: 0, right: 0, bottom: 0}
      },
      ticks:{
        beginAtZero: true,
    
        
      }
    },
    
  
  }
}
let c = 200*(100/document.documentElement.clientWidth);
let d= Number(100-(c+5));
console.log(c)
console.log(d)
const myStyle = makeStyles(
 { barDiv: {
   width:`${d}vw`,
   height:'90vh',
     display:'flex',
     margin:'0',
     alignItems:'center',
     justifyContent:'center',
     backgroundColor:'white',
     flexDirection:'column',
    
  },
  barTypography:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    margin:'10px 10px 0px 0px',
  },
  dashStyle:{
    position:'relative',
    letterSpacing:'0',
    display:'inline-block',
    margin:'10px',
  },
  barCard:{
    width:'45vw',
    minWidth:'300px',
    height:'auto'
  }

}
)

export default function DashboardGraph() {
    const clases = myStyle();
    return(
    <>
      <div className={clases.barDiv}>
       
      <Card className={clases.barCard}  >
      <h3 className={clases.dashStyle}>Dashboard</h3>
        <Typography component='div'className={clases.barTypography} >
            <Bar
              data={state}
              width = {100}
              height = {60}
              options={test}
            />    
        </Typography>
      </Card>
      </div>
     
       
    </>
    );
}
