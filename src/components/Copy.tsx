import React from 'react';
import styled from 'styled-components';
import TextButton from './TextButton';
import FullButton from './FullButton';

const fontSize = 70;
const fontWeight = 800;
const smallFontSize = 40;
const smallFontWeight = 800;
const bigFontSize = 100;
const bigFontWeight = 800;

const MainContainer = styled.div`
    width: 50%;

    @media only screen and (max-width: 768px) {
        padding-top: 60px;
        width: 100%;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TextCointainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0px;
`;

const Line_1 = styled.div`
    font-size: ${fontSize}px;
    font-weight: ${fontWeight};
    @media only screen and (min-width: 1920px) {
        font-size: ${bigFontSize}px;
        font-weight: ${bigFontWeight};
    }
    @media only screen and (max-width: 768px) {
        font-size: ${smallFontSize}px;
        font-weight: ${smallFontWeight};
    }
    
    font-family: 'GalanoGrotesque';
    font-weight: bold;
    line-height: 0.9;

    color: black;
`;

const Line_2 = styled.div`
    font-size: ${fontSize}px;
    font-weight: ${fontWeight};
    @media only screen and (min-width: 1920px) {
        font-size: ${bigFontSize}px;
        font-weight: ${bigFontWeight};
    }
    @media only screen and (max-width: 768px) {
        font-size: ${smallFontSize}px;
        font-weight: ${smallFontWeight};
    }

    font-family: 'GalanoGrotesque';
    font-weight: bold;
    line-height: 0.9;

    padding-left: 150px;
    @media only screen and (max-width: 768px) {
        padding-left: 80px;
    }
    color: black;
`;

const Line_3 = styled.div`
    font-size: ${fontSize}px;
    font-weight: ${fontWeight};
    @media only screen and (min-width: 1920px) {
        font-size: ${bigFontSize}px;
        font-weight: ${bigFontWeight};
    }
    @media only screen and (max-width: 768px) {
        font-size: ${smallFontSize}px;
        font-weight: ${smallFontWeight};
    }

    font-family: 'GalanoGrotesque';
    font-weight: bold;
    line-height: 0.9;

    padding-left: 0px;
    color: #DB00B2;
    background: linear-gradient(270deg, #FF00A3 -1.88%, #BC00C0 101.83%);
    -webkit-background-clip: text;
    text-fill-color: transparent;
`;

const ButtonContainter = styled.div`
    padding-top: 30px;
    display: flex;
    justify-content: center;
    gap: 40px;
    width: 100%;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
`;

export interface Props {
    openInstallationGuide: VoidFunction;
}

export default function Copy(props: Props) {
    return (
        <MainContainer>
            <TextCointainer>
                <Line_1>A WEB-BASED</Line_1>
                <Line_2>WALLET FOR</Line_2>
                <Line_3>DEFICHAIN</Line_3>
            </TextCointainer>
            <ButtonContainter>
                <FullButton text={'Download'} onClick={() => {
                    window.open('https://chrome.google.com/webstore/detail/jellywallet-beta/eegcfalgkkhehkhbjbggbhhlcnckadih', 'blank');
                }} />
                <TextButton text={'Installation guide'} onClick={props.openInstallationGuide} />
            </ButtonContainter>
        </MainContainer>
    );
}
