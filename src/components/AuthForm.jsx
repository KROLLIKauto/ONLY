import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import styled from 'styled-components'

const Form = styled.form`
max-width: 640px;
margin: 0 auto;
min-height: 338px;
`

const Input = styled.input`
padding-left: 10px;
width: 630px;
height: 60px;
background: #F5F5F5;
border-radius: 8px;
border: none;
`

const Label = styled.label`
margin-top: 15px;
width: 46px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #1F1F1F;
display: block;
margin-bottom: 13px;
margin-top: 20px;
`

const EnterButton = styled.input`
width: 640px;
height: 60px;
background: #4A67FF;
border-radius: 8px;
color: white;
border: none;
margin-top: 23px;
&:hover {
  cursor: pointer;
}
&:disabled {
  opacity: 0.4;
}
`

const Notice = styled.p`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #E26F6F;
&::before {
  display: inline;
}
`

const Error = styled.div`
width: 640px;
height: 60px;
background: #F5E9E9;
border: 1px solid #E26F6F;
border-radius: 8px;
display: flex;
align-items: center;
padding-left: 15px;
`

const AuthForm = ({isValidEmail}) => {
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur'
  })
  const history = useNavigate()
  const [errFlag, setErrFlag] = useState(false)
  const [userMail, setUserMAil] = useState('')
  const [disabled, setDisabled] = useState(false)

  const onSubmit = (data) => {
    if (
      data.login === 'steve.jobs@example.com'
      && data.password === 'password'
    ) {
      setDisabled(true)
      setTimeout(() => {
        isValidEmail(data.login)
        history('/mainPage')
        setDisabled(false)
    }, 1000)
    }
    setUserMAil(data.login)
    data.login !== 'steve.jobs@example.com' && setErrFlag(true)
  }

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {errFlag && <Error>Пользователя {userMail} не существует</Error>}
        <Label>Логин</Label>
          <Input {...register('login', {
            required: true
          })} />
        <div>
          {errors?.login && <Notice>Обязательное поле</Notice>}
        </div>
        <Label>Пароль</Label>
          <Input type="password" {...register('password', {
            required: true
          })} />
        <div>
          {errors?.password && <Notice>Обязательное поле</Notice>}
        </div>

        <EnterButton 
          type="submit"
          value='Войти'
          disabled={disabled}
        />
      </Form>
    </div>
  )
}

export default AuthForm