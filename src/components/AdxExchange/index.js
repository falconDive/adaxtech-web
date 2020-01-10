import styled, { css } from 'styled-components';

import { AdxCol } from '../Base/';

export const AdxExchange = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`
export const FirstCol = styled(AdxCol)`
  flex: 0 0 260px;
`
export const SecondCol = styled(AdxCol)`
  flex: 0 0 220px;
`
export const ThirdCol = styled(AdxCol)`
  flex-grow: 1;
  flex-basis: 0;
  max-width: calc(100vw - 895px);

  .content {
    margin: 5px 10px 10px;
    display: flex;
    flex-direction: column;
  }

  .row1 {
    display: flex;
    flex-direction: row;
  }
  .row2 {
    flex: 1 0;
    display: flex;
    flex-direction: column;
  }
`

export const Chart = styled.div`
  flex: 1 0;
  display: ${(props) => props.visible === true ? 'flex' : 'none' }
  flex-direction: column;
`

export const ThirdColTabNav = styled.div`
  .adx-menu {
    margin: 10px 0 10px;
  }
  .menu-item {
    min-width: 50px;
  }
`

export const ThirdColTabContent = styled.div`
  flex: 1 0;
  position: relative;
`

export const TradeHistoryCol = styled(AdxCol)`
  flex: 0 0 285px;

  .content {
    margin: 10px 5px 10px 10px;
  }
`

export const ChartWrapper = styled.div`
  position: relative;
  flex: 1 0;
  overflow: hidden;

  & > div:first-child {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`