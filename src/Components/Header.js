import React from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import Nav from './Nav';

const MainHeader = styled.header`
  padding: 4.8rem 2rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 5rem;
  }

`;

export default function Header() {
  return (
    <>
      <MainHeader>
        <NavLink to="/">
          <img src="images/logo.png" className='logo' alt="my logo img" />
        </NavLink>
        <Nav />
      </MainHeader>
    </>
  )
}
