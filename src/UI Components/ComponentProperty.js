/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default ComponentProperty = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.property}>
        <Text style={{color: '#cc00cc'}}>{props.status} </Text>
        <Text style={{color: '#00cc00'}}>{props.type} </Text>
        <Text style={{color: '#0066cc'}}>{props.name} </Text>
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
  property: {
    padding: 10,
    fontSize: 16,
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
