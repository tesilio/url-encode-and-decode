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
  constructor(props) {
    super(props)
    this.state = {
      d: new Date(),
      colon: '',
      isGold: false,
    }
  }

  componentDidMount() { // info: Clock 컴포넌트가 불러와질 때마다 1초씩 this.Change()를 호출
    this.timeID = setInterval(
      () => this.blink(),
      1000
    )
  }

  componentWillUnmount() { // info: 종료 시 반복 클리어
    clearInterval(this.timeID);
  }

  randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

  clockOnClickHandle = (event) => {
    console.dir(event.target);
    const colors = [`#${this.randomColor()}`, 'gold'];
    event.target.style.color = colors[Number(this.state.isGold)];
    this.setState({
      isGold: !this.state.isGold,
    });
  };

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
    const today9Pm = new Date();
    today9Pm.setHours(21, 0, 0, 0);
    return getTimeRemaining(today9Pm);
  }

  render() {
    const remainingTime = this.getRemainingTime();
    const date = this.state.d;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = addZeroNumber(minutes);
    return (
      <div id='Clock'>
        <div id='dateWrapper'>
          <div id='date' onClick={this.clockOnClickHandle}>
            {this.getDate()}
          </div>
        </div>
        <div id='timeWrapper'>
          <div id='time' onClick={this.clockOnClickHandle}>
            {hours}<span id='colon' className={this.state.colon}>:</span>{minutes}
          </div>
          <div id='remaining'
               onClick={this.clockOnClickHandle}>{remainingTime.hours}:{remainingTime.minutes}:{remainingTime.seconds}</div>
        </div>
      </div>
    )
  }
}
