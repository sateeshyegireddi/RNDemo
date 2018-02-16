/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default ListItem = (props) => {
  onPress = () => {
    props.updateSelectedItem(props.item);
  }
  return (
    <TouchableOpacity
      onPress = {this.onPress}>
        <View>
          <Text style = {styles.item}>
            {props.item}
          </Text>
        </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    height: 50,
    padding: 10,
    fontSize: 16,
  },
});
