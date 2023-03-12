import React, { FC }from 'react'
import { useAppSelector } from '../../../hooks/useAppDispatch';
import { BlockProps } from '../../../models/components/BlocksProps';
import s from './block.module.css'

const Block: FC<BlockProps> = ({ component }) => {
  const { name, data } = component;
  const { isRuntime } = useAppSelector(state => state.togglerReducer)

  const dragOverHandler = (e: any) => {
    e.preventDefault();
    if (e.target.className == s[name]) {
      e.target.style.boxShadow = '0 2px 3px gray'
    }
  }
  const dragLeaveHandler = (e: any) => {
    e.target.style.boxShadow = 'none'
  }
  const dragStartHandler = (e: any) => {

  }
  const dragEndHandler = (e: any) => {
    e.target.style.boxShadow = 'none'
  }
  const dropHandler = (e: any) => {
    
  }
  
  return (
    <div 
      className={s[name]} 
      draggable={true}
      onDragOver={e => dragOverHandler(e)}
      onDragLeave={e => dragLeaveHandler(e)}
      onDragStart={e => dragStartHandler(e)}
      onDragEnd={e => dragEndHandler(e)}
      onDrop={e => dropHandler(e)}
    >
      {data.map(item => (
        <div 
          key={item} 
          className={item === 0 && name === 'digital' ? `${s[name + '_item']} ${s[name + '_big']}` : `${s[name + '_item']}`}  
        >
          <div className={`${s[name + '_text']}`}>
            {item}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Block