import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native';
import ComponentProperty from '../ComponentProperty';
import ComponentDescription from '../ComponentDescription';

export default class UITouchableOpacity extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title,
    });

    render() {

        let sampleCode = '<TouchableOpacity\n\t' +
            'onPress={this._onPress}\n\t' +
            'activeOpacity={0.7}>\n\t' +
            '<View style={styles.buttonView}>\n\t' +
            '<Text style={styles.button}>\n\t\t' +
            'Button\n\t' +
            '</Text>\n\t' +
            '</View>\n' +
            '</TouchableOpacity>';

        return (
            <View>
                <ScrollView>
                    <ComponentDescription
                        title={'Description'}
                        description={'A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, dimming it.\n\n' +
                            'Opacity is controlled by wrapping the children in an Animated.View, which is added to the view hierarchy. Be aware that this can affect layout.'}
                    />
                    <TouchableOpacity
                        onPress={this._onPress}
                        activeOpacity={0.7}
                    >
                        <View
                            style={styles.buttonView}
                        >
                            <Text
                                style={styles.button}
                            >
                                Button
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.heading}>
                        Props
                    </Text>
                    <ComponentProperty
                        status={'optional'}
                        type={'number'}
                        name={'activeOpacity'}
                        description={'Determines what the opacity of the wrapped view should be when touch is active. Defaults to 0.2.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'object'}
                        name={'tvParallaxProperties (tvOS)'}
                        description={'Apple TV parallax effects'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'hasTVPreferredFocus (tvOS)'}
                        description={'(Apple TV only) TV preferred focus (see documentation for the View component).'}
                    />
                    <Text style={styles.heading}>
                        Methods
                    </Text>
                    <ComponentProperty
                        status={''}
                        type={''}
                        name={'setOpacityTo()'}
                        description={'setOpacityTo((value: number), (duration: number));\n\n' +
                            'Animate the touchable to a new opacity.'}
                    />
                    <Text style={styles.heading}> Sample Code </Text>
                    <Text style={styles.text}> {sampleCode} </Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonView: {
        margin: 15,
        padding: 15,
        backgroundColor: 'green',
        borderRadius: 5,
        alignItems: 'center',
    },
    button: {
        fontSize: 18,
        color: 'white',
    },
    heading: {
        margin: 10,
        fontSize: 20,
        fontStyle: 'normal',
        color: '#005068',
    },
    text: {
        margin: 10,
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 'normal',
    },
});