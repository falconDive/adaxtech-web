import styled, { css } from 'styled-components';

export const HBWalletBalance = styled.div`
`

export const HBWalletBalanceHead = styled.div`
    display: flex;
    margin-bottom: 5px;
    span{
        color: #939598;
        font-weight: bold;
        &:nth-child(1){
            flex: 1;
        }
    }
`

export const HBWalletBalanceItem = styled.div`
    display: flex;
    margin-bottom: 5px;
	font-family: "Basis Grotesque Light Pro";
    span{
        align-self: center;
        &:nth-child(2){
            flex: 1;
            padding: 0 15px;
        }
    }
    img {
        max-width: 30px;
        max-height: 30px;
    }
`