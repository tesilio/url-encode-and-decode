import React from 'react';
import '../styles/clock.css';

/**
 * 10 미만 앞자리 0추가
 * @param number
 * @returns {string|*}
 */
function addZeroNumber(number) {
  if (number <= 0) {
    return '00';
  }
  return Math.abs(number) < 10 ? `0${number}` : number;
}

function getTimeRemaining(endTime) {
  const total = Date.parse(endTime) - Date.parse(new Date());
  const secondsNumber = Math.floor((total / 1000) % 60);
  const minutesNumber = Math.floor((total / 1000 / 60) % 60);
  const hoursNumber = Math.floor((total / (1000 * 60 * 60)) % 24);
  const daysNumber = Math.floor(total / (1000 * 60 * 60 * 24));
  const seconds = addZeroNumber(secondsNumber);
  const minutes = addZeroNumber(minutesNumber);
  const hours = addZeroNumber(hoursNumber);
  const days = addZeroNumber(daysNumber);

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
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
    clearInterval(this.timeID);
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
    hours = addZeroNumber(hours);
    minutes = addZeroNumber(minutes);
    return (
      <div id='Clock'>
        <div id='dateWrapper'>
          <div id='date'>
            {this.getDate()}
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
