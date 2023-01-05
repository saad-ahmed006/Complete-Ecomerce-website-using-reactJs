import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdSecurity } from 'react-icons/md'
import { GiReceiveMoney } from 'react-icons/gi'
import { RiSecurePaymentLine } from 'react-icons/ri'
import styled from 'styled-components'

const Wrapper = styled.section`
.Container{
    display: flex;
    flex-direction: row;
    justify-content:center;
    padding-top: 50px;
    padding-bottom: 50px;
    color: black;
}

.Services-1{
    width: 20%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.bg};
    margin-right: 20px;
    border-radius: 3px;
}

.Services-2{
    width: 20%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.Coloumn{
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.bg};  
}

.Icon{
    font-size:4rem;
    color:rgba(81, 56, 238, 5) ;  
}
.Services-3{
    border-radius: 3px;
    width: 20%;
    height: 30vh;
    margin-left: 20px;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

@media (max-width: ${({ theme }) => theme.media.mobile}){
    .Container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
    color: black;
}

.Services-1{
    width: 90%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.bg};
    margin-right: 0px;
    margin-bottom: 5rem;
    border-radius: 3px;
}

.Services-2{
    width: 90%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.Coloumn{
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 5rem;
    background-color: ${({ theme }) => theme.colors.bg};
}

.Icon{
    font-size:4rem;
    color:rgba(81, 56, 238, 5) ; 
}

.Services-3{
    border-radius: 3px;
    width: 90%;
    height: 30vh;
    margin-left: 0px;
    margin-top: 13rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

}
`;
export default function Services() {
    return (
        <Wrapper>
            <div className='Container'>
                <div className='Services-1'>
                    <TbTruckDelivery className='Icon' />
                    <h3>Super Fast and Free Delivery</h3>
                </div>
                <div className='Services-2'>
                    <div className='Coloumn'>
                        <MdSecurity className='Icon' />
                        <h3>Non Contacting Shipping</h3>
                    </div>
                    <div className='Coloumn'>
                        <GiReceiveMoney className='Icon' />
                        <h3>Money-Bank Guaranteed</h3>
                    </div>
                </div>
                <div className='Services-3'>
                    <RiSecurePaymentLine className='Icon' />
                    <h3>Super Secure Payment System</h3>
                </div>
            </div>
        </Wrapper>
    )
}
