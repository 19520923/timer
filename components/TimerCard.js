import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

function TimerCard(props) {

    const formatTime = (timer) => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
    
        return `${getHours}:${getMinutes}:${getSeconds}`
      }
  return (
    <>
        <View style = {styles.container}>
            <View style = {styles.name_container}>
                <AntDesign name='flag' size={28} color="black" />
                <Text style = {styles.text}>
                    {' ' + props.name}
                </Text>
            </View>
            <Text style = {styles.text}>
                {formatTime(props.timer)}
            </Text>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container : {
        marginTop: 4,
        marginBottom: 4,
        padding: 8,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    name_container: {
        flexDirection: 'row',
        alignItems: 'center'
    }
    ,
    text: {
        fontSize: 28,
    }
})

export default TimerCard