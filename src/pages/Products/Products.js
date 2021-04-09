import React from 'react';
import HeroSection from '../../components/HeroSection';
import Pricing from '../../components/Pricing';
import { homeObjTwo } from '../Homepage/Data';
import { homeObjOne, homeObjThree } from './Data';

function Services() {
    return (
        <>
            <HeroSection {...homeObjOne }/>
            <HeroSection {...homeObjTwo }/>
        

        </>
    )
}

export default Services