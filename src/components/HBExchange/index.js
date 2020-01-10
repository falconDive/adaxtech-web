import styled, { css } from 'styled-components';

export const HBExchange = styled.div`
    h3{
        color: #FFFFFF;
	    font-size: 18px;
        font-weight: bold;
        padding-bottom: 10px;
        margin-bottom: 0;
        margin-bottom: 12px;
    }
    .table.ui{
        background: transparent;
        th{
            background-color: transparent;
            font-family: "Basis Grotesque Light Pro";
        }
        th{
            color: #939598;
            padding: 10px 0;
        }

        td {
            color: #FFFFFF;
            padding: 10px 0;
        }
    }
`

export const HBExchangeHeader = styled.div`
    display: flex;
    height: 80px;
`

export const HBExchangeHeaderColumn = styled.div`
    align-self: center;
    &:nth-child(1){
        width: 320px;
        text-align: center;
        .HB-menu{
            position: absolute;
            left: 22px;
            top: 30px;
            cursor: pointer;
        }
    }
    &:nth-child(2){
        width: 218px;
    }
    &:nth-child(3){
        flex: 1;
    }
    &:nth-child(4){
        padding: 0 30px;
        color: #939598;
        font-size: 14px;
        font-weight: bold;
        display: flex;
        cursor: pointer;
        span{
            align-self: center;
            margin-left: 10px;
        }
    }
`

export const HBContainer = styled.div`
    ${props => props.wide === 'lg' && css`
        max-width: 100%;
        margin: 0 auto;
        padding: 10x 0px !important;
    `}
`

export const HBExchangeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

export const HBExchangeColumn = styled.div`
    /* border-top: 2px solid #383838; */
    ${props => props.grid === 'main' && css`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    /*
      > div {
          flex: 1 0 auto;
      }
      */
        @media (min-width: 768px) {
          &:nth-child(1){
              width: 43%;
              padding-right: 5px;
          }
          &:nth-child(2){
              flex: 1 0 auto;
              width: 57%;
              padding-left: 5px;
          }
        }
        width: 100%;
    `}

    ${props => props.grid === 'order' && css`
          display: flex;
          flex-direction: row;
          /*
          > div {
          width: 100%;
          flex: 1 0 auto;
          }
          */
        &:nth-child(1){
            width: 50%;
            padding-right: 5px;
        }
        &:nth-child(2){
            width: 50%;
            padding-left: 5px;
        }
    `}
`
