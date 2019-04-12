import React, { Component } from 'react';
import Thumbnail from './Thumbnail';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      seconds: [],
      videoUrl: 'https://dl.dropboxusercontent.com/s/7b21gtvsvicavoh/statue-of-admiral-yi-no-audio.mp4?dl=1'

    }

    this.handleMetadata = this.handleMetadata.bind(this)
  }

  // get length of video
  // from https://stackoverflow.com/questions/49900527/javascript-video-loadmetadata-event-not-being-triggered-on-react-redux-applicati
  handleMetadata(event) {
    const duration = event.currentTarget.duration;
    
    var secs = []

    console.log(secs)
    
    // we want 10 thumbnails
    const thumbnailsEach = duration / 10
    for (var i = 1; i <= 10; i++) {
      const thumbnailSecond = thumbnailsEach*i 
      secs.push(thumbnailSecond)
    }
    console.log(secs)

    this.setState({seconds: secs})
  }

  render() {
    return (
      <div id='main'>
        <video id="player" width="320" height="176" controls onLoadedMetadata={this.handleMetadata} src={this.state.videoUrl} />
        <Thumbnail seconds={this.state.seconds} videoUrl={this.state.videoUrl} />
      </div>
    );
  }
}

export default App;
