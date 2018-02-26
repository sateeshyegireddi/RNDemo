/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './Home.js';
import UIActivityIndicator from '../UI Components/Activity Indicator/UIActivityIndicator.js';
import UIButton from '../UI Components/Button/UIButton.js';
import UIDatePicker from '../UI Components/DatePickerIOS/UIDatePicker';
import UIDrawerLayout from '../UI Components/DrawerLayoutAndroid/DrawerLayoutAndroid';
import UIFlatList from '../UI Components/FlatList/UIFlatList';
import UIImage from '../UI Components/Image/UIImage';
import UIKeyboardAvoidingView from '../UI Components/KeyboardAvoidingView/KeyboardAvoidingView';
import UIMaskedView from '../UI Components/MaskedViewIOS/UIMaskedView';
import UIModalPresentation from '../UI Components/Modal/UIModalPresentation';
import UINavigator from '../UI Components/NavigatorIOS/UINavigator';
import UIPicker from '../UI Components/Picker/UIPicker';
import UIPickerIOS from '../UI Components/PickerIOS/UIPickerIOS';
import UIProgressBar from '../UI Components/ProgressBarAndroid/UIProgressBar';
import UIProgressViewIOS from '../UI Components/ProgressViewIOS/UIProgressViewIOS';
import UIRefreshControl from '../UI Components/RefreshControl/UIRefreshControl';
import UIScrollView from '../UI Components/ScrollView/UIScrollView';
import UISectionList from '../UI Components/SectionList/UISectionList';
import UISegmentControl from '../UI Components/SegmentControlIOS/UISegmentControl';
import UITabbar from '../UI Components/TabbarIOS/UITabbar';
import UIText from '../UI Components/Text/UIText';
import UITextInput from '../UI Components/TextInput/UITextInput.js';
import UIToolbar from '../UI Components/ToolBarAndroid/UIToolBar.js';
import UITouchableHighlight from '../UI Components/TouchableHighlight/UITouchableHighlight.js';
import UITouchableNativeFeedback from '../UI Components/TouchableNativeFeedback/UITouchableNativeFeedback.js';
import UITouchableWithoutFeedback from '../UI Components/TouchableWithoutFeedback/UITouchableWithoutFeedback.js';
import UITouchableOpacity from '../UI Components/TouchableOpacity/UITouchableOpacity.js';
import UIView from '../UI Components/View/UIView.js';

const Navigator = StackNavigator({
  Home: { screen: Home },          //Add screen by screen to navigate to stack
  ActivityIndicator: { screen: UIActivityIndicator },
  Button: { screen: UIButton },
  DatePickerIOS: { screen: UIDatePicker },
  DrawerLayoutAndroid: { screen: UIDrawerLayout },
  FlatList: { screen: UIFlatList },
  Image: { screen: UIImage },
  KeyboardAvoidingView: { screen: UIKeyboardAvoidingView },
  MaskedViewIOS: { screen: UIMaskedView },
  Modal: { screen: UIModalPresentation },
  NavigatorIOS: { screen: UINavigator },
  Picker: { screen: UIPicker },
  PickerIOS: { screen: UIPickerIOS },
  ProgressBarAndroid: { screen: UIProgressBar },
  ProgressViewIOS: { screen: UIProgressViewIOS },
  RefreshControl: {screen: UIRefreshControl},
  ScrollView: {screen: UIScrollView},
  SectionList: {screen: UISectionList},
  SegmentedControlIOS: {screen: UISegmentControl},
  Slider: {screen: UISegmentControl},
  SnapshotViewIOS: {screen: UISegmentControl},
  StatusBar: {screen: UISegmentControl},
  Switch: {screen: UISegmentControl}, 
  TabBarIOS: {screen: UITabbar},
  Text: {screen: UIText},
  TextInput: {screen: UITextInput},
  ToolbarAndroid: {screen: UIToolbar},
  TouchableHighlight: {screen: UITouchableHighlight},
  TouchableNativeFeedback: {screen: UITouchableNativeFeedback},
  TouchableOpacity: {screen: UITouchableOpacity},
  TouchableWithoutFeedback: {screen: UITouchableWithoutFeedback},
  View: {screen: UIView},
});

export default Navigator;
