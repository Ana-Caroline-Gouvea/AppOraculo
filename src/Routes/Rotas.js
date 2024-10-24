import { NavigationContainer } from '@react-navigation/native';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Header from '../Components/HeaderOraculo'
import { useState } from 'react';
import Regras from '../Pages/Regras';

import HeaderBusca from "../Components/HeaderBusca";

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Centraldenuncias from '../Pages/Centraldenuncias';
import Cadastro from '../Pages/Cadastro';
function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
  

const Drawer = createDrawerNavigator();

export default function Rotas() {


    const [logado, setLogado] = useState(true);
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
                
                <Drawer.Screen name="Novidades" component={Novidades} />
            </Drawer.Navigator>
        </NavigationContainer>
      );
}