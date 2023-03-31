import  { FC } from 'react'
import { useAppSelector } from '../../../hooks/useAppDispatch';
import { MyCanvasProps } from '../../../models/components/MyCanvasProps';
import s from './my-canvas.module.css'

const MyCanvas: FC<MyCanvasProps> = ({ component, Icon, fns }) => {
  const {
    dragOverHandler,
    dragLeaveHandler,
    dragStartHandler,
    dragEndHandler,
    dropHandler,
    dropCard
  } = fns
  const { boards } = useAppSelector(state => state.myCanvasReducer)
  const { name, data } = component;
  return (
    <div 
      className={s[name]} 
      
      onDragOver={e => dragOverHandler(e)}
      onDragLeave={e => dragLeaveHandler(e)}
      onDragEnd={e => dragEndHandler(e)}
      onDrop={e => dropCard(e, boards[1])}
    >
      <div className={s[name + '_info']}>
        <Icon />
        <div className={s[name + '_giga']}>{data[0]}</div>
        <div className={s[name + '_text']}>{data[1]}</div>
      </div>
    </div>
  )
}

export default MyCanvas