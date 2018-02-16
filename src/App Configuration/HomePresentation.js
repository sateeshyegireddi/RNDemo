/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  Alert,
} from 'react-native';
import ListItem from './ListItem.js';

export default class HomePresentation extends Component {

  constructor() {
    super()
    this.state = {
      selectedItem: '',
    }
  }

  updateSelectedItem = (item) => {
    this.setState({ selectedItem: item });
    this.props.updateSelectedItemInSection(item);
  }

  _renderSection = ({section}) => (
    <Text style={styles.sectionHeader}>
      {section.title}
    </Text>
  );

  _renderItem = ({item}) => (
    <ListItem
      item = { item }
      updateSelectedItem = { this.updateSelectedItem }
    />
  );

  _keyExtractor = (item, index) => index;

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections = { this.props.sectionsData }
          renderSectionHeader = { this._renderSection }
          renderItem = { this._renderItem }
          keyExtractor = { this._keyExtractor }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  sectionHeader: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247, 247, 247, 1.0)',
  },

  item: {
    height: 50,
    padding: 10,
    fontSize: 16,
  },
});
