import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableNativeFeedback,
} from 'react-native';
import ComponentDescription from '../ComponentDescription';
import ComponentProperty from '../ComponentProperty';

export default class UITouchableNativeFeedback extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title,
    });

    _onPress = () => {
        console.log('Button Pressed');
    }

    render() {

        let sampleCode = '<TouchableNativeFeedback\n\t' +
            'onPress={this._onPress}\n\t' +
            'background={TouchableNativeFeedback.SelectableBackground()}>\n\t' +
            '<View\n\t\t' +
            'style={styles.buttonView}>\n\t\t' +
            '<Text\n\t\t\t' +
            'style={styles.button}>\n\t\t\t' +
            'Button\n\t\t' +
            '</Text>\n\t\t' +
            '</View>\n\t' +
            '</TouchableNativeFeedback>';

        return (
            <View>
                <ScrollView>
                    <ComponentDescription
                        title={'Description'}
                        description={'A wrapper for making views respond properly to touches (Android only). On Android this component uses native state drawable to display touch feedback.\n\n' +
                            'At the moment it only supports having a single View instance as a child node, as it\'s implemented by replacing that View with another instance of RCTView node with some additional properties set.\n\n' +
                            'Background drawable of native feedback touchable can be customized with background property.'}
                    />
                    <TouchableNativeFeedback
                        onPress={this._onPress}
                        background={TouchableNativeFeedback.SelectableBackground()}
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
                    </TouchableNativeFeedback>
                    <Text style={styles.heading}>
                        Props
                    </Text>
                    <ComponentProperty
                        status={'optional'}
                        type={'backgroundPropType'}
                        name={'background'}
                        description={'Determines the type of background drawable that\'s going to be used to display feedback. It takes an object with type property and extra data depending on the type. It\'s recommended to use one of the static methods to generate that dictionary.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'useForeground'}
                        description={'Set to true to add the ripple effect to the foreground of the view, instead of the background. This is useful if one of your child views has a background of its own, or you\'re e.g. displaying images, and you don\'t want the ripple to be covered by them.\n\n' +
                            'Check TouchableNativeFeedback.canUseNativeForeground() first, as this is only available on Android 6.0 and above. If you try to use this on older versions you will get a warning and fallback to background.'}
                    />
                    <Text style={styles.heading}>
                        Methods
                    </Text>
                    <ComponentProperty
                        status={''}
                        type={''}
                        name={'SelectableBackground()'}
                        description={'static SelectableBackgroundBorderless()\n\n' +
                            'Creates an object that represent android theme\'s default background for borderless selectable elements (?android:attr/selectableItemBackgroundBorderless). Available on android API level 21+.'}
                    />
                    <ComponentProperty
                        status={''}
                        type={''}
                        name={'Ripple()\nrequired string color\nrequired bool borderless'}
                        description={'static Ripple(color: string, borderless: boolean)\n\n' +
                            'Creates an object that represents ripple drawable with specified color (as a string). If property borderless evaluates to true the ripple will render outside of the view bounds (see native actionbar buttons as an example of that behavior). This background type is available on Android API level 21+.'}
                    />
                    <ComponentProperty
                        status={''}
                        type={''}
                        name={'canUseNativeForeground()'}
                        description={'static canUseNativeForeground()'}
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