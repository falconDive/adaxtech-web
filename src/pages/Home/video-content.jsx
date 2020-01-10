import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ReactPlayer from 'react-player';

import { VideoOverlay } from './components';

export default class VideoContent extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			playerSource: 'https://s3-ap-southeast-1.amazonaws.com/adaxtech-assets/ADAXTECH.mp4'
		};
	}
	render() {
		return (
			<Grid stackable>
				<Grid.Row>
					<Grid.Column>
						{/* <div style={{ position: 'relative' }}> */}
						{/* <VideoContainer> */}
						<ReactPlayer
							// playing={true}
							height={'100%'}
							width={'100%'}
							controls={true}
							url={'https://s3-ap-southeast-1.amazonaws.com/adaxtech-assets/ADAXTECH.mp4'}
						/>
						{/* <VideoOverlay /> */}
						{/* </div> */}
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}
