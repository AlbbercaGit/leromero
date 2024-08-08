// VideoBackground.js
import React from 'react';
import bear from './vid/leromerm.mp4'

const VideoBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[110vh] block md:hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-fill "
        src={bear}
        autoPlay
        muted
        loop
      ></video>

    </div>
  );
};

export default VideoBackground;