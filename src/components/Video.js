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
  '가양대교남단': 'https://topiscctv.eseoul.go.kr/edge6/ch13.stream/playlist.m3u8',
  '강남역': 'https://topiscctv.eseoul.go.kr/sd2/ch98.stream/playlist.m3u8',
  '(남산)경리단길': 'https://topiscctv.eseoul.go.kr/edge6/ch113.stream/playlist.m3u8',
  '동호대교(북단)': 'https://topiscctv.eseoul.go.kr/edge6/ch19.stream/playlist.m3u8',
  '강남교보빌딩 R': 'https://topiscctv.eseoul.go.kr/sd1/ch107.stream/playlist.m3u8',
  '잠실역': 'https://topiscctv.eseoul.go.kr/sd1/ch76.stream/playlist.m3u8',
  '양재IC': 'https://topiscctv.eseoul.go.kr/edge6/ch119.stream/playlist.m3u8',
  '광화문': 'https://topiscctv.eseoul.go.kr/sd2/ch22.stream/playlist.m3u8',
  '광화문광장': 'https://topiscctv.eseoul.go.kr/sd1/ch96.stream/playlist.m3u8',
  '세종로': 'https://topiscctv.eseoul.go.kr/sd1/ch26.stream/playlist.m3u8',
  '동대문운동장': 'https://topiscctv.eseoul.go.kr/sd1/ch62.stream/playlist.m3u8',
  '원효대교북단': 'https://topiscctv.eseoul.go.kr/edge6/ch54.stream/playlist.m3u8',
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
