
import styled, { css } from 'styled-components';

export const HBAPIKey = styled.div`
    color: #939598;
    font-family: "Basis Grotesque Bold Pro";
    h3{
        color: #ffffff;
    }
`

export const HBAPIKeyGenerate = styled.div`
    color: #939598;
    h3{
        color: #ffffff;
        margin-top: 20px;
    }
    p{
        font-family: "Basis Grotesque Bold Pro";
    }
`

export const HBAPIKeyNote = styled.div`
	color: #FF9221;
	font-size: 16px;
    font-family: "Basis Grotesque Bold Pro";
    margin-top: 20px;
`

export const HBAPIKeyOptionsContainer = styled.div`
    max-width: 240px; 
    margin: 0 auto;
    ul {
        list-style-type: none;
    }
    .button-toggle-wrap {
        position: relative;
        margin-bottom: 10px;
        span{
            position: absolute;
            top: 0;
            left: 75px;
            height: 30px;
            line-height: 0px;
            font-weight: normal;
            font-size: 16px;
        }
        .toggler {
            display: none;
            
            &:checked {
                & + .button-toggle {
                    background: #FFB600;
                    
                    .handle {
                        left: 31px;
                    }
                }
            }
        }
        .button-toggle {
            display: inline-block;
            background: #eeeeee;
            border-radius: 20px !important;
            height: 30px;
            padding: 2px;
            width: 60px;
            position: relative;
            box-shadow: inset 0 1px 3px rgba(0,0,0,0.22);
            cursor: pointer;
    
            .handle {
                position: absolute;
                left: 5px;
                right: auto;
                width: 25px;
                height: 25px;
                background: #fff;
                border-radius: 50% !important;
                transition: all 0.4s cubic-bezier(0.33, 1.6, 0.66, 1);
                box-shadow: 0 2px 5px rgba(0,0,0,0.22);
            }
        }
    }
`
