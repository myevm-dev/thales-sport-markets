import styled from 'styled-components';
import { FlexDivColumnCentered, FlexDivRowCentered } from 'styles/common';

export const StatusIcon = styled.i`
    font-size: 14px;
    margin-right: 4px;
    &::before {
        color: ${(props) => props.color || 'white'};
    }
`;

export const TableText = styled.span`
    font-weight: 700;
    font-size: 12px;
    text-align: left;
    @media (max-width: 600px) {
        font-size: 10px;
        white-space: pre-wrap;
    }
    white-space: nowrap;
`;

export const StatusWrapper = styled.div`
    min-width: 62px;
    height: 25px;
    border: 2px solid ${(props) => props.color || props.theme.status.open};
    border-radius: 5px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: justify;
    text-transform: uppercase;
    text-align: center;
    color: ${(props) => props.color || props.theme.status.open};
    padding: 3px 4px 0 4px;
`;

export const QuoteText = styled.span`
    font-weight: 700;
    font-size: 10px;
    text-align: left;
    white-space: nowrap;
`;

export const QuoteLabel = styled.span`
    font-weight: 400;
    font-size: 10px;
    letter-spacing: 0.025em;
    text-transform: uppercase;
`;

export const QuoteWrapper = styled.div`
    display: flex;
    flex: flex-start;
    align-items: center;
    gap: 6px;
    margin-left: 30px;
    @media (max-width: 600px) {
        margin-left: 0;
    }
`;

export const TableHeaderStyle: React.CSSProperties = {
    fontWeight: 600,
    fontSize: '10px',
    lineHeight: '12px',
    textAlign: 'center',
    textTransform: 'uppercase',
    justifyContent: 'center',
};

export const TableRowStyle: React.CSSProperties = {
    justifyContent: 'center',
    padding: '0',
};

export const ExpandedRowWrapper = styled.div`
    display: flex;
    padding-left: 30px;
    @media (max-width: 600px) {
        flex-direction: column;
        padding-left: 10px;
        padding-right: 10px;
    }
    @media (max-width: 400px) {
        padding: 0;
    }
    border-bottom: 2px dotted ${(props) => props.theme.borderColor.primary};
`;

export const TicketRow = styled(FlexDivRowCentered)<{ highlighted?: boolean }>`
    margin-top: 10px;
    background: ${(props) => (props.highlighted ? props.theme.background.secondary : 'initial')};
    border-radius: 10px;
    & > div {
        flex: 1;
    }
    &:last-child {
        margin-bottom: 10px;
    }
`;

export const TicketRowText = styled(QuoteText)`
    max-width: 220px;
    width: 300px;
    display: flex;
    align-items: center;
`;

export const TicketRowTeam = styled.span`
    white-space: nowrap;
    width: 190px;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const FirstExpandedSection = styled(FlexDivColumnCentered)`
    flex: 2;
`;

export const LastExpandedSection = styled(FlexDivColumnCentered)`
    position: relative;
    flex: 1;
    gap: 10px;
    @media (max-width: 600px) {
        flex-direction: row;
        margin: 10px 0;
    }
`;

export const TwitterWrapper = styled.div`
    position: absolute;
    bottom: 10px;
    right: 5px;
    @media (max-width: 600px) {
        bottom: -2px;
        right: 2px;
    }
`;

export const ExternalLink = styled.a`
    color: ${(props) => props.theme.link.textColor.secondary};
`;
