import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, TextInput, View,  } from 'react-native'

export default function header(){
    return(
        <View style={css.Header}>
            
            <View style={css.icone}>
                <TextInput></TextInput>
            </View>
        </View>
    )
}
const css = StyleSheet.create({
    Header:{
        backgroundColor: "#FFFF",
        width: '100%',
        height: 100,
    }
})