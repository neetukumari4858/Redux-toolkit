import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,incrementByAmount } from './counterSlice';
const Counter=()=>{
  const dispatch=useDispatch();
  const themeTextColor=useSelector((state)=>state.theme.color)
  const count =useSelector((state)=>state.counter.count)
  console.log(count);

  return (
    <div className='outer-container'>
    <h1>Counter</h1>
        <button className='btn' onClick={()=>{dispatch(increment())}}>+</button>
        <span className='count-Text' style={{color:themeTextColor}} >Count:{count}</span>
        <button className='btn' onClick={()=>{dispatch(decrement())}}>-</button>
        <button className='btn increament10' onClick={()=>{dispatch( incrementByAmount(10))}}>Increment By Amount 10</button>
    </div>
  )
}

export  {Counter}