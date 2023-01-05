import React from 'react'
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import Trusted from './Components/Trusted';
export default function Home() {
    return (
        <>
        <HeroSection Title={"Thapa Store"}/>
        <Services/>
        <Trusted/>
        </>
    )
}
