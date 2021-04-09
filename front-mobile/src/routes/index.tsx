import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Login, Movies, MovieDetail} from '../pages';


const Stack = createStackNavigator();


const Routes:React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen  name="Home" component={Home}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Movies" component={Movies}/>
            <Stack.Screen name="MovieDetail" component={MovieDetail}/>
        </Stack.Navigator>
    )
}

export default Routes;