
import styled, { css } from 'styled-components';

export const HBAccountOverview = styled.div`
	border-radius: 8px;
    background-color: #262626;
	box-shadow: 0 3px 3px 0 rgba(0,0,0,0.16);
    padding: 30px;
    color: #939598;
	display: flex;
    font-family: "Basis Grotesque Bold Pro";
    margin-bottom: 40px;
    h3{
        color: #ffffff;
    }
`

export const HBColumn = styled.div`
    flex: 1;
`

export const HBVerification = styled.div`
	font-size: 18px;
    margin-bottom: 25px;
`

export const HBLimit = styled.div`
    margin-bottom: 5px;
`

export const HBEstimated = styled.div`
    margin-top: 25px;
	color: #FFFFFF;
	font-size: 26px;
	text-align: center;
    &.line{
        border-bottom: 2px solid #383838;
        padding-bottom: 20px;
    }
`