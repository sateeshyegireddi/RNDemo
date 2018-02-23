import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native';
import ComponentDescription from '../ComponentDescription';
import ComponentProperty from '../ComponentProperty';

export default class UITouchableWithoutFeedback extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title,
    });

    _onPress = () => {
        console.log('Button Pressed');
    }

    render() {

        let sampleCode = '<TouchableWithoutFeedback\n\t' +
            'onPress={this._onPress}\n\t' +
            'style={styles.touchableArea}>\n\t' +
            '<View style={styles.buttonView}>\n\t\t' +
            '<Text style={styles.button}>\n\t\t\t' +
            'Button\n\t\t' +
            '</Text>\n\t' +
            '</View>\n' +
            '</TouchableWithoutFeedback>';

        return (
            <View>
                <ScrollView>
                    <ComponentDescription
                        title={'Description'}
                        description={'Do not use unless you have a very good reason. All elements that respond to press should have a visual feedback when touched.\n\n' +
                            'TouchableWithoutFeedback supports only one child. If you wish to have several child components, wrap them in a View.'}
                    />
                    <TouchableWithoutFeedback
                        onPress={this._onPress}
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
                    </TouchableWithoutFeedback>
                    <Text style={styles.heading}>
                        Props
                    </Text>
                    <ComponentProperty
                        status={'optional'}
                        type={'object: {top: number, left: number, bottom: number, right: number}'}
                        name={'hitSlop'}
                        description={'This defines how far your touch can start away from the button. This is added to pressRetentionOffset when moving off of the button. ** NOTE ** The touch area never extends past the parent view bounds and the Z-index of sibling views always takes precedence if a touch hits two overlapping views.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'AccessibilityComponentTypes'}
                        name={'accessibilityComponentType'}
                        description={''}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'accessible'}
                        description={''}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'number'}
                        name={'delayLongPress'}
                        description={'Delay in ms, from onPressIn, before onLongPress is called.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'number'}
                        name={'delayPressIn'}
                        description={'Delay in ms, from the start of the touch, before onPressIn is called.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'number'}
                        name={'delayPressOut'}
                        description={'Delay in ms, from the release of the touch, before onPressOut is called.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'disabled'}
                        description={'If true, disable all interactions for this component.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'AccessibilityTraits, ,array of AccessibilityTraits'}
                        name={'accessibilityTraits'}
                        description={''}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onLayout'}
                        description={'Invoked on mount and layout changes with\n\n{nativeEvent: {layout: {x, y, width, height}}}'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onLongPress'}
                        description={''}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onPress'}
                        description={'Called when the touch is released, but not if cancelled (e.g. by a scroll that steals the responder lock).'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onPressIn'}
                        description={'Called as soon as the touchable element is pressed and invoked even before onPress. This can be useful when making network requests.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onPressOut'}
                        description={'Called as soon as the touch is released even before onPress.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'object: {top: number, left: number, bottom: number, right: number}'}
                        name={'pressRetentionOffset'}
                        description={'When the scroll view is disabled, this defines how far your touch may move off of the button, before deactivating the button. Once deactivated, try moving it back and you\'ll see that the button is once again reactivated! Move it back and forth several times while the scroll view is disabled. Ensure you pass in a constant to reduce memory allocations.'}
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