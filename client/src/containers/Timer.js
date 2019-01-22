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

    //// DEFAULT BUTTON SETTINGS ////

    this.highIntensitySettings = {
      name: 'High Intensity',
      sets: 20,
      running_sets: 0,
      interval: 45,
      rest: 10,
      running: false,
      running_time: 0
    }

    this.lowIntensitySettings = {
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


//// TIMER SETTINGS ////

  setLowIntensity = () => {
    this.setState(this.lowIntensitySettings)
  }

  setHighIntensity = () => {
    this.setState(this.highIntensitySettings)
  }

  //// TIMER CONTROLS /////

  handleStartStop = () => {
    if (!this.state.running) {
      this.startTimer()
    } else {
      this.stopTimer()
    }
  }

  startTimer = () => {
    this.initialState = this.state

    if (this.state.sets > 0) {
      this.setState({
        running: false  
      })
      this.restTimer = setInterval(this.restCountdown, 1000)

    } else {
      this.setState({
        running_sets: this.state.sets
      })
    }
  }

  restCountdown = () => {
    const currentSeconds = this.state.rest - 1
    const elapsedTime = this.state.running_time + 1

    this.setState({
      rest: currentSeconds,
      running_time: elapsedTime
    })
  }




  render() {
    console.log(this.state)
    return (
      <div>
        <TimerSettings
          setHighIntensity={this.setHighIntensity}
          setLowIntensity={this.setLowIntensity}
        />

        <h1>{this.state.rest}</h1>
        <h1>{this.state.interval}</h1>

        <button onClick={this.handleStartStop}>Start</button>
        <button>Reset</button>

        {/* 
        <TimerDisplay/>
        <TimerControls/> 
        */}
      </div>
    );
  }
}

export default Timer;