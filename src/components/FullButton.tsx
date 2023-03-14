import React from 'react';
import styled from 'styled-components';

const Content = styled.button`
    border: 0;
    width: 100px;
    border-radius: 7px;
    background: linear-gradient(270deg, #FF00A3 -1.88%, #BC00C0 101.83%);
    color: white;
    cursor: pointer;

    height: 34px;
    padding: 0;
    line-height: 1;

    font-family: 'GalanoGrotesque';
	font-weight: 600;
    font-weight: bold;
    @media only screen and (min-width: 1920px) {
        height: 40px;
    }
    @media only screen and (max-width: 768px) {
        font-size: ${15}px;
        width: 150px;
    }

`;

interface Props {
    text: string;
    onClick?: VoidFunction;
}

export default function FullButton(props: Props) {
    return (
        <Content onClick={props.onClick} >{props.text}</Content>
    );
}