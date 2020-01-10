import styled, { css } from 'styled-components';

export const HBTickerHeader = styled.div`
    display: flex;
    position: relative;
    margin: 0 0 10px ;
    white-space: nowrap;
`

export const HBTickerHeaderColumn = styled.div`
    flex: 1;
    padding-right: 20px;

    span{
        display: block;
        color: #939598;

        &:first-child{
            margin-bottom: 3px;
        }
        &:last-child{
            color: #ffffff;
        }
        &.buy{
            color: #05FA96;
        }
        &.sell{
            color: #FF4200;
        }
    }
`