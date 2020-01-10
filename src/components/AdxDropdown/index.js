import styled from 'styled-components';
import { Dropdown } from 'semantic-ui-react'

export const AdxDropdown = styled(Dropdown)`
    padding: 5px;
    border-bottom: 2px solid #383838;

    &:after {
        display: table;
        content: '';
        clear: both;
    }
    &.ui.dropdown>.text {
        display: flex;
        float: left;
        align-items: center;
    }
    &.ui.dropdown>.text>img {
        vertical-align: middle;
        max-width: 20px;
    }
    &.ui.dropdown .menu {
        width: 100%;
        background: #000;
        border: none;
        border-radius: 0;
    }
    &.ui.dropdown .menu>.item,
    &.ui.dropdown .menu>.item:hover {
        font-size: inherit;
        padding: 8px !important;
        background: transparent;
        color: #fff;
    }
    &.ui.dropdown .menu .selected.item {
        background: #262626;
        color: #fff;
    }
`