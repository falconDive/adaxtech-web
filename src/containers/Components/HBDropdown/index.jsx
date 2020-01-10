import React, { Component } from 'react';
import { Table, Dropdown } from 'semantic-ui-react';
import { propTypes, defaultProps } from './index.props';
import { HBDropdownStyle } from './../../../components/HBDropdown';

class HBDropdown extends Component {
	static propTypes = propTypes;
	static defaultProps = defaultProps;

	constructor(props) {
		super(props);
		this.state = {
			selectedValue: this.props.options[0].text
		};
	}

	handleTrigger = (e, { value, options }) => {
		const selectedText = options.find((i) => i.value === value);
		this.setState({ selectedValue: selectedText.text });

		if (this.props.onChange) {
			this.props.onChange(value);
		}
	};

	render() {
		const { selectedValue } = this.state;

		const trigger = <span>{selectedValue}</span>;

		return (
			<HBDropdownStyle className={`HBDropdownStyle`}>
				<Dropdown
					trigger={trigger}
					options={this.props.options}
					onChange={this.handleTrigger}
					value={selectedValue}
				/>
			</HBDropdownStyle>
		);
	}
}

export default HBDropdown;
