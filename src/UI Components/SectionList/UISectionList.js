import React, { Component } from 'react';
import {
    View,
    Text,
    SectionList,
    StyleSheet,
    ScrollView,
} from 'react-native';
import ComponentDescription from '../ComponentDescription';
import ComponentProperty from '../ComponentProperty';

const listData =
    [{ title: 'Section 1', data: ['Row 1', 'Row 2', 'Row 3'] },
    { title: 'Section 2', data: ['Row 1', 'Row 2'] },
    { title: 'Section 3', data: ['Row 1', 'Row 2', 'Row 3'] },
    { title: 'Section 4', data: ['Row 1', 'Row 2', 'Row 3'] },
    { title: 'Section 5', data: ['Row 1', 'Row 2'] },];

export default class UISectionList extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title
    })

    _renderItem = ({ item }) => (
        <Text style={styles.text}>
            {item}
        </Text>
    )

    _renderSectionHeader = ({ section }) => (
        <Text style={styles.listSection}>
            {section.title}
        </Text>
    )

    _keyExtractor = (item, index) => index
    
    render() {

        let sampleCode =
            '_renderItem = ({ item }) => (\n\t' +
            '<Text style={styles.text}>\n\t\t' +
            '{item}\n\t' +
            '</Text>\n' +
            ')\n\n' +

            '_renderSectionHeader = ({ section }) => (\n\t' +
            '<Text style={styles.listSection}>\n\t\t' +
            '{section.title}\n\t' +
            '</Text>\n' +
            ')\n\n' +

            '_keyExtractor = (item, index) => index\n\n' +

            '<SectionList\n\t' +
            'style={styles.list}\n\t' +
            'sections={listData}\n\t' +
            'renderItem={this._renderItem}\n\t' +
            'renderSectionHeader={this._renderSectionHeader}\n\t' +
            'keyExtractor={this._keyExtractor}\n' +
            '/>';

        return (
            <View>
                <SectionList
                    style={styles.list}
                    sections={listData}
                    renderItem={this._renderItem}
                    renderSectionHeader={this._renderSectionHeader}
                    keyExtractor={this._keyExtractor}
                />
                <ScrollView
                    style={{ height: '80%' }}
                >
                    <ComponentDescription
                        title={'Description'}
                        description={'A performant interface for rendering sectioned lists, supporting the most handy features:\n\t' +
                            '* Fully cross-platform.\n\t' +
                            '* Configurable viewability callbacks.\n\t' +
                            '* List Header support.\n\t' +
                            '* List Footer support.\n\t' +
                            '* Item Separator support.\n\t' +
                            '* Section header support.\n\t' +
                            '* Section separator support.\n\t' +
                            '* Heterogeneous data and item rendering support.\n\t' +
                            '* Pull to Refresh.\n\t' +
                            '* Scroll loading.\n\t' +
                            'If you don\'t need section support and want a simpler interface, use <FlatList>.\n' +
                            'This is a convenience wrapper around <VirtualizedList>, and thus inherits its props (as well as those of <ScrollView> that aren\'t explicitly listed here, along with the following caveats:\n\t' +
                            '* Internal state is not preserved when content scrolls out of the render window. Make sure all your data is captured in the item data or external stores like Flux, Redux, or Relay.\n\t' +
                            '* This is a \'PureComponent\' which means that it will not re-render if \'props\' remain shallow- equal. Make sure that everything your \'renderItem\' function depends on is passed as a prop (e.g. extraData) that is not \'===\' after updates, otherwise your UI may not update on changes. This includes the \'data\' prop and parent component state.\n\t' +
                            '* In order to constrain memory and enable smooth scrolling, content is rendered asynchronously offscreen. This means it\'s possible to scroll faster than the fill rate and momentarily see blank content. This is a tradeoff that can be adjusted to suit the needs of each application, and we are working on improving it behind the scenes.\n\t' +
                            '* By default, the list looks for a \'key\' prop on each item and uses that for the React key. Alternatively, you can provide a custom \'keyExtractor\' prop.'}
                    />
                    <Text style={styles.heading}>
                        Props
                    </Text>
                    <ComponentProperty
                        status={'required'}
                        type={'array of \'Section\'s'}
                        name={'sections'}
                        description={'The actual data to render, akin to the \'data\' prop in \'FlatList\'.'}
                    />
                    <ComponentProperty
                        status={'required'}
                        type={'number'}
                        name={'initialNumToRender'}
                        description={'How many items to render in the initial batch. This should be enough to fill the screen but not much more. Note these items will never be unmounted as part of the windowed rendering in order to improve perceived performance of scroll-to-top actions.'}
                    />
                    <ComponentProperty
                        status={'required'}
                        type={'(item: Item, index: number) => string'}
                        name={'keyExtractor'}
                        description={'Used to extract a unique key for a given item at the specified index. Key is used for caching and as the react key to track item re-ordering. The default extractor checks item.key, then falls back to using the index, like react does. Note that this sets keys for each item, but each overall section still needs its own key.'}
                    />
                    <ComponentProperty
                        status={'required'}
                        type={'function'}
                        name={'renderItem'}
                        description={'Default renderer for every item in every section. Can be over-ridden on a per-section basis. Should return a React element.\n' +
                            'The render function will be passed an object with the following keys:\n\t' +
                            '* \'item\' (object) - the item object as specified in this section\'s data key\n\t' +
                            '* \'index\' (number) - Item\'s index within the section.\n\t' +
                            '* \'section\' (object) - The full section object as specified in sections.\n\t' +
                            '* \'separators\' (object) - An object with the following keys: \n\t\t' +
                            '* \'highlight\' (function) - () => void\n\t\t' +
                            '* \'unhighlight\' (function) - () => void\n\t\t' +
                            '* \'updateProps\' (function) - (select, newProps) => void\n\t\t\t' +
                            '* \'select\' (enum) - possible values are \'leading\', \'trailing\'\n\t\t\t' +
                            '* \'newProps\' (object)'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'[(info: {distanceFromEnd: number}) => void]'}
                        name={'onEndReached'}
                        description={'Called once when the scroll position gets within onEndReachedThreshold of the rendered content.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'any'}
                        name={'extraData'}
                        description={'A marker property for telling the list to re-render (since it implements PureComponent). If any of your \'renderItem\', Header, Footer, etc. functions depend on anything outside of the \'data\' prop, stick it here and treat it immutably.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'[component, function, element]'}
                        name={'ItemSeparatorComponent'}
                        description={'Rendered in between each item, but not at the top or bottom. By default, \'highlighted\', \'section\', and \'[leading/trailing][Item/Separator]\' props are provided. \'renderItem\' provides \'separators.highlight/unhighlight\' which will update the \'highlighted\' prop, but you can also add custom props with \'separators.updateProps\'.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'inverted'}
                        description={'Reverses the direction of scroll. Uses scale transforms of -1.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'[component, function, element]'}
                        name={'ListFooterComponent'}
                        description={'Rendered at the very end of the list. Can be a React Component Class, a render function, or a rendered element.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'legacyImplementation'}
                        description={''}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'[component, function, element]'}
                        name={'ListEmptyComponent'}
                        description={'Rendered when the list is empty. Can be a React Component Class, a render function, or a rendered element.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'number'}
                        name={'onEndReachedThreshold'}
                        description={'How far from the end (in units of visible length of the list) the bottom edge of the list must be from the end of the content to trigger the \'onEndReached\' callback. Thus a value of 0.5 will trigger \'onEndReached\' when the end of the content is within half the visible length of the list.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'() => void'}
                        name={'onRefresh'}
                        description={'If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the \'refreshing\' prop correctly.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onViewableItemsChanged'}
                        description={'Called when the viewability of rows changes, as defined by the \'viewabilityConfig\' prop.\n' +
                            'The function will be passed an object with the following keys:\n\t' +
                            '* \'viewableItems\' (array of ViewTokens)\n\t' +
                            '* \'changed\' (array of ViewTokens)'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'refreshing'}
                        description={'Set this true while waiting for new data from a refresh.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'removeClippedSubviews'}
                        description={'Note: may have bugs (missing content) in some circumstances - use at your own risk.\n' +
                            'This may improve scroll performance for large lists.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'component, function, element'}
                        name={'ListHeaderComponent'}
                        description={'Rendered at the very beginning of the list. Can be a React Component Class, a render function, or a rendered element.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'[(info: {section: SectionT}) => ?React.Element]'}
                        name={'renderSectionFooter'}
                        description={'Rendered at the bottom of each section.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'[(info: {section: SectionT}) => ?React.Element]'}
                        name={'renderSectionHeader'}
                        description={'Rendered at the top of each section. These stick to the top of the \'ScrollView\' by default on iOS. See stickySectionHeadersEnabled.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'[ReactClass]'}
                        name={'SectionSeparatorComponent'}
                        description={'Rendered at the top and bottom of each section (note this is different from \'ItemSeparatorComponent\' which is only rendered between items). These are intended to separate sections from the headers above and below and typically have the same highlight response as \'ItemSeparatorComponent\'. Also receives \'highlighted\', \'[leading/trailing][Item/Separator]\', and any custom props from \'separators.updateProps\'.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'stickySectionHeadersEnabled'}
                        description={'Makes section headers stick to the top of the screen until the next one pushes it off. Only enabled by default on iOS because that is the platform standard there.'}
                    />
                    <Text style={styles.heading}>
                        Methods
                    </Text>
                    <ComponentProperty
                        status={''}
                        type={''}
                        name={'scrollToLocation() \n optional object params'}
                        description={'scrollToLocation([params]);\nScrolls to the item at the specified \'sectionIndex\' and \'itemIndex\' (within the section) positioned in the viewable area such that \'viewPosition\' 0 places it at the top (and may be covered by a sticky header), 1 at the bottom, and 0.5 centered in the middle.\n' +
                            'Note: Cannot scroll to locations outside the render window without specifyingthe getItemLayout prop.\n' +
                            'Valid params \'keys\' are:\n\t' +
                            '* \'animated\' (boolean) - Whether the list should do an animation while scrolling. Defaults to true.\n\t' +
                            '* \'itemIndex\' (number) - Index within section for the item to scroll to. Required.\n\t' +
                            '* \'sectionIndex\' (number) - Index for section that contains the item to scroll to. Required.\n\t' +
                            '* \'viewOffset\' (number) - A fixed number of pixels to offset the final target position, e.g. to compensate for sticky headers.\n\t' +
                            '* \'viewPosition\' (number) - A value of 0 places the item specified by index at the top, 1 at the bottom, and 0.5 centered in the middle.'}
                    />
                    <ComponentProperty
                        status={''}
                        type={''}
                        name={'recordInteraction()'}
                        description={'recordInteraction();\nTells the list an interaction has occured, which should trigger viewability calculations, e.g. if \'waitForInteractions\' is true and the user has not scrolled. This is typically called by taps on items or by navigation actions.'}
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
    list: {
        height: '20%',
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
    listSection: {
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: 'bold',
        backgroundColor: 'gray',
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
});