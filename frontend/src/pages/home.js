import React from 'react';
import Hero from '../component/Home Components/Hero';
import Chart2 from '../component/Home Components/Chart2';
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import DoughnutExample from '../component/Home Components/doughnutChart'
function home() {
  return (
    <>
        <Navbar />
      <Hero />
      <br />
      <div
        style={{
          textAlign: 'center',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center',
          maxWidth: '60%',
          maxHeight: '100%',
          marginLeft: '20%',
          paddingBottom: '10vh',
        }}
      >
        <Chart2 />
        <br/>
        <DoughnutExample />
      </div>
      <Footer />
    </>
  );
}
export default home;
