
import styled, { css } from 'styled-components';

export const AdxForm = styled.div`
    .ui.input > input,
    input {
        background-color: transparent;
        border: 0;
        border-radius: 0;
        border-bottom: 2px solid #383838;
        color: #fff;
        outline: none;
        width: 100%;
        &[readonly] {
            cursor: not-allowed;
        }
        &:not([readonly]):focus {
            border-color: #FFB600;
        }
    }
    label {
        color: #939598;
        display: block;
        margin-bottom: 5px;
    }
`

export const HBForm = styled.div`
    label {
        color: #939598;
        font-weight: bold;
        letter-spacing: 0.67px;
        display: block;
        margin-bottom: 5px;
    }
    input{
        background-color: transparent !important;
        border: 0 !important;
        border-radius: 0 !important;
        border-bottom: 2px solid #383838 !important;
        color: #fff !important;
        padding: 10px 0 !important;
        outline: none !important;
        width: 100%;
        &:focus{
            border-color: #ffb600 !important;
        }
    }
    
    .not-input input{
        cursor: default;
        border-bottom: 2px solid #383838 !important;
    }

    .input-error input{
        border-color: #a94442 !important;
    }

    select{
        width: 100%;
        background: #262626;
        border: 0;
        border-bottom: 2px solid #FFB600;
        color: #fff;
        outline: none !important;
        padding: 10px 0;
        cursor: pointer;

        &.circled{
            float: right;
            background: #1D1D1D;
            border: 2px solid #383838;
            color: #fff;
            outline: none !important;
            padding: 7px 10px;
            cursor: pointer;
            font-size: 12px;
            border-radius: 20px;
        }
    }
    .ui.input {
        width: 100%;
    }
    
    button[disabled]{
        cursor: not-allowed;
        filter: alpha(opacity=65);
        -webkit-box-shadow: none;
        box-shadow: none;
        opacity: .65;
    }
`

export const HBFormGroup = styled.div`
    input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

    margin-bottom: 10px;
    position: relative;

    ${props => props.margin === 'huge' && css`
        margin-bottom: 50px;
    `}
`

export const HBFormNote = styled.div`
    margin-bottom: 30px;
    color: #FFFFFF;
    font-size: 16px;
    letter-spacing: 0.57px;
`

export const ForgotPassword = styled.div`
    color: #74F9FC;
    font-size: 16px;
    letter-spacing: 0.57px;
    margin-bottom: 40px;
`

export const HBFormCaptcha = styled.div`
    display: flex;
    span:first-child{
        flex: 1;
        /* transform:scale(0.80);
        transform-origin:0 0;
        padding: 13px 0; */
    }

    span:last-child{
        width: 230px;
        padding: 6px 0;
        margin-left: 20px;
    }
	@media only screen and (max-width: 640px) {
        display: block;
        max-width: 304px;
        margin: 0 auto;

        span{
            display:block;
            &:first-child{
            }
            &:last-child{
                margin-left:  0;
                margin-top: 20px;
                width: 100%;
            }
        }
	}
`

export const PwChecker = styled.div`
    display: flex;
    color: #fff;
    font-size: 16px;
    padding: 20px 0;
	@media only screen and (max-width: 640px) {
        display: block;
    }
`

export const PwShow = styled.div`
    position: absolute;
    color: #383838;
    right: 0;
    top: 35px;
    z-index: 111;
    background: #121212;
    cursor: pointer;
    &:hover{
        color: #ccc;
    }
`

export const PwCheckerList = styled.div`
    &:first-child{
        flex: 1;
    }
    &:last-child{
        width: 205px;
    }
    span{
        height: 10px;
        width: 10px;
        border-radius: 50%;
        margin-right: 10px;
        background-color: #878787;
        display: inline-block;
        &.active{
            background-color: #74F9FC;
        }
    }
`

export const PwCheckerListItem = styled.div`
    margin-bottom: 10px;
    padding-right: 10px;
    font-size: 14px;
    font-family: "Basis Grotesque Light Pro";
`

export const Agreement = styled.div`
    margin-bottom: 30px;
    label{
        color: #ffffff !important;
        font-size: 16px !important;
        letter-spacing: 0.57px;
        font-weight: normal;
        padding-left: 2.5em !important;
        font-family: "Basis Grotesque Light Pro";
        line-height: 22px;
        padding-top: 1px;
    }
    .ui.checkbox .box:before, .ui.checkbox label:before{
        background-color: #1D1D1D;
        border: 1.5px solid #424242;
        width: 20px;
        height: 20px;
        top: 0;
    }
    .ui.checkbox .box:after, .ui.checkbox label:after{
        width: 20px;
        height: 20px;
    }
`

export const TermsLabel = styled.div`
	color: #FFFFFF;
	font-size: 30px;
	font-weight: bold;
    letter-spacing: 0.71px;
    line-height: 44px;
    margin-bottom: 30px;
`

export const CheckEmail = styled.div`
	color: #FFFFFF;
	font-size: 34px;
	font-weight: bold;
	letter-spacing: 0.71px;
    text-align: center;
    margin: 40px 0;
`

export const CheckEmailMsg = styled.div`
	color: #FFFFFF;
	font-size: 18px;
	line-height: 23px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 50px;
    font-family: "Basis Grotesque Light Pro";
`

export const ErrorMessage = styled.div`
    background-color: rgba(189, 34, 34, 0.62);
    padding: 10px;
    margin: 16px;
    p {
        color: #FFFFFF;
        font-family: "Basis Grotesque Light Pro";
    }
`