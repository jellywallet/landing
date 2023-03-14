import React from 'react';
import styled from 'styled-components';

const fontSize = 30;
const fontWeight = 600;

const MainContainer = styled.div`
    position: absolute;
    
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0; 
    right: 0;

    width: 100%;
    height: 100%;

    background: rgba(0, 0, 0, 0.7);
`;

const PlayerContainer = styled.div`
    position: absolute;
    
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0; 
    right: 0;

    padding: 10px 20px 10px 20px;

    width: 600px;
    height: 480px;
    
    display: flex;
    flex-direction: column;

    background: white;
    border-radius: 20px;
`;

const TitleBar = styled.div`
    height: 50px;   
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
`;

const Title = styled.div`
    font-size: ${fontSize}px;
    font-weight: ${fontWeight};
    font-family: 'GalanoGrotesque';
    font-weight: bold;
`;

const CloseButton = styled.div`
    width: 20px;
    height: 20px;

    background-image: url(/images/close.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

const Iframe = styled.iframe`
    width: 100%;
    height: 380px;
    
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0; 
    right: 0;

    title: "YouTube video player"; frameborder:"0";
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    allowFullScreen: "";
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: gray;
    border-radius: 2px;
`;

export interface Props {
    open: boolean;
    title: string;
    close: VoidFunction;
    video: string;
};

export default function VideoPlayer(props: Props) {
    return (
        <MainContainer onClick={props.close} style={{ display: props.open ? 'block' : 'none' }}>
            <PlayerContainer onClick={(event) => { event.stopPropagation(); }}>
                <TitleBar>
                    <Title>{props.title}</Title>
                    <CloseButton onClick={props.close} />
                </TitleBar>
                <Iframe src={props.video} />
            </PlayerContainer>
        </MainContainer>
    );
}