import { View, Text, StyleSheet, Image } from 'react-native'

const styles = StyleSheet.create({
    repository: {
        padding: 20,
        backgroundColor: '#FFFFFF'
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 5,
    },
    flexRow: {
        flex: 1,
        flexDirection: 'row',
        gap: 20
    },
    flexCol: {
        flex: 1,
        flexDirection: 'column',
        gap: 6
    },
    fullName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    secondaryText: {
        fontWeight: '400',
        fontSize: 14,
        color: '#707070'
    },
    tag: {
        width: 'auto',
        alignSelf: 'flex-start',
        padding: 6,
        borderRadius: 4,
        backgroundColor: '#0070FF',
        color: '#FFFFFF',
    },
    valueItems: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
    },
    itemValue: {
        fontWeight: '700',
        fontSize: 16,
    },
    itemName: {
        fontWeight: '500',
        color: '#555555'
    },
    values: {
        paddingTop: 20,
        justifyContent: 'space-evenly',
    },
})

const Item = ({ item }) => (
    <View style={styles.repository}>
        <View style={styles.flexRow}>
            <View><Image style={styles.avatar} source={{uri: item.ownerAvatarUrl}} /></View>
            <View style={styles.flexCol}>
                <Text style={styles.fullName}>{item.fullName}</Text>
                <Text style={styles.secondaryText}>{item.description}</Text>
                <Text style={styles.tag}>{item.language}</Text>
            </View>
        </View>
            
        <View style={[styles.flexRow, styles.values]}>
            <View style={styles.valueItems}>
                {item.stargazersCount >= 1000
                    && <Text style={styles.itemValue}>{Math.round(item.stargazersCount/100)/10}k</Text>
                    || <Text style={styles.itemValue}>{item.stargazersCount}</Text>}
                <Text style={styles.itemName}>Stars</Text>
            </View>
            <View style={styles.valueItems}>
                {item.forksCount >= 1000
                    && <Text style={styles.itemValue}>{Math.round(item.forksCount/100)/10}k</Text>
                    || <Text style={styles.itemValue}>{item.forksCount}</Text>}
                <Text style={styles.itemName}>Forks</Text>
            </View>
            <View style={styles.valueItems}>
                <Text style={styles.itemValue}>{item.reviewCount}</Text>
                <Text style={styles.itemName}>Reviews</Text>
            </View>
            <View style={styles.valueItems}>
                <Text style={styles.itemValue}>{item.ratingAverage}</Text>
                <Text style={styles.itemName}>Rating</Text>
            </View>
        </View>
    </View>);


export default Item