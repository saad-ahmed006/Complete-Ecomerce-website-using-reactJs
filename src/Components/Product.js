import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import NumberFormat from './FormatCurruncy';
const Wrapper = styled.section`

.FeatureItem{
    background-color: white;
    padding: 1rem;
    width: 60%;
    border-radius: 3px;
    margin: 10px auto;
} 

.Image img{
    border-radius: 3px; 
    width: 100%;
    overflow: hidden;
}

.FeatureItemText{
    display: flex;
    justify-content: space-between;
    padding-top: .9rem;
} 

.FeatureItemText h3{
color: black;
text-transform: capitalize;
} 

.FeatureItemText p{
  color: blueviolet;
} 

.Image{
    position: relative;
    overflow: hidden;
}

.Image:hover .Effect{
    transform: translateX(0%);
}

.Effect{
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    position: absolute; 
    top: 0px;
    transform: translateX(-100%);
    transition: all 0.4s ease-in-out;
    border-radius: 3px; 
}

.ImageCategory{
     padding: .8rem 1.6rem;
     position: absolute; 
     background-color: white;
     top: 1rem;
     right: 2rem;
     border-radius: 30px;
     color: blueviolet;
     font-size: 13px;
     text-transform: uppercase;
}

`;
export default function Product(curElem) {
    const { id, name, image, price, category } = curElem;
    return (
        <Wrapper>
            <div className='FeatureItem'>
                <NavLink to={`/sigleproduct/${id}`}>
                    <div className='Image'>
                        <img src={image} alt='Feature'></img>
                        <div className='ImageCategory'>{category}</div>
                        <div className='Effect'></div>
                    </div>
                    <div className='FeatureItemText'>
                        <h3>{name}</h3>
                        <p><NumberFormat price={price} /></p>
                    </div>
                </NavLink>
            </div>
        </Wrapper>
    )
}
