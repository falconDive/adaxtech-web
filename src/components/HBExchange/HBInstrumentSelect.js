
import styled, { css } from 'styled-components';

export const HBInstrumentSelect = styled.div`

    .instruments{
        tbody tr {
            cursor: pointer;
            
            &.active{
                color: #FFB600;
            }
        }
        td {
            padding: 0 15px 10px 0;
            min-width: 85px;
        }
    }
    input {
		background-color: transparent;
		border-radius: 5px;
		height: 36px;
		border: 2px solid #383838;
		margin-bottom: 15px;
		width: 100%;
		color: #FFFFFF;
	}

    .col-wrap {
        display: flex;
    }
    .chart {
        flex: 1 0;
        width: 260px;
    }
`

export const HBPair = styled.div`
    display: flex;
    color: #FFFFFF;
    margin-bottom: 15px;
`

export const HBPairColumn = styled.div`
    cursor: pointer;
    font-family: "Basis Grotesque Bold Pro";
    padding: 0 30px 10px 30px;
    border-bottom: 2px solid transparent;
    margin-bottom: -2px;
    border-bottom-color: ${props => (props.active ? "#FFB600" : "transparent")};
    color: ${props => (props.active ? "#FFFFFF" : "#939598")};
`

export const InstrumentTabs = styled.div`
    .adx-menu {
        margin: 0 0 15px;

        .menu-item {
            min-width: 40px;
        }
    }
`
