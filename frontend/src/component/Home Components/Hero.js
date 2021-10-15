import React from 'react';
import DailyActivities from '../../images/graph3.png';
import Button from '@mui/material/Button';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-info">
          <h1>
            Productivity <br/>
            Tracker
          </h1>
          <p>
            A space where we can track our day to day Work Progress, with the help of interesting imagery like
            Graphs and charts which will motivate us to be productive. It will include features like tracking
            how much time a user spends on which app/website and at the end of the day a graph will be
            displayed based on the time recorded for each activity.
          </p>
          <Button variant="contained" style={{ backgroundColor: 'red' }} href={'#sign-up'}>
            Sign Up!
          </Button>
        </div>
        <div className="hero-images">
          <img
            src={DailyActivities}
            className="phone-img"
            alt="daily Activities"
            style={{ maxWidth: '55vw' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
