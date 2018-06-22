import React from 'react';
import Image, { Video } from './image';

export default class IntroVideo extends React.Component {
  state = {
    loaded: false,
    shouldAutoPlay: true,
  };
  componentDidMount() {
    let shouldAutoPlay = true;

    if (window.matchMedia) {
      shouldAutoPlay = window.matchMedia('(min-width: 767px)').matches;
    }

    this.setState(() => ({
      loaded: true,
      shouldAutoPlay,
    }));
  }
  render() {
    const { shouldAutoPlay, loaded } = this.state;
    if (!loaded) {
      return (
        <Image width={800} height={400} src="/static/media/video-poster.png" />
      );
    }

    return (
      <Video
        width={800}
        height={400}
        autoPlay={false}
        muted
        controls
        preload="none"
        poster="/static/videos/video-poster.png"
        src="/static/media/chrome-clip.mp4"
        caption="Testing Video"
      />
    );
  }
}
