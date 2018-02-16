import React, { Component } from 'react';
import {
    View,
    Text,
    Modal,
    Button,
    StyleSheet,
    ScrollView,
} from 'react-native';
import ComponentDescription from '../ComponentDescription';

export default class UIModalPresentation extends Component {

    constructor(props) {
        super(props)

        this.state = {
            modalVisible: false,
        };
    };

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title,
    });

    openModal = () => {
        this.setState({ modalVisible: true });
    }

    closeModal = () => {
        this.setState({ modalVisible: false });
    }

    render() {

        let sampleCode = 
        '<Modal\n\t' + 
        'visible={this.state.modalVisible}\n\t' +
        'animationType={\'fade\'}\n\t' +
        'onRequestClose={this.closeModal}\n' +
        '>\n\t' +
        '<View style={styles.modalContainer}>\n\t' +
        '    <View style={styles.innerContainer}>\n\t' +
        '       <Text style={{ textAlign: \'center\', margin: 25, }}>\n\t' +
        '            This is the content inside Modal Presentation\n\t' +
        '       </Text>\n\t' +
        '        <Button\n\t' +
        '            onPress={this.closeModal}\n\t' +
        '            title=\'Close Modal\'\n\t' +
        '        />\n\t' +
        '    </View>\n\t' +
        '</View>\n' +
        '</Modal>\n' +
        '<View style={{ margin: 10 }}>\n\t' +
        '<Button\n\t' +
        '    onPress={this.openModal}\n\t' +
        '    title=\'Open Modal\'\n\t' +
        '/>\n' +
        '</View>'

        return (
            <View style={styles.container}>
                <ScrollView>
                    <ComponentDescription
                        title={'Description'}
                        description={'Present a view modally on another view with \'fade\', \'slide\', \'none\' animations'}
                    />
                    <Modal
                        visible={this.state.modalVisible}
                        animationType={'fade'}
                        onRequestClose={this.closeModal}
                        transparent={false}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.innerContainer}>
                                <Text style={{ textAlign: 'center', margin: 25, }}>
                                    This is the content inside Modal Presentation
                                </Text>
                                <Button
                                    onPress={this.closeModal}
                                    title='Close Modal'
                                />
                            </View>
                        </View>
                    </Modal>
                    <View style={{ margin: 10 }}>
                        <Button
                            onPress={this.openModal}
                            title='Open Modal'
                        />
                    </View>
                    <Text style={styles.heading}>
                        Props
                    </Text>
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'visible'}
                        description={'The \'visible\' prop determines whether your modal is visible.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'array of enum(\'portrait\', \'portrait-upside-down\', \'landscape\', \'landscape-left\', \'landscape-right\')'}
                        name={'supportedOrientations (iOS)'}
                        description={'The \'supportedOrientations\' prop allows the modal to be rotated to any of the specified orientations. On iOS, the modal is still restricted by what\'s specified in your app\'s Info.plist\'s UISupportedInterfaceOrientations field. When using \'presentationStyle\' of \'pageSheet\' or \'formSheet\', this property will be ignored by iOS.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={''}
                        name={'onRequestClose'}
                        description={'The \'onRequestClose\' callback is called when the user taps the hardware back button on Android or the menu button on Apple TV.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onShow'}
                        description={'The \'onShow\' prop allows passing a function that will be called once the modal has been shown.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'transparent'}
                        description={'The \'transparent\' prop determines whether your modal will fill the entire view. Setting this to true will render the modal over a transparent background.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'enum(\'none\', \'slide\', \'fade\')'}
                        name={'animationType'}
                        description={'The animationType prop controls how the modal animates.\n\t' +
                            '* slide slides in from the bottom\n\t' +
                            '* fade fades into view\n\t' +
                            '* none appears without an animation\n' +
                            'Default is set to \'none\'.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'hardwareAccelerated (Android)'}
                        description={'The \'hardwareAccelerated\' prop controls whether to force hardware acceleration for the underlying window.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onDismiss (iOS)'}
                        description={'The \'onDismiss\' prop allows passing a function that will be called once the modal has been dismissed.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onOrientationChange (iOS)'}
                        description={'The \'onOrientationChange\' callback is called when the orientation changes while the modal is being displayed. The orientation provided is only \'portrait\' or \'landscape\'. This callback is also called on initial render, regardless of the current orientation.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'enum(\'fullScreen\', \'pageSheet\', \'formSheet\', \'overFullScreen\')'}
                        name={'presentationStyle (iOS)'}
                        description={'The \'presentationStyle\' prop controls how the modal appears (generally on larger devices such as iPad or plus-sized iPhones). See https://developer.apple.com/reference/uikit/uimodalpresentationstyle for details.\n\t' +
                            '* \'fullScreen\' covers the screen completely\n\t' +
                            '* \'pageSheet\' covers portrait-width view centered (only on larger devices)\n\t' +
                            '* \'formSheet\' covers narrow-width view centered (only on larger devices)\n\t' +
                            '* \'overFullScreen\' covers the screen completely, but allows transparency\n\t' +
                            'Default is set to \'overFullScreen\' or \'fullScreen\' depending on \'transparent\' property.'}
                    />
                    <Text style={styles.heading}>
                        Sample Code
                    </Text>
                    <Text style={styles.text}>
                        {sampleCode}
                    </Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
    },
    modalContainer: {
        flex: 1,
        opacity: 1.0,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
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
});