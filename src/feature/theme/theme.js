import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {changeTextColor} from "./themeSlice"
 function Theme() {
  const [color, setColor] = useState('white')
  const dispatch=useDispatch()
  return (
    <div>
      <input type="text" onChange={(e) => setColor(e.target.value)} />
      <button
        onClick={() => {
          dispatch(changeTextColor(color))
        }}
      >
        change color of text
      </button>
    </div>
  )
}

export { Theme }
