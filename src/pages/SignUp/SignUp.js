import React from 'react';
import HeroSection from '../../components/HeroSection';
import Pricing from '../../components/Pricing';
import { homeObjOne, homeObjThree } from './Data';

function SignUp() {
    return (
        <>
            <HeroSection {...homeObjOne }/>
            <HeroSection {...homeObjThree }/>

        </>
    )
}

export default SignUp