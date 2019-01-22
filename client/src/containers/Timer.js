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

  // refactor settings? ; put in their own file?
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
      sets: 2,
      running_sets: 0,
      interval: 10,
      rest: 5,
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
        running: true  
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

    if (currentSeconds === 0) {
      this.intervalTimer = setInterval(this.intervalCountdown, 1000)
      clearInterval(this.restTimer)
    }
  }

  intervalCountdown = () => {
    const currentSeconds = this.state.interval - 1
    const elapsedTime = this.state.running_time + 1
  
    this.setState({
      interval: currentSeconds,
      running_time: elapsedTime
    })

    if (currentSeconds === 0) {
      clearInterval(this.intervalTimer)

    }
  }

  stopTimer = () => {
    clearInterval(this.restTimer)
    clearInterval(this.intervalTimer)
    this.setState({
      running: false
    })
  }

  // handleResetTimer = () => {
  //   this.stopTimer()
  //   console.log("initial state is:", this.initialState)
  // }

  render() {
    console.log(this.state)
    const { name, rest, interval, sets, running, running_sets } = this.state

    return (
      <div>
        <TimerSettings
          setHighIntensity={this.setHighIntensity}
          setLowIntensity={this.setLowIntensity}
        />
        <h1>{name}</h1>
        <h1>Sets Remaining: {running_sets + 1} / {sets}</h1>
        <h1>{rest}</h1>
        <h1>{interval}</h1>

        <button onClick={this.handleStartStop}>{running ? 'Stop' : 'Start'}</button>
        <button onClick={this.handleResetTimer}>Reset</button>

        {/* 
        <TimerDisplay/>
        <TimerControls/> 
        */}
      </div>
    );
  }
}

export default Timer;