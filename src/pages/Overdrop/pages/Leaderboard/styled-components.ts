import { TablePagination } from '@material-ui/core';
import styled from 'styled-components';
import { FlexDivEnd } from 'styles/common';

export const tableHeaderStyle: React.CSSProperties = {
    textAlign: 'center',
    justifyContent: 'center',
};

export const tableRowStyle: React.CSSProperties = {
    justifyContent: 'center',
    padding: '10px 0',
    flexDirection: 'column',
    gap: '3px',
    height: '50px',
    marginLeft: '5px',
};

export const StickyRow = styled.div`
    margin-top: 5px;
    margin-left: 5px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    background-color: ${(props) => props.theme.overdrop.textColor.primary};
    color: black;
`;

export const StickyRowCardContainer = styled.div`
    [role='row'] {
        background-color: ${(props) => props.theme.overdrop.textColor.primary};
    }
    [role='row'] > div > div {
        color: black !important;
    }
`;

export const StickyContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const StickyCell = styled.div<{ width?: string }>`
    width: ${(props) => props.width || '150px'};
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 10px 0px;
    flex-direction: column;
    gap: 3px;
    height: 40px;
    font-size: 12px;
    font-weight: bold;
`;

export const Badge = styled.img`
    width: 55px;
    margin-left: -7px;
`;

export const AddressContainer = styled.div`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

export const PaginationWrapper = styled(TablePagination)`
    border: none !important;
    display: flex;
    width: 100%;
    height: auto;
    color: ${(props) => props.theme.textColor.primary} !important;
    .MuiTablePagination-toolbar {
        min-height: 48px;
        @media (max-width: 767px) {
            min-height: 48px;
        }
    }
    .MuiToolbar-root {
        padding: 0;
        display: flex;
        .MuiSelect-icon {
            color: ${(props) => props.theme.textColor.primary};
        }
        @media (max-width: 767px) {
            font-size: 12px;
        }
    }
    .MuiTypography-body2 {
        @media (max-width: 767px) {
            font-size: 12px;
        }
    }
    .MuiIconButton-root.Mui-disabled {
        color: ${(props) => props.theme.textColor.secondary};
    }
    .MuiTablePagination-toolbar > .MuiTablePagination-caption:last-of-type {
        display: block;
    }
    .MuiTablePagination-input {
        margin-top: 2px;
    }
    .MuiTablePagination-selectRoot {
        @media (max-width: 767px) {
            margin-left: 0px;
            margin-right: 5px;
        }
    }
    .MuiTablePagination-actions {
        margin-left: 10px;
    }
    .MuiIconButton-root {
        padding: 5px 10px;
    }
`;

export const TableContainer = styled.div`
    @media (max-width: 767px) {
        & > div > div {
            padding-top: 20px;
        }
        [role='row'] {
            padding: 10px 0px;
            margin-left: 20px;
            margin-bottom: 20px;
        }
        [id='level.smallBadgeHeader'] {
            display: none;
        }
        [id='level.smallBadge'] {
            position: absolute;
            top: -38px;
            left: -15px;
            justify-content: inherit;
        }
    }
`;

export const SearchFieldContainer = styled(FlexDivEnd)`
    padding-right: 10px;
    margin-bottom: 10px;
    input {
        border: 1px solid rgb(78, 95, 177);
        color: rgb(78, 95, 177);
        border-radius: 20px;
    }
    input::placeholder {
        color: rgb(78, 95, 177);
    }
    input:focus {
        border: 1px solid rgb(78, 95, 177) !important;
    }
    i::before {
        color: rgb(78, 95, 177);
    }
    @media (max-width: 767px) {
        & > div {
            padding-top: 0 !important;
        }
    }
`;
