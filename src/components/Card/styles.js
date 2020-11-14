import { StyleSheet } from 'react-native'
import Constants  from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        marginVertical: 10,
        borderRadius: 10,
        elevation: 2,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { height: 0, width: 0 },
        shadowRadius: 5,
        shadowOpacity: 0.2,
    }
});