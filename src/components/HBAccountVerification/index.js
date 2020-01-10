import styled, { css } from 'styled-components';

export const HBAccountVerification = styled.div`
    position: fixed;
    left: 0;
    top: 80px;
    width: 100%;
    height: 100%;
    padding-bottom: 150px;
    background-color: #121212;
    overflow-y: auto;

    .react-datepicker{
        &-wrapper, 
        &__input-container{
            display: block;
        }
    }
`

export const Note = styled.div`
	color: #FFFFFF;
	font-size: 18px;
	line-height: 24px;
    text-align: center;
    max-width:800px;
    margin: 0 auto;
    padding: 40px 0;
    font-family: "Basis Grotesque Light Pro";
`