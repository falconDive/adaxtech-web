import styled, { css } from 'styled-components';

export const HBTokenDetailPreview = styled.div`
    position: fixed;
    top: 70px;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    padding: 10px;
    padding-bottom: 70px;
    background: #121212;
    overflow-y: auto;
`

export const HBTokenDetailPreviewContainer = styled.div`
    /* padding: 30px 30px 30px 60px; */
    position: relative;
    .b-icon{
        position: absolute;
        top: 15px;
        left: 25px;
    }
`

export const HBTokenDetailPreviewRow = styled.div`
    display: flex;
    .doc-file{
        color: #FFB600;
        font-family: "Basis Grotesque Bold Pro";
        font-size: 14px;
        display: inline-block;
        margin-right: 15px;
        margin-bottom: 10px;
    }
`

export const HBTokenDetailPreviewColumn = styled.div`
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
            background-color: #262626;
            padding: 30px 30px 30px 60px;
            flex: 1;
            padding-right: 5px;
            img{
                width: 100%;
            }
        }
        &:nth-child(2){
            background-color: #262626;
            padding: 30px 20px 30px 20px;
            width: 400px;
            border-left: 10px solid #121212;
        }
    `} 

    ${props => props.grid === 'content' && css`
        &:nth-child(1){
            width: 55%;
            padding-right: 10px;
        }
        &:nth-child(2){
            width: 45%;
            padding-left: 5px;
            p{
                margin-bottom: 15px;
            }
        }
    `} 
    
    ${props => props.grid === 'details' && css`
        padding: 7px 0;
        &:nth-child(1){
            flex: 1;
        }
        &:nth-child(2){
        }
    `} 
`