import React, { Component } from 'react';
import {
  View,
  Text,
  SegmentedControlIOS,
  StyleSheet,
} from 'react-native';

export default class UISegmentControl extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  })

  render() {

    _onValueChange = ({ value }) => {
      console.log('value changed ' + value);
    }

    return (
      <View>
        <SegmentedControlIOS
          values={['Segment 1', 'Segment 2']}
          selectedIndex={1}
          onValueChange={this._onValueChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});