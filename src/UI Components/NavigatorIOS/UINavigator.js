import React, { Component } from 'react';
import { 
    View, 
    Text, 
} from 'react-native';

export default class UINavigator extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title,
    });

    render() {

        return (
            <View>

            </View>
        );
    }
}
