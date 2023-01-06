import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import { CgMenu, CgClose } from 'react-icons/cg'

const NavBar = styled.nav`
.navbar-lists{
    display: flex;
    align-items: center;
    gap:4.8rem ;

    .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.4rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
    }
}

.cart-trolley--link{
    position: relative;
}
.cart-trolley{
    position: relative;
    font-size: 3.2rem;
}
.cart-total--item{
        width: 2.4rem;
        height:2.4rem;
        position: absolute;
        background-color: #000;
        color: #000;
        border-radius: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
        top: -20%;
        left: 70%;
        background-color: ${({ theme }) => theme.colors.helper};
}

.mobile-navbar-btn{
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
}
.close-outline{
    display: none;
}

@media (max-width: ${({ theme }) => theme.media.mobile}){
    .mobile-navbar-btn{
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};
    }
    .mobile-nav-icon{
        font-size: 3.2rem;
        color:  ${({ theme }) => theme.colors.black};
    }


    .active .mobile-nav-icon {
        display: none;
        font-size: 3.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }
      .active .close-outline {
        display: inline-block;
      }
      .navbar-lists {
        width: 100vw;
        height:100vh;
        background-color:${({ theme }) => theme.colors.black} ;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0s linear;
      }
      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 0.2s linear;
        .navbar-link {
          font-size:15px;
        }
      }
}
`;

export default function Nav() {
    const [menuIcon, setMenuIcon] = useState()
    return (
        <NavBar>
            <div className={menuIcon ? "active" : ""}>
                <ul className='navbar-lists' >

                    <NavLink
                        to="/"
                        className="navbar-link"
                        onClick={(() => { setMenuIcon(false) })}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className="navbar-link"
                        onClick={(() => { setMenuIcon(false) })}

                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/product"
                        className="navbar-link"
                        onClick={(() => { setMenuIcon(false) })}
                    >
                        Products
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className="navbar-link"
                        onClick={(() => { setMenuIcon(false) })}
                    >
                        Contact
                    </NavLink>

                    <NavLink to="/cart"
                        className="navbar-link cart-trolley--link"
                        onClick={(() => { setMenuIcon(false) })}>
                        <FiShoppingCart className="cart-trolley" />
                        <span className="cart-total--item"> 10 </span>

                    </NavLink>

                </ul>

                {/* two Butoon ONe is Menu and Other is Close */}
                <div className='mobile-navbar-btn'>
                    <CgMenu
                        name="menu-outline"
                        className="mobile-nav-icon"
                        onClick={(() => { setMenuIcon(true) })}
                    />

                    <CgClose
                        name="close-outline"
                        className="mobile-nav-icon close-outline"
                        onClick={(() => { setMenuIcon(false) })}
                    />
                </div>
            </div>
        </NavBar>
    )
}
