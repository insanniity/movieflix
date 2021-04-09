import React from 'react';
import {Text, View , Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../../assets/styles';
import arrow from '../../assets/img/next-arrow.png';

interface ButtonProps{
    text: string;
    action: Function;
    icon: boolean;
}

const Button : React.FC<ButtonProps> = ({text, action, icon}) => {    
    return (
        <TouchableOpacity style={theme.buttonPrimary} activeOpacity={0.8} onPress={() => {action()}}>
            <Text style={theme.buttonPrimaryText}>
                {text}
            </Text>
            {icon && <View style={theme.buttonPrimaryIcon}>
                <Image source={arrow} />
            </View> }
        </TouchableOpacity>
    )
}

export default Button;