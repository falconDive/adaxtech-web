import styled, { css } from 'styled-components';

export const HBApp = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    color: #ffffff;
    overflow-y: auto;
`
export const AdxApp = styled.div`
    font-family: "Basis Grotesque Pro";
    font-weight: normal;
    line-height: initial;
    background-color: #121212;
    color: #fff;
    display: flex;
    align-items: stretch;
    min-height: 578px;
    width: 100%;
    height: 100%;
    font-size: 0.8rem;
    position: relative;

    .pagination-item{
        display: inline-block;
        height: 20px;
        line-height: 20px;
        min-width: 20px;
        text-align: center;
        cursor: pointer;
        border: 1px solid #383838;

        i {
            line-height: 0;
        }
        &.active{
            background: #FFB600;
            border-color: #FFB600;
            color: #121212;
        }
    }
`

export const SideNav = styled.div`
    padding: 20px 15px;
    border-right: 2px solid #383838;
    color: #939598;
    width: 130px;
    position: fixed;
    z-index: 1;
    top: 0;
    min-height: 538px;
    height: 100%;
    display: flex;
    flex-direction: column;

    .logo {
        display: block;
        width: 100%;
        min-height: 30px;
        margin-top: 30px;

        img {
            max-width: 100%;
        }
    }

    .nav {
        display: flex;
        flex: 1 0;
        width: 100%;
        height: 100%;
        align-items: center;
        text-align: center;

        .items {
            width: 100%;
        }
        img {
            display: block;
            max-width: 100%;
            width: 30px;
            margin: 10px auto;
        }
        a {
            display: block;
            text-decoration: none;
            color: inherit;
            margin-bottom: 50px;
            transition: all 0.3s ease;
            font-weight: 600;

            &.active {
                color: #fff;
            }

            &:nth-child(3) img {
                width: 25px;
            }
        }
    }
    .kyc {
        font-size: 0.70rem;

        .status {
            font-size: 1rem;
            color: #fff;
        }
        .instruct {
            color: #fff;
            font-size: 0.60rem;
        }
    }
    .unverified { 
        cursor:pointer;
        color: #FF5858;

        img {
            max-width: 14px;
            vertical-align: baseline;
        }
    }
`

export const LogoutLink = styled.a`
    position: absolute;
    right: 0;
    color: #939598 !important;
    z-index: 1;
    font-size: 0.8rem;
    padding: 12px;
    cursor: pointer;

    img {
        height: 17px;
        margin: 0 5px 0 0;
    }
`

export const HBHeaderBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 11;
    background: rgba(0, 0, 0, 0.35);
    cursor: pointer;
`

export const HBHeader = styled.div`
	height: 70px;
	background-color: #262626;
    display: flex;
    align-items: center;
`

export const HBHeaderFlex = styled.div`
    line-height: 0;

    ${props => props.custom === 'menu' && css`
        margin: 0 25px 0 20px;
        cursor: pointer;
        width: 21px;
        &.open{
            position: relative;
            z-index: 1111;
        }
    `}

    ${props => props.custom === 'logo' && css`
        flex: 1;
        img{
            height: 40px;
        }
    `}

    ${props => props.custom === 'logout' && css`
        padding: 0 30px;
        color: #939598;
        font-size: 14px;
        font-weight: bold;
        display: flex;
        cursor: pointer;
        span{
            align-self: center;
            margin-left: 10px;
        }
    `}
`

export const HBMenu = styled.div`
    position: fixed;
    top: 0;
    left: -400px;
    width: 400px;
    height: 100%;
    background-color: #000000;
    z-index: 11;

    text-align: center;
    padding-top: 70px;
    transition: all 0.4s ease;

    .logo{
        height: 60px;
    }

    &.full{
        left: 0;
    }
`

export const HBMenuLink = styled.div`
    height: calc(100vh - 230px);
    a{
        display: block;
        padding: 30px 0;
        color: #939598;
        font-family: "Basis Grotesque Bold Pro";
        font-size: 18px;

        &.active{
            color: #ffffff;
        }
    }
`

export const HBMenuLinkCenter = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
`

export const HBMain = styled.div`
    width: 100%;
    height: 100%;
    margin-left: 130px;
    padding-bottom: 33px;
`

export const HBContainer = styled.div`
    padding: 10px;
    ${props => props.wide === 'md' && css`
        max-width: 900px;
        margin: 0 auto;
    `}
    ${props => props.wide === 'xl' && css`
        padding: 10px 0;
        max-width: 100%;
        margin: 0 auto;
    `}
`

export const HBStatus = styled.div`
	padding: 25px 20px;
    position: relative;
    text-align: left;
	span{
		color: #939598;
		font-size: 12px;
		letter-spacing: 2px;
		display: block;
		text-transform: uppercase;
		padding-bottom: 10px;
	}
	label{
		color: #FFFFFF;
		font-size: 17px;
	}
	a{
		display: block;
		img{
			margin: 0;
			position: absolute;
			top: 27px;
			right: 15px;
		}
	}
`

export const HBFooter = styled.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 130px;
    bottom: 0;
    width: calc(100vw - 130px);
    background-color: #121212;
    color: #ffffff;
    padding: 7.5px 10px;
    border-top: 2px solid #383838;
    font-size: 85%;

    a {
        color: #FFFFFF;
        margin-right: 30px;
        text-decoration: none;

        &:hover{
            color: #FFB600;
        }
    }
    @media only screen and (min-width: 1601px) {
        // padding: 0 100px 0 100px;
    }
`

export const PaginationCont = styled.div`
    .pagination-item {

    }
`

export const AdxCol = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;

  .header {
    border-bottom: 2px solid #383838;
    padding: 12px; 
    font-size: 105%;
    font-weight: 600;
  }
  .content {
    margin: 10px;
    flex: 1 1;
    height: 100%;
  }
`

export const PreLoader = styled.div`
    position: fixed;
    background: #000;
    width: 100%;
    top: 0;
    bottom: 0;
    transition: all 0.4s ease;
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;

    &.hidden {
        visibility: hidden;
        opacity: 0;
    }
    .inner-cont {
        width: 300px;
    }
    .CircularProgressbar-path {
        stroke: #FFB600 !important;
        stroke-width: 1px;
    }
    .CircularProgressbar-trail {
        stroke: #444444 !important;
        stroke-width: 1px;
    }
`