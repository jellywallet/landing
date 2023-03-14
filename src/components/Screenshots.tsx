import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
    width: 50%;
    height: auto;
    @media only screen and (max-width: 768px) {
        width: 100%;
    }
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    width: 80%;
    height: 80%;
    @media only screen and (max-width: 768px) {
        width: 80%;
        min-height: 400px;
    }
    display: flex;
    flex-direction: row;
    background: url('images/screenshots.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

export default function Screenshots() {
    return (
        <MainContainer>
            <Content />
        </MainContainer>
    );
}
