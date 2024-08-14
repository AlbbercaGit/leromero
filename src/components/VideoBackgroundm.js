// VideoBackground.js
import React from 'react';

const VideoBackground = () => {
  // const videoUrl = 'https://raw.githubusercontent.com/AlbbercaGit/videos/main/leromerm.mp4'; 
  const videoUrl = 'https://raw.githubusercontent.com/AlbbercaGit/videos/a00d2c213e92e058f86440696638e32366b4f06f/500b89663c9ecc19b2c91a85da13735c.webm'; 

  return (
    <div className="absolute  z-[-1] top-0 left-0 w-full h-[110vh] block md:hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-fill"
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline // Asegúrate de incluir este atributo para iOS
      ></video>
    </div>
  );
};

export default VideoBackground;