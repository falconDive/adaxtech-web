import styled, { css } from 'styled-components';

export const HBTransaction = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  ${(props) => props.visible !== true ? 'display: none' : '' }
`

export const OptionRow = styled.div`
  display: flex;
  margin: 0 10px 10px;
  justify-content: center;
`

export const OptionColumn = styled.div`
  cursor: pointer;
  margin: 0 15px;
  text-align: center;
  color: ${props => (props.active ? "#FFB600" : "#939598")};
  
  @media only screen and (max-width: 1270px) {
    padding: 0 10px 15px 10px;
  }
`

export const Pages = styled.div`
  margin: 10px 0 0;
`

export const TransactionList = styled.div`
  flex: 1 0;
  position: relative;

  table{
    background: transparent;
    margin: 0 auto;
    min-width: 100%;
    
    thead {
      background: #262626;
      
      tr:first-child>th:first-child {
        border-radius: 5px 0 0 5px !important;
      }
      
      tr:first-child>th:last-child {
        border-radius: 0 5px 5px 0 ;
      }
    }

    td, th{
      padding: 10px !important;
      white-space: nowrap;

      &:last-child {
        text-align: right;
      }
    }
  }
`