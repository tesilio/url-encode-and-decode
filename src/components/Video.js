import React from 'react';
import ReactHlsPlayer from 'react-hls-player';
import '../styles/video.css';

const cctvUrls = {
  '영동대교 남단(경)': 'https://topiscctv.eseoul.go.kr/sd1/ch72.stream/playlist.m3u8',
  '청담대교 북단': 'https://topiscctv.eseoul.go.kr/edge6/ch72.stream/playlist.m3u8',
  '도산공원': 'https://topiscctv.eseoul.go.kr/sd1/ch131.stream/playlist.m3u8',
  '봉은사삼거리': 'https://topiscctv.eseoul.go.kr/sd1/ch79.stream/playlist.m3u8',
  '포스코R': 'https://topiscctv.eseoul.go.kr/sd1/ch113.stream/playlist.m3u8',
  '삼릉공원': 'https://topiscctv.eseoul.go.kr/sd1/ch78.stream/playlist.m3u8',
  '경복아파트': 'https://topiscctv.eseoul.go.kr/edge12/ch117.stream/playlist.m3u8',
  '서울세관사거리': 'https://topiscctv.eseoul.go.kr/sd1/ch69.stream/playlist.m3u8',
  '동작대교남단': 'https://topiscctv.eseoul.go.kr/edge6/ch12.stream/playlist.m3u8',
  '한강대교북단': 'https://topiscctv.eseoul.go.kr/edge6/ch42.stream/playlist.m3u8',
};

export default class Video extends React.Component {
  state = {
    url: cctvUrls['영동대교 남단(경)'],
  }

  handleChange = (event) => {
    this.setState({
      url: event.target.value,
    });
  }

  getOptions = () => {
    return Object.keys(cctvUrls).map(key => {
      return <option value={cctvUrls[key]}>{key}</option>;
    });
  }

  render() {
    return (
      <div id='Video'>
        <select onChange={this.handleChange}>
          {this.getOptions()}
        </select>
        <ReactHlsPlayer
          url={this.state.url}
          autoplay={true}
          controls={true}
          width="100%"
          height="auto"
        />
      </div>
    )
  }
}
