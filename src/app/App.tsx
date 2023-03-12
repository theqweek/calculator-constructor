import React, { FC } from 'react';
import s from './App.module.css'
import Header from './components/header';
import Main from './components/main';

type Props = {
  title: string
}

const App: FC<Props> = ({ title }) => {
  return (
    <div className={s.App}>
      <Header title={title}/>
      <Main />
    </div>
  )
}

export default App;
