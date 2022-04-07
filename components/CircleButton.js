import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

function CircleButton(props) {

  return (
    <View style={styles.container} >
      <TouchableOpacity
        onPress={props.onClick}
        style={styles.button}
        disabled = {props.disabled}>
        <AntDesign name={props.name} size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    button: {
      width: 64,
      height: 64,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'black',
      marginRight: 16,
      marginLeft: 16
    },
})

export default CircleButton