import React from 'react'
import FeatureProducts from './Components/FeatureProducts';
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import Trusted from './Components/Trusted';
export default function Home() {
    return (
        <>
        <HeroSection Title={"Thapa Store"}/>
        <FeatureProducts/>
        <Services/>
        <Trusted/>
        </>
    )
}
