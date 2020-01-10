import styled, { css } from 'styled-components';

export const AdxSecurityToken = styled.div`
	flex: 0 0 50%;
	min-height: 50%;
	display: flex;
	flex-direction: column;
	height: 100%;
	padding-bottom: 20px;

	input {
		background-color: transparent;
		margin-bottom: 10px;
		color: #FFFFFF;

		&:focus {
			background: transparent;
			color: #fff;
		}
	}

	.img {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		width: 25px;
		height: 25px;
		overflow: hidden;

		img {
			max-height: 100%;
		}
	}
	table {
		min-width: 100%;
		border-collapse: separate;
		border-spacing: 0 5px;
		
		tr {
			cursor: pointer;
		}
		td, th {
			white-space: nowrap;
		}
		th {
			padding: 5px 10px;
		}
		td {
			padding: 8px 10px;
			background: #2A2A2A;

			&:first-child {
				padding-left: 10px;
				max-width: 20px;
				border-radius: 5px 0 0 5px;
			}
			&:last-child {
				border-radius: 0 5px 5px 0;
			}
		}
	}
`

export const ScrollWrap = styled.div`
	position: relative;
	flex: 1 0;
`