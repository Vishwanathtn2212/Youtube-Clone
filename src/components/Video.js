import React from 'react'
import '../App.css';


const Video = ({ video }) => {
    const videoId=video ? video.id.videoId : '';
    const data1=video? video.snippet.title: '';
    const data2=video? video.snippet.description:'';

    const url=`https://www.youtube.com/embed/${videoId}`;
    return(
        <div className="VideoContainer">
            <iframe className="VideoComponent" src={url}>
            </iframe>
            <div className="details">
                <div><b>Title:</b>{data1}</div>
                <div><b>Description:</b>{data2}</div>
            </div>
        </div>
    )
}

export default Video