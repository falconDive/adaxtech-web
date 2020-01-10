import styled, { css } from 'styled-components';
import {Col} from '../AdxExchange';

export const HBTradeHistory = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;

  th {
    color: #939598;
  }
  th, td {
    padding: 0 15px 8px 0;
    white-space: nowrap;

    & >:last-child {
      padding-right: 0;
    }
  }
`

export const HBTradeHistoryBody = styled.div`
  flex: 1 1;
  position: relative;

  .scrollable {
    position: absolute !important;
    top: 0;
    bottom: 0;

    .view {
        padding: 0 15px 0 0;
    }
    .thumb-vertical {
        background: #3A3A3A;
        border-radius: 3px;
        cursor: pointer;
    }
  }
`
