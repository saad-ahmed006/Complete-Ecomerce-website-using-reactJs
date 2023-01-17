import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import Button from './Button'
import styled from 'styled-components'
import CardAmountToogle from './CardAmountToogle';
const Wrapper = styled.section`
p{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.Btn-Style{
    margin-left: 1rem;
    margin-top: 0rem;
    width: 2rem;
    height: 2rem;
    border-radius: 2rem;
    border: none;
    opacity: 0.5;
   cursor: pointer;          
}

.Btn-Style:hover {
      opacity: 1;
    }

  .active {
    opacity: 1;
  }

  .checkStyle{
    color: white;
  }

`;
export default function AddToCard({ product }) {
    const { id, colors, stock } = product;
    const [color, setColor] = useState(colors[0])
    const [amount, setAmount] = useState(1)
 
    const setDecrease=()=>{
        amount>1?setAmount(amount-1):setAmount(amount)
    }
    const setIncrease=()=>{
        amount<stock?setAmount(amount+1):setAmount(stock)
    }
    return (
        <Wrapper>
            <div className='Colors'>
                <p>
                    Colors:
                    {
                        colors.map((currElem, index) => {
                            return <button
                                style={{ backgroundColor: currElem }}
                                className={color === currElem ? "Btn-Style active" : "Btn-Style"}
                                onClick={() => setColor(currElem)}>
                                {color === currElem ? <FaCheck className="checkStyle" /> : null}
                            </button>
                        })}
                </p>
            </div>
            <CardAmountToogle
                amount={amount}
                setIncrease={setIncrease}
                setDecrease={setDecrease} />

                <NavLink to="/cart">
<Button>Add To Cart</Button>
                </NavLink>
        </Wrapper>
    )
}
