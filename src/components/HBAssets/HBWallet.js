import styled, { css } from 'styled-components';

export const HBWallet = styled.div`
`

export const Balance = styled.div`
	font-size: 18px;
    font-weight: bold;
`

export const BalanceTotal = styled.div`
	font-size: 24px;
    font-weight: bold;
    margin: 15px 0 30px 0;
`

export const HBWalletActions = styled.div`
    display: flex;
`

export const HBWalletActionsLabel = styled.div`
    align-self: center;
	color: #939598;
	font-size: 16px;
    font-family: "Basis Grotesque Bold Pro";
    margin: 0 8px 0 20px;
    &:first-child{
        margin-left: 0;
    }
`

export const HBWalletActionsLabelButton = styled.div`
    flex: 1;
    text-align: right;
`