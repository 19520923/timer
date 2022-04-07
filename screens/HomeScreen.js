import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CircleButton from '../components/CircleButton'
import Timer from '../components/Timer'
import TimerContainer from '../components/TimerContainer'
import useTimer from '../hooks/useTimer'

function HomeScreen() {

const { timer, isActive , isPause,list, handleStart, handleReset, handleSave, handlePause, handleResume } = useTimer(0)
const formatTime = (timer) => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours}:${getMinutes}:${getSeconds}`
  }

  return (
      <>
      <View style={styles.root}>
            <Timer list = {list} timer = {formatTime(timer)}/>
            <TimerContainer saved = {list}/>
        </View>
            <View style = {styles.actions}>
                {!isActive ? <CircleButton name = 'caretright' onClick = {handleStart}/>:
                (!isPause ?
                <>
                    <CircleButton name = 'flag' onClick = {handleSave}/>
                    <CircleButton name = 'pause' onClick = {handlePause}/>
                </>:     
                <>
                    <CircleButton name = 'retweet' onClick = {handleReset}/>
                    <CircleButton name = 'caretright' onClick = {handleResume}/>
                </>)}
            </View>
      </>
     
  )
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    actions : {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        margin: 16
    },
})

export default HomeScreen