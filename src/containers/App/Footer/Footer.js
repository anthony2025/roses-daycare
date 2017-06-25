import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

Footer.propTypes = {
  devEmail: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired
}

const Wrapper = styled.div`
    width: 100%;
    margin-top: auto; // sticks footer to bottom of page
    padding: 15px 20px;
    display: flex;

    background-color: ${props => props.theme.invertBackground};
    background-blend-mode: multiply;
    color: ${props => props.theme.invertText};
    border-top: 2px solid ${props => props.theme.text};

    font-family: SignikaLight;
    line-height: 1.5;
    letter-spacing: 0.4px;

    @media (min-width: 700px) {
      flex-direction: row;
    }
    @media (max-width: 700px) {
      flex-direction: column;
      align-items: center;
    }
`

const ContactInfo = styled.div`
    display: flex;
    font-size: 16px;
`

const Labels = styled.div`
    color: ${props => props.theme.accent};
    margin-right: 50px;
`

const Copyright = styled.a`
    font-size: 14px;
    &:hover {
      transition: 1s;
      color: ${props => props.theme.accent};
    }

    @media (min-width: 700px) {
      text-align: right;
      margin: auto 0 0 auto;
    }
    @media (max-width: 700px) {
      text-align: center;
      margin: 25px 0 0 0;
    }
`

export default function Footer(props) {
  return (
    <Wrapper className={props.className}>
      <ContactInfo>
        <Labels>
          <div>
            PHONE
          </div>
          <div>
            EMAIL
          </div>
          <div>
            ADDRESS
          </div>
        </Labels>

        <div>
          <div>
            {props.phone}
          </div>
          <div>
            {props.email}
          </div>
          <div>
            {props.address}
          </div>
        </div>
      </ContactInfo>

      <Copyright href={`mailto:${props.devEmail}`}>
        Rose's Day Care LLC, 2017
        <br />
        made with ♥ by Anthony Ascencio
      </Copyright>
    </Wrapper>
  )
}
