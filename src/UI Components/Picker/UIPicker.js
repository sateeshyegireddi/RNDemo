import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    Picker,
    StyleSheet,
} from 'react-native';
import ComponentDescription from '../ComponentDescription';

export default class UIPicker extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title,
    });

    constructor(props) {
        super(props)

        this.state = {
            selectedItem: '',
        };
    };

    _onValueChange = (itemValue, itemIndex) => {
        this.setState({ selectedItem: itemValue })
    }

    render() {

        let sampleCode =
            '<Picker\n\t' +
            'selectedValue={this.state.selectedItem}\n\t' +
            'mode={\'dialog\'}\n\t' +
            'prompt={\'Select Technology\'}\n\t' +
            'onValueChange={this._onValueChange}\n' +
            '>\n\t' +
            '<Picker.Item\n\t' +
            '    label=\'iOS\'\n\t' +
            '    value=\'ios\'\n\t' +
            '/>\n\t' +
            '<Picker.Item\n\t' +
            '    label=\'Android\'\n\t' +
            '    value=\'android\'\n\t' +
            '/>\n' +
            '</Picker>';

        return (
            <View>
                <ScrollView>
                    <ComponentDescription
                        title={'Description'}
                        description={'Renders the native picker component on iOS and Android.'}
                    />
                    <View
                        style={styles.picker}
                    >
                        <Picker
                            selectedValue={this.state.selectedItem}
                            mode={'dialog'}
                            prompt={'Select Technology'}
                            onValueChange={this._onValueChange}
                        >
                            <Picker.Item
                                label='iOS'
                                value='ios'
                            />
                            <Picker.Item
                                label='Android'
                                value='android'
                            />
                        </Picker>
                    </View>
                    <Text style={styles.heading}>
                        Props
                    </Text>
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onValueChange'}
                        description={'Callback for when an item is selected. This is called with the following parameters:\n\t' +
                            '* itemValue: the value prop of the item that was selected\n\t' +
                            '* itemPosition: the index of the selected item in this picker\n'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'any'}
                        name={'selectedValue'}
                        description={'Value matching value of one of the items. Can be a string or an integer.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'pickerStyleType'}
                        name={'style'}
                        description={''}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'string'}
                        name={'testID'}
                        description={'Used to locate this view in end-to-end tests.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'enabled (Android)'}
                        description={'If set to false, the picker will be disabled, i.e. the user will not be able to make a selection.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'enum(\'dialog\', \'dropdown\')'}
                        name={'mode (Android)'}
                        description={'On Android, specifies how to display the selection items when the user taps on the picker:\n\t' +
                            '* \'dialog\': Show a modal dialog. This is the default.\n\t' +
                            '* \'dropdown\': Shows a dropdown anchored to the picker view'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'string'}
                        name={'prompt (Android)'}
                        description={'Prompt string for this picker, used on Android in dialog mode as the title of the dialog.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'text styles'}
                        name={'itemStyle (iOS)'}
                        description={'Style to apply to each of the item labels.'}
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
    picker: {
        margin: 10,
        borderWidth: 1,
        borderColor: 'green',
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