import React, { FC, useRef, DragEvent, useState }from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/useAppDispatch';
import { BlockProps, IBlock } from '../../../models/components/BlocksProps';
import {myCanvasSlice} from '../../../store/reducers/myCanvasSlice';
import s from './block.module.css'

const Block: FC<BlockProps> = ({ component, fns, board }) => {
  const { id, name, data } = component;
  const {
    dragOverHandler,
    dragLeaveHandler,
    dragStartHandler,
    dragEndHandler,
    dropHandler,
    dropCard} = fns;

  const { isRuntime } = useAppSelector(state => state.togglerReducer)
  const { remove } = myCanvasSlice.actions
  const dispatch = useAppDispatch();
  const workplaceRef = useRef(null)
  
  return (
    <div 
      className={s[name]} 
      draggable={true}
      onDragOver={e => dragOverHandler(e)}
      onDragLeave={e => dragLeaveHandler(e)}
      onDragStart={e => dragStartHandler(e, board, component)}
      onDragEnd={e => dragEndHandler(e)}
      onDrop={e => dropHandler(e, board, component)}
      onDoubleClick={() => dispatch(remove(id))}
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