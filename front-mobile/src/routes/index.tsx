import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Login, Movies, MovieDetail} from '../pages';
import { colors, nav} from '../assets/styles';
import {View, Text , Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import arrow from '../assets/img/back-arrow.png';

const Stack = createStackNavigator();

const HeaderText: React.FC = () => {
    return(
        <View style={nav.leftContainer}>  
            <Image source={arrow} style={nav.leftImg}/>
            <Text style={nav.leftText}>MovieFlix</Text>
        </View>
    );
}

const Logout: React.FC = () => {
    return(
        <TouchableOpacity  activeOpacity={0.8} onPress={() => {}}>
            <Text style={nav.rightText}>Sair</Text>
        </TouchableOpacity>
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