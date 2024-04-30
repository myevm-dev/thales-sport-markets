import styled from 'styled-components';
import { FlexDivColumnNative, FlexDivRow, FlexDivStart } from 'styles/common';

export const Container = styled(FlexDivColumnNative)`
    font-weight: 600;
    font-size: 12px;
    align-items: center;
    background-color: ${(props) => props.theme.background.quinary};
    border-radius: 7px;
    width: 100%;
    margin-bottom: 5px;
    @media (max-width: 768px) {
        padding: 7px 5px;
    }
`;

export const OverviewContainer = styled(FlexDivRow)`
    justify-content: space-between;
    background-color: ${(props) => props.theme.background.secondary};
    border-radius: 7px;
    padding: 10px 15px;
    width: 100%;
    max-height: 40px;
    align-items: center;
    cursor: pointer;
    position: relative;
    @media (max-width: 768px) {
        justify-content: space-between;
    }
`;

export const TicketIdContainer = styled(FlexDivStart)`
    min-width: 150px;
    color: ${(props) => props.theme.textColor.secondary};
    margin-left: 10px;
    margin-right: 10px;
    @media (max-width: 768px) {
        min-width: auto;
        flex-direction: column;
    }
`;

export const NumberOfGamesContainer = styled(FlexDivStart)`
    min-width: 120px;
    color: ${(props) => props.theme.textColor.secondary};
    margin-right: 10px;
    @media (max-width: 768px) {
        min-width: auto;
        flex-direction: column;
    }
`;

export const InfoContainerColumn = styled(FlexDivColumnNative)`
    min-width: 100px;
    justify-content: flex-start;
    margin-right: 10px;
    @media (max-width: 768px) {
        min-width: auto;
        flex-direction: column;
        margin-left: 0px;
    }
`;

export const Label = styled.span`
    margin-right: 3px;
    @media (max-width: 768px) {
        font-size: 10px;
        margin-bottom: 2px;
    }
`;

export const Value = styled(Label)``;

export const WinLabel = styled(Label)`
    color: ${(props) => props.theme.status.win};
`;

export const WinValue = styled(WinLabel)``;

export const ArrowIcon = styled.i`
    font-size: 14px;
    color: ${(props) => props.theme.textColor.secondary};
    margin-left: 10px;
    margin-right: 10px;
    @media (max-width: 768px) {
        margin-right: 5px;
        margin-left: 5px;
        font-size: 9px;
    }
`;

export const CollapsableContainer = styled(FlexDivColumnNative)<{ show?: boolean }>`
    width: 100%;
    max-height: ${(props) => (props?.show ? '100%' : '0')};
    overflow: hidden;
    align-items: center;
`;

export const TicketMarketsContainer = styled(FlexDivColumnNative)`
    width: 100%;
    padding: 0 15px;
`;

export const CollapseFooterContainer = styled(FlexDivRow)`
    position: relative;
    justify-content: space-around;
    width: 100%;
    align-items: center;
    margin-bottom: 15px;
    margin-top: 15px;
`;

export const TotalQuoteContainer = styled(FlexDivRow)``;

export const ProfitContainer = styled(FlexDivRow)``;
