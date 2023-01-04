import React from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import Nav from './Nav';

const MainHeader = styled.header`
  padding: 25px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    width: 80%;
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
