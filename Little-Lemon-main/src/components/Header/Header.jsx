import './Header.css';
import React from "react";
import {AppWrap} from '../../wrapper';
import BlockRevealAnimation from 'react-block-reveal-animation';

import { useContext } from "react";
import DataContext from "../../DataContext";

import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations'; 

const Pulse = styled.div`animation: 6s ${keyframes`${pulse}`} infinite`;

const Header = () => {

    const { title, location, description, btnname, image} = useContext(DataContext);
    
    return ( 
    <header>
        
        <div className="app__header-data">
            <BlockRevealAnimation color="#F4CE14">
                <h1>
                    {title}
                </h1>
            </BlockRevealAnimation>
            <BlockRevealAnimation color='#EDEFEE'>
                <h3>
                    {location}
                </h3>
                <p>
                    {description}
                </p>
            </BlockRevealAnimation>
            <BlockRevealAnimation color="#F4CE14">
                <button>
                    {btnname}
                </button>
            </BlockRevealAnimation>
        </div>
        <BlockRevealAnimation color='#333333'>
            <Pulse>
                <div 
                    className="app__header-image"
                    style={{backgroundImage:`url(${image})`}}
                />
            </Pulse>
        </BlockRevealAnimation>
    </header> );
}

export default AppWrap(Header, 'Landing', 'app__header');