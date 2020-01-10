import styled, { css } from 'styled-components';

export const HBDropdownStyle = styled.div`
    display: inline-block;
    position: relative;
    &>div {
        height: 25px;
        line-height: 25px;
        padding: 0 10px;
        min-width: 170px;
        border: 1px solid #383838;
        border-radius: 30px;

        color: #FFFFFF;
        i {
            float: right;
            line-height: 25px !important;
        }
    }
    .search {
        color: #FFFFFF;
        line-height: 25px;
    }
    .menu {
        margin-top: 5px !important;
        width: 100%;
        background: #121212 !important;
        border-color: #242424 !important;

        &>.item {
            color: #ffffff !important;
            font-size: inherit !important;

            &:hover{
                background: #383838 !important;
            }
        }
    }
`