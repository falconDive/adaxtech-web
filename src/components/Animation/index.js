import styled, { css } from 'styled-components';

export const HideElement = styled.div`
    position: relative;
    transition: all 370ms cubic-bezier(0.34, 1.61, 0.7, 1);
    
    ${props => props.show === 'no' && css`
        width:0;
        height:0;
        z-index: -1;
        opacity: 0;
        visibility: hidden;
        filter: alpha(opacity=0);
        transform: translate3d(0, -20px, 0);
        overflow: hidden;
        /* transition: width 0.3s 0.3s, height 0.3s 0.3s, opacity 0.3s; */
    `}

    ${props => props.show === 'yes' && css`
        width:auto;
        height:auto;
        opacity: 1;
        filter: alpha(opacity=100);
        visibility: visible;
        transform: translate3d(0, 0px, 0);
    `}
`