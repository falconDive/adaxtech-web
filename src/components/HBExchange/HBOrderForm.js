import styled, { css } from 'styled-components';
import { Modal } from 'reactstrap';

import Tab from '../../components/Tab'
import { AdxDropdown } from '../AdxDropdown'

export const AdxAdvanceOrder = styled(Modal)`
    .modal-content {
        background: #212121;
        border: 0;
        width: 300px;
        max-width: 100%;
        padding: 20px 10px;
        margin: 0 auto;
        font-size: 0.8rem;
        color: #fff;
    }
`

export const CalcTab = styled(Tab)`
    margin: 0 0 10px;
`

export const HBOrderForm = styled.div`
    label{
        padding: 10px 0 0;
        &.word-break{
            @media only screen and (max-width: 1455px) {
                max-width: 95px;
            }
        }
    }
    input{
        padding: 8px 0 !important;
    }
    select{
        margin-right: 0;
        margin-left: 0;
        margin-bottom: ${props => (props.mb4 ? "20px" : "0")};
    }
    .rc-slider-mark-text{
        &:last-child{
            padding-right: 15px;
        }
    }
    .rc-slider-rail{
        background-color: #7B7B7B;
    }
    .rc-slider-track{
        background-color: #ffb600;
    }
    .rc-slider-dot{
        background-color: #7B7B7B;
        border-color: #7B7B7B;

        bottom: -3px;
        margin-left: 0px;
        width: 2px;
        height: 8px;
        border: 0;
        border-radius: 0;
        &-active{
            background-color: #ffb600;
        }

        &:first-child{
            background-color: transparent;
        }
    }

    .rc-slider-rail,
    .rc-slider-track,
    .rc-slider-step{
        height: 2px;
    }

    .rc-slider-mark-text-active{
        color: #ffb600;
    }

    .rc-slider-handle {
        margin-left: -5px;
        margin-top: -4px;
        width: 10px;
        height: 10px;
        background-color: #ffb600;
        border-color: #ffb600 !important;
    }
`

export const OrderType = styled.div`
    display: flex;
    margin-top: ${props => (props.mb4 ? "20px" : "0")};
    margin-bottom: ${props => (props.mb4 ? "20px" : "0")};
`

export const OrderTypeBtn = styled.div`
    flex: 1;
    cursor: pointer;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-family: "Basis Grotesque Bold Pro";

    &:first-child{
        border-radius: 30px 0 0 30px;
    }
    &:last-child{
        border-radius: 0 30px 30px 0;
    }

    background-color: ${props => (props.active ? "#FFB600" : "#383838")};
    color: ${props => (props.active ? "#121212" : "#FFFFFF")};
`

export const Preview = styled.div`
    color: #939598;
    display: flex;
    margin: 5px 0
`

export const PreviewItem = styled.div`
    &:first-child{
        flex: 1;
    }
`

export const ModalBtn = styled.div`
    display: flex;
`

export const PriceAmount = styled.div`
    text-align: center;
    margin-top: 20px;
`

export const PricePer = styled.div`
    text-align: center;
    margin-bottom: 20px;
`



export const Balance = styled.div`
`

export const BalanceHead = styled.div`
    display: flex;
    margin-bottom: 10px;
    span{
        color: #939598;
        font-weight: bold;
        &:nth-child(1){
            flex: 1;
        }
    }
`

export const BalanceItem = styled.div`
    display: flex;
    margin-bottom: 10px;
	font-family: "Basis Grotesque Light Pro";
    line-height: 1;
    span{
        align-self: center;
        &:nth-child(2){
            flex: 1;
            padding: 0 15px;
        }
    }
`

export const Converter = styled.div`
    margin: 15px 0 0;

    .input-group {
        width: 47%;
        flex-direction: column;
    }
    .calc-form {
        display: flex;
        justify-content: space-between;
    }
`
export const PlaceOrderBtn = styled.div`
    border-radius: 40px;
    font-family: "Basis Grotesque Bold Pro";
    transition: all 0.3s ease;
    cursor: pointer;
    outline: none;
    padding: 7px 10px;
    margin: 0 auto 10px;
    background-color: #262626;
    text-align: center;
    font-size: inherit;
    line-height: initial;
    display: block;
    width: 170px;
    max-width: 100%;

    &:hover {
        background-color: #FFB600;
        color: #121212;
    }

    &:hover {
        background-color: #FFB600;
        color: #121212;
    }
`
export const SubmitAdvanceOrder = styled(PlaceOrderBtn)`
    color: #121212;
    background: #FFB600;
    margin: 30px auto 10px;
    display: block;

    &:hover:not(:disabled) {
        opacity: 0.7;
    }
`
export const CloseAdvanceOrder = styled(PlaceOrderBtn)`
    color: #fff;
    border: 2px solid #383838;
    background: transparent;
    margin: 10px auto;
    display: block;

    &:hover:not(:disabled) {
        color: #fff;
        background: transparent;
        opacity: 0.7;
    }
`
export const OrderTypeDropdown = styled(AdxDropdown)`
    margin: 15px 0 10px;    
` 
export const CurrencySelector = styled(AdxDropdown)`
    margin: 15px 0 10px;

    &.ui.dropdown .menu>.item>img {
        display: none;
    }
`
export const AdvancedOrderBtn = styled.span`
    padding: 5px;
    display: inline-block;
    font-weight: 600;
    color: #939598;
    cursor: pointer;
    font-size: 1rem;

    &:hover:not(:disabled) {
        color: #fff;
    }
`