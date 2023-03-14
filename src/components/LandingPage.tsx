import React, { useState } from 'react';
import styled from 'styled-components';
import Copy from './Copy';
import Screenshots from './Screenshots';
import TopBar from './TopBar';
import VideoPlayer from './VideoPlayer';

interface VideoData {
    video: string;
    title: string;
}

const whatIsDeFiChainData = {
    video: "https://www.youtube.com/embed/tiyzWOUTXN0?controls=0",
    title: "What is DeFiChain?"
};

const installationGuideData = {
    video: "https://www.youtube.com/embed/nh1dQ3DsgVc",
    title: "Installation Guide"
};

const MainContainer = styled.div`
    width: calc(100vw - 60px);
    min-height: calc(100vh - 60px);
    padding: 30px;
    @media only screen and (max-width: 768px) {
        width: calc(100vw - 40px);
        padding-left: 20px;
        padding-right: 20px;
    }

    background-color: #F1EEF9;
    
    display: flex;
    flex-direction: column;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        gap: 30px;
    }
`;

export default function LandingPage() {
    const [videoData, setVideoData] = useState<VideoData | null>(null);
    return (
        <MainContainer>
            <TopBar openWhatIsDeFiChainVideo={() => { setVideoData(whatIsDeFiChainData); }} />
            <Content>
                <Copy openInstallationGuide={() => { setVideoData(installationGuideData); }} />
                <Screenshots />
            </Content>
            <VideoPlayer open={videoData !== null} title={videoData?.title ?? ""} close={() => { setVideoData(null); }} video={videoData?.video ?? ""} />
        </MainContainer>
    );
}
