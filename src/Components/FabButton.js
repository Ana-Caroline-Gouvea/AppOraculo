import React, { Component } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Animated, PanResponder } from 'react-native';
import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function FabButonTeste(props) {
  const navigation = useNavigation();
  return (
    <FabButton {...props} navigation={navigation} />
  );
}

class FabButton extends Component {
  animation = new Animated.Value(0);
  pan = new Animated.ValueXY(); // Controlando a posição do botão
  open = false;

  constructor(props) {
    super(props);

    // Criando o PanResponder para permitir mover o FAB
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        // Salva a posição atual para evitar que ele volte
        this.pan.setOffset({
          x: this.pan.x._value,
          y: this.pan.y._value,
        });
        this.pan.setValue({ x: 0, y: 0 }); // Reseta os valores animados para começar do zero
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: this.pan.x, dy: this.pan.y }, // Movimentando o botão
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        // Reseta o offset após soltar
        this.pan.flattenOffset();
      },
    });
  }

  toggleMenu = () => {
    const toValue = this.open ? 0 : 1;

    Animated.spring(this.animation, {
      toValue,
      friction: 6,
      useNativeDriver: true,
    }).start();

    this.open = !this.open;
  };

  render() {
    const { navigation } = this.props;

    const chatStyle = {
        transform: [
          { scale: this.animation },
          {
            translateY: this.animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -15], // Aumentando ainda mais a proximidade
            }),
          },
        ],
      };
      
      const trendStyle = {
        transform: [
          { scale: this.animation },
          {
            translateY: this.animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -30], // Aumentando ainda mais a proximidade
            }),
          },
        ],
      };
      
      const newStyle = {
        transform: [
          { scale: this.animation },
          {
            translateY: this.animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -45], // Aumentando ainda mais a proximidade
            }),
          },
        ],
      };
      
      const eventStyle = {
        transform: [
          { scale: this.animation },
          {
            translateY: this.animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -60], // Aumentando ainda mais a proximidade
            }),
          },
        ],
      };
      
      const postStyle = {
        transform: [
          { scale: this.animation },
          {
            translateY: this.animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -75], // Aumentando ainda mais a proximidade
            }),
          },
        ],
      };

    const rotation = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "45deg"],
          }),
        },
      ],
    };

    return (
      <Animated.View
        style={[
          css.Container,
          { transform: this.pan.getTranslateTransform() }, // Aplica a posição no FAB
        ]}
        {...this._panResponder.panHandlers} // Permite arrastar o FAB
      >
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Postagens")}>
          <Animated.View style={[css.button, css.submenu, postStyle]}>
            <MaterialIcons name="post-add" size={26} color="white" />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Eventos")}>
          <Animated.View style={[css.button, css.submenu, eventStyle]}>
            <Ionicons name="today" size={26} color="white" />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Novidades")}>
          <Animated.View style={[css.button, css.submenu, newStyle]}>
            <MaterialCommunityIcons name="new-box" size={26} color="white" />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Mais Comentados")}>
          <Animated.View style={[css.button, css.submenu, trendStyle]}>
            <Ionicons name="trending-up" size={26} color="white" />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Chat")}>
          <Animated.View style={[css.button, css.submenu, chatStyle]}>
            <Ionicons name="chatbox-ellipses" size={26} color="white" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View style={[css.button, css.menu, rotation]}>
            <AntDesign name="plus" size={24} color="white" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </Animated.View>
    );
  }
}

const css = StyleSheet.create({
  Container: {
    position: "absolute",
    bottom: 80,
    right: 20, // Posicionamento inicial (ajustável)
    zIndex: 9999, // Garantir que fique acima de outros componentes
  },
  button: {
    backgroundColor: "#8224AE",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 10,
  },
  submenu: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#8224AE",
  },
  menu: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#8224AE",
  },
});