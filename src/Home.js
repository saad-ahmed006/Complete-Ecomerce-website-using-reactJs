import React from 'react'
import styled from 'styled-components'
export default function Home() {
    return (
        <Wrapper className='text'>Home</Wrapper>
    )
}
const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.colors.bg};
    width: 100vh;
    height: 10vh;
    `;
