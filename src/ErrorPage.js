import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Components/Button'

const Wrapper=styled.section`
.ErrorContainer{
    height: 40vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.ErrorContainer h2{
   font-size: 5rem;
   padding-bottom: 2rem;
}
.ErrorContainer h3{
   font-size: 3rem;
   padding-bottom: 2rem;
}
.ErrorContainer p{
    padding-bottom: 2rem;
    font-size: 1.5rem;
    text-align: center;
}
`;
export default function ErrorPage() {
  return (
    <Wrapper>
    <div className='ErrorContainer'>
        <h2>404</h2>
        <h3>UH OH! You're Lost</h3>
        <p>Note that the development build is optimized.To create a production build, use npm run build.To create a .</p>
        <NavLink to='/'><Button>Go to Home Page</Button></NavLink>
    </div>
    </Wrapper>
  )
}
