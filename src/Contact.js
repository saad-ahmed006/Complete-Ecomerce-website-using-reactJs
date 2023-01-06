import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Wrapper = styled.section`
h2{
font-size: 3rem;
text-align: center;
margin-top:4rem;
margin-bottom:4rem;
}

.contact-inputs{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
}

.Input{
  width: 30%;
  display: flex;
  flex-direction: column;
}

.Input input{
  padding: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-top: 1.5rem;
  outline: none; 
}

.Input textarea{
  padding: 2rem;
  margin-top: 1.5rem;
  outline: none;
}

.Button{
  width: 40%;
  padding:1rem;
  border: none;
  background-color: rgba(81, 56, 238, 5);
  color: white;
  margin-top: 2.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 3px;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .contact-inputs{
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
}

.Input{
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

.Input input{
  padding: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-top: 1.5rem;
  outline: none; 
}

.Input textarea{
  padding: 2rem;
  margin-top: 1.5rem;
  outline: none;
}

.Button{
  width: 40%;
  padding:1.5rem;
  border: none;
  background-color: rgba(81, 56, 238, 5);
  color: white;
  margin-top: 2.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 3px;
}

}

`;

export default function Contact() {
  return (
    <Wrapper>
      <h2>Contact Page</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226.0891297578108!2d66.98508471131635!3d24.951614309875865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb36abcdfd34a55%3A0x5968b7416f4375dd!2sBaitul%20Moazzam%20Jamia%20Masjid%2C%20Islam%20Nagar%20Pakistan%20Bazaar%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1672986968830!5m2!1sen!2s" width="100%" height="400" style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
      <form
        method='POST'
        className="contact-inputs">
        <div className='Input'>
          <input
            type="text"
            placeholder="username"
            name="username"
            required
            autoComplete="off"
          />

          <input
            type="email"
            name="Email"
            placeholder="Email"
            autoComplete="off"
            required
          />

          <textarea
            name="Message"
            cols="30"
            rows="10"
            required
            autoComplete="off"
            placeholder="Enter you message"></textarea>

          <NavLink><button type="submit" value="send" className='Button'>Send</button></NavLink>
        </div>
      </form>

    </Wrapper>

  )
}
