import styled, { css } from 'styled-components';

import { AdxCol } from '../Base/';

export const AdxAsset = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 100%;
`
export const FirstCol = styled(AdxCol)`
	flex: 1 0;

	.content {
		display: flex;
		height: 100%;
		flex-direction: column;
	}
`
export const SecondCol = styled(AdxCol)`
	flex: 0 0 320px;

	.header {
		padding: 6px;

		button:first-child {
			margin-right: 15px;
		}
	}
`
export const ColumnHeader = styled.div`
	font-size: 105%;
	font-weight: 600;
	margin-bottom: 20px;
`
export const TabWrapper = styled.div`
	flex: 1 0;

	.menu-item {
		padding: 5px 10px;
	}

	.tab-content {
		height: calc(100% - 30px);
	}
`





// export const HBAsset = styled.div`
// 	padding-bottom: 45px;
// 	.btn-transcation{
// 		position: absolute;
// 		top: 15px;
// 		right: 15px;
// 		display: flex;
// 	}
// `

// export const HBTransaction = styled.div`
// 	display: flex;
// 	color: #FFFFFF;
// 	margin-bottom: 30px;
// `

// export const HBTransactionColumn = styled.div`
// 	cursor: pointer;
// 	font-size: 16px;
// 	font-family: "Basis Grotesque Bold Pro";
// 	padding: 5px 30px 15px 30px;
// 	border-bottom: 2px solid transparent;
// 	margin-bottom: -2px;
// 	border-bottom-color: ${props => (props.active ? "#FFB600" : "transparent")};
// 	color: ${props => (props.active ? "#FFFFFF" : "#939598")};
// `


// export const HBAssetsRow = styled.div`
// 	display: flex;
// `

// export const HBAssetsColumn = styled.div`
// 	/* border-top: 2px solid #383838; */
// 	${props => props.grid === 'main' && css`
// 		&:nth-child(1){
// 			width: 70%;
// 			padding-right: 5px;
// 		}
// 		&:nth-child(2){
// 			width: 30%;
// 			padding-left: 5px;
// 		}
// 	`} 
// 	.security-token{
// 		background: transparent;
// 		color: #ffffff;
// 		td, th{
// 			padding: 0 15px;
// 		}
// 		thead{
// 			tr{
// 				td{
// 					padding-bottom: 10px;
// 					color: #939598;
// 					font-family: "Basis Grotesque Bold Pro";
// 				}
// 			}
// 		}
// 		tbody{
// 			tr{
// 				height: 60px;
// 				line-height: 60px;
// 				border-radius: 8px;
// 				background-color: #1D1D1D;
// 				td{
// 					border-bottom: 5px solid #262626;
// 					font-family: "Basis Grotesque Light Pro";
// 				}
// 			}
// 		}
// 	}
// 	${props => props.grid === 'utility' && css`
// 		flex: 1;
// 		align-self: center;
// 		margin-bottom: 15px;
// 		text-align: center;
// 		font-family: "Basis Grotesque Light Pro";
// 	`} 
// 	${props => props.main === 'utility' && css`
// 		color: #939598;
// 		font-family: "Basis Grotesque Bold Pro";
// 		margin-bottom: 10px;
// 		&:first-child{
// 			text-align: left;
// 		}
// 	`} 
// `