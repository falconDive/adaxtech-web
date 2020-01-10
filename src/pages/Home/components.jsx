import styled, { css } from 'styled-components';
import { Input } from 'semantic-ui-react';

export const HeaderContainer = styled.div`
	padding: 20px;
	position: relative;
`;

export const BannerLeftContainer = styled.div`
	color: #fff !important;
	padding: 15px;
	max-width: 480px;
`;

export const BannerLeftInner = styled.div`text-align: justify;`;

const btnBGColors = {
	default: {
		color: '#ffb600',
		hover: '#e09f00',
		active: '#ffc433',
		invertedHover: '#e09f00',
		invertedActive: '#ffc433'
	}
};

export const ADAXBtn = styled.button`
	height: 45px;
	border-radius: 35px;
	border: 2px solid transparent;
	font-size: 18px;
	font-family: "Basis Grotesque Bold Pro";
	transition: all 0.2s ease;
	cursor: pointer;
	outline: none !important;

	&:hover {
		/* opacity: 0.5; */
		${(props) => {
			let val = `background-color: ${btnBGColors[props.color].hover}`;
			if (props.inverted) {
				val = `color: ${btnBGColors[props.color].hover}`;
			}
			return css`
				${val};
			`;
		}};
	}

	&:active {
		/* opacity: 0.5; */
		${(props) => {
			let val = `background-color: ${btnBGColors[props.color].active}`;
			if (props.inverted) {
				val = `color: ${btnBGColors[props.color].active}`;
			}
			return css`
				${val};
			`;
		}};
	}

	${(props) => {
		let val = ``;

		if (props.color) {
			val = `
        background-color: ${btnBGColors[props.color].color};
        `;
		}

		if (props.inverted) {
			val += `
        color: ${btnBGColors[props.color].color}
        background-color: transparent;
        border: 2px solid ${btnBGColors[props.color].color};
        `;
		}

		if (props.block) {
			val += `
        width: 100%;
        `;
		}

		return css`
			${val};
		`;
	}};
`;

export const ADAXBtnLink = styled.a`
	height: 45px;
	padding: 8px 15px;
	border-radius: 35px;
	border: 2px solid transparent;
	font-size: 18px;
	font-family: "Basis Grotesque Bold Pro";
	transition: all 0.2s ease;
	cursor: pointer;
	outline: none !important;

	&:hover {
		/* opacity: 0.5; */
		${(props) => {
			let val = `background-color: ${btnBGColors[props.color].hover}`;
			if (props.inverted) {
				val = `color: ${btnBGColors[props.color].hover}`;
			}
			return css`
				${val};
			`;
		}};
	}

	&:active {
		/* opacity: 0.5; */
		${(props) => {
			let val = `background-color: ${btnBGColors[props.color].active}`;
			if (props.inverted) {
				val = `color: ${btnBGColors[props.color].active}`;
			}
			return css`
				${val};
			`;
		}};
	}

	${(props) => {
		let val = ``;

		if (props.color) {
			val = `
        background-color: ${btnBGColors[props.color].color};
        `;
		}

		if (props.inverted) {
			val += `
        color: ${btnBGColors[props.color].color}
        background-color: transparent;
        border: 2px solid ${btnBGColors[props.color].color};
        `;
		}

		if (props.block) {
			val += `
        width: 100%;
        `;
		}

		return css`
			${val};
		`;
	}};
`;

export const ADAXInput = styled(Input)`
	input {
		background-color: transparent !important;
		border: none !important;
		border-radius: 0 !important;
		border-bottom: 1px solid #dcdcdc !important;
		color: #939598 !important;
	}
`;

export const ADAXInputLabel = styled.label`
	color: #939598;
	font-weight: 700;
	letter-spacing: .1em;
`;

export const ADAXTextArea = styled.textarea`
	margin-top: 10px;
	min-height: 200px;
	border-radius: 7px;
	width: 100%;
	border: 1px #dcdcdc solid;
	resize: none;
	color: #939598 !important;
`;

export const MainContentContainer = styled.div`background-color: #fff;`;

export const MainContentContainerInner = styled.div`padding: 5% 10% 5% 10%;`;

export const FooterItems = styled.span`
	margin-right: 50px;
	color: #fff;
	font-weight: 500;
	letter-spacing: 1.07px;
	line-height: 21px;
`;

export const VideoContainer = styled.div`
	background-color: #000;
	&:hover {
		background-color: rgba(0, 0, 0, .9);
	}
`;

export const VideoOverlay = styled.div`
	position: absolute;
	top: 0;
	bottom: 10%;
	left: 0;
	right: 0;
	transition: all 0.5s ease;
	&:hover {
		background-color: rgba(0, 0, 0, .7);
	}
`;

export const ErrorLabel = styled.div`
	color: #ff6565;
	padding: 5px;
`;
