
import styled, { css } from 'styled-components';

export const User = styled.div`
	background-color: #121212;
`

export const UserContainer = styled.div`
	width: 100%;
	max-width: 1360px;
	padding: 0 60px;
	margin: 0 auto;
	display: flex;
	padding-top: 90px;

    @media only screen and (max-width: 1199px) {
		padding: 20px;
		display: block;
	}
`

export const UserLogo = styled.div`
	flex: 1;
	padding-top: 170px;
	img{
		width: 100%;
		max-width: 500px;
	}
	a{
		display: block;
	}

    @media only screen and (max-width: 1199px) {
		padding-top: 30px;
		text-align:center;
		img{
			width: 100%;
			max-width: 300px;
		}
	}
`

export const UserForm = styled.div`
	flex: 1;
	width: 550px;
	padding-left: 100px;

	@media only screen and (max-width: 1199px) {
		width: 100%;
		max-width: 550px;
		padding: 0;
		margin: 0 auto;
		margin-top: 30px;
	}
`

export const UserTab = styled.div`
	display: flex;
	margin-bottom: 30px;
	a{
		flex: 1;
		font-size: 34px;
		font-weight: bold;
		letter-spacing: 0.71px;
		text-align: center;
		color: #FFFFFF !important;
		padding: 25px 0;
		border-bottom : 2px solid #383838;

		&.active{
			color: #ffffff !important;
			border-color : #FFB600 !important;
		}
	}
`