import React, { FC } from 'react'
import { FunctionDeclaration } from 'typescript';
import { useAppSelector } from '../../../hooks/useAppDispatch';
import { IBlock } from '../../../models/components/BlocksProps'
import { BoardProps } from '../../../models/components/BoardProps';
import Block from '../block'
import s from './board.module.css'


const Board: FC<BoardProps> = ({ board, fns, curBlock }) => {
  const { isRuntime } = useAppSelector(state => state.togglerReducer)
  const { 
    dragOverHandler,
    dragLeaveHandler,
    dragEndHandler,
    dropHandler } = fns;

  return (
    
    <div 
      className={`${s.sidebar}`}
      onDragOver={e => dragOverHandler(e)}
      onDragLeave={e => dragLeaveHandler(e)}
      onDrop={e => dropHandler(e, board, curBlock)}
      onDragEnd={e => dragEndHandler(e)}
    >
      {(!isRuntime || board.side === 'right') && board.blocks.map(block => (
        <Block key={block.name} component={block} fns={fns} board={board}/>
      )) }
    </div>
  )
}

export default Board