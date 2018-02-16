import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    PickerIOS,
} from 'react-native';
import ComponentDescription from '../ComponentDescription';

export default class UIPickerIOS extends Component {

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
            '<PickerIOS\n\t' +
            'selectedValue={this.state.selectedItem}\n\t' +
            'onValueChange={this._onValueChange}\n' +
            '>\n\t' +
            '<PickerIOS.Item\n\t' +
            '    label=\'iOS\'\n\t' +
            '    value=\'ios\'\n\t' +
            '/>\n\t' +
            '<PickerIOS.Item\n\t' +
            '    label=\'Android\'\n\t' +
            '    value=\'android\'\n\t' +
            '/>\n' +
            '</PickerIOS>';

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
                        <PickerIOS
                            selectedValue={this.state.selectedItem}
                            onValueChange={this._onValueChange}
                        >
                            <PickerIOS.Item
                                label='iOS'
                                value='ios'
                            />
                            <PickerIOS.Item
                                label='Android'
                                value='android'
                            />
                        </PickerIOS>
                    </View>
                    <Text style={styles.heading}>
                        Props
                    </Text>
                    <ComponentProperty
                        status={'optional'}
                        type={'text styles'}
                        name={'itemStyle'}
                        description={'Style to apply to each of the item labels.'}
                    />
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