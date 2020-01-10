import styled, { css } from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';

export const Scrollable = styled(Scrollbars)`
  position: absolute !important;
  top: 0;
  bottom: 0;
  // padding-right: 10px;
`

export const View = styled.div`
  padding-right: 10px;
  padding-bottom: 15px;
  min-height: calc(100% + 10px) !important;
`

export const HorizontalTrack = styled.div`
  position: absolute;
  height: 10px !important;
  right: 10px;
  bottom: 0px;
  left: 0;
  padding-top: 5px;
  background: #121212;
`

export const HorizontalThumb = styled.div`
  position: relative;
  display: block;
  height: 100%;
  cursor: pointer;
  border-radius: 3px;
  background-color: #3A3A3A;
  transform: translateX(0px);
`

export const VerticalTrack = styled.div`
  position: absolute;
  width: 10px !important;
  right: 0;
  bottom: 0;
  top: 0;
  padding-left: 5px;
  background: #121212;
`

export const VerticalThumb = styled.div`
  position: relative;
  display: block;
  width: 100%;
  cursor: pointer;
  border-radius: 3px;
  background-color: #3A3A3A;
  transform: translateY(0px);
`