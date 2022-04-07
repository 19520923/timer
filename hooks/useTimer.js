import { useState, useRef } from 'react'

export default useTimer = (initialState = 0) => {
    const [timer, setTimer] = useState(initialState)
    const [isActive, setIsActive] = useState(false)
    const [isPause, setIsPaused] = useState(false)
    const [list, setList] = useState([])
    const countRef = useRef(null)
  
    const handleStart = () => {
      setIsActive(true)
      countRef.current = setInterval(() => {
        setTimer((timer) => timer + 1)
      }, 1000)
    }
  
    const handleReset = () => {
      clearInterval(countRef.current)
      setIsActive(false)
      setTimer(0)
      setIsPaused(false)
      setList([])
    }

    const handlePause = () => {
        clearInterval(countRef.current)
        setIsPaused(true)
      }
    
      const handleResume = () => {
        setIsPaused(false)
        countRef.current = setInterval(() => {
          setTimer((timer) => timer + 1)
        }, 1000)
      }

    const handleSave = () => {
        const l = [{name: `0${list.length + 1}`.slice(-2), timer: timer}, ...list]
        setList(l)
    }
  
    return { timer, isActive,list,isPause, handleStart, handleReset, handleSave, handlePause, handleResume }
  }