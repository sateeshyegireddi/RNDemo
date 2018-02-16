/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default ComponentDescription = (props) => {
  return (
    <View style={styles.container}>
    <Text style={styles.heading}>
      {props.title}
    </Text>
    <Text style={styles.text}>
      {props.description}
    </Text>
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
