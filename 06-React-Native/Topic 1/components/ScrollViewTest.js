import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export class ScrollViewTest extends React.Component {
    render() {
        return (
            <View style={[styles.container, borderLimits("blue")]}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.child}>
                        <Text style={styles.textBold}>Hello i am a APP</Text>
                        <Text style={styles.textStyle}>Hello i am a APP</Text>
                    </View>
                    <View style={styles.child}>
                        <Image
                            style={styles.smallSize}
                            source={require('../assets/android.png')}
                        />
                    </View>
                    <View style={styles.childDiferent}>
                        <Text style={styles.textStyle}>Hello i am a APP</Text>
                    </View>
                    <View style={styles.child}>
                        <Image
                            style={styles.heigthLimited}
                            resizeMode="contain"
                            source={require('../assets/reactImage.png')}
                        />
                    </View>
                    <View style={styles.child}>
                        <Text>Hello
                                <Text style={styles.textBold}> i am a APP</Text>
                        </Text>
                    </View>
                    <View style={styles.childDiferent}>
                        <Text>Hello i am a APP</Text>
                    </View>
                    <View style={styles.child}>
                        <Image
                            style={styles.smallSize}
                            source={{ uri: 'https://miro.medium.com/max/900/1*70vb2ain7oRIVwPSiiTNsg.png' }}
                        />
                    </View>
                    <View style={styles.childDiferent}>
                        <Text>Hello i am a APP</Text>
                    </View>
                    <View style={styles.child}>
                        <Text>Hello i am a APP</Text>
                    </View>

                </ScrollView>
            </View>

        );
    }
}
const borderLimits = (color) => {
    return {
        borderColor: color,
        borderWidth: 7
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    child: {
        borderWidth: 5,
        borderColor: "green",
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    childDiferent: {
        borderWidth: 5,
        borderColor: "pink",
        paddingVertical: 40,
        paddingHorizontal: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontFamily: 'serif',
        fontSize: 10
    },
    textBold: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    smallSize: {
        width: 180,
        height: 120
    },
    heigthLimited: {
        height: 200
    }



});
