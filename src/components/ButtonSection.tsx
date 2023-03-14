import React from 'react';
import styled from 'styled-components';
import TextButton from './TextButton';
import FullButton from './FullButton';

const MainContainer = styled.div`
    display: flex;
    @media only screen and (max-width: 768px) {
        display: none;
    }
    flex-direction: row;
    gap: 30px;
`;

export interface Props {
    openWhatIsDeFiChainVideo: VoidFunction;
};

export default function ButtonSection(props: Props) {
    return (
        <MainContainer>
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
        </MainContainer>
    );
}