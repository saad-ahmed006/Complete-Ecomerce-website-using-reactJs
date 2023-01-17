import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import styled from 'styled-components'
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
    const { id, colors, stock } = product
    const [color, setColor] = useState(colors[0])
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
        </Wrapper>
    )
}
