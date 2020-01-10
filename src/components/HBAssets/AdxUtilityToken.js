import styled, { css } from 'styled-components';

export const AdxUtilityToken = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;

	input {
		background-color: transparent;
		margin-bottom: 10px;
		color: #FFFFFF;

		&:focus {
			background: transparent;
			color: #fff;
		}
	}

	table {
		width: 100%;
		border-collapse: separate;
		border-spacing: 0 5px;

		th {
			padding: 0 10px 5px 0px;
		}
		td {
			padding-right: 10px;
		}
		td, th {
			white-space: nowrap;
		}
		img {
			max-width: 30px;
			max-height: 30px;
			margin: 5px 10px 5px 0;
		}
	}
`

export const ScrollWrap = styled.div`
	position: relative;
	flex: 1 0;
`
