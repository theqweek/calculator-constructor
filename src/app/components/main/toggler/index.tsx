import { FC }from 'react'
import s from './toggler.module.css'
import { useAppDispatch, useAppSelector } from '../../../hooks/useAppDispatch'
import {togglerSlice} from '../../../store/reducers/togglerSlice'
import { TogglerProps } from '../../../models/components/TogglerProps'


const Toggler: FC<TogglerProps> = ({ component, icons }) => {
  const { isRuntime } = useAppSelector(state => state.togglerReducer)
  const { revert } = togglerSlice.actions
  const dispatch = useAppDispatch()
  const { name, titles } = component;
  const [ First, Second ] = icons
  

  return (
    <div className={s[name]}>
      <div key={titles[0]} className={isRuntime ? `${s[name + '_item']} ${s[name + '_active']}` : `${s[name + '_item']}`} onClick={(e) => dispatch(revert(titles[0])) }>
        <First stroke={isRuntime ? '#5D5FEF' : '#4D5562'}/>
        <div className={`${s[name + '_text']}`}>{titles[0]}</div>
      </div>
      <div key={titles[1]} className={!isRuntime ? `${s[name + '_item']} ${s[name + '_active']}` : `${s[name + '_item']}`} onClick={(e) => dispatch(revert(titles[1])) }>
        <Second stroke={isRuntime ? '#4D5562' : '#5D5FEF'} />
        <div className={`${s[name + '_text']}`}>{titles[1]}</div>
      </div>
    </div>
  )
}

export default Toggler