import styled, { css } from 'styled-components';
	const HBTab = styled.div.attrs({
		bb: props => props.bb === `active` ? `2px` : `1px`
	})`
`

export const THBabHeader = styled.div`
	display: flex;
	border-bottom : 2px #383838 solid !important;
`

export const THBabItem = styled.div`
	height: 50px;
	line-height: 50px;
	text-align: center;
	font-size: 18px;	
	font-weight: bold;	
	flex-grow: 1;
    letter-spacing: 0.2px;
	cursor: pointer;
	color: #939598;
	/* color: ${props => props.status === `active` ? `#74F9FC` : `#939598`} */

    ${props => props.status === 'active' && css`
		border-bottom : 2px #AF48E9 solid !important;
		color: #ffffff;
    `}
`

export const THBabContent = styled.div`
	color: #ffffff;
	padding: 20px 0;
`

export default HBTab;