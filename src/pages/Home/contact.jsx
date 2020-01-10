import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import { ADAXBtn, ADAXInput, ADAXInputLabel, ADAXTextArea } from './components';

export default class Contact extends Component {
	render() {
		return (
			<div style={{ marginTop: '100px' }}>
				<form>
					<Grid stackable>
						<Grid.Row>
							<Grid.Column>
								<h1 style={{ textAlign: 'center', marginBottom: '50px' }}>
									Interested in Listing Your Security Token?
								</h1>
							</Grid.Column>
						</Grid.Row>

						<Grid.Row columns={2}>
							<Grid.Column>
								<ADAXInputLabel>Name</ADAXInputLabel>
								<ADAXInput fluid id="email" />
							</Grid.Column>
							<Grid.Column>
								<ADAXInputLabel>Email</ADAXInputLabel>
								<ADAXInput fluid id="email" />
							</Grid.Column>
						</Grid.Row>

						<Grid.Row>
							<Grid.Column>
								<ADAXInputLabel>Subject</ADAXInputLabel>
								<ADAXInput fluid id="email" />
							</Grid.Column>
						</Grid.Row>

						<Grid.Row>
							<Grid.Column>
								<ADAXTextArea placeholder="Message" />
							</Grid.Column>
						</Grid.Row>
					</Grid>
					<div style={{ float: 'right', minWidth: '120px' }}>
						<ADAXBtn block type="submit" bsstyle="center" color={'default'}>
							Submit
						</ADAXBtn>
					</div>
					<div style={{ clear: 'both' }} />
				</form>
			</div>
		);
	}
}
