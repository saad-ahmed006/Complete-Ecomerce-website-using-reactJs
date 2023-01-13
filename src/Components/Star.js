import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'
import styled from 'styled-components'
const Wrapper = styled.span`
.Icons{
    font-size: 1.5rem;
    color: #ffa534;
}

.p{
    font-size: 1.5rem;
    margin-left: 10px;
}

.container{  
    display: flex;
    flex-direction: row;
    align-items: center;
}
`;

export default function Star({ stars, reviews }) {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5
        return (
            <span key={index}>
                {stars > index + 1 ? (<FaStar className='Icons' />)
                    : stars > number ? (<FaStarHalfAlt className='Icons' />)
                        : (<AiOutlineStar className='Icons' />)}
            </span>
        )
    })
    return (
        <Wrapper>
            <div className='container'>
                <p>{ratingStar}</p>
                <p className='p'>({reviews} customer reviews)</p>
            </div>
        </Wrapper>
    )
}
