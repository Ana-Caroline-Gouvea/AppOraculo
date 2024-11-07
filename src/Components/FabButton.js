import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Animated } from 'react-native';
import { AntDesign, Entypo, Ionicons,  MaterialCommunityIcons, MaterialIcons   } from '@expo/vector-icons'

export default class FabButton extends Component{

    animation = new Animated.Value(0);
    toggleMenu = () =>  {
        const toValue = this.open ? 0 : 1

        Animated.spring(this.animation, {
            toValue,
            friction: 6,
            useNativeDriver: true,
        }).start()

        this.open = !this.open;
    }



    render(){

        const chatStyle ={
            transform:[
                { scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -70]
                    })
                }
            ]
        }

        const trendStyle ={
            transform:[
                { scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -140]
                    })
                }
            ]
        }

        const newStyle ={
            transform:[
                { scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -210]
                    })
                }
            ]
        }

        const eventStyle ={
            transform:[
                { scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -280]
                    })
                }
            ]
        }

        const postStyle ={
            transform:[
                { scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -350]
                    })
                }
            ]
        }


        const rotation = {
            transform:[
                {
                    rotate: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "45deg"]
                    })
                }
            ]
        }
        return (
            <View style={[css.Container, this.props.style]}>
                <TouchableWithoutFeedback>
                    <Animated.View style={[css.button, css.submenu, postStyle]}>
                    <MaterialIcons name="post-add" size={26} color="white" />
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Animated.View style={[css.button, css.submenu, eventStyle]}>
                    <Ionicons name="today" size={26} color="white" />
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Animated.View style={[css.button, css.submenu, newStyle]}>
                    <MaterialCommunityIcons name="new-box" size={26} color="white" />
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Animated.View style={[css.button, css.submenu, trendStyle]}>
                    <Ionicons name="trending-up" size={26} color="white" />
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Animated.View style={[css.button, css.submenu, chatStyle]}>
                    <Ionicons name="chatbox-ellipses" size={26} color="white" />
                    </Animated.View>
                </TouchableWithoutFeedback>


                <TouchableWithoutFeedback onPress={this.toggleMenu}>
                    <Animated.View style={[css.button, css.menu, rotation]}>
                        <AntDesign name="plus" size={24} color="white"></AntDesign>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}
const css = StyleSheet.create({
    Container:{
      
        alignItems:'center',
        position: 'absolute',
        bottom: 80,
        marginLeft: 350,
    },
    button:{
        backgroundColor: "#8224AE",
        width: 60,
        height: 60,
        position: 'absolute',
        borderRadius: 60 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 10,
    },
    submenu:{
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: '#8224AE'
    }
})