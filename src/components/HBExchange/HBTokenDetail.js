import styled, { css } from 'styled-components';

export const HBTokenDetail = styled.div`
    border-top: 1px solid #383838;
    margin: 15px -15px 0 -15px;
    padding: 15px 15px 0 15px;
`

export const HBTokenDetailRow = styled.div`
    display: flex;
    img{
        width: 100%;
    }
`

export const HBTokenDetailColumn = styled.div`
    /* border-top: 2px solid #383838; */
	font-family: "Basis Grotesque Light Pro";
    a{
        color: #FFB600;
        font-family: "Basis Grotesque Bold Pro";
        display: inline-block;
        margin-top: 15px;
    }

    ${props => props.grid === 'main' && css`
        &:nth-child(1){
            /* width: 43%; */
            padding-right: 5px;
            min-width: 370px;
        }
        &:nth-child(2){
            /* width: 57%; */
            padding-left: 5px;
            font-size: 12px;
            p{
                padding-right: 15px;
                margin-bottom: 15px;
            }
        }
    `} 
    
    ${props => props.grid === 'details' && css`
        padding: 3px 0;
        &:nth-child(1){
            flex: 1;
        }
        &:nth-child(2){
            padding-right: 15px;
        }
    `} 
`