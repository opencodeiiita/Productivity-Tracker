import React, { useState, useEffect } from 'react';
import '../styles/timer.css';
import Timer from '../component/Timer Components/Timer';
import Tasks from '../component/Timer Components/Tasks';
import CategoryNav from '../component/Timer Components/CategoryNav';
import Settings from '../component/Timer Components/Settings';
import Logo from '../component/Timer Components/logo.svg';
import GearIcon from '../component/Timer Components/icon-settings.svg';

const fonts = { 1: 'font-Kumbh', 2: 'font-Roboto', 3: 'font-Space' }; // Used by the fontSetting state. These are the classes added to relevant components
const colors = { 1: 'color-orange', 2: 'color-blue', 3: 'color-purple' };

const TimerComp = () => {
  // Define States
  const [duration, setDuration] = useState(1500);
  const [seconds, setSeconds] = useState(duration);
  const [running, setRunning] = useState(false);
  const [category, setCategory] = useState(1); // 1 = pomodoro, 2 = short break, 3 = long break
  const [timeSettings, setTimeSettings] = useState({
    time_pom: 25,
    time_short: 5,
    time_long: 15,
  });
  const [fontSetting, setFontSetting] = useState(1);
  const [colorSetting, setColorSetting] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState([]);

  // Reset the timer to the start value
  function reset() {
    setSeconds(duration);
    setRunning(false);
  }

  // Set the state and change the timer
  function changeCategory(cat) {
    if (cat === 1) {
      setDuration(timeSettings.time_pom * 60);
      setSeconds(timeSettings.time_pom * 60);
    } else if (cat === 2) {
      setDuration(timeSettings.time_short * 60);
      setSeconds(timeSettings.time_short * 60);
    } else if (cat === 3) {
      setDuration(timeSettings.time_long * 60);
      setSeconds(timeSettings.time_long * 60);
    }
    setCategory(cat);
    setRunning(false);
  }

  // Count down the timer:
  useEffect(() => {
    let interval = null;
    if (running && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else {
      setRunning(false);
      clearInterval(interval);
    }
    if (seconds === 0) {
      if (task.length !== 0) {
        task[0].currentCount += 1;
        if (task[0].currentCount >= task[0].reps) {
          task.shift();
          console.log('heyy');
        }
      }
    }
    return () => clearInterval(interval); // This is run when it is time to clean up
  }, [duration, running, seconds]);

  useEffect(() => {
    changeCategory(category);
  }, [timeSettings]);

  // Show Modal
  function toggleModal() {
    setShowModal(!showModal);
  }

  // function handleNewSettings(newSettings) {
  //   setTimeSettings(newSettings);
  //   toggleModal();
  // }

  function handleNewTask(newTask) {
    setTask([...task, newTask]);
    console.log(task);
    toggleModal();
  }

  return (
    <div className="page">
      <img src={Logo} alt="Pomodoro" className="logo" />
      <CategoryNav
        changeCategory={cat => changeCategory(cat)}
        category={category}
        fontClass={fonts[fontSetting]}
        colorClass={colors[colorSetting]}
      />
      <Timer
        seconds={seconds}
        toggleRunning={() => setRunning(!running)}
        running={running}
        reset={reset}
        duration={duration}
        fontClass={fonts[fontSetting]}
        colorClass={colors[colorSetting]}
      />
      <img src={GearIcon} alt="Settings" className="settings-icon" onClick={toggleModal} />
      {showModal && (
        <Settings
          toggleModal={toggleModal}
          // setSettings={newSettings => handleNewSettings(newSettings)}
          setTask={newTask => handleNewTask(newTask)}
          currentSettings={timeSettings}
          setFont={newFont => setFontSetting(newFont)}
          currentFont={fontSetting}
          currentColor={colorSetting}
          setColor={newColor => setColorSetting(newColor)}
        />
      )}

      <Tasks todos={task} />

      {/* {task.map((todo, index) => (
        <ToDo key={index} index={index} todo={todo} />
      ))} */}
    </div>
  );
};

export default TimerComp;
