import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.section`
.Container{
  background-color: ${({ theme }) => theme.colors.bg};
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 4rem;
}
.Container h4{
font-size: 2rem;
}
.TrustedLogoContainer{
  padding-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items: center;
  flex-wrap: wrap;

}
.TrustedLogoContainer .Logo img{
width: 50%;
}

@media (max-width: ${({ theme }) => theme.media.mobile}){
  .Container{
  background-color: ${({ theme }) => theme.colors.bg};
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 4rem;
}
.Container h4{
font-size: 1.5rem;
}
.TrustedLogoContainer{
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
}
 .TrustedLogoContainer .Logo img{
width:40%;
}
}

`;
export default function Trusted() {
  return (
    <Wrapper>
    <div className='Container'>
      <h4>Trusted By 1000+ Companies</h4>
      <div className='TrustedLogoContainer'>
        <div className='Logo'><img src='/Images/logo1.png' alt='Trusted Logo'></img></div>
        <div className='Logo'><img src='/Images/logo2.png' alt='Trusted Logo'></img></div>
        <div className='Logo'><img src='/Images/logo3.png' alt='Trusted Logo'></img></div>
        <div className='Logo'><img src='/Images/logo4.png' alt='Trusted Logo'></img></div>
        <div className='Logo'><img src='/Images/logo5.png' alt='Trusted Logo'></img></div>

      </div>

    </div>
    </Wrapper>
  )
}
