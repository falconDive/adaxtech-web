import styled, { css } from 'styled-components';

export const AdxStoMarket = styled.div`
  flex: 1 0;
  padding: 10px 0 0;
  position: relative;
  ${
    (props) => props.visible !== true ? 'display: none' : null 
  }

  .scrollable {
    position: absolute !important;
    top: 0;
    bottom: 0;
  }

  table {
    width: 100%;
    white-space: nowrap;
    text-align:center;

    .img {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      overflow: hidden;

      img {
        max-height: 100%;
      }
    }
    th {
      padding: 10px;

      &:nth-child(1) {
        text-align: left;
      }

      i.bordered {
        border: 1px solid #fff; 
        margin-left: 5px;
      }
    }
    td {
      vertical-align: top;
      padding: 5px 10px;

      &:nth-child(2) {
        text-align: left;
      }
    }
    .apply-btn {
      background: #FFB600;
        color: #121212;
        padding: 3px 8px;
        font-size: 90%;
        cursor: pointer;
        font-weight: 800;
        border-radius: 10px;
    }
  }
`