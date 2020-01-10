import styled, { css } from 'styled-components';

export const HBModalCustomize = styled.div`
    border-radius: 6.14px;
    background-color: #1D1D1D;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16);
    color: #ffffff;
    padding: 30px;
    
    h4{
        font-family: "Basis Grotesque Bold Pro";
        font-size: 24px;
        margin-bottom: 10px;
        line-height: 1;
    }
    p{
        font-family: "Basis Grotesque Light Pro";
        font-size: 14px;
        letter-spacing: 0.58px;
    }

    ${props => props.padding === 'pl-huge' && css`
        padding-left: 60px;
    `}

    ${props => props.modal === '2fa' && css`
        .download-app{
            display: flex;
            &>img{
                margin-right: 30px;
            }
            a{
                align-self: center;
                margin-right: 15px;
            }
        }
    `}
`

export const HBModalCustomizeHeader = styled.div`
    .icon-header{
        position: absolute;
        top: 35px;
        cursor: pointer;
        &--back{
            left: 30px;
        }
        &--next{
            right: 30px;
        }
    }
`

export const HBModalCustomizeContent = styled.div`
    padding: 20px 0;

    ${props => props.margin === 'huge' && css`
        padding: 40px 0;
    `}
`

export const HBModalCustomizeActions = styled.div`
`