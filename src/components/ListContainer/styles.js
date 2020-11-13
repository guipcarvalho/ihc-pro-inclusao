import { StyleSheet } from 'react-native'
import Constants  from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: Constants.statusBarHeight + 5,
        alignItems: 'center',
    },
    logo: {
        width: 80,
        height: 40,
        resizeMode: 'contain'
    },
    pageTitle: {
        fontSize: 25,
        fontWeight: "500"
    },
    list: {
        flex: 1,
        alignSelf: 'stretch',
        paddingHorizontal: 10,
        paddingTop: 15
    },
    searchBox: {
        height: 40,
        alignSelf: 'stretch',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginTop: 10,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    searchInput: {
        flex: 1,
        marginLeft: 10
    },
    searchButton: {
        justifyContent: 'center'
    },
    plusButton: {
        position: "absolute",
        height: 60,
        width: 60,
        backgroundColor: '#D32F2F',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 30,
        right: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { height: 5, width: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.4,
    }
});