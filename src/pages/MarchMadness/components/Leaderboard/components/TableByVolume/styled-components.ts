import { TablePagination } from '@material-ui/core';
import styled from 'styled-components';

export const Table = styled.table`
    font-family: 'Oswald' !important;
    width: 100%;
`;

export const OverlayContainer = styled.div`
    text-align: center;
    font-family: 'Oswald' !important;
    font-weight: 400;
    font-size: 12px;
`;

export const TableHeaderCell = styled.th`
    font-family: 'Oswald' !important;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    padding: 5px 0px;
`;

export const NoDataContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 60px;
    background-color: #ffffff;
    margin-top: 100px;
`;

export const NoDataLabel = styled.span`
    font-family: 'NCAA' !important;
    font-size: 25px;
    color: #021631;
`;

export const TableRow = styled.tr<{ hideBorder?: boolean; topTen?: boolean; myScore?: boolean }>`
    font-family: 'Oswald' !important;
    font-size: 14px;
    font-weight: 600;
    ${(_props) => (_props?.hideBorder == true ? `border-bottom: '';` : ``)}
    ${(_props) => (!_props?.hideBorder ? `border-bottom: 2px dotted rgba(0, 94, 184, 1);` : ``)}
    ${(_props) => (_props?.topTen == true ? `background-color: #C12B34;` : ``)}
    ${(_props) => (_props?.topTen == true ? `border-bottom: 2px dotted #FFFFFF;` : ``)}
    ${(_props) => (_props?.myScore == true ? `background-color: #005EB8;` : ``)}
`;

export const TableRowCell = styled.td`
    padding: 10px 0px;
    text-align: center;
    font-weight: 600;
`;

export const Container = styled.div`
    height: auto;
    width: 60%;
`;

export const TableHeaderContainer = styled.div<{ hideBottomBorder?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px;
    border-bottom: ${(_props) => (_props?.hideBottomBorder === true ? '0px' : '')};
    border-style: solid;
    border-image: linear-gradient(
            279.41deg,
            #da252f 10.64%,
            #5c2c3b 23.38%,
            #021630 41.03%,
            #0c99d0 70.84%,
            #02223e 94.26%
        )
        1;
    width: 100%;
`;

export const TableContainer = styled(TableHeaderContainer)`
    min-height: 600px;
    align-items: flex-start;
`;

export const TableHeader = styled.span`
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 400;
    padding: 6px 0px;
    font-family: 'NCAA' !important;
`;

export const Arrow = styled.i`
    font-size: 14px;
    margin-left: 8px;
    text-transform: none;
    transform: rotate(225deg);
    color: white;
    font-weight: 400;
    &:before {
        font-family: OvertimeIcons !important;
        content: '\\006C';
    }
`;

export const StickyRow = styled(TableRow)`
    width: 100%;
    height: 35px !important;
`;

export const StickyCell = styled.div``;

export const PaginationWrapper = styled(TablePagination)`
    border: none !important;
    display: flex;
    width: 100%;
    height: auto;
    color: #f6f6fe !important;
    .MuiToolbar-root {
        padding: 0;
        display: flex;
        .MuiSelect-icon {
            color: #f6f6fe;
        }
    }
    .MuiIconButton-root.Mui-disabled {
        color: #5f6180;
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
            margin-right: 0px;
        }
    }
`;
