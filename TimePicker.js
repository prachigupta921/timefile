import { useState, useRef } from 'react'

const Timer = () => {
 let time= new Date().toLocaleTimeString();
 const [ctime,setCtime]=useState(time);
  const [mouseEntered, setMouseEntered] = useState(false);
  let timer = useRef(null)

  timer.current = setTimeout(() => {
      if (mouseEntered) return
      time= new Date().toLocaleTimeString();
      setCtime(time)
  }, 100);


  const mouseEnterHandler = () => {
      setMouseEntered(true);
  }

  const mouseLeaveHandler = () => {
      setMouseEntered(false)
  }

  return (
      <div 
        onMouseEnter={mouseEnterHandler} 
        onMouseLeave={mouseLeaveHandler} 
      >
        {ctime}
      </div>
  )
}

export default Timer


