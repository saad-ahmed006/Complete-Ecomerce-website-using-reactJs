import React from 'react'
import { GlobleUseContext } from '../Context/ProductContex'
import Product from './Product';
import styled from 'styled-components';
const Wrapper = styled.section`
.FeatureContainer{
    background-color: #F6F8FA;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
   padding-top:5rem ;
   padding-bottom:5rem ;
}

@media (max-width: ${({ theme }) => theme.media.mobile}){
  .FeatureContainer{
   
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

}

}
`;

export default function FeatureProducts() {
  const { isLoading, featureProducts } = GlobleUseContext()
  console.log(featureProducts);
  return (
    <>
      <Wrapper>
        <div className='FeatureContainer'>
          {featureProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </Wrapper>
    </>
  )
}
