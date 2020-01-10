import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

import { HeaderContainer, ADAXBtnLink } from './components';

import ADAXLOGO from './../../assets/adax/adax-logo.svg';

export default class Header extends Component {
	render() {
		return (
			<div>
				<HeaderContainer>
					<Image src={ADAXLOGO} size="small" />
					{/* <div style={{ position: 'absolute', top: 0, right: 0, width: '120px' }}>
						<ADAXBtnLink
							block
							inverted
							color={'default'}
							//href={'/'}
							href={'/signin'}
						>
							Login
						</ADAXBtnLink>
					</div> */}
				</HeaderContainer>
			</div>
		);
	}
}
