import React from 'react';
import { render } from 'react-dom';
import { DefaultPlayer as Video } from 'react-html5video';
import './moviesBox.css';

export default (props) => {
  return (
    <Video autoPlay loop muted
      controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
      poster="http://sourceposter.jpg"
      onCanPlayThrough={() => {
        // Do stuff
      }}>
      <source src="http://videos.hd-trailers.net/BatmanvSuperman_TLR-1_5.1-480p-HDTN.mp4" type="video/mp4" />
      <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />
    </Video>
  );
};