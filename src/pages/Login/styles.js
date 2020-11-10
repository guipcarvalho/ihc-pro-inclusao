import { StyleSheet } from 'react-native'
import Constants  from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#D32F2F',
    },
    header: {
        flex: 1,
        backgroundColor: '#D32F2F',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    headerTitle: {
        color: 'white',
        fontSize: 25,
    },
    content: {
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingBottom: 30,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { height: -10, width: 0 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        paddingTop: 30
    },
    login: {
        backgroundColor: '#D32F2F',
        padding: 20,
        width: "80%",
        alignItems: 'center',
        borderRadius: 30,
        margin: 10
    },
    loginText: {
        color: 'white'
    },
    registration: {
        padding: 20,
        width: "80%",
        alignItems: 'center',
        borderRadius: 30,
        margin: 10,
        borderWidth: 1,
        borderColor: '#D32F2F'
    },
    registrationText: {
        color: '#D32F2F'
    },
})