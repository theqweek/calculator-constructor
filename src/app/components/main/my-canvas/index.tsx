import  { FC } from 'react'
import { MyCanvasProps } from '../../../models/components/MyCanvasProps';
import s from './my-canvas.module.css'

const MyCanvas: FC<MyCanvasProps> = ({ component, Icon }) => {
  const { name, data } = component;
  return (
    <div className={s[name]}>
      <div className={s[name + '_info']}>
        <Icon />
        <div className={s[name + '_giga']}>{data[0]}</div>
        <div className={s[name + '_text']}>{data[1]}</div>
      </div>
    </div>
  )
}

export default MyCanvas