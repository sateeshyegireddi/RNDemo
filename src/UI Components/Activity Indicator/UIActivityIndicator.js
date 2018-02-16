/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import ComponentProperty from '../ComponentProperty.js';
import ComponentDescription from '../ComponentDescription.js';

export default class UIActivityIndicator extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  });

  render() {
    const { params } = this.props.navigation.state;
    let sampleCode = 
    '<ActivityIndicator\n' +
    '     style={styles.activityIndicator}\n' +
    '     animating={true}\n' +
    '     color={\'#005068\'}\n' +
    '     size={\'small\'}\n' + 
    ' />'
    return (
      <ScrollView>
        <ComponentDescription
          title = {'Description'}
          description = {'Displays a circular loading indicator.'}
        />
        <View style={styles.containerUI}>
          <ActivityIndicator
            style={styles.activityIndicator}
            animating={true}
            color={'#005068'}
            size={'small'}
          />
          <ActivityIndicator
            style={styles.activityIndicator}
            animating={true}
            color={'#225700'}
            size={'large'}
          />
        </View>
        <Text style={styles.heading}>
          Props
        </Text>
        <ComponentProperty
          status = {'optional'}
          type = {'bool'}
          name = {'animating'}
          description = {'Whether to show the indicator (true, the default) or hide it (false).'}
        />
        <ComponentProperty
          status = {'optional'}
          type = {'color'}
          name = {'color'}
          description = {'The foreground color of the spinner (default is gray).'}
        />
        <ComponentProperty
          status = {'optional'}
          type = {'enum(\'small\', \'large\'), ,number'}
          name = {'size'}
          description = {'Size of the indicator (default is \'small\'). Passing a number to the size prop is only supported on Android.'}
        />
        <ComponentProperty
          status = {'optional'}
          type = {'bool'}
          name = {'hidesWhenStopped (iOS)'}
          description = {'Whether the indicator should hide when not animating (true by default).'}
        />
        <Text style={styles.heading}> Sample Code </Text>
        <Text style={styles.text}> {sampleCode} </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerUI: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 25,
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
  activityIndicator: {

  },
});
