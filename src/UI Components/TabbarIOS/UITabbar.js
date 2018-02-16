import React, { Component } from 'react';
import {
    View,
    Text,
    TabBarIOS,
} from 'react-native';

export default class UITabbar extends Component {
    render() {
        return (
            <View>
                <TabBarIOS>
                    <TabBarIOS.Item
                        title='Item1'
                    />
                    <TabBarIOS.Item
                        title='Item2'
                    >
                    <View style={{backgroundColor: 'red'}}> </View>
                    </TabBarIOS.Item>
                </TabBarIOS>

            </View>
        );
    }
}
