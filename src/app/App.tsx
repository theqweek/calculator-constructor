import React, { FC } from 'react';
import s from './App.module.css'

type Props = {
  title: string;
}

const App: FC<Props> = ({ title }) => {
  return (
    <div className={s.App}>
      <h1 className={s.title}>{title}</h1>
    </div>
  )
}

export default App;
