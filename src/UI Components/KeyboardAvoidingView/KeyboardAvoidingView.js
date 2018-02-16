import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    TextInput,
} from 'react-native';
import ComponentProperty from '../ComponentProperty.js';
import ComponentDescription from '../ComponentDescription.js';

export default class UIKeyboardAvoidingView extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title,
    });

    render() {

        let sampleCode = '<KeyboardAvoidingView keyboardVerticalOffset={100} >\n\t' +
                         '<TextInput style={styles.input}/>\n' +
                         '</KeyboardAvoidingView>'

        return (
            <View style={styles.container}>
                <ScrollView>
                    <ComponentDescription
                        title={'Description'}
                        description={'It is a component to solve the common problem of views that need to move out of the way of the virtual keyboard. It can automatically adjust either its position or bottom padding based on the position of the keyboard.'}
                    />
                    <Image
                        resizeMode={'center'}
                        style={styles.image}
                        source={require('../../../img/keyboardAvoiding.gif')}
                    />
                    <KeyboardAvoidingView keyboardVerticalOffset={100} >
                        <TextInput style={styles.input}/>
                    </KeyboardAvoidingView>
                    <Text style={styles.heading}>
                        Props
                    </Text>
                    <ComponentProperty
                        status={'required'}
                        type={'number'}
                        name={'keyboardVerticalOffset'}
                        description={'This is the distance between the top of the user screen and the react native view, may be non-zero in some use cases.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'enum(\'height\', \'position\', \'padding\')'}
                        name={'behavior'}
                        description={'Note: Android and iOS both interact with this prop differently. Android may behave better when given no behavior prop at all, whereas iOS is the opposite.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'View.style'}
                        name={'contentContainerStyle'}
                        description={'The style of the content container(View) when behavior is \'position\'.'}
                    />
                    <Text style={styles.heading}>
                        Methods
                    </Text>
                    <ComponentProperty
                        status={''}
                        type={''}
                        name={'relativeKeyboardHeight()\nrelativeKeyboardHeight(keyboardFrame: object):'}
                        description={''}
                    />
                    <ComponentProperty
                        status={''}
                        type={''}
                        name={'onKeyboardChange()\nonKeyboardChange((event: object));'}
                        description={''}
                    />
                    <ComponentProperty
                        status={''}
                        type={''}
                        name={'onLayout()\nonLayout((event: ViewLayoutEvent));'}
                        description={''}
                    />
                    <Text style={styles.heading}> Sample Code </Text>
                    <Text style={styles.text}> {sampleCode} </Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: 300,
    },
    heading: {
        padding: 10,
        fontSize: 20,
        fontStyle: 'normal',
        color: '#005068',
    },
    text: {
        padding: 10,
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 'normal',
    },
    input: {
        margin: 10,
        padding: 5,
        borderColor: 'green',
        borderWidth: 1,
    }
});
