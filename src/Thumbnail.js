import React, { Component } from 'react';
import VideoThumbnail from 'react-video-thumbnail';

class Thumbnail extends Component {

	render() {
		return(
			<div className='thumbnailContainer'>
				{this.props.seconds.map((second, i) => <VideoThumbnail 
															key={i} 
															videoUrl={this.props.videoUrl} 
															snapshotAtTime={second} 
															width={120} 
															height={80}
														/>
        		)}
			</div>
		)
	}
 }



 export default Thumbnail;