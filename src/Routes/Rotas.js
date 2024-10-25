import { NavigationContainer } from '@react-navigation/native';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Header from '../Components/HeaderOraculo'
import Chat from '../Pages/chat2'
import Regras from '../Pages/Regras';

import HeaderBusca from "../Components/HeaderBusca";

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Cadastro from '../Pages/Cadastro';
import Novidades from '../Pages/Novidades';
import Cadastro from "../Pages/Cadastro";
import Genero from "../Pages/Genero"
import Centraldenuncias from '../Pages/Centraldenuncias'
import Novidades from '../Pages/Novidades'
import Postagem from '../Pages/Postagem';
function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
  

const Drawer = createDrawerNavigator();

export default function Rotas() {


    const [logado, setLogado] = useState(false);
    const [cadastro, setCadastro] = useState(false);

    if (logado == false && cadastro == false ) {
        return (<Login setCadastro={setCadastro} setLogado={setLogado} />)
    }

    if (cadastro && logado == false ) {
        return (<Cadastro setCadastro={setCadastro} setLogado={setLogado} />)
    }

    return (
        <NavigationContainer> 
            <Drawer.Navigator 
                initialRouteName="Home"
                screenOptions={{
                    headerTitle: (props) => <HeaderBusca {...props} />,
                    headerStyle: { backgroundColor: 'white', height: 100 }
                }}               
            >
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
                <Drawer.Screen name="Regras" component={Regras} />
                <Drawer.Screen name="Central de Denúncias" component={Centraldenuncias} />
                <Drawer.Screen name="Postagens" component={Postagem} />
                <Drawer.Screen name="Novidades" component={Novidades} />
                <Drawer.Screen name="Chat" component={Chat} />
            </Drawer.Navigator>
        </NavigationContainer>
      );
}