import React, { useEffect, useState } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Login, Movies, MovieDetail} from '../pages';
import { colors, nav} from '../assets/styles';
import {View, Text , Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import arrow from '../assets/img/back-arrow.png';
import { doLogout, isAuthenticated } from '../services/auth';

const Stack = createStackNavigator();



const HeaderText: React.FC = () => {
    const navigation = useNavigation();
    
    function handleBack(){
        navigation.goBack();
    }

    return(
            <View style={nav.leftContainer}> 
                {navigation.canGoBack() && 
                    <TouchableOpacity  activeOpacity={0.8} onPress={handleBack}>  
                        <Image source={arrow} style={nav.leftImg}/>
                    </TouchableOpacity> 
                }
                <Text style={nav.leftText}>MovieFlix</Text>
            </View>
        
    );
}

const Logout: React.FC = () => {
    const navigation = useNavigation();
    const [authenticated, setAuthenticated] = useState(false);

    async function authSync() {
        setAuthenticated(await isAuthenticated());
    }

    useEffect(() => {
        authSync();
    }, []); 

    async function handleLogout(){ 
        await doLogout();       
        navigation.navigate("Home");
    }

    return(
        <>
            {
                authenticated &&
                <TouchableOpacity  activeOpacity={0.8} onPress={handleLogout}>
                    <Text style={nav.rightText}>Sair</Text>
                </TouchableOpacity>
            }
        </>
    );
}


const Routes:React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerTitle: " ",
            headerStyle: {
                backgroundColor: colors.yellow,
            },
            headerLeft: () => <HeaderText />,  
            headerRight: () => <Logout />,  
        }}>             
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Movies" component={Movies}/>
            <Stack.Screen name="MovieDetail" component={MovieDetail}/>
        </Stack.Navigator>
    )
}

export default Routes;