/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';
import {
  StackNavigator
} from 'react-navigation'; //Import StackNavigator from react navigation
import HomePresentation from './HomePresentation.js'

const sectionsData = [{title: 'Components', data: ['ActivityIndicator', 'Button', 'DatePickerIOS',
    'DrawerLayoutAndroid', 'FlatList', 'Image', 'KeyboardAvoidingView', 'MaskedViewIOS',
    'Modal', 'NavigatorIOS', 'Picker', 'PickerIOS', 'ProgressBarAndroid', 'ProgressViewIOS',
    'RefreshControl', 'ScrollView', 'SectionList', 'SegmentedControlIOS', 'Slider', 'SnapshotViewIOS', 'StatusBar',
    'Switch', 'TabBarIOS', 'TabBarIOS.Item', 'Text', 'TextInput', 'ToolbarAndroid',
    'TouchableHighlight', 'TouchableNativeFeedback', 'TouchableOpacity', 'TouchableWithoutFeedback',
    'View', 'ViewPagerAndroid', 'VirtualizedList', 'WebView']}]

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      selectedComponent: '',
    };
  }

  static navigationOptions = {
    title: 'React-Native'          //Set title to navigation bar
  }

  onItemInSectionPress = (item) => {
    this.setState({ selectedComponent: item });
    const { navigate } = this.props.navigation;
    navigate(item, {title: item});
  }

  render() {
    return (
      <View style={styles.container}>
        <HomePresentation
          sectionsData = { sectionsData }
          updateSelectedItemInSection = { this.onItemInSectionPress }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
