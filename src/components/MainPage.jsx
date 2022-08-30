import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`


const UserHello = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 48px;
color: #000000;
margin-top: 20px;
text-align: center;
`

const Button = styled.button`
background: #F5F5F5;
border-radius: 8px;
width: 200px;
height: 60px;
margin-top: 20px;
border: none;
cursor: pointer;

`

export default function MainPage({user}) {
  return (
  <Container>
    <UserHello>Здравствуйте, {user}</UserHello>
    <Link to={'/'}><Button>Выйти</Button></Link>
  </Container>
  )
}
