import React from 'react';
import HeroSection from '../../components/HeroSection';
import { homeObjTwo } from '../Homepage/Data';
import { homeObjOne } from './Data';

function Services() {
    return (
        <>
            <HeroSection {...homeObjOne }/>
            <HeroSection {...homeObjTwo }/>
        

        </>
    )
}

export default Services