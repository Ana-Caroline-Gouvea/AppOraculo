import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button, View, Text, StyleSheet,  } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Chat from '../Pages/chat2';
import Regras from '../Pages/Regras';
import Suporte from '../Pages/Suporte';
import HeaderBusca from "../Components/HeaderBusca";
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Cadastro from '../Pages/Cadastro';
import Centraldenuncias from '../Pages/Centraldenuncias';
import Postagem from '../Pages/Postagem';
import Eventos from '../Pages/Eventos';
import MaisComentados from '../Pages/MaisComentados';
import Novidades from '../Pages/Novidades';
import SelecionarComp from '../Components/SelecionarComp';
import FabButonTeste from '../Components/FabButton';
import Selecionar from '../Pages/Selecionar';
import Perfil from '../Pages/Perfil';

function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
  
 
const Drawer = createDrawerNavigator();

export default function Rotas() {

    const {logado} = useContext( AuthContext );
    const [ cadastro, setCadastro ] = useState();

    if ( !logado && !cadastro) {
        return (<Login setCadastro={setCadastro} />)
    }

    if (cadastro && !logado ) {
        return (<Cadastro setCadastro={setCadastro} />)
    }
    
    return (
    
        <NavigationContainer> 
            <Drawer.Navigator 
                initialRouteName="Home"
                screenOptions={{
                    headerTitle: (props) => <HeaderBusca {...props} />,
                    headerStyle: { backgroundColor: 'white', height: 100 }
                }}>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
                <Drawer.Screen name="Regras" component={Regras} />
                <Drawer.Screen name="Central de Denúncias" component={Centraldenuncias} />
                <Drawer.Screen name="Postagens" component={Postagem} />
                <Drawer.Screen name="Novidades" component={Novidades} />
                <Drawer.Screen name="Suporte" component={Suporte} />
                <Drawer.Screen name="Chat" component={Chat} />
                <Drawer.Screen name="Eventos" component={Eventos} />
                <Drawer.Screen name="Mais Comentados" component={MaisComentados} />
                <Drawer.Screen name="Selecionar" component={Selecionar} />
                <Drawer.Screen name='Perfil' component={Perfil} />
            </Drawer.Navigator>
            <FabButonTeste />
        </NavigationContainer>
        
      );
}
const css = StyleSheet.create({
    sumir:{
        display: 'none',
    }
})