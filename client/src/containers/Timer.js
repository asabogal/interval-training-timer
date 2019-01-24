import React from 'react';
import TimerSettings from '../components/Timer/TimerSettings'
import TimerDisplay from '../components/Timer/TimerDisplay'
import TimerControls from '../components/Timer/TimerControls'
import intro_alert from '../Alerts/IntroAlert.mp3'
import interval_alert from '../Alerts/IntervalAlert.mp3'

import { setHighIntensity } from '../actions/timerActions'

import { connect } from 'react-redux'



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
      sets: 3,
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

    this.alerts = {
      introAlert: new Audio(intro_alert),

      intervalAlert: new Audio(interval_alert)
    }
  }


  //// TIMER SETTINGS ////


  setHighIntensity = () => {
    // this.setState(this.lowIntensitySettings)
    /// -> this is should be hanlded by actions; so call the dispatch action here
    this.props.setHighIntensity(this.highIntensitySettings)
    this.currentSettings = this.highIntensitySettings
  

    if (this.props.state.running) {
      this.stopTimer()
    }
  }

  // setHighIntensity = () => {
  //   this.setState(this.highIntensitySettings)
  //   this.currentSettings = this.highIntensitySettings

  //   if (this.state.running) {
  //     this.stopTimer()
  //   }
  // }

  setLowIntensity = () => {
    this.setState(this.lowIntensitySettings)
    this.currentSettings = this.lowIntensitySettings

    if (this.props.state.running) {
      this.stopTimer()
    }
  }


 

  setCustomSettings = (settings) => {
    this.setState(settings)
    this.currentSettings = settings

    if (this.state.running) {
      this.stopTimer()
    }
  }

//// TIMER DISPLAY /////

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
      if (this.state.rest > 0) {
        this.restTimer = setInterval(this.restCountdown, 1000)
      } else {
        this.intervalTimer = setInterval(this.intervalCountdown, 1000)
      }
      
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

    this.playAlert()

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

    this.playAlert()

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
    this.pauseAlert()
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

  playAlert = () => {
    const introAlert = this.alerts.introAlert
    const intervalAlert = this.alerts.intervalAlert
   
     if (this.state.rest === 3) {
      introAlert.volume = 0.3
      introAlert.play() 
    } else if (this.state.interval === 0){
      intervalAlert.volume = 0.3
      intervalAlert.play() 
    }
  }

  pauseAlert = () => {
    const introAlert = this.alerts.introAlert
    introAlert.pause()
    introAlert.currentTime = this.currentSettings.rest
    console.log(introAlert.currentTime)
  }

 
  render() {
    const { name, rest, interval, running_sets, running_time } = this.props.state
    const { sets } = this.currentSettings

    console.log("Timer Props are:", this.props.state)
    return (
      <div>
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
          running={this.state.running}
          />
      </div>
    );
  }
}
///?? ALSO CREATE REDUCER FOR HI/LO/CURRENT SETTINGS TO BE PASSED AS PROPS??
const mapStateToProps = (state) => {
  return {
    state: state.settings
  }
}
///returns: this.props.state = {
//   name: '',
//   sets: 0,
//   running_sets: 0,
//   interval: 0,
//   rest: 0,
//   running: false,
//   running_time: 0
// }

export default connect(mapStateToProps, { setHighIntensity })(Timer);