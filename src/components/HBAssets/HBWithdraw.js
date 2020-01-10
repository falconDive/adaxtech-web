import styled, { css } from 'styled-components';

export const HBWithdraw = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1111;
    background-color: #121212;
    padding: 30px;
    overflow-y: auto;
    .HBDropdownStyle{
        display: block;
    }
    .HBDropdownStyle{
        display: block;
    }
    .ui.dropdown{
        width: 100%;
        border-radius: 8px;
        border-color: transparent;
        background-color: #1D1D1D;
        box-shadow: 0 3px 3px 0 rgba(0,0,0,0.16);
        height: 50px;
        line-height: 50px;
        margin-bottom: 15px;
        i {
            line-height: 46px !important;
        }
    }
    .ui.input{
        &>input{
            width: 300px;
            border-radius: 8px;
            border-color: transparent;
            background-color: #1D1D1D;
            box-shadow: 0 3px 3px 0 rgba(0,0,0,0.16);
            height: 50px;
            line-height: 50px;
            color: #ffffff;
        }
        .ui.button{
            height: 50px;
            width: 85px;
            border-radius: 0 8px 8px 0;
            background-color: #AF48E9;
            color: #ffffff;
        }
    }
    .table.ui{
        background: transparent;
        th{
            background-color: transparent;	
            font-family: "Basis Grotesque Bold Pro";
            font-weight: normal;
            &.bg-black{
                background-color: #1D1D1D;	
                box-shadow: 0 3px 3px 0 rgba(0,0,0,0.16);
            }
        }
        th, td{
            color: #ffffff;
        }
        td{
            padding: 10px 10px 0 10px;
        }
    }
    .close-screen{
        display: flex;
        a{
            align-self: center;
            line-height: 1;
        }
        img{
            height: 18px;
        }
        h3{
            margin: 0 0 0 30px;
            font-size: 24px;
            line-height: 1;
        }
    }
`

export const HBWithdrawLabel = styled.div`
    font-size: 14px;
    font-family: "Basis Grotesque Bold Pro";
    margin-bottom: 15px;
    ${props => props.size === 'md' && css`
        font-size: 18px;
    `} 
`

export const CoinWrap = styled.div`
    width: 460px;
    margin: 0 auto;
    margin-bottom: 30px;
`

export const Instruction = styled.div`
    margin-bottom: 30px;
    p{
        margin-top: 30px;
    }
    ol{
        padding-left: 15px;
        font-family: "Basis Grotesque Light Pro";
        font-size: 14px;
        line-height: 1.8;
    }
`