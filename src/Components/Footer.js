import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Button from './Button';
import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

const Wrapper = styled.section`
.FooterUpper{
    display: flex;
    justify-content: center;
    width: 100%;
    z-index: 9999;
    position: absolute;
    top: -5rem;
}

.FooterUpperContent{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #F7F8FB;
    width: 50%;
    height: 15vh;
    padding-left: 2rem;
    padding-right: 2rem;
    color: black;
    border-radius: 7px;
}

.Footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #07132E;
    position: relative;
    margin-top:10rem;
    padding-bottom: 8rem;
}

.FooterContent{
    display: flex;
    justify-content: center;
    color: white;
    margin-top: 7rem;
    width: 100%;
}

.Content{
    padding-left: 5rem;
}

.Content h2{
   padding-bottom: 2rem;
}

.Content p{
    font-size: 12px;
}
.Content input{
    padding: 1rem;
    outline: none;
    border-radius: 5px;
    margin-bottom: 2rem;
}

.Content .ContentIcon{
    font-size: 3.5rem;
    border: 1px solid white;
    padding: .5rem;
    border-radius: 3rem;
    color: white;
    margin-right: 1rem;
}

.CopyRight{
    text-align: center;
    padding: 1rem;
    color: white;
    background-color: #07132E;
    font-size: 2rem;
}

    @media (max-width: ${({ theme }) => theme.media.mobile}){
        .FooterUpper{
    display: flex;
    justify-content: center;
    width: 100%;
    z-index: 1;
    position: absolute;
    top: -5rem;
}

.FooterUpperContent{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F7F8FB;
    width: 80%;
    height: 15vh;
    padding-left: 2rem;
    padding-right: 2rem;
    color: black;
    border-radius: 7px;
}

 .Footer{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #07132E;
     position: relative;
    padding-bottom: 5rem;
    margin-top:10rem; 
} 

.FooterContent{
     display: flex;
    flex-direction: column; 
    color: white;
    margin-top: 7rem;
    width: 100%; 
 } 

 .Content{
    padding-top:1rem;
    padding-left: 0rem;
    text-align: center;
}

.CopyRight{
        font-size: 1rem;
    }


}

`;

export default function Footer() {
    return (
        <Wrapper>
            <div className='Footer'>

                <div className='FooterUpper'>
                    <div className='FooterUpperContent'>
                        <div><p>Ready to get Started?</p><p>Talk to us Today?</p></div>
                        <div><NavLink><Button>Get Started</Button></NavLink></div>
                    </div>
                </div>

                <div className='FooterContent'>

                    <div className='Content'>
                        <h2>Thapa Techiniqal</h2>
                        <p>Search for the keywords to learn more<br /> about each warning.</p>
                    </div>
                    <div className='Content'>
                        <h2>Subscribe to get important <br />Updates</h2>
                        <input type="email"></input>
                        <div><NavLink><Button>Subscribe</Button></NavLink></div>

                    </div>
                    <div className='Content'>
                        <h2>Follow us</h2>
                        <AiFillYoutube className='ContentIcon' />
                        <BsFacebook className='ContentIcon' />
                        <AiFillInstagram className='ContentIcon' />
                    </div>
                    <div className='Content'>
                        <h2>Call Us</h2>
                        <p>22233344455</p>
                    </div>

                </div>

            </div>
            <p className='CopyRight'>@2023 ThapaStore. CopyRight Right Reserved</p>
        </Wrapper>
    )
}
