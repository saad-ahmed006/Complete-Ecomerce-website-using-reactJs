import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';
import styled from 'styled-components'
const Wrapper = styled.section`
.amount-toggle {
    margin-top: 3rem;
    width: 12rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    /* align-items: center; */
    font-size: 1.1rem;
}
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }

`;
export default function CardAmountToogle({ amount, setIncrease, setDecrease }) {
    return (
        <Wrapper>
            <div className='amount-toggle'>
                <button onClick={() => setDecrease()} className="button"><FaMinus /></button>
                <div className='amount-style'>{amount}</div>
                <button onClick={() => setIncrease()} className="button"><FaPlus /></button>
            </div>
        </Wrapper>
    )
}
