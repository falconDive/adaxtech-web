import styled, { css } from 'styled-components';

export const Flex = styled.div`
	display: flex;
	align-items: center;
`
export const FlexRow = styled.div`
	display: flex;
	width: 100%;
	flex-flow: row wrap;
	align-items: flex-end;
`
export const ModalTitle = styled.div`
	font-weight: bold;
	font-size: 24px;
	margin-bottom: 20px;
`
export const CloseButton = styled.img`
	max-height: 35px;
	max-width: 35px;
	padding: 10px;
	margin-right: 30px;
	cursor: pointer;
`
export const Header = styled.div`
	font-size: 20px;
	margin-bottom: 10px;
`
export const Insturctions = styled.div`
	display: flex;
	flex-flow: row wrap;
	flex-basis: 790px;
`
export const InstuctionColItem = styled.div`
	width: 33%;
	padding: 20px 10px;
`
export const DownloadLink = styled.div`
	margin-bottom: 40px;
	cursor: pointer;
`
export const InlineBlock = styled.div`
	display: inline-block;
`
export const Icon = styled.img`
	padding: 10px;
	max-width: 70px;
	margin: 0 auto 20px;
	display: block;
`
export const DownloadBtn = styled.a`
	display: inline-block;
	img {
		max-width: 100%;
	}
	&:first-child {
		margin-right: 10px;
	}
	max-width: 115px;
	margin: 5px 0;
`
export const LogoCont = styled.div`
	flex-grow: 2;
	padding-right: 7%;
	text-align: center;
`
export const Logo = styled.img`
	display: block;
	margin: 0 auto 40px;
`
export const QRCodeCont = styled.div`
	text-align: center;
	margin: 50px 10px 10px;
`
export const ScanInstruct = styled.div`
	margin: 20px auto 0;
	max-width: 350px;
`
