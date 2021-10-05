import React from 'react';
import Hero from './Hero';
import Chart2 from './Chart2';
import SignUp from './SignUp';

function App() {
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
      <SignUp />
    </>
  );
}

export default App;
