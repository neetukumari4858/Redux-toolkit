import { useSelector } from "react-redux"

function Coin() {
    const coin=useSelector((state)=>state.counter.count)
    const themeTextColor=useSelector((state)=>state.theme.color)
  return (
    <div className="coin cointop" style={{color:themeTextColor}}>Coin:{coin}</div>
  )
}

export {Coin}