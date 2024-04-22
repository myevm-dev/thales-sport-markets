import styled from 'styled-components';
import { FlexDiv, FlexDivColumn, FlexDivRow } from 'styles/common';

export const Container = styled(FlexDivRow)<{
    disabled: boolean;
    selected: boolean;
    isResolved?: boolean;
    isWinner: boolean;
    order?: string;
}>`
    position: relative;
    align-items: center;
    border-radius: 5px;
    padding: 0 8px;
    flex: 1 1 0;
    min-height: 25px;
    font-weight: 800;
    font-size: 13px;
    line-height: 16px;
    background: ${(props) => (props.selected ? props.theme.background.quaternary : props.theme.background.secondary)};
    color: ${(props) => (props.selected ? props.theme.textColor.tertiary : props.theme.textColor.primary)};
    border: 1px solid
        ${(props) =>
            props.selected || props.isWinner ? props.theme.borderColor.quaternary : props.theme.borderColor.quinary};
    box-shadow: ${(props) => (props.isWinner ? props.theme.shadow.positionWinner : '')};
    opacity: ${(props) => (props.disabled && !props.isWinner ? '0.4' : '1')};
    cursor: ${(props) => (props.disabled ? '' : 'pointer')};
    :hover {
        border: ${(props) => (props.disabled ? undefined : `1px solid ${props.theme.borderColor.quaternary}`)};
    }
    @media (max-width: 575px) {
        font-size: 12px;
        line-height: 14px;
        padding: 0px 10px;
        margin-bottom: 1px;
        :not(:last-child) {
            margin-right: 6px;
        }
    }
    order: ${(props) => props.order || 'initial'};
`;

export const Text = styled.span`
    font-weight: 600;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
`;

export const Odd = styled.span<{
    selected: boolean;
}>`
    font-weight: 600;
    font-size: 13px;
    color: ${(props) => (props.selected ? props.theme.textColor.tertiary : props.theme.textColor.quaternary)};
    margin-left: 5px;
`;

export const Status = styled(Text)`
    text-align: end;
    width: fit-content;
    overflow: initial;
    @media (max-width: 575px) {
        font-size: 11px;
        margin-top: 1px;
    }
`;

export const TooltipContainer = styled(FlexDivColumn)``;

export const TooltipText = styled.span``;

export const TooltipFooter = styled(FlexDivRow)`
    border-top: 1px solid ${(props) => props.theme.background.secondary};
    margin-top: 10px;
    padding-top: 8px;
`;

export const TooltipFooterInfoContianer = styled(FlexDiv)``;

export const TooltipFooterInfoLabel = styled(TooltipText)`
    margin-right: 2px;
`;

export const TooltipFooterInfo = styled(TooltipText)`
    font-weight: 600;
`;
