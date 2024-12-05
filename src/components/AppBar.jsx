import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#24292e'
    },
    containerText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '600',
        padding: 20,
    }
})

const AppBar = () => {
    return <View style={styles.container}><Text style={styles.containerText}>Repositories</Text></View>
}

export default AppBar