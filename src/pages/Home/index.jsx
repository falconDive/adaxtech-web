import React, { Component } from 'react';
// import ReactLoading from 'react-loading';
import Header from './header';
import Banner from './banner';
import MainContent from './main-content';
import SubContent from './sub-content';
import Contact from './contact';
import Footer from './footer';
import VideoContent from './video-content';

import { MainContentContainer, MainContentContainerInner } from './components';
export default class index extends Component {
	render() {
		return (
			<div>
				{/* <ReactLoading type={`bubbles`} color="#FFB600" /> */}
				<div style={{ padding: '30px' }}>
					<Header />
					<Banner />
				</div>

				<MainContentContainer>
					<MainContentContainerInner>
						<MainContent />
						<VideoContent />
						<SubContent />
						<Contact />
					</MainContentContainerInner>
				</MainContentContainer>
				<Footer />
			</div>
		);
	}
}
