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
    //refactor settings to its own file??
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
      sets: 0,
      runningSets: 0,
      interval: 0,
      rest: 0,
      running: false,
      runningTime: 0,
    }
  }

  //// TIMER SETTINGS ////

  setLowIntensity = () => {
    this.setState(this.lowIntensitySettings)
    this.currentSettings = this.lowIntensitySettings
  }

  setHighIntensity = () => {
    this.setState(this.highIntensitySettings)
    this.currentSettings = this.highIntensitySettings
  }

//// TIMER DISPLAY /////

renderTimer = (interval, rest) => {
  if (rest > 0) {
    return this.renderRest(rest)
  } else if (rest === 0) {
    return this.renderInterval(interval)
  } else {
    return <h3>--</h3>
  }
}

renderRest = (rest) => {
  let minutes = Math.floor(rest / 60)
  let seconds = rest - (minutes * 60)

  if (seconds < 10) {
    return <h1>0{minutes}:0{seconds}</h1>
  } else {
    return <h1>0{minutes}:{seconds}</h1>
  }
}

renderInterval = (interval) => {
  let minutes = Math.floor(interval / 60)
  let seconds = interval - minutes * 60

  if (seconds < 10) {
    return <h1>0{minutes}:0{seconds}</h1>
  } else {
    return <h1>0{minutes}:{seconds}</h1> 
  }
}

renderRunningTime = (runningTime) => {
  let minutes = Math.floor(runningTime / 60)
  let seconds = runningTime - minutes * 60
  
    if (seconds < 10) {
      return <h2>Elapsed: 0{minutes}:0{seconds}</h2>
    } else {
      return <h2>Elapsed: 0{minutes}:{seconds}</h2> 
    }
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
      clearInterval(this.restTimer)
      this.intervalTimer = setInterval(this.intervalCountdown, 1000)
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

      this.setState({
        sets: this.state.sets - 1,
        running_sets: this.state.running_sets + 1,
        interval: this.currentSettings.interval,
        rest: this.currentSettings.rest
      })

      this.startTimer()
    }
  }

  stopTimer = () => {
    clearInterval(this.restTimer)
    clearInterval(this.intervalTimer)
    this.setState({
      running: false
    })
  }

  handleResetTimer = () => {
    this.stopTimer()
    this.setState(this.currentSettings)
  }

 
  render() {
    const { name, rest, interval, running_sets, running_time } = this.state
    const { sets } = this.currentSettings
   
    return (
      <div>
        <TimerSettings
          setHighIntensity={this.setHighIntensity}
          setLowIntensity={this.setLowIntensity}
        />

        <h5>{name}</h5>
        <h3>Sets: {running_sets + 1} / {sets} </h3>
        {this.renderTimer(interval, rest)}
        {this.renderRunningTime(running_time)}

        <TimerControls 
          handleStartStop={this.handleStartStop}
          handleReset={this.handleReset}
          running={this.state.running}
          />

        {/* 
        <TimerDisplay/>
        <TimerControls/> 
        */}
      </div>
    );
  }
}

export default Timer;