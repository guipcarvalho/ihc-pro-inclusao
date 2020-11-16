import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        alignSelf: 'stretch',
        paddingBottom: 20
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
    headerText: {
        marginVertical: 15,
        fontSize: 15
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
    qtdContainer: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center'
    },
    qtdText: {
        color: '#ccc',
        marginHorizontal: 15
    },
    infoContainer: {
        alignSelf: 'stretch',
        marginHorizontal: 15,
        marginTop: 20,
        marginBottom: 15
    },
    infoHeaderText: {
        fontSize: 25,
        fontWeight: '600',
        marginBottom: 5
    },
    infoName: {
        fontSize: 18,
        marginBottom: 3
    },
    secondaryText: {
        fontSize: 15,
        fontWeight: '300',
        color: '#555',
        marginVertical: 3
    }
});