import React from 'react'
import '../App.css';

const Content=({video, onVideoSelect})=>{
    const video_img=video? video.snippet.thumbnails.default.url: '';
    const video_info=video? video.snippet.channelTitle: '';
        return(
            //calling onVideoSelect(video)
            <div className="ComponentContentI" onClick={() => onVideoSelect(video)} >
                <div className="ComponentContentI-Img">
                    <img src={video_img} alt=""></img>
                </div>
                <div className="ComponentContentI-Info">
                    <p>{video_info}</p>
                </div>
            </div>
        )
}

export default Content


//Content