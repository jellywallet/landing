import React from 'react';
import styled from 'styled-components';

const Content = styled.button`
    border: 0;
    background-color: rgba(0, 0, 0, 0);
    color: black;
    cursor: pointer;
    
    height: 34px;
    padding: 0;
    line-height: 1;

    font-family: 'GalanoGrotesque';
	font-weight: 600;
    font-weight: bold;
    @media only screen and (min-width: 1920px) {
        height: 40px;
        line-height: 40px;
    }
    @media only screen and (max-width: 768px) {
        font-size: ${15}px;
    }
`;

interface Props {
    text: string;
    onClick?: VoidFunction;
}

export default function TextButton(props: Props) {
    return (
        <Content onClick={props.onClick} >{props.text}</Content>
    );
}