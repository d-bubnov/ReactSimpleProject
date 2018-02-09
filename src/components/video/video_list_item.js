import React from 'react';

const VideoListItem = ({video}) => {
    // const video = props.video;
    console.log(video)
    return <li title={video.snippet.title}>{video.snippet.channelTitle}</li>
}

export default VideoListItem;