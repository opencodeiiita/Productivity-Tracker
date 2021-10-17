import './Settings.css';
import CloseIcon from './icon-close.svg';
import NumberSelector from './NumberSelector';
import React, { useState, useRef } from 'react';

const Settings = ({ toggleModal, setSettings, setTask, currentSettings, setFont, currentFont }) => {
  const [fontSelection, setFontSelection] = useState(currentFont);
  const [taskName, setTaskName] = React.useState('');
  const [taskDesc, setTaskDesc] = React.useState('');

  const number_pom = useRef(25);
  const number_short = useRef(5);
  const number_of_reps = useRef(1);

  // Functiont to handle Form submission
  const handleSubmit = e => {
    var newTask = {
      name: taskName,
      desc: taskDesc,
      reps: number_of_reps.current.value,
      currentCount: 0,
    };
    e.preventDefault();

    // Create the new settings object with the form's values:
    var newTimeSettings = {
      time_pom: 25,
      time_short: 5,
      time_long: number_of_reps.current.value,
    };

    setFont(fontSelection);
    // setSettings(newTimeSettings);
    setTask(newTask);
  };

  return (
    <form className="settings-form">
      <div className="settings-container">
        <div className="header">
          <h2>ADD TASK</h2>
          <img src={CloseIcon} alt="Close" onClick={toggleModal} />
        </div>
        {/* <div className="time">
          <h4>Time (Minutes)</h4>
          <p className="pom">pomodoro</p>
          <p className="short">short break</p>
          <p className="long">long break</p>
          <NumberSelector className="pom-num" refValue={number_pom} defaultValue={currentSettings.time_pom} />
          <NumberSelector
            className="short-num"
            refValue={number_short}
            defaultValue={currentSettings.time_short}
          />
          <NumberSelector
            className="long-num"
            refValue={number_long}
            defaultValue={currentSettings.time_long}
          />
        </div> */}
        <div className="time">
          <h4>Time (Minutes)</h4>
          <p className="pom">Task Name</p>
          <p className="short">Task Description</p>
          <p className="long">Repetions</p>
          <input
            type="text"
            className="pom-num"
            value={taskName}
            onChange={e => {
              setTaskName(e.target.value);
            }}
          />
          <input
            type="text"
            className="short-num"
            value={taskDesc}
            onChange={e => {
              setTaskDesc(e.target.value);
            }}
          />
          <NumberSelector
            className="long-num"
            refValue={number_of_reps}
            defaultValue={currentSettings.time_long}
          />
        </div>
        <div className="font">
          <h4>Font</h4>
          <div className="font-container">
            <button
              type="button"
              className={fontSelection === 1 ? `font-1 font-selected` : 'font-1'}
              onClick={() => setFontSelection(1)}
            >
              Aa
            </button>
            <button
              type="button"
              className={fontSelection === 2 ? `font-2 font-selected` : 'font-2'}
              onClick={() => setFontSelection(2)}
            >
              Aa
            </button>
            <button
              type="button"
              className={fontSelection === 3 ? `font-3 font-selected` : 'font-3'}
              onClick={() => setFontSelection(3)}
            >
              Aa
            </button>
          </div>
        </div>
      </div>
      <button className="apply" type="submit" onClick={handleSubmit}>
        ADD TASK
      </button>
    </form>
  );
};

export default Settings;
