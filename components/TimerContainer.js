import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import TimerCard from './TimerCard'
import { v4 as uuidv4 } from 'uuid';;

function TimerContainer({saved}) {
  return (
    <ScrollView style = {styles.container}>
        {saved&&saved.map(
            (item, index) => <TimerCard key = {index} name = {item.name} timer = {item.timer}/>
        )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 8,
    }
})
export default TimerContainer