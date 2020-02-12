import React from 'react';

class TimerBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { progress: 0 };
  }

  // moveBar = (runningTime) => {
  //   let intTime = Math.floor(100/runningTime)
  //   let interval = setInterval(run, 1000)
  //   move = () => {
  //     if (this.state.progress === 100) {
  //       clearInterval(interval)
  //     } else {
  //       this.setState({progress: this.state.progress + intTime})
  //     }
  //   }
  // }
 

  render() {
    const { runningTime, totalTime } = this.props


    return (
      <div>
        <progress value={runningTime} max={totalTime}></progress>
      </div>
    );
  }
}

export default TimerBar;