import React from 'react';
import styled from 'styled-components';
import { FlexDivColumnCentered, FlexDivRowCentered } from 'styles/common';
import { Circle } from '../styled-components';

type LevelCirclesTypes = {
    levels: number[];
    currentLevel: number;
    additionalLabelsForLevels?: string[];
    displayLevelNumberInsideCircle?: boolean;
};

const LevelCircles: React.FC<LevelCirclesTypes> = ({
    levels,
    currentLevel,
    additionalLabelsForLevels,
    displayLevelNumberInsideCircle,
}) => {
    return (
        <Wrapper>
            {levels.map((item, index) => {
                return (
                    <LevelWrapper key={index}>
                        {!!additionalLabelsForLevels && !!additionalLabelsForLevels[index] && (
                            <LabelAbove>{additionalLabelsForLevels[index]}</LabelAbove>
                        )}
                        <Circle active={item <= currentLevel}>{displayLevelNumberInsideCircle ? item : ''}</Circle>
                        <LabelBelow active={item <= currentLevel}>
                            {!displayLevelNumberInsideCircle ? item : ''}
                        </LabelBelow>
                    </LevelWrapper>
                );
            })}
        </Wrapper>
    );
};

const Wrapper = styled(FlexDivRowCentered)`
    justify-content: center;
    gap: 8px;
`;

const LevelWrapper = styled(FlexDivColumnCentered)`
    position: relative;
    margin: 5px 0px;
    align-items: center;
    max-width: 23px;
`;

const LabelAbove = styled.span`
    color: ${(props) => props.theme.textColor.primary};
    font-size: 11px;
    font-weight: 700;
    font-style: normal;
    text-align: center;
`;

const LabelBelow = styled.span<{ active: boolean }>`
    color: ${(props) =>
        props.active ? props.theme.overdrop.textColor.primary : props.theme.overdrop.background.quaternary};
    font-size: 9px;
    margin-top: 3px;
    font-style: normal;
    font-weight: 800;
    text-align: center;
`;

export default LevelCircles;
