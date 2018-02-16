import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TextInput,
    RefreshControl,
    Button,
} from 'react-native';
import ComponentDescription from '../ComponentDescription';

export default class UIScrollView extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title,
    });

    constructor(props) {
        super(props)

        this.state = {
            isRefreshing: false,
        };
    };

    _scrollViewDidBeginScroll() {
        console.log('Begin scrolling');
    }

    _scrollViewDidEndScroll() {
        console.log('End scrolling');
    }

    _scrollViewDidScroll() {
        console.log('scrolling');
    }

    _refresh = () => {
        console.log('refreshing');
        this.setState({ isRefreshing: true })
        setInterval(() => {
            this.setState({ isRefreshing: false })
        }, 2000)
    }

    render() {

        let sampleCode = '<ScrollView\n\t' +
            'ref={\'scrollView\'}\n\t' +
            'scrollEnabled={true}\n\t' +
            'horizontal={false}\n\t' +
            'showsHorizontalScrollIndicator={false}\n\t' +
            'showsVerticalScrollIndicator={true}\n\t' +
            'stickyHeaderIndices={[0]}\n\t' +
            'endFillColor={\'green\'}\n\t' +
            'overScrollMode={\'auto\'}\n\t' +
            'contentContainerStyle={styles.contentContainer}\n\t' +
            'keyboardDismissMode={\'none\'}\n\t' +
            'keyboardShouldPersistTaps={\'handled\'}\n\t' +
            'onMomentumScrollBegin={this._scrollViewDidBeginScroll}\n\t' +
            'onMomentumScrollEnd={this._scrollViewDidEndScroll}\n\t' +
            'onScroll={this._scrollViewDidScroll}\n\t' +
            'refreshControl={\n\t\t' +
            '<RefreshControl\n\t\t\t' +
            'refreshing={this.state.isRefreshing}\n\t\t\t' +
            'onRefresh={this._refresh}\n\t\t' +
            '/>\n\t' +
            '}\n' +
            '>\n' +
            '</ScrollView>';

        return (
            <ScrollView
                ref={'scrollView'}
                scrollEnabled={true}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={true}
                stickyHeaderIndices={[0]}
                endFillColor={'green'}
                overScrollMode={'auto'}
                contentContainerStyle={styles.contentContainer}
                keyboardDismissMode={'none'}
                keyboardShouldPersistTaps={'handled'}
                onMomentumScrollBegin={this._scrollViewDidBeginScroll}
                onMomentumScrollEnd={this._scrollViewDidEndScroll}
                onScroll={this._scrollViewDidScroll}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._refresh}
                    />
                }
            >
                <View style={styles.item}>
                    <TextInput style={{ width: '100%' }}
                        placeholder={'Text Input'}
                    />
                </View>
                <View style={styles.item}>
                    <Text> Item </Text>
                </View>
                <View style={styles.item}>
                    <Button
                        title={'Go to end'}
                        onPress={() => {
                            this.refs.scrollView.scrollToEnd();
                        }}
                    />
                </View>
                <View style={styles.item}>
                    <Text> Item </Text>
                </View>
                <ScrollView style={{ height: 100 }}
                    horizontal={true}
                    pagingEnabled={true}
                >
                    <View style={styles.horizontalItem}>
                        <Text> Item </Text>
                    </View>
                    <View style={styles.horizontalItem}>
                        <Text> Item </Text>
                    </View>
                    <View style={styles.horizontalItem}>
                        <Text> Item </Text>
                    </View>
                    <View style={styles.horizontalItem}>
                        <Text> Item </Text>
                    </View>
                </ScrollView>
                <View style={styles.item}>
                    <Text> Item </Text>
                </View>
                <View style={styles.item}>
                    <Text> Item </Text>
                </View>
                <View style={styles.item}>
                    <Text> Item </Text>
                </View>
                <View style={styles.item}>
                    <Text> Item </Text>
                </View>
                <ComponentDescription
                    title={'Description'}
                    description={'Component that wraps platform ScrollView while providing integration with touch locking "responder" system.\n\n' +
                        'Keep in mind that ScrollViews must have a bounded height in order to work, since they contain unbounded-height children into a bounded container (via a scroll interaction). In order to bound the height of a ScrollView, either set the height of the view directly (discouraged) or make sure all parent views have bounded height. Forgetting to transfer \'{flex: 1}\' down the view stack can lead to errors here, which the element inspector makes easy to debug.\n\n' +
                        'Doesn\'t yet support other contained responders from blocking this scroll view from becoming the responder.\n\n' +
                        '\'<ScrollView>\' vs \'<FlatList>\' - which one to use?\n\n' +
                        '\'ScrollView\' simply renders all its react child components at once. That makes it very easy to understand and use.\n\n' +
                        'On the other hand, this has a performance downside. Imagine you have a very long list of items you want to display, maybe several screens worth of content. Creating JS components and native views for everything all at once, much of which may not even be shown, will contribute to slow rendering and increased memory usage.\n\n' +
                        'This is where \'FlatList\' comes into play. \'FlatList\' renders items lazily, just when they are about to appear, and removes items that scroll way off screen to save memory and processing time.\n\n' +
                        '\'FlatList\' is also handy if you want to render separators between your items, multiple columns, infinite scroll loading, or any number of other features it supports out of the box.'}
                />
                <Text style={styles.heading}>
                    Props
                    </Text>
                <ComponentProperty
                    status={'optional'}
                    type={'bool'}
                    name={'alwaysBounceVertical (iOS)'}
                    description={'When true, the scroll view bounces vertically when it reaches the end even if the content is smaller than the scroll view itself. The default value is false when \'horizontal={true}\' and true otherwise.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'StyleSheetPropType(View Style props)'}
                    name={'contentContainerStyle'}
                    description={'These styles will be applied to the scroll view content container which wraps all of the child views. '}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'enum(\'none\', \'on-drag\', \'interactive\')'}
                    name={'keyboardDismissMode'}
                    description={'Determines whether the keyboard gets dismissed in response to a drag.\n' +
                        'Cross platform\n\t' +
                        '* \'none\' (the default), drags do not dismiss the keyboard.\n\t' +
                        '* \'on-drag\', the keyboard is dismissed when a drag begins.\n' +
                        'iOS Only\n\t' +
                        '* \'interactive\', the keyboard is dismissed interactively with the drag and moves in synchrony with the touch; dragging upwards cancels the dismissal. On android this is not supported and it will have the same behavior as \'none\'.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'enum(\'always\', \'never\', \'handled\')'}
                    name={'keyboardShouldPersistTaps'}
                    description={'Determines when the keyboard should stay visible after a tap.\n' +
                        '* \'never\' (the default), tapping outside of the focused text input when the keyboard is up dismisses the keyboard. When this happens, children won\'t receive the tap.\n\t' +
                        '* \'always\', the keyboard will not dismiss automatically, and the scroll view will not catch taps, but children of the scroll view can catch taps.\n' +
                        '* \'handled\', the keyboard will not dismiss automatically when the tap was handled by a children, (or captured by an ancestor).'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'function'}
                    name={'onContentSizeChange'}
                    description={'Called when scrollable content view of the ScrollView changes.\n' +
                        'Handler function is passed the content width and content height as parameters: \'(contentWidth, contentHeight)\'\n' +
                        'It\'s implemented using onLayout handler attached to the content container which this ScrollView renders.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'function'}
                    name={'onMomentumScrollBegin'}
                    description={'Called when the momentum scroll starts (scroll which occurs as the ScrollView glides to a stop).'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'function'}
                    name={'onMomentumScrollEnd'}
                    description={'Called when the momentum scroll ends (scroll which occurs as the ScrollView glides to a stop).'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'function'}
                    name={'onScroll'}
                    description={'Fires at most once per frame during scrolling. The frequency of the events can be controlled using the \'scrollEventThrottle\' prop.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'bool'}
                    name={'pagingEnabled'}
                    description={'When true, the scroll view stops on multiples of the scroll view\'s size when scrolling. This can be used for horizontal pagination. The default value is false.\n' +
                        'Note: Vertical pagination is not supported on Android.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'element'}
                    name={'refreshControl'}
                    description={'A RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView. Only works for vertical ScrollViews (\'horizontal\' prop must be \'false\').'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'bool'}
                    name={'removeClippedSubviews'}
                    description={'Experimental: When true, offscreen child views (whose \'overflow\' value is \'hidden\') are removed from their native backing superview when offscreen. This can improve scrolling performance on long lists. The default value is true.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'bool'}
                    name={'scrollEnabled'}
                    description={'When false, the view cannot be scrolled via touch interaction. The default value is true.\n' +
                        'Note that the view can always be scrolled by calling \'scrollTo.\''}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'bool'}
                    name={'showsHorizontalScrollIndicator'}
                    description={'When true, shows a horizontal scroll indicator. The default value is true.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'bool'}
                    name={'showsVerticalScrollIndicator'}
                    description={'When true, shows a vertical scroll indicator. The default value is true.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'array of number'}
                    name={'stickyHeaderIndices'}
                    description={'An array of child indices determining which children get docked to the top of the screen when scrolling. For example, passing \'stickyHeaderIndices={[0]}\' will cause the first child to be fixed to the top of the scroll view. This property is not supported in conjunction with \'horizontal={true}\'.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'color'}
                    name={'endFillColor (Android)'}
                    description={'Sometimes a scrollview takes up more space than its content fills. When this is the case, this prop will fill the rest of the scrollview with a color to avoid setting a background and creating unnecessary overdraw. This is an advanced optimization that is not needed in the general case.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'enum(\'auto\', \'always\', \'never\')'}
                    name={'overScrollMode (Android)'}
                    description={'Used to override default value of overScroll mode.\n' +
                        'Possible values:\n\t' +
                        '* \'auto\' - Default value, allow a user to over-scroll this view only if the content is large enough to meaningfully scroll.\n\t' +
                        '* \'always\' - Always allow a user to over-scroll this view.\n\t' +
                        '* \'never\' - Never allow a user to over-scroll this view.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'string'}
                    name={'scrollPerfTag (Android)'}
                    description={'Tag used to log scroll performance on this scroll view. Will force momentum events to be turned on (see sendMomentumEvents). This doesn\'t do anything out of the box and you need to implement a custom native FpsListener for it to be useful.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'bool'}
                    name={'alwaysBounceHorizontal (iOS)'}
                    description={'When true, the scroll view bounces horizontally when it reaches the end even if the content is smaller than the scroll view itself. The default value is true when \'horizontal={true}\' and false otherwise.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'bool'}
                    name={'horizontal'}
                    description={'When true, the scroll view\'s children are arranged horizontally in a row instead of vertically in a column. The default value is false.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'bool'}
                    name={'automaticallyAdjustContentInsets (iOS)'}
                    description={'Controls whether iOS should automatically adjust the content inset for scroll views that are placed behind a navigation bar or tab bar/ toolbar. The default value is true.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'bool'}
                    name={'bounces (iOS)'}
                    description={'When true, the scroll view bounces when it reaches the end of the content if the content is larger then the scroll view along the axis of the scroll direction. When false, it disables all bouncing even if the \'alwaysBounce*\' props are true. The default value is true.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'bool'}
                    name={'bouncesZoom (iOS)'}
                    description={'When true, gestures can drive zoom past min/max and the zoom will animate to the min/max value at gesture end, otherwise the zoom will not exceed the limits.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'bool'}
                    name={'canCancelContentTouches (iOS)'}
                    description={'When false, once tracking starts, won\'t try to drag if the touch moves. The default value is true.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'bool'}
                    name={'centerContent (iOS)'}
                    description={'When true, the scroll view automatically centers the content when the content is smaller than the scroll view bounds; when the content is larger than the scroll view, this property has no effect. The default value is false.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'object: {top: number, left: number, bottom: number, right: number}'}
                    name={'contentInset (iOS)'}
                    description={'The amount by which the scroll view content is inset from the edges of the scroll view. Defaults to \'{top: 0, left: 0, bottom: 0, right: 0}.\''}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'enum(\'automatic\', \'scrollableAxes\', \'never\', \'always\')'}
                    name={'contentInsetAdjustmentBehavior (iOS)'}
                    description={'This property specifies how the safe area insets are used to modify the content area of the scroll view. The default value of this property is "never". Available on iOS 11 and later.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'PointPropType'}
                    name={'contentOffset (iOS)'}
                    description={'Used to manually set the starting scroll offset. The default value is \'{x: 0, y: 0}.\''}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'enum(\'fast\', \'normal\'), ,number'}
                    name={'decelerationRate (iOS)'}
                    description={'A floating-point number that determines how quickly the scroll view decelerates after the user lifts their finger. You may also use string shortcuts "normal" and "fast" which match the underlying iOS settings for \'UIScrollViewDecelerationRateNormal\' and \'UIScrollViewDecelerationRateFast\' respectively.\n\t' +
                        '* \'normal\': 0.998(the default)\n\t' +
                        '* \'fast\': 0.99'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'bool'}
                    name={'directionalLockEnabled (iOS)'}
                    description={'When true, the ScrollView will try to lock to only vertical or horizontal scrolling while dragging. The default value is false.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'enum(\'default\', \'black\', \'white\')'}
                    name={'indicatorStyle (iOS)'}
                    description={'The style of the scroll indicators.\n\t' +
                        '* \'default\' (the default), same as \'black\'.\n\t' +
                        '* \'black\', scroll indicator is black. This style is good against a light background.\n\t' +
                        '* \'white\', scroll indicator is white. This style is good against a dark background.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'number'}
                    name={'maximumZoomScale (iOS)'}
                    description={'The maximum allowed zoom scale. The default value is 1.0.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'number'}
                    name={'minimumZoomScale (iOS)'}
                    description={'The minimum allowed zoom scale. The default value is 1.0.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'bool'}
                    name={'pinchGestureEnabled (iOS)'}
                    description={'When true, ScrollView allows use of pinch gestures to zoom in and out. The default value is true.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'number'}
                    name={'scrollEventThrottle (iOS)'}
                    description={'This controls how often the scroll event will be fired while scrolling (as a time interval in ms). A lower number yields better accuracy for code that is tracking the scroll position, but can lead to scroll performance problems due to the volume of information being send over the bridge. You will not notice a difference between values set between 1-16 as the JS run loop is synced to the screen refresh rate. If you do not need precise scroll position tracking, set this value higher to limit the information being sent across the bridge. The default value is zero, which results in the scroll event being sent only once each time the view is scrolled.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'object: {top: number, left: number, bottom: number, right: number}'}
                    name={'scrollIndicatorInsets (iOS)'}
                    description={'The amount by which the scroll view indicators are inset from the edges of the scroll view. This should normally be set to the same value as the \'contentInset\'. Defaults to \'{0, 0, 0, 0}\'.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'bool'}
                    name={'scrollsToTop (iOS)'}
                    description={'When true, the scroll view scrolls to top when the status bar is tapped. The default value is true.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'enum(\'start\', \'center\', \'end\')'}
                    name={'snapToAlignment (iOS)'}
                    description={'When \'snapToInterval\' is set, \'snapToAlignment\' will define the relationship of the snapping to the scroll view.\n\t' +
                        '* \'start\'  (the default) will align the snap at the left (horizontal) or top (vertical)\n\t' +
                        '* \'center\' will align the snap in the center\n\t' +
                        '* \'end\' will align the snap at the right (horizontal) or bottom (vertical)'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'number'}
                    name={'snapToInterval (iOS)'}
                    description={'When set, causes the scroll view to stop at multiples of the value of \'snapToInterval\'. This can be used for paginating through children that have lengths smaller than the scroll view. Typically used in combination with \'snapToAlignment\' and \'decelerationRate="fast"\'. Overrides less configurable \'pagingEnabled\' prop.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'number'}
                    name={'zoomScale (iOS)'}
                    description={'The current scale of the scroll view content. The default value is 1.0.'}
                />
                <Text style={styles.heading}>
                    Methods
                </Text>
                <ComponentProperty
                    status={''}
                    type={''}
                    name={'scrollTo()'}
                    description={'scrollTo(([y]: number), object, ([x]: number), ([animated]: boolean));\nScrolls to a given x, y offset, either immediately or with a smooth animation.\n' +
                        'Example:\n' +
                        'scrollTo({x: 0, y: 0, animated: true})\n' +
                        'Note: The weird function signature is due to the fact that, for historical reasons, the function also accepts separate arguments as an alternative to the options object. This is deprecated due to ambiguity (y before x), and SHOULD NOT BE USED.'}
                />
                <ComponentProperty
                    status={''}
                    type={''}
                    name={'scrollToEnd()'}
                    description={'scrollToEnd(([options]: object));\nIf this is a vertical ScrollView scrolls to the bottom. If this is a horizontal ScrollView scrolls to the right.\n' +
                        'Use \'scrollToEnd({animated: true})\' for smooth animated scrolling, \'scrollToEnd({animated: false})\' for immediate scrolling. If no options are passed, \'animated\' defaults to true.'}
                />
                <ComponentProperty
                    status={''}
                    type={''}
                    name={'flashScrollIndicators()'}
                    description={'flashScrollIndicators();\nDisplays the scroll indicators momentarily.'}
                />
                <Text style={styles.heading}>
                    Sample Code
                    </Text>
                <Text style={styles.text}>
                    {sampleCode}
                </Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20,
    },
    item: {
        margin: 10,
        borderColor: 'red',
        borderWidth: 2,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    horizontalItem: {
        margin: 10,
        borderColor: 'red',
        borderWidth: 2,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
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
});