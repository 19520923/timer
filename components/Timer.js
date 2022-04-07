import React from 'react'
import {Text, View, StyleSheet} from 'react-native'


function Timer({timer, list}) {

  return (
    <View style = {styles.container}>
        <Text style = {styles.text}>
            {timer}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 90,
        marginBottom: 16,
    },
    text: {
        fontSize: 80,
        fontWeight: 'bold',
    }
    
})

export default Timer