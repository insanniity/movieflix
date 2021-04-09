import { StyleSheet } from 'react-native';

//Colors
const colors = {
    yellow: "#FFC700",
    darkYellow: "#927c1d",
    gray: "#525252",
    white: "#FEFEFE",
    mediumGray: "#6C6C6C",
    lightGray: "#CDCDCD%",
    black: "#000000"
}

//App Global Theme
const theme = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.gray,
        padding: 20,
    },
    card: {
        width: '100%',
        height: '100%',         
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    buttonPrimary:{
        width: 330,
        height: 50,
        backgroundColor: colors.yellow,
        borderRadius: 10,
        flexDirection: 'row',        
        alignItems: 'center',
        justifyContent: 'center',                 
    },
    buttonPrimaryText:{       
        width: '100%',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 22,
        textAlign: 'center',
        color: colors.black,
        textTransform: 'uppercase',
        
    },
    buttonPrimaryIcon:{
        width: '15%',
        height: '100%',
        backgroundColor: colors.darkYellow,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
    }    
});


//Home
const home = StyleSheet.create({
    draw:{
        width: 340,
        height: 250,       
    },
    titleContainer:{},
    title:{
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 35,
        textAlign: 'center',
        color: colors.white,
    },
    subtitleContainer: {},
    subtitle:{
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 22,
        textAlign: 'center',
        color: colors.white,
    },
    buttonContainer:{},    
})


export {colors, theme, home};

/*
shadow: {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    }
*/