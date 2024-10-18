import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';

import Cadastro from '../Pages/Cadastro';
import Login from '../Pages/Login';

const Tab = createBottomTabNavigator();

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
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#191919',
                    },
                    tabBarActiveTintColor: "white"
                }}
            >
                <Tab.Screen
                    name="Login"
                    component={Login}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="camera" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}