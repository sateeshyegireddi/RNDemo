import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    MaskedViewIOS,
    Image,
} from 'react-native';
import ComponentProperty from '../ComponentProperty.js';
import ComponentDescription from '../ComponentDescription.js';

export default class UIMaskedView extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title,
    });

    _makeElement = (
        <View style={{
            // Transparent background because mask is based off alpha channel.
            backgroundColor: 'transparent',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{
                fontSize: 60,
                color: 'black',
                fontWeight: 'bold',
            }}>
                Basic Mask
            </Text>
        </View>
    );

    render() {

        let sampleCode = '_makeElement = (\n\t' +
            '<View style={{\n\t\t' + 
            '// Transparent background because mask is based off alpha channel.\n\t\t' +
            'backgroundColor: \'transparent\',\n\t\t' +
            'flex: 1,\n\t\t' +
            'justifyContent: \'center\',\n\t\t' +
            'alignItems: \'center\',\n' +
            '}}>\n\t' +
            '<Text style={{\n\t\t' +
            'fontSize: 60,\n\t\t' +
            'color: \'black\',\n\t\t' +
            'fontWeight: \'bold\',\n\t' +
            '}}>\n\t\t' +
            'Basic Mask\n\t' +
            '</Text>\n' +
            '</View>\n\n' +
            '<MaskedViewIOS\n\t' + 
            'style={{ flex: 1, flexDirection: \'row\', height: \'100%\' }}\n\t' +
            'maskElement={this._makeElement}>\n\t' +
            '{ /* Shows behind the mask, you can put anything here, such as an image */}\n\t' +
            '<View style={{ flex: 1, height: \'100%\', backgroundColor: \'#324376\' }} />\n\t' +
            '<View style={{ flex: 1, height: \'100%\', backgroundColor: \'#F5DD90\' }} />\n\t' +
            '<View style={{ flex: 1, height: \'100%\', backgroundColor: \'#F76C5E\' }} />\n' +
            '</MaskedViewIOS>'

        return (
            <View>
                <ScrollView>
                    <ComponentDescription
                        title={'Description'}
                        description={'Renders the child view with a mask specified in the \'maskElement\' prop.\n' +
                                     'The following image demonstrates that you can put almost anything behind the mask. The three examples shown are masked \'<View>, <Text>, and <Image>\'.\n' + 
                                     'The alpha channel of the view rendered by the maskElement prop determines how much of the view\'s content and background shows through. Fully or partially opaque pixels allow the underlying content to show through but fully transparent pixels block that content.'}
                    />
                    <Image
                        resizeMode={'center'}
                        style={styles.image}
                        source={require('../../../img/maskedViewIOS.png')}
                    />
                    <MaskedViewIOS
                        style={{ flex: 1, flexDirection: 'row', height: '100%' }}
                        maskElement={this._makeElement}>
                        { /* Shows behind the mask, you can put anything here, such as an image */}
                        <View style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} />
                        <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
                        <View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />
                    </MaskedViewIOS>
                    <Text style={styles.heading}>
                        Props
                    </Text>
                    <ComponentProperty
                        status={'required'}
                        type={'element'}
                        name={'maskElement'}
                        description={''}
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
    image: {
        width: 200,
        height: 200,
    },
});