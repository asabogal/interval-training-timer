import React from 'react';
import TimerSettings from '../components/Timer/TimerSettings'
import TimerDisplay from '../components/Timer/TimerDisplay'
import TimerControls from '../components/Timer/TimerControls'

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      name: '',
      sets: 0,
      running_sets: 0,
      interval: 0,
      rest: 0,
      running: false,
      running_time: 0
    };

    ///DEFAULT BUTTON SETTINGS///

    this.highIntensity = {
      name: 'High Intensity',
      sets: 20,
      running_sets: 0,
      interval: 45,
      rest: 10,
      running: false,
      running_time: 0
    }

    this.lowIntensity = {
      name: 'Low Intensity',
      sets: 10,
      running_sets: 0,
      interval: 30,
      rest: 15,
      running: false,
      running_time: 0
    }

    this.currentSettings = {
      name: '',
      sets: 0,
      running_sets: 0,
      interval: 0,
      rest: 0,
      running: false,
      running_time: 0
    }

  }
  render() {
    return (
      <div>
        <button>Low Intensity</button>
        <button>High Intensity</button>
        <button>Customize</button>
        {/* <TimerSettings/>
        <TimerDisplay/>
        <TimerControls/> */}
      </div>
    );
  }
}

export default Timer;