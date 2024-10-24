import { NavigationContainer } from '@react-navigation/native';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useState } from 'react';
import HeaderBusca from "../Components/HeaderBusca";

import Home from '../Pages/Home';
import Login from '../Pages/Login';
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
            </Drawer.Navigator>
        </NavigationContainer>
      );
}