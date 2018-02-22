import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    ScrollView,
} from 'react-native';
import ComponentDescription from '../ComponentDescription';
import ComponentProperty from '../ComponentProperty';

export default class UITouchableHighlight extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title,
    })

    _onPress = () => {
        console.log('button pressed');
    }

    _onHideUnderlay() {
        console.log('showing underlay');
    }

    _onShowUnderlay() {
        console.log('hiding underlay');
    }

    render() {

        let sampleCode = '<TouchableHighlight\n\t' +
            'onPress={this._onPress}\n\t' +
            'underlayColor={\'orange\'}\n\t' +
            'activeOpacity={0.7}\n\t' +
            'onHideUnderlay={this._onHideUnderlay}\n\t' +
            'onShowUnderlay={this._onShowUnderlay}\n\t' +
            'style={styles.touchableArea}>\n\t' +
            '<Text\n\t\t' +
            'style={styles.touchableText}>\n\t\t' +
            'Touch Here\n\t' +
            '</Text>\n' +
            '</TouchableHighlight>';

        return (
            <View>
                <ScrollView>
                    <ComponentDescription
                        title={'Description'}
                        description={'A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, which allows the underlay color to show through, darkening or tinting the view.\n\n' +
                            'The underlay comes from wrapping the child in a new View, which can affect layout, and sometimes cause unwanted visual artifacts if not used correctly, for example if the backgroundColor of the wrapped view isn\'t explicitly set to an opaque color.\n\n' +
                            'TouchableHighlight must have one child (not zero or more than one). If you wish to have several child components, wrap them in a View.'}
                    />
                    <TouchableHighlight
                        onPress={this._onPress}
                        underlayColor={'orange'}
                        activeOpacity={0.7}
                        onHideUnderlay={this._onHideUnderlay}
                        onShowUnderlay={this._onShowUnderlay}
                        style={styles.touchableArea}
                    >
                        <Text
                            style={styles.touchableText}
                        >
                            Touch Here
                        </Text>
                    </TouchableHighlight>
                    <Text style={styles.heading}>
                        Props
                    </Text>
                    <ComponentProperty
                        status={'optional'}
                        type={'number'}
                        name={'activeOpacity'}
                        description={'Determines what the opacity of the wrapped view should be when touch is active.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onHideUnderlay'}
                        description={'Called immediately after the underlay is hidden'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onShowUnderlay'}
                        description={'Called immediately after the underlay is shown'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'View.style'}
                        name={'style'}
                        description={''}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'color'}
                        name={'underlayColor'}
                        description={'The color of the underlay that will show through when the touch is active.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'hasTVPreferredFocus (iOS)'}
                        description={'(Apple TV only) TV preferred focus (see documentation for the View component).'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'tvParallaxProperties (iOS)'}
                        description={'(Apple TV only) Object with properties to control Apple TV parallax effects.\n\n' +
                            'enabled: If true, parallax effects are enabled. Defaults to true. shiftDistanceX: Defaults to 2.0. shiftDistanceY: Defaults to 2.0. tiltAngle: Defaults to 0.05. magnification: Defaults to 1.0.'}
                    />
                    <Text style={styles.heading}> Sample Code </Text>
                    <Text style={styles.text}> {sampleCode} </Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    touchableArea: {
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'orange',
        borderRadius: 5,
    },
    touchableText: {
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