import React from 'react';
import TimerSettings from '../components/Timer/TimerSettings'
import TimerDisplay from '../components/Timer/TimerDisplay'
import TimerControls from '../components/Timer/TimerControls'
import intro_alert from '../Alerts/IntroAlert.mp3'
import interval_alert from '../Alerts/IntervalAlert.mp3'
import { Jumbotron } from 'reactstrap'

import { 
  setCustomSettings,
  updateRunning,
  updateRunningSets,
  stopRunning,
  restCountdown,
  intervalCountdown,
  reloadTimer,
  setCurrentSettings

} 
from '../actions/timerActions'

import { connect } from 'react-redux'



class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.currentSettings = {
      name: '',
      sets: 0,
      runningSets: 0,
      interval: 0,
      rest: 0,
      running: false,
      runningTime: 0
    }

    this.alerts = {
      introAlert: new Audio(intro_alert),
      intervalAlert: new Audio(interval_alert)
    }
  }

  //// TIMER SETTINGS ////

  setCustomSettings = (settings) => {
    this.props.setCustomSettings(settings)
    this.currentSettings = settings

    if (this.props.state.running) { 
      this.stopTimer()
    }
  }

//// TIMER DISPLAY /////

//// TIMER CONTROLS /////

  handleStartStop = () => {
    if (!this.props.state.running) {
      this.startTimer()
    } else {
      this.stopTimer()
    }
  }

  startTimer = () => {
    console.log("timer state is:", this.props.state)
    if (this.props.state.sets > 0) { 
      this.props.updateRunning()

      if (this.props.state.rest > 0) {
        this.restTimer = setInterval(this.restCountdown, 1000)
      } else {
        this.intervalTimer = setInterval(this.intervalCountdown, 1000)
      }
      
    } else {
      this.props.updateRunningSets(this.props.state.sets)
    }
  }

  restCountdown = () => {
    const currentSeconds = this.props.state.rest - 1
    const elapsedTime = this.props.state.running_time + 1 

    this.props.restCountdown(currentSeconds, elapsedTime)

    this.playAlert()

    if (currentSeconds === 0) {
      clearInterval(this.restTimer)
      this.intervalTimer = setInterval(this.intervalCountdown, 1000)
    }
  }

  intervalCountdown = () => {
    const currentSeconds = this.props.state.interval - 1 
    const elapsedTime = this.props.state.running_time + 1 
   
    this.props.intervalCountdown(currentSeconds, elapsedTime)

    this.playAlert()

    if (currentSeconds === 0) {
      clearInterval(this.intervalTimer)

      //pass: 
      const { sets, running_sets} = this.props.state
      const { interval, rest } = this.currentSettings
      this.props.reloadTimer(sets, running_sets, interval, rest )
    
      this.startTimer()
    }
  }

  stopTimer = () => {
    this.pauseAlert()
    clearInterval(this.restTimer)
    clearInterval(this.intervalTimer)
    
    this.props.stopRunning()
  }

  handleResetTimer = () => {
    this.stopTimer()
    this.props.setCurrentSettings(this.currentSettings)
  }

  playAlert = () => {
    const introAlert = this.alerts.introAlert
    const intervalAlert = this.alerts.intervalAlert
   
     if (this.props.state.rest === 3) {
      introAlert.volume = 0.3
      introAlert.play() 
    } else if (this.props.state.interval === 0){
      intervalAlert.volume = 0.3
      intervalAlert.play() 
    }
  }

  pauseAlert = () => {
    const introAlert = this.alerts.introAlert
    introAlert.pause()
    introAlert.currentTime = this.currentSettings.rest
  }

 
  render() {
    const { name, rest, interval, running_sets, running, running_time } = this.props.state
    const { sets } = this.currentSettings

    return (
      <Jumbotron className="App">
        <TimerSettings
          setHighIntensity={this.setHighIntensity}
          setLowIntensity={this.setLowIntensity}
          setCustomSettings={this.setCustomSettings}
        />

        <TimerDisplay
          name={name}
          runningSets={running_sets}
          sets={sets}
          interval={interval}
          rest={rest}
          runningTime={running_time}
        />

        <TimerControls 
          handleStartStop={this.handleStartStop}
          handleResetTimer={this.handleResetTimer}
          running={running}
          />
      </Jumbotron>
    );
  }
}
///?? ALSO CREATE REDUCER FOR HI/LO/CURRENT SETTINGS TO BE PASSED AS PROPS??
const mapStateToProps = (state) => {
  return {
    state: state.settings
  }
}

export default connect(mapStateToProps, 
  { 
    setCustomSettings, 
    updateRunning,
    updateRunningSets,
    stopRunning,
    restCountdown,
    intervalCountdown,
    reloadTimer,
    setCurrentSettings

  })(Timer);