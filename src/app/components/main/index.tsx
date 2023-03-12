import React, { FC } from 'react'
import s from './main.module.css'
import { ReactComponent as eye } from '../../vector/eye.svg'
import { ReactComponent as selector } from '../../vector/selector.svg'
import { ReactComponent as cIcon } from '../../vector/cIcon.svg'
import { data, toggler, canvas } from '../mock-up/mock-up'
import { useAppSelector } from '../../hooks/useAppDispatch'
import Block from './block'
import Toggler from './toggler'
import MyCanvas from './my-canvas'
// import { Blocks } from '../../models/components/BlocksProps'



// interface Itemp extends Array<ItempElement> {};

const Main: FC = () => {
  const { isRuntime }= useAppSelector(state => state.togglerReducer)
  const { blocks }= useAppSelector(state => state.myCanvasReducer)

  // const items = blocks.map(item =>  (
  //   <Block key={item.name} component={item}/>
  // ))

  return (
    <main className={s.main}>
      <div className={`${s.container}`}>
        <div className={`${s.container_field}`}>
          <div className={`${s.sidebar}`}>
            {!isRuntime && data.map(item => (
              <Block key={item.name} component={item}/>
            )) }
          </div>
          <div className={s.right_field}>
            <Toggler component={toggler} icons={[eye, selector]}/>
            {!blocks.length ? 
              <MyCanvas component={canvas} Icon={cIcon}/> 
            : 
            <div className={`${s.sidebar}`}>
              {blocks.map(item => (
                <Block key={item.name} component={item}/>
              )) }
            </div>
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main