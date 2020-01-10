import styled, { css } from 'styled-components';

export const HBCard = styled.div`
	flex: ${props => (props.stretch ? "1 0 auto" : "auto")};
	height: ${props => (props.halfvh ? "50vh" : "auto")};
	padding: ${props => (props.scrollable ? "0px" : "15px")};
	border-radius: 8px;
    // background-color: #262626;
    margin-bottom: 10px;
    position: relative;
`

export const Scrollcontent = styled.div`
	padding: 0px 10px;
	margin: 0 0 10px;
`
