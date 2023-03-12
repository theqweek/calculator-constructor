import React, { FC } from 'react'
import s from './header.module.css'

type HeaderProps = {
  title: string
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header className={s.header}>
      <h1 className={s.title}>{title}</h1>
    </header>
  )
}

export default Header