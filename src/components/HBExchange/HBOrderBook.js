import styled, { css } from 'styled-components';

export const HBOrderBook = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const HBOrderBookItem = styled.div`
    display: flex;
    padding: 4px 0;
    position: relative;

    span {
        padding: 0;
        flex: 1 0 50%;
        z-index: 1;

        &.sell{
            color: #FF4200;
        }
        &.buy{
            color: #05FA96;
        }
        // &:last-child {
        //     flex: 1 0 10%;
        //     margin-left: 10px;
        // }
    }
`

export const HBOrderBookHead = styled(HBOrderBookItem)`
    display: flex;
    padding: 0 10px 5px 0;

    span {
        color: #939598;
        font-weight: bold;
    }
`


export const HBOrderBookSpread = styled.div`
    padding: 15px 0;
    text-transform: uppercase;
`

export const HBOrderBookItemAnimate = styled.div`
    position: absolute;
    left: 0;
    top: -1px;
    height: 100%;
    background-color: ${props => (props.sell ? "#3C240A" : "")};
    background-color: ${props => (props.buy ? "#0C3028" : "")};
    transition: all 0.5s ease;
`

export const ListCont = styled.div`
    flex: 1 0;
    position: relative;
`
