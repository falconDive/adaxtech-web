import styled, { css } from 'styled-components';

export const HBModal = styled.div`
    background-color: #1D1D1D;
    color: #ffffff;
    padding: 50px 40px;
    border-radius: 8px;
    position: relative;

    h3{
	    font-family: "Basis Grotesque Bold Pro";
        font-size: 34px;
        letter-spacing: 0.71px;
    }
    p{
        font-family: "Basis Grotesque Light Pro";
        font-size: 16px;
    }

    hr{
        border-bottom: 2px solid #383838;
        margin: 20px 0;
    }

    .modal-close{
        position: absolute;
        top: 40px;
        right: 40px;
        cursor: pointer;
    }


    ${props => props.width === 'normal' && css`
        max-width: 570px;
        margin: 0 auto;
    `}

    ${props => props.width === 'large' && css`
        max-width: 986px;
        margin: 0 auto;
    `}

    ${props => props.padding === 'ma3' && css`
        padding: 30px 20px;
    `}
`