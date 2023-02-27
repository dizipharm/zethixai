import React, { useRef } from 'react';
// @ts-ignore
import Uhr5 from "./../../../assets/images/Uhr5.mp4"

type VideoPlayerProps = {
  src: string;
};

const Y: React.FC<VideoPlayerProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div style={{ textAlign: 'center' }}>
            <h1>ESG Implementation</h1>

      <video style={{width:"72%",height:"45%"}} ref={videoRef} controls>
        <source src={Uhr5} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Y;