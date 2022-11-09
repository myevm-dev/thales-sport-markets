import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FlexDivRowCentered } from 'styles/common';

type SportFilterProps = {
    disabled?: boolean;
    selected?: boolean;
    sport: string;
    onClick: () => void;
};

const SportFilter: React.FC<SportFilterProps> = ({ disabled, selected, sport, onClick, children }) => {
    const { t } = useTranslation();

    return (
        <Container>
            <LabelContainer
                className={`${disabled ? 'disabled' : ''} ${selected ? 'selected' : ''}`}
                onClick={() => (!disabled ? onClick() : '')}
            >
                <SportIcon className={`icon icon--${sport.toLowerCase() == 'all' ? 'logo' : sport.toLowerCase()}`} />
                <Label>{`${children} ${disabled ? `\n ${t('common.coming-soon')}` : ''} `}</Label>
                {sport.toLowerCase() != 'all' ? (
                    !selected ? (
                        <ArrowIcon className={`icon-exotic icon-exotic--right`} />
                    ) : (
                        <ArrowIcon down={true} className={`icon-exotic icon-exotic--down`} />
                    )
                ) : (
                    ''
                )}
            </LabelContainer>
        </Container>
    );
};

const Container = styled(FlexDivRowCentered)`
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 13px;
    letter-spacing: 0.035em;
    text-transform: uppercase;
    cursor: pointer;
    height: 36px;
    margin-left: 20px;
    position: relative;
    color: ${(props) => props.theme.textColor.secondary};
    margin-bottom: 5px;
    justify-content: flex-start;
`;

const LabelContainer = styled(FlexDivRowCentered)`
    &.selected,
    &:hover:not(.disabled) {
        color: ${(props) => props.theme.textColor.quaternary};
    }
    &.disabled {
        cursor: default;
        opacity: 0.4;
    }
`;

const Label = styled.div`
    white-space: pre-line;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
`;

const SportIcon = styled.i`
    font-size: 25px;
    margin-right: 15px;
`;

const ArrowIcon = styled.i<{ down?: boolean }>`
    font-size: 12px;
    margin-left: 5px;
    margin-top: ${(props) => (props.down ? '5px' : '')};
    margin-bottom: ${(props) => (props.down ? '' : '2px')};
    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.textColor.quaternary};
    }
    @media (max-width: 950px) {
        &:hover {
            color: ${(props) => props.theme.textColor.secondary};
        }
    }
`;

export default SportFilter;
