import React from 'react';
import styled from 'styled-components';
import TextButton from './TextButton';
import FullButton from './FullButton';
import ButtonSection from './ButtonSection';
import Menu from './Menu';

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Logo = styled.div`
    width: 135px;
    height: 24px;
    background-image: url('images/jellywallet_logo.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

export interface Props {
    openWhatIsDeFiChainVideo: VoidFunction;
};

export default function TopBar(props: Props) {
    return (
        <MainContainer>
            <Logo />
            <ButtonSection openWhatIsDeFiChainVideo={props.openWhatIsDeFiChainVideo} />
            <Menu openWhatIsDeFiChainVideo={props.openWhatIsDeFiChainVideo} />
        </MainContainer>
    );
}