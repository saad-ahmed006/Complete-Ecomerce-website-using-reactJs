import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Button from './Button';
const Wrapper = styled.section`
    /* width: 100vw;
    height: 100vh; */

.Container{
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items: center;
  padding: 5%;
}

.Content h5{
font-size: 1.5rem;
/* font-weight: bold; */
margin-bottom:15px ;
color:rgba(81, 56, 238, 5);
}

.Content h1{
  margin-bottom:15px ;
  font-size: 3.5rem;
}

.Content p{
  margin-bottom:15px ;
  font-size: 1.5rem;
  width: 400px;
}


img{
  width: 35%;
  height:35%;
  border-radius: 3px;
  border-top-right-radius: 15rem;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .Container{ 
    display: flex;
    flex-direction: column;
  }

  .Content{
    width: 100%;
    text-align: center;
  }

  .Content p{
    width: 100%;
    text-align: center;
  }

  img{
    margin-top: 5rem;
  width: 100%;
  height:100%;
  border-radius: 5px;
}

}
    `;

export default function HeroSection(props) {
  return (
    <Wrapper>
      <div className='Container'>
        <div className='Content'>
          <h5>Welcome to </h5>
          <h1>{props.Title}</h1>
          <p>React Ecommerce Website Tutorial in Hindi #7: Home & About Page with Hero Section with Props </p>
          <NavLink><Button>Shop Now</Button></NavLink>
        </div>
        <img src='/Images/hero.jpg' alt='Hero Image' className='Img'></img>
      </div>
    </Wrapper>
  )
}
