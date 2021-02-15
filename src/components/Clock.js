import React from 'react';
import '../styles/clock.css';

function getTimeRemaining(endTime) {
  const total = Date.parse(endTime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

export default class Clock extends React.Component {
  state = {
    colon: '',
  }
  constructor(props) {
    super(props)
    this.state = { d: new Date() }
  }

  componentDidMount() { // Clock 컴포넌트가 불러올때마다 1초씩 this.Change()를 부른다
    this.timeID = setInterval(
      () => this.blink(),
      1000
    )
  }

  componentWillUnmount() { //종료되면 반복하는것도 클리어시키기
    clearInterval(this.timeID)
  }

  blink = () => {  //시계 구현
    this.setState({
      d: new Date(),
      colon: this.state.colon === 'hide' ? '' : 'hide',
    });
  }

  getDate = () => {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const date = this.state.d;
    const day = days[date.getDay()];
    return `${date.getMonth() + 1}월${date.getDate()}일(${day})`;
  }

  getAmpm = () => {
    const date = this.state.d;
    let hours = date.getHours();
    return hours >= 12 ? '오후' : '오전';
  }

  getRemainingTime = () => {
    const today10Pm = new Date();
    today10Pm.setHours(22, 0, 0, 0);
    return getTimeRemaining(today10Pm);
  }

  render() {
    const remainingTime = this.getRemainingTime();
    const date = this.state.d;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return (
      <div id='Clock'>
        <div id='dateWrapper'>
          <div id='date'>
            {this.getDate()}
          </div>
          <div id='ampm'>
            {this.getAmpm()}
          </div>
        </div>
        <div id='timeWrapper'>
          <div id='time'>
            {hours}<span id='colon' className={this.state.colon}>:</span>{minutes}
          </div>
          <div id='remaining'>{remainingTime.hours}:{remainingTime.minutes}:{remainingTime.seconds}</div>
        </div>
      </div>
    )
  }
}
