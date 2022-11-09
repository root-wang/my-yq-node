import React, {FunctionComponent, useContext, useState} from 'react';
import {Client, ClientImpl} from './components/Http/Client'
import {Header} from './components/Header/Header';
import {List} from './components/List/List';
import {Footer} from './components/Footer/Footer';
import {History} from 'history'
import {Login} from './components/Login/Login';

interface appProps {
  history: History
}

const client = new ClientImpl({
  baseURL: 'http://127.0.0.1/api',
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json',
  }
})

export const ClientContext = React.createContext(client);

const App: FunctionComponent<appProps> = function (props) {
  
  const client = useContext(ClientContext)
  
  const [login, changeLogin] = useState<boolean>(client.getLoginState())
  
  const checkLogin = (allowed: boolean, reason: string) => {
    changeLogin(allowed)
    if (reason) {
      console.log(reason)
    }
  }
  
  return (
    <ClientContext.Provider value={client} >
      <div className='container usercenter' >
        <Header {...props}/>
        {
          login ? <List /> : <Login fn={checkLogin} />
        }
        <Footer />
      </div >
    </ClientContext.Provider >
  );
}

export default App;
