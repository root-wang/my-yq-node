import React, {ChangeEvent, FunctionComponent, useContext, useState} from 'react';
import {ClientContext} from '../../App';
import './Login.css'

enum USERINFO {
  USERNAME = 'username',
  PASSWORD = 'password'
}

export const Login: FunctionComponent<{ fn: (allowed: boolean, reason: string) => void }> = function (props) {
  
  const [username, setUsername] = useState('请输入用户名')
  const [password, setPassword] = useState('')
  
  const saveUserInf = (type: USERINFO) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      const {value} = e.target;
      type === USERINFO.USERNAME ? setUsername(value) : setPassword(value)
    }
  }
  
  const client = useContext(ClientContext);
  
  async function login() {
    try {
      await client.post('/user', JSON.stringify({
        username,
        password
      })).then((value: any) => {
          const {
                  allowed,
                  reason = ''
                } = value.data;
          client.loginChecked(allowed)
          props.fn(allowed, reason)
        }
      );
    } catch (e) {
      console.error(e)
    }
  }
  
  return (
    <>
      <div className={'login-input'} >
        <div >
          <input placeholder='请输入用户名'
                 size={25}
                 type='text'
                 onChange={saveUserInf(USERINFO.USERNAME)}
                 autoComplete={'false'}
          /><span ></span >
        </div >
      </div >
      
      <div className={'login-input'} >
        <div >
          <input placeholder='请输入登录密码'
                 type='password'
                 size={25}
                 onChange={saveUserInf(USERINFO.PASSWORD)}
                 autoComplete={'false'}
          /><span ></span >
        </div >
      </div >
      
      <div
        className={'login-button'}
      >
        <input
          onClick={login}
          type='submit'
          value='登录' />
      </div >
    </>
  )
  
  
}