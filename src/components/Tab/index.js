import React, { Component, Fragment } from 'react';
import styled, { css } from 'styled-components';
import { Input } from 'semantic-ui-react'

export class Tab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeItem: props.defaultSelected || 0
        }
    }

    setActiveTab = (activeItem) => {
        this.setState({ activeItem })
        if (typeof this.props.onChange === 'function') {
        	this.props.onChange(activeItem)
        }
    }

    render () {
    	const { activeItem } = this.state
    	const { items, className } = this.props
        const block = this.props.hasOwnProperty('block') ? 'block' : ''
		const classes = ['adx-menu', block, className].join(' ')
    	const menuItems = items.map((item, i) => {
    		const active = (activeItem === i) ? 'active' : ''
    		const props = {
    			...item,
    			key: i,
    			onClick: () => this.setActiveTab(i),
    			className: [item.className, active, 'menu-item'].join(' ').trim()
    		}
    		return <div {...props} />
    	})

        return (
            <div className={classes}>{menuItems}</div>
        )
    }
}

export default styled(Tab)`
    display: flex;
    border-bottom: 2px solid #383838;
    font-size: 105%;
    font-weight: 600;

    .menu-item {
        color: #939598;
        padding: 5px;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-bottom: -2px;
        border-bottom: 2px solid transparent;

        ${props => {
            if ( props.block ) {
                return `
                    flex-grow: 1;
                    flex-basis: 0;
                    text-align: center;
                `
            }
        }}
    }
    .menu-item.active {
        border-color: #FFB600;
        color: #fff;
    }
`