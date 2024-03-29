import React, { FC, useState } from 'react'
import s from './main.module.css'
import { ReactComponent as eye } from '../../vector/eye.svg'
import { ReactComponent as selector } from '../../vector/selector.svg'
import { ReactComponent as cIcon } from '../../vector/cIcon.svg'
import { data, toggler, canvas } from '../mock-up/mock-up'
import { useAppDispatch, useAppSelector } from '../../hooks/useAppDispatch'
import Block from './block'
import Toggler from './toggler'
import MyCanvas from './my-canvas'
import Board from './board'
import { IBlock } from '../../models/components/BlocksProps'
import { myCanvasSlice } from '../../store/reducers/myCanvasSlice'
import { IBoard } from '../../models/components/BoardProps'
// import { Blocks } from '../../models/components/BlocksProps'



// interface Itemp extends Array<ItempElement> {};

const Main: FC = () => {
  const { isRuntime } = useAppSelector(state => state.togglerReducer)
  const { boards } = useAppSelector(state => state.myCanvasReducer)
  const { addFirst, replace } = myCanvasSlice.actions
  const dispatch = useAppDispatch();
  const [curBlock, setCurBlock] = useState<IBlock | null>(null)
  const [curBoard, setCurBoard] = useState<IBoard | null>(null)

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()

    if (e.currentTarget.className.includes('block')) {
      e.currentTarget.style.boxShadow = '0px 4px 0px -2px #5D5FEF'
    }

    if ((e.target as Element).className.includes('my-canvas')) {
      e.currentTarget.style.background = '#F0F9FF'
    }
    
    // const coincidence = (el) => {
    //   return el === e.currentTarget.className
    // }
    // if (currentItem.mainClass !== 'display') {
    //     e.currentTarget.style.boxShadow = '0px 7px 0px -2px #5D5FEF'
    //   }
    // }
    }
  
  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.style.boxShadow = 'none';
    console.log(e.currentTarget);
    //(e.target as HTMLElement).style.background = '#FFFFFF'
  }
  
  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, board: IBoard, block: IBlock) => {
    setCurBoard(board)
    setCurBlock(block)
  }
  const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
    //e.target.style.boxShadow = 'none'
    e.currentTarget.style.boxShadow = 'none'
    console.log(e.currentTarget.className);
  }

  const dropHandler = (e: React.DragEvent<HTMLDivElement>, board: IBoard, block: IBlock) => {
    e.preventDefault();
    e.stopPropagation()
    e.currentTarget.style.boxShadow = 'none'
    console.log(e.detail);

    dispatch(replace([curBoard as IBoard, board, curBlock as IBlock, block]))
  }

  const dropCard = (e: React.DragEvent<HTMLDivElement>, board: IBoard) => {
    console.log(e.detail);
    
    e.currentTarget.style.boxShadow = '0px 2px 4px rgb(0 0 0 / 6%), 0px 4px 6px rgb(0 0 0 / 10%);'
    dispatch(addFirst([board, curBlock as IBlock]))
  }

  const fns = {
    dragOverHandler,
    dragLeaveHandler,
    dragStartHandler,
    dragEndHandler,
    dropHandler,
    dropCard
  }

  return (
    <main className={s.main}>
      <div className={`${s.container}`}>
        <div className={`${s.container_field}`}>
          {boards.map(board => (
            <div className={s.right_field}>
              {board.side === 'right' ? <>
                <Toggler component={toggler} icons={[eye, selector]}/>
              {!board.blocks.length ? <MyCanvas component={canvas} Icon={cIcon} fns={fns}/> : <Board board={board} fns={fns} curBlock={curBlock as IBlock} />}
              </>
              : <Board board={board} fns={fns} curBlock={curBlock as IBlock}/>}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Main