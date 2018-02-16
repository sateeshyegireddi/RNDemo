/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ComponentProperty from '../ComponentProperty.js';
import ComponentDescription from '../ComponentDescription.js';

const listData = [{key: 'Row 1'}, {key: 'Row 2'}, {key: 'Row 3'}, 
                  {key: 'Row 4'},{key: 'Row 5'}, {key: 'Row 6'}, 
                  {key: 'Row 7'}, {key: 'Row 8'},]

export default class UIFlatList extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  });

  _renderItem = ({ item }) => (
    <Text style={styles.text}>
      {item.key}
    </Text>
  );

  render() {
    const { params } = this.props.navigation.state;
    let sampleCode = ' _renderItem = ({item}) => (\n' + 
    ' <Text style={styles.text}>\n\t' + 
    '   {item.key}\n' + 
    ' </Text>\n' + 
    ');\n\n' + 
    '<FlatList style={{height: 150, backgroundColor: \'lightgray\'}}\n\t' +
    'data = {listData}\n\t' +
    'renderItem={this._renderItem}\n' +
    ' />\n\n\n\n\n\n\n\n\n'

    return (
    <View>
        <FlatList style={{ height: 150, backgroundColor: 'lightgray' }}
          data={listData}
          renderItem={this._renderItem}
        />
        <ScrollView>
          <ComponentDescription
            title={'Description'}
            description={'A performant interface for rendering simple, flat lists, supporting the most handy features:\n\t' +
              '* Fully cross-platform.\n\t' +
              '* Optional horizontal mode.\n\t' +
              '* Configurable viewability callbacks.\n\t' +
              '* Header support.\n\t' +
              '* Footer support.\n\t' +
              '* Separator support.\n\t' +
              '* Pull to Refresh.\n\t' +
              '* Scroll loading.\n\t' +
              '* ScrollToIndex support.\n' +
              'If you need section support, use <SectionList>.'}
          />
          <Text style={styles.heading}>
            Props
          </Text>
          <ComponentProperty
            status={'required'}
            type={'function'}
            name={'renderItem\n\nrenderItem({ \n\titem: Object, \n\tindex: number, \n\tseparators: { \n\t\thighlight: Function, \n\t\tunhighlight: Function, \n\t\tupdateProps: Function(select: string, newProps: Object) \n\t} \n}) => ?React.Element'}
            description={'Takes an item from data and renders it into the list.\nProvides additional metadata like index if you need it, as well as a more generic separators.updateProps function which let you set whatever props you want to change the rendering of either the leading separator or trailing separator in case the more common highlight and unhighlight (which set the highlighted: boolean prop) are insufficient for your use case.'}
          />
          <ComponentProperty
            status={'required'}
            type={'data'}
            name={'array'}
            description={'For simplicity, data is just a plain array. If you want to use something else, like an immutable list, use the underlying \'VirtualizedList\' directly.'}
          />
          <ComponentProperty
            status={'optional'}
            type={'component'}
            name={'ItemSeparatorComponent'}
            description={'Rendered in between each item, but not at the top or bottom. By default, \'highlighted\' and \'leadingItem\' props are provided. \'renderItem\' provides \'separators.highlight/unhighlight\' which will update the \'highlighted\' prop, but you can also add custom props with \'separators.updateProps.\''}
          />
          <ComponentProperty
            status={'optional'}
            type={'component, function, element'}
            name={'ListEmptyComponent'}
            description={'Rendered when the list is empty. Can be a React Component Class, a render function, or a rendered element.'}
          />
          <ComponentProperty
            status={'optional'}
            type={'component, function, element'}
            name={'ListFooterComponent'}
            description={'Rendered at the bottom of all the items. Can be a React Component Class, a render function, or a rendered element.'}
          />
          <ComponentProperty
            status={'optional'}
            type={'component, function, element'}
            name={'ListHeaderComponent'}
            description={'Rendered at the top of all the items. Can be a React Component Class, a render function, or a rendered element.'}
          />
          <ComponentProperty
            status={'optional'}
            type={'style object'}
            name={'columnWrapperStyle'}
            description={'Optional custom style for multi-item rows generated when \'numColumns > 1.\''}
          />
          <ComponentProperty
            status={'optional'}
            type={'any'}
            name={'extraData'}
            description={'A marker property for telling the list to re-render (since it implements \'PureComponent\'). If any of your \'renderItem\', Header, Footer, etc. functions depend on anything outside of the \'data\' prop, stick it here and treat it immutably.'}
          />
          <ComponentProperty
            status={'optional'}
            type={'function'}
            name={'getItemLayout'}
            description={'(data, index) => {length: number, offset: number, index: number}\n' + 
            '\'getItemLayout\' is an optional optimization that let us skip measurement of dynamic content if you know the height of items a priori. \'getItemLayout\' is the most efficient, and is easy to use if you have fixed height items, for example:\n\t' + 
              'getItemLayout={(data, index) => (\n\t' + 
                '{length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}\n' +
            ')}\n' + 
            'Adding \'getItemLayout\' can be a great performance boost for lists of several hundred items. Remember to include separator length (height or width) in your offset calculation if you specify \'ItemSeparatorComponent.\''}
          />
          <ComponentProperty
            status={'optional'}
            type={'boolean'}
            name={'horizontal'}
            description={'If true, renders items next to each other horizontally instead of stacked vertically.'}
          />
          <ComponentProperty
            status={'optional'}
            type={'number'}
            name={'initialNumToRender'}
            description={'How many items to render in the initial batch. This should be enough to fill the screen but not much more. Note these items will never be unmounted as part of the windowed rendering in order to improve perceived performance of scroll-to-top actions.'}
          />
          <ComponentProperty
            status={'optional'}
            type={'number'}
            name={'initialScrollIndex'}
            description={'Instead of starting at the top with the first item, start at \'initialScrollIndex\'. This disables the "scroll to top" optimization that keeps the first \'initialNumToRender\' items always rendered and immediately renders the items starting at this initial index. Requires \'getItemLayout\' to be implemented.'}
          />
          <ComponentProperty
            status={'optional'}
            type={'boolean'}
            name={'inverted'}
            description={'Reverses the direction of scroll. Uses scale transforms of -1.'}
          />
          <ComponentProperty
            status={'optional'}
            type={'function'}
            name={'keyExtractor'}
            description={'(item: object, index: number) => string;\nUsed to extract a unique key for a given item at the specified index. Key is used for caching and as the react key to track item re-ordering. The default extractor checks \'item.key\', then falls back to using the index, like React does.'}
          />
          <ComponentProperty
            status={'optional'}
            type={'number'}
            name={'numColumns'}
            description={'Multiple columns can only be rendered with \'horizontal={false}\' and will zig-zag like a \'flexWrap\' layout. Items should all be the same height - masonry layouts are not supported.'}
          />
          <ComponentProperty
            status={'optional'}
            type={'function'}
            name={'onEndReached'}
            description={'(info: {distanceFromEnd: number}) => void\nCalled once when the scroll position gets within \'onEndReachedThreshold\' of the rendered content.'}
          />
          <ComponentProperty
            status={'optional'}
            type={'number'}
            name={'onEndReachedThreshold'}
            description={'How far from the end (in units of visible length of the list) the bottom edge of the list must be from the end of the content to trigger the onEndReached callback. Thus a value of 0.5 will trigger onEndReached when the end of the content is within half the visible length of the list.'}
          />
          <ComponentProperty
            status={'optional'}
            type={'function'}
            name={'onRefresh'}
            description={'() => void\nIf provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the \'refreshing\' prop correctly.'}
          />
          <ComponentProperty
            status={'optional'}
            type={'function'}
            name={'onViewableItemsChanged'}
            description={'(info: {\n\tviewableItems: array,\n\tchanged: array,\n}) => void\nCalled when the viewability of rows changes, as defined by the viewabilityConfig prop.'}
          />
          <ComponentProperty
            status={'optional'}
            type={'number'}
            name={'progressViewOffset (Android)'}
            description={'Set this when offset is needed for the loading indicator to show correctly.'}
          />
          <ComponentProperty
            status={'optional'}
            type={'boolean'}
            name={'legacyImplementation'}
            description={'May not have full feature parity and is meant for debugging and performance comparison.'}
          />
          <ComponentProperty
            status={'optional'}
            type={'boolean'}
            name={'refreshing'}
            description={'Set this true while waiting for new data from a refresh.'}
          />
          <ComponentProperty
            status={'optional'}
            type={'boolean'}
            name={'removeClippedSubviews'}
            description={'This may improve scroll performance for large lists.\nNote: May have bugs (missing content) in some circumstances - use at your own risk.'}
          />
          <ComponentProperty
            status={'optional'}
            type={'ViewabilityConfig'}
            name={'viewabilityConfig'}
            description={'See ViewabilityHelper.js for flow type and further documentation.'}
          />
          <ComponentProperty
            status={'optional'}
            type={'array of ViewabilityConfigCallbackPair'}
            name={'viewabilityConfigCallbackPairs'}
            description={'List of \'ViewabilityConfig/onViewableItemsChanged\' pairs. A specific \'onViewableItemsChanged\' will be called when its corresponding \'ViewabilityConfig\'s\' conditions are met. See \'ViewabilityHelper.js\' for flow type and further documentation.'}
          />
          <Text style={styles.heading}>
            Methods
          </Text>
          <ComponentProperty
            status={''}
            type={''}
            name={'scrollToEnd() \n optional object params'}
            description={'scrollToEnd([params]);\nScrolls to the end of the content. May be janky without getItemLayout prop.\nValid params keys are:\n\t* \'animated\' (boolean) - Whether the list should do an animation while scrolling. Defaults to \'true\'.'}
          />
          <ComponentProperty
            status={''}
            type={''}
            name={'scrollToIndex()'}
            description={'scrollToIndex([params]); \n required object params\n' +
              'Scrolls to the item at the specified index such that it is positioned in the viewable area such that viewPosition 0 places it at the top, 1 at the bottom, and 0.5 centered in the middle.\n' +
              'Note: Cannot scroll to locations outside the render window without specifying the getItemLayout prop.\n' +
              'Valid params keys are:\n\t' +
              '* \'animated\' (boolean) - Whether the list should do an animation while scrolling. Defaults to \'true\'.\n\t' +
              '* \'index\' (number) - The index to scroll to. Required.\n\t' +
              '* \'viewOffset\' (number) - A fixed number of pixels to offset the final target position. Required.\n\t' +
              '* \'viewPosition\' (number) - A value of \'0\' places the item specified by index at the top, \'1\' at the bottom, and \'0.5\' centered in the middle.'}
          />
          <ComponentProperty
            status={''}
            type={''}
            name={'scrollToItem()'}
            description={'scrollToItem([params]); \n required object params\n' +
              'Requires linear scan through data - use \'scrollToIndex\' instead if possible.\n' +
              'Note: Cannot scroll to locations outside the render window without specifying the \'getItemLayout\' prop.\n' +
              'Valid params keys are:\n\t' +
              '* \'animated\' (boolean) - Whether the list should do an animation while scrolling. Defaults to \'true\'.\n\t' +
              '* \'item\' (object) - The item to scroll to. Required.\n\t' +
              '* \'viewPosition\' (number) - A value of \'0\' places the item specified by index at the top, \'1\' at the bottom, and \'0.5\' centered in the middle.'}
          />
          <ComponentProperty
            status={''}
            type={''}
            name={'scrollToOffset()'}
            description={'scrollToOffset([params]); \n required object params\n' +
              'Scroll to a specific content pixel offset in the list.\n' +
              'Note: Cannot scroll to locations outside the render window without specifying the \'getItemLayout\' prop.\n' +
              'Valid params keys are:\n\t' +
              '* \'animated\' (boolean) - Whether the list should do an animation while scrolling. Defaults to \'true\'.\n\t' +
              '* \'offset\' (number) - The offset to scroll to. In case of horizontal being true, the offset is the x-value, in any other case the offset is the y-value. Required.'}
          />
          <ComponentProperty
            status={''}
            type={''}
            name={'recordInteraction()'}
            description={'recordInteraction();\nTells the list an interaction has occurred, which should trigger viewability calculations, e.g. if \'waitForInteractions\' is true and the user has not scrolled. This is typically called by taps on items or by navigation actions.'}
          />
          <ComponentProperty
            status={''}
            type={''}
            name={'flashScrollIndicators()'}
            description={'flashScrollIndicators();\nDisplays the scroll indicators momentarily.'}
          />
          <Text style={styles.heading}> Sample Code </Text>
          <Text style={styles.text}> {sampleCode} </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    containerUI: {
     },
    heading: {
        margin: 10,
        fontSize: 20,
        fontStyle: 'normal',
        color: '#005068',
    },
    text: {
        margin: 10,
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 'normal',
    },
    activityIndicator: {

    },
});
