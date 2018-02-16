/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Alert,
} from 'react-native';
import ComponentProperty from '../ComponentProperty.js';
import ComponentDescription from '../ComponentDescription.js';

export default class UIButton extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  });

  _onButtonPress(button, id) {
    Alert.alert(button + id);
  }

  render() {
    const { params } = this.props.navigation.state;
    let sampleCode =
      '<Button\n' +
      '     onPress={this._onButtonPress.bind(this, \'You tapped on \', \'Green Button\')}\n' +
      '     title=\'Button\'\n' +
      '     color={\'#1aad5b\'}\n' +
      '     accessibilityLabel=\'Press Me\'\n' +
      '     disabled=\'{false}\'\n' +
      ' />\n\n' +
      '_onButtonPress(button, id) {\n' +
      'Alert.alert(button + id);\n' +
      '}\n'
    return (
      <View style={styles.container}>
        <ScrollView>
          <ComponentDescription
            title={'Description'}
            description={'A basic button component that should render nicely on any platform. Supports a minimal level of customization.\n\nIf this button doesn\'t look right for your app, you can build your own button using TouchableOpacity or TouchableNativeFeedback. For inspiration, look at the source code for this button component. Or, take a look at the wide variety of button components built by the community.'}
          />
          <View style={styles.containerUI}>
            <Button
              onPress={this._onButtonPress.bind(this, 'You tapped on ', 'Green Button')}
              title="Button"
              color="#1aad5b"
              accessibilityLabel="Press Me"
              disabled={true}
            />
            <Button
              onPress={this._onButtonPress.bind(this, 'You tapped on ', 'Cyan Button')}
              title="Large Button"
              color="#00cccc"
              accessibilityLabel="Press Me"
              disabled={false}
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={this._onButtonPress.bind(this, 'You tapped on ', 'Outside Button')}
              title="Outside Button"
              color="#1aad5b"
              accessibilityLabel="Press Me"
            />
          </View>
          <Text style={styles.heading}>
            Props
        </Text>
          <ComponentProperty
            status={'required'}
            type={'function'}
            name={'onPress'}
            description={'Handler to be called when the user taps the button'}
          />
          <ComponentProperty
            status={'required'}
            type={'string'}
            name={'title'}
            description={'Text to display inside the button'}
          />
          <ComponentProperty
            status={'optional'}
            type={'string'}
            name={'accessibilityLabel'}
            description={'Text to display for blindness accessibility features'}
          />
          <ComponentProperty
            status={'optional'}
            type={'color'}
            name={'color'}
            description={'Color of the text (iOS), or background color of the button (Android)'}
          />
          <ComponentProperty
            status={'optional'}
            type={'bool'}
            name={'disabled'}
            description={'Color of the text (iOS), or background color of the button (Android)'}
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
            name={'hasTVPreferredFocus (tvOS)'}
            description={'(Apple TV only) TV preferred focus (see documentation for the View component).'}
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
  containerUI: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 25,
  },
  button: {
    padding: 25,
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
