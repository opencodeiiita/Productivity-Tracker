import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-customizable-progressbar';
import './Timer.css';

const Timer = ({ seconds, running, toggleRunning, reset, duration, fontClass, colorClass }) => {
    var ColorCode = '#F87070';
    const breakpoint = 475;

    // Calculate the percentage of progress for the circle progress bar
    function getProgress() {
        let min = Number(getMinutes());

        if (min < duration / 60 && seconds !== 0) {
            min++;
            let totalMin = Math.trunc(duration / 60);
            let percentage = (min / totalMin) * 100;
            return percentage;
        } else if (seconds === 0) {
            return 0;
        } else {
            return 100;
        }
    }

    // Format minutes to 2 digits:
    function getMinutes() {
        let m = 0;
        m = Math.trunc(seconds / 60);
        m = ('00' + m).slice(-2);

        return m;
    }

    // Format seconds to 2 digits:
    function getSeconds() {
        let s = 0;
        s = Math.trunc(seconds % 60);
        s = ('00' + s).slice(-2);

        return s;
    }

    function getColor(className) {
        if (className === 'color-orange') {
            return '#F87070';
        } else if (className === 'color-blue') {
            return '#70F3F8';
        } else if (className === 'color-purple') {
            return '#D881F8';
        }
    }

    return (
        <div className="countdown-container">
            <ProgressBar
                radius={window.innerWidth > breakpoint ? 163 : 118}
                progress={getProgress()}
                initialAnimation={true}
                trackStrokeColor={'transparent'}
                strokeColor={getColor(colorClass)}
                strokeWidth={window.innerWidth > breakpoint ? 11 : 10}
                className="progress-bar"
            >
                <div className="inside-bar" onDoubleClick={reset}>
                    <h1 className={`remaining-time ${fontClass}`}>
                        {getMinutes()}:{getSeconds()}
                    </h1>
                    {running || seconds > 0 ? (
                        <h3 onClick={toggleRunning} className={fontClass}>
                            {running ? 'PAUSE' : 'START'}
                        </h3>
                    ) : (
                        <h3 onClick={reset} className={fontClass}>
                            RESTART
                        </h3>
                    )}
                </div>
            </ProgressBar>
        </div>
    );
};

export default Timer;
