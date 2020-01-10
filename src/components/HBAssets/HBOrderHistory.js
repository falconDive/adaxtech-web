import styled, { css } from 'styled-components';

export const HBOrderHistory = styled.div`
    .table{
		background: transparent;
		color: #ffffff;
		font-size: 12px;
		td, th{
			padding: 0 15px 10px 0 !important;
			white-space: nowrap;
		}
		thead{
			tr{
				th{
					padding-bottom: 15px;
					color: #939598;
    				font-family: "Basis Grotesque Bold Pro";
                    background: transparent;
				}
			}
		}
		tbody{
			tr{
				td{
					font-family: "Basis Grotesque Light Pro";
					padding-bottom: 15px;
				}
			}
		}
    }
`

export const Balance = styled.div`
	font-size: 18px;
    font-weight: bold;
`

export const BalanceTotal = styled.div`
	font-size: 24px;
    font-weight: bold;
    margin: 15px 0 30px 0;
`

export const HBOrderHistoryActions = styled.div`
`

export const HBOrderHistoryActionsLabel = styled.div`
    align-self: center;
	color: #939598;
	font-size: 14px;
    font-family: "Basis Grotesque Bold Pro";
	margin-bottom: 5px;
`

export const HBOrderHistoryActionsCol = styled.div`
	display: inline-block;
	margin-right: 10px;
	margin-bottom: 10px;
	
	/* @media only screen and (max-width: 1325px) {
		display: inline-block;
	} */
`

export const HBOrderHistoryActionsLabelButton = styled.div`
`