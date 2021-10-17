import React from 'react';
import DailyActivities from '../../images/graph3.png';
import Button from '@mui/material/Button';
import './HomeComponents.css'
const Hero = () => {
  return (
    <div>
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1>
            Productivity <br />
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
        </article>
        <article className="hero-images">
          <img
            src={DailyActivities}
            className="phone-img"
            alt="daily Activities"
            style={{ maxWidth: '55vw' }}
          />
        </article>
      </div>
      </section>
      <div className = "Todo">
      <div className = "TodoPic">
          <img src = "https://raw.githubusercontent.com/ayazsayyed/vue-todo/master/dist/assets/img/dashboard.png" className="TodoPic" alt="todoImg"></img>
        </div>
        <div className= "TodoInfo"> 
        <h1>Todo List</h1>
        <p>
            A place where we can store all our upcoming works and get remainders to them. It helps to keep track of our daily work.
            One of the most important reasons you should use a to do list is that it will help you stay organised. When you write all your tasks in a list, they seem more manageable. When you’ve got a clear outline of the tasks you’ve got to do and those you’ve completed, it helps you stay focused. 
            While freeing up space in your mind for other more creative tasks.
        </p>
        </div>
      </div>
      <br />
      <div className = "Timer">
      <div className = "TimerPic">
          <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRHQWzUQeVp9E46mKRY6MWdIyVJr5adjHQog&usqp=CAU" className="TimerPic" alt="timerImg"></img>
        </div>
        <div className= "TimerInfo"> 
        <h1>Timer</h1>
        <p>
         Counting and keeping track of numbers are a few of the fundamental aspects we need to do regularly.
          Previously, people used to follow some orthodox procedure to do the calculation. Over time, due to the advancement of modern science and technology, we came up with better and more efficient methods for doing so.


        </p>
        </div>
      </div>
      <br />
      </div>
  );
};
export default Hero;
