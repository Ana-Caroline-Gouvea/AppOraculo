import React, { useState } from 'react'
import { StyleSheet, Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function IconButton() {

        const [isPressed, setIsPressd] = useState(false);
    
        const handlePress = () => {
            setIsPressd(!isPressed);
        }

  return (
    <Pressable onPress={handlePress}>
        <MaterialCommunityIcons name="cards-heart" style={css.Icon} color={isPressed ? 'red' : 'black'} />
    </Pressable>
  )
}
const css = StyleSheet.create({
    Icon:{
        fontSize: 35
    }
})
