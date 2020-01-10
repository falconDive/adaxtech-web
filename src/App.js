import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Main from './main';
import { Provider } from 'react-redux'

import { ThemeProvider } from 'styled-components'
import { dark } from './theme/globalStyle'

import store from './store'
import { setupSocket } from './services/ExchangeService'

let exchangeService = setupSocket(store)


class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: []
		}
	}

	async componentDidMount() {
	}

	render() {
		return (
			<Provider store={store}>
				<ThemeProvider theme={dark}>
					<Main />
				</ThemeProvider>
			</Provider>
		)

	}
}

export {
	exchangeService
}
export default App;
