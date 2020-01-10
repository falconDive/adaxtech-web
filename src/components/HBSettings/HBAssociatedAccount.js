import styled, { css } from 'styled-components';

export const HBAssociatedAccount = styled.div`
`

export const HBAssociatedAccountRow = styled.div`
    display: flex;
`

export const HBAssociatedAccountColumn = styled.div`
    margin-bottom: 20px;
    color: #ffffff;
    font-family: "Basis Grotesque Pro";
    &.header{
        color: #939598;
        font-size: 16px;
        font-family: "Basis Grotesque Bold Pro";
    }
    &:nth-child(1){
        flex: 1;
    }
    &:nth-child(2){
        width: 150px;
        text-align: center;
    }
    &:nth-child(3){
        width: 150px;
        text-align: center;
    }
`