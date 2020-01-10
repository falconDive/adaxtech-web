import styled, { css } from 'styled-components';

export const HBProfile = styled.div`
`

export const HBProfileRow = styled.div`
    display: flex;
`

export const HBProfileColumn = styled.div`
    margin-bottom: 20px;
    font-family: "Basis Grotesque Bold Pro";
    &:first-child{
        flex: 1;
        color: #939598;
    }
    &:last-child{
        color: #ffffff;
        font-family: "Basis Grotesque Light Pro";
    }
`