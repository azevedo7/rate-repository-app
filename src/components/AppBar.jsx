import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#24292e'
    }
})

const AppBar = () => {
    return <View style={styles.container}><Text>Repositories</Text></View>
}

export default AppBar