import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
const Wrapper=styled.nav`

    background-color:#F6F8FA ;
    padding: 1.5rem;
    font-size: 2rem;
`;

export default function PageNavigation({title}) {
  return (
    <Wrapper>
        <NavLink to="/">Home</NavLink>  /
        {title}
    </Wrapper>
  )
}
