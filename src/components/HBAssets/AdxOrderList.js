import styled, { css } from 'styled-components';

export const OrderList = styled.div`
	display: ${(props) => props.visible === true ? 'flex' : 'none' };
	flex-direction: column;
	height: 100%;

	.filter-form {
		margin: 15px 10px 10px 0;
	}
	.list-container {
		flex: 1 0;
		position: relative;

	}
	table {
		width: 100%;
		border-collapse: separate;
		border-spacing: 0 5px;

		td, th {
			white-space: nowrap;
			padding: 5px;
		}
		th {
			padding: 10px 5px;
		}
	}

	.filter-column {
		display: inline-block;
		margin-right: 10px;

		label {
			color: #939598;
			margin: 0 5px 0 0;
		}
	}
`