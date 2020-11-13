import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginTop: 10,
        paddingBottom: 20,
        paddingHorizontal: 20
    },
    field: { 
        height: 50, 
        borderColor: '#c4c4c4', 
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 8,
        borderRadius: 5,
        paddingLeft: 10,
        alignSelf: 'stretch'
    },
    register: {
        backgroundColor: '#D32F2F',
        padding: 15,
        width: "80%",
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 10
    },
    registerText: {
        color: 'white',
        fontSize: 15
    },
    cancel: {
        padding: 15,
        width: "80%",
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: '#D32F2F'
    },
    cancelText: {
        color: '#D32F2F',
        fontSize: 15
    },
});