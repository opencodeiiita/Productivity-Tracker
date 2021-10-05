import React from 'react';
import Hero from '../component/Home Components/Hero';
import Chart2 from '../component/Home Components/Chart2';

function home() {
  return (
    <>
      <Hero />
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
      </div>
    </>
  );
}
export default home;
