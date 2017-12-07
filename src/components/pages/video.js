import React, { Component } from 'react';
import YTSearch from 'youtube-api-search'

import VideoBar from '../video/video_bar';
import VideoList from '../video/video_list'

const API_KEY = 'AIzaSyAew42_JfxZHIWKvyhMgsz4MIq17oPKM7Y';

class VideoPage extends Component {
    constructor(props){
        super(props);

        this.state = { videos : []};

        YTSearch({ key: API_KEY, term: 'surgboards'}, (videos) => { // function(videos)
            this.setState({ videos: videos }); // this.setState({ videos: videos});
        });
    }

    render(){
        return(
            <div>
                <VideoBar />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }

}

export default VideoPage;