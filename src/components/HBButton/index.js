import styled, { css } from 'styled-components';

export const HBButton = styled.button`
    height: 66px;	
    line-height: 62px;
    border-radius: 40px;	
    border: 2px solid transparent;
    font-size: 20px;
    font-family: "Basis Grotesque Bold Pro";
    transition: all 0.3s ease;
    cursor: pointer;
    outline: none !important;
    width: 100%;

    ${(props) => props.bsstyle === 'center' && css`text-align: center;`}

    ${(props) =>
		props.default === 'border' &&
		css`
			background: transparent;
			border-color: #383838;
			color: #ffffff;
			font-family: "Basis Grotesque Pro";
			&:hover:not(:disabled) {
				background: #383838;
				color: #121212;
			}
		`}
    ${(props) =>
		props.border === 'theme' &&
		css`
			border-color: #ffb600;
			color: #ffffff;
		`}
    
    /* border-color: ${(props) => (props.theme ? '#FFB600' : '#383838')}; */

    ${(props) =>
		props.default === 'default' &&
		css`
			background-color: #ffb600;
			color: #121212;
			&:hover:not(:disabled) {
				/* background-color: #64d5d8; */
				/* background: #121212;
            color: #121212;
            border-color: #121212; */
				opacity: .7;
			}
		`}

    ${(props) => props.margin === 'mb3' && css`margin-bottom: 15px;`}

    ${(props) => props.margin === 'mb4' && css`margin-bottom: 20px;`}

    ${(props) => props.margin === 'mt6' && css`margin-top: 30px;`}

    &:disabled{
        cursor: not-allowed;
        /* &:hover, &:not(:disabled):hover{ */
        opacity: 0.8;
    }


    ${(props) =>
		props.pos === 'right' &&
		css`
			position: absolute;
			right: 0;
			bottom: 15px;
			z-index: 1111;
		`}

    ${(props) =>
		props.size === 'small' &&
		css`
			height: 40px;
			line-height: 36px;
			font-size: 16px;
		`}

    ${(props) =>
		props.size === 'medium' &&
		css`
			height: 50px;
			line-height: 46px;
			font-size: 15px;
		`}
`;

export const HBLink = styled.div`
    a{
        color: #fff;
        display: block;
    }
    height: 66px;	
    line-height: 62px;
    border-radius: 40px;	
    border: 2px solid transparent;
    font-size: 20px;
    font-family: "Basis Grotesque Bold Pro";
    transition: all 0.3s ease;
    width: 100%;
    cursor: pointer;
    outline: none !important;

    ${(props) => props.bsstyle === 'center' && css`text-align: center;`}

    ${(props) =>
		props.default === 'border' &&
		css`
			background: transparent;
			border-color: #383838;
			color: #121212;
			&:hover:not(:disabled) {
				background: #383838;
				a {
					color: #121212;
				}
			}
		`}
    ${(props) =>
		props.border === 'theme' &&
		css`
			border-color: #ffb600;
			color: #ffffff;
		`}
    
    /* border-color: ${(props) => (props.theme ? '#FFB600' : '#383838')}; */

    ${(props) =>
		props.default === 'default' &&
		css`
			background-color: #ffb600;
			a {
				color: #121212;
			}
			&:hover:not(:disabled) {
				/* background-color: #64d5d8; */
				/* background: #121212;
            border-color: #121212;
            a{
                color: #121212;
            } */
				opacity: .7;
			}
		`}

    ${(props) => props.margin === 'mb3' && css`margin-bottom: 15px;`}

    ${(props) => props.margin === 'mb4' && css`margin-bottom: 20px;`}

    ${(props) => props.margin === 'mt6' && css`margin-top: 30px;`}

    &:disabled{
        cursor: not-allowed;
        /* &:hover, &:not(:disabled):hover{ */
        opacity: 0.8;
    }


    ${(props) =>
		props.pos === 'right' &&
		css`
			position: absolute;
			right: 0;
			bottom: 15px;
			z-index: 1111;
		`}

    ${(props) =>
		props.size === 'small' &&
		css`
			height: 40px;
			line-height: 36px;
			font-size: 16px;
		`}

    ${(props) =>
		props.size === 'medium' &&
		css`
			height: 50px;
			line-height: 46px;
			font-size: 15px;
		`}
`;

export const AdxButton = styled.button`
    border-radius: 40px;
    border: 1px solid;
    transition: all 0.3s ease;
    cursor: pointer;
    outline: none !important;
    padding: 5px 15px;

    ${
    	(props) => {
    		if (props.primary) {
    			return `
					background: #ffb600;
					color: #121212;
    			`
    		} else {
    			return `
    				background: transparent;
    				color: #fff;
					border-color: #383838;
    			`
    		}
    	}
    }
    
    ${ (props) => props.bold ? `font-weight: 600` : '' }
`