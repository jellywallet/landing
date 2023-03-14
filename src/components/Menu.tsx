import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TextButton from './TextButton';
import FullButton from './FullButton';

const MainContainer = styled.div`
    display: flex;
    @media only screen and (min-width: 768px) {
        display: none;
    }
    flex-direction: column;
    gap: 30px;
`;

const MenuContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;

    padding: 20px;
    padding-top: 60px;

    width: calc(100% - 40px);
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    background-color: #F1EEF9;
`;

const TopContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const CloseButton = styled.div`
    position: absolute;
    top: 30px;
    right: 20px;

    width: 30px;
    height: 30px;

    background-image: url(/images/close.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

const OpenButton = styled.div`
    width: 30px;
    height: 30px;
    background-image: url('images/menu.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

export interface Props {
    openWhatIsDeFiChainVideo: VoidFunction;
};

export default function Menu(props: Props) {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : 'auto';
    }, [open])
    return (
        <MainContainer>
            <OpenButton onClick={() => setOpen(true)} />
            {open && <MenuContent>
                <CloseButton onClick={() => setOpen(false)} />
                <TextButton text={'What is DeFiChain?'} onClick={props.openWhatIsDeFiChainVideo} />
                <TextButton text={'GitHub'} onClick={() => {
                    window.open('https://github.com/Jellywallet/extension', 'blank');
                }} />
                <TextButton text={'Terms and Conditions'} onClick={() => {
                    window.open('/terms-and-conditions/index.html', 'blank');
                }} />
                <FullButton text={'Download'} onClick={() => {
                    window.open('https://chrome.google.com/webstore/detail/jellywallet-beta/eegcfalgkkhehkhbjbggbhhlcnckadih', 'blank');
                }} />
            </MenuContent>}

        </MainContainer>
    );
}