import styled, { css } from 'styled-components';

export const HBSettings = styled.div`
	padding-bottom: 60px;
	.table.ui {
		background: transparent;
		th {
			background-color: transparent;
			font-family: "Basis Grotesque Bold Pro";
			font-weight: normal;
			&.bg-black {
				background-color: #1d1d1d;
				box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16);
			}
		}
		th,
		td {
			color: #ffffff;
		}
		td {
			padding: 10px 10px 0 10px;
		}
	}
`;

export const HBSettingsRow = styled.div`
	display: flex;
	padding: 0 30px;
	max-width: 1250px;
	margin: 0 auto;
`;

export const HBSettingsColumn = styled.div`
	flex: 1;
	max-width: 340px;
	margin: 0 auto;
	text-align: center;
`;
