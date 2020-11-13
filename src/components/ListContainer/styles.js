import { StyleSheet } from 'react-native'
import Constants  from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: Constants.statusBarHeight + 10,
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
        paddingTop: 20
    }
});