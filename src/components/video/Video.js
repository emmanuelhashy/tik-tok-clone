import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from "../videoFooter/VideoFooter"
import VideoSidebar from '../videoSidebar/VideoSidebar';

function Video({url, song, description, channel, likes, messages, shares}) {

    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const onVideoPress = () => {
        if(playing) {
            videoRef.current.pause();
            setPlaying(false)
        } else {
            videoRef.current.play();
            setPlaying(true)
        }
    }
    return (
        <div className="video">
            <video className="video__player" ref={videoRef} onClick={onVideoPress}  src={url}></video>

            
            <VideoFooter channel={channel} description={description} song={song}/>
            <VideoSidebar messages={messages} shares={shares} likes={likes}/>
        </div>
    )
}

export default Video
