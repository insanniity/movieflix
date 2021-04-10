import { StyleSheet } from 'react-native';

//Colors
const colors = {
    yellow: "#FFC700",
    darkYellow: "#927c1d",
    gray: "#525252",
    white: "#FEFEFE",
    mediumGray: "#6C6C6C",
    lightGray: "#9E9E9E",
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
    },
    inputContainer:{
        width: '100%',
        height: 80,
        backgroundColor: colors.mediumGray,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,        
        //elevation: 5,
    },
    inputSearch:{
        width: '90%',
        height:50,
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 10,
        color: colors.white,
        padding: 12,
    },      
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
});

//NavBar
const nav = StyleSheet.create({
    leftContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
    },
    leftImg:{

    },
    leftText: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,
        marginLeft: 10,       
    },
    rightText: { 
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
        color: colors.black,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: colors.black,
        borderRadius: 10,
        marginRight: 20,
        paddingVertical: 5,
        paddingHorizontal: 25,
        textTransform: 'uppercase',
    },
});

// Login Page
const login = StyleSheet.create({
    card:{
        width: '100%',
        height: '100%',         
        alignItems: 'center',
        paddingHorizontal: 20,       
    },
    title:{
        fontWeight:'normal',
        fontSize: 30,
        lineHeight: 40,
        marginTop: 100,
        textAlign: 'center',
        color: colors.white,
        textTransform: 'uppercase',
    },
    txtInput:{
        width: 330,
        height: 50,
        borderWidth: 1,
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10, 
        marginTop: 35,
    },
    formContainer:{
        width: '100%',
    },
    buttonContainer:{
        marginTop: 35, 
    },
    passwordContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',         
    },
    eyes:{
        width: 35,
        height: 40,        
    },
    toggle:{
        
        marginLeft: -50, 
        marginTop: 35,      
    },
});

//Movies Page
const moviesPage = StyleSheet.create({
    container:{
        width: "100%",                
        backgroundColor: colors.gray,
        padding: 20,        
    },
});


//Movie Card
const movieCard = StyleSheet.create({
    card:{
        width: '100%',
        height: 405,
        marginTop:20,                      
        backgroundColor: colors.mediumGray,
        paddingTop: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 10,
    },
    cardImage:{
        width: '100%',
        height: 230,
    },
    textContainer:{
        paddingHorizontal: 20,
    },
    cardTitle:{
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,
        color: colors.white,
    },
    cardYear:{
        color: colors.yellow,
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 19,
    },
    cardSubTitle:{
        marginTop: 5,
        color: colors.lightGray,
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 22,
    },
    viewDetailButton:{
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 10, 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,      
    },
    viewDetailButtonText:{
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    }
});


//Movie Details
const movieDetail = StyleSheet.create({
    card:{
        width: '100%',        
        marginTop:20,                      
        backgroundColor: colors.mediumGray,
        paddingVertical: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 10,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 35,
        marginBottom: 15,
        paddingHorizontal: 25,
        color: colors.white,
    },
    txtContainer:{
        paddingHorizontal: 25,
        marginTop: 15,
    },
    year: {
        color: colors.yellow,
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 33,
    },
    subtitle:{
        color: colors.lightGray,
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 25,
    },
    descriptionTitle:{
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 22,
        lineHeight: 30,
        marginTop: 15,
    },
    description:{
        borderWidth: 1,
        borderColor: colors.lightGray,
        borderRadius: 20,
        padding: 15,
        color: colors.lightGray,
        fontSize: 16,
        lineHeight: 22,
        marginTop: 10,
    },
    avaliation:{
        paddingVertical: 15,
        paddingHorizontal: 20,       
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtArea:{
        width: '100%',
        height: 100,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: colors.white,
        borderRadius: 10,
        color: colors.lightGray,
        marginBottom: 15,
        fontSize: 16,
        lineHeight: 22,       
    },
    avaliationsContainer:{
        paddingHorizontal: 20,
    },
    avaliationsTitle:{
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 22,
        lineHeight: 30,
        marginBottom: 15,
    },
    userAvaliation:{
        width: '100%',
        marginBottom: 20,
    },
    userAvaliationNameContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    userStar:{
        marginLeft: 15,
        marginRight: 15,
    },
    userAvaliationName:{
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 27,        
    },
    userAvaliationComent:{
        color: colors.lightGray,
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 22,
        textAlign: 'justify',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: colors.white,
        marginTop: 5, 
    },
    
});




export {colors, theme, home, nav, login, moviesPage , movieCard, movieDetail}

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