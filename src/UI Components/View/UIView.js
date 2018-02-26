import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
} from 'react-native';
import ComponentDescription from '../ComponentDescription';

export default class UIView extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title,
    });

    render() {

        let sampleCode = '<View\n\t' +
        'style={styles.container}>\n\t' +
        '<View style={{ backgroundColor: \'green\', flex: 0.3 }} />\n\t' +
        '<View style={{ backgroundColor: \'red\', flex: 0.5, marginHorizontal: 10 }} />\n\t' +
        '<View style={{ backgroundColor: \'blue\', flex: 0.5 }} />\n' +
        '</View>';

        return (
            <View>
                <ScrollView>
                    <ComponentDescription
                        title={'Description'}
                        description={'The most fundamental component for building a UI, View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls. View maps directly to the native view equivalent on whatever platform React Native is running on, whether that is a UIView, <div>, android.view, etc.\n\n' +
                            'View is designed to be nested inside other views and can have 0 to many children of any type.\n\n' +
                            'Views are designed to be used with StyleSheet for clarity and performance, although inline styles are also supported.\n\n' +
                            'Synthetic Touch Events\n' +
                            'For View responder props (e.g., onResponderMove), the synthetic touch event passed to them are of the following form:\n\n\t' +
                            '* nativeEvent\n\t' +
                            '* changedTouches - Array of all touch events that have changed since the last event.\n\t' +
                            '* identifier - The ID of the touch.\n\t' +
                            '* locationX - The X position of the touch, relative to the element.\n\t' +
                            '* locationY - The Y position of the touch, relative to the element.\n\t' +
                            '* pageX - The X position of the touch, relative to the root element.\n\t' +
                            '* pageY - The Y position of the touch, relative to the root element.\n\t' +
                            '* target - The node id of the element receiving the touch event.\n\t' +
                            '* timestamp - A time identifier for the touch, useful for velocity calculation.\n\t' +
                            '* touches - Array of all current touches on the screen.'}
                    />
                    <View
                        style={styles.container}>
                        <View style={{ backgroundColor: 'green', flex: 0.3 }} />
                        <View style={{ backgroundColor: 'red', flex: 0.5, marginHorizontal: 10 }} />
                        <View style={{ backgroundColor: 'blue', flex: 0.5 }} />
                    </View>
                    <Text style={styles.heading}>
                        Props
                    </Text>
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onStartShouldSetResponder'}
                        description={'Does this view want to become responder on the start of a touch?\n\n' +
                            'View.props.onStartShouldSetResponder: (event) => [true | false], where event is a synthetic touch event as described above.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'node'}
                        name={'accessibilityLabel'}
                        description={'Overrides the text that\'s read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the Text nodes separated by space.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'object: {top: number, left: number, bottom: number, right: number}'}
                        name={'hitSlop'}
                        description={'This defines how far a touch event can start away from the view. Typical interface guidelines recommend touch targets that are at least 30 - 40 points/density-independent pixels.\n\n' +
                            'For example, if a touchable view has a height of 20 the touchable height can be extended to 40 with hitSlop={{top: 10, bottom: 10, left: 0, right: 0}}\n\n' +
                            'The touch area never extends past the parent view bounds and the Z-index of sibling views always takes precedence if a touch hits two overlapping views.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'string'}
                        name={'nativeID'}
                        description={'Used to locate this view from native classes.\n\n' +
                            'This disables the \'layout-only view removal\' optimization for this view!'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onAccessibilityTap'}
                        description={'When accessible is true, the system will try to invoke this function when the user performs accessibility tap gesture.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onLayout'}
                        description={'Invoked on mount and layout changes with:\n\n' +
                            '{nativeEvent: { layout: {x, y, width, height}}}\n\n' +
                            'This event is fired immediately once the layout has been calculated, but the new layout may not yet be reflected on the screen at the time the event is received, especially if a layout animation is in progress.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onMagicTap'}
                        description={'When accessible is true, the system will invoke this function when the user performs the magic tap gesture.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onMoveShouldSetResponder'}
                        description={'Does this view want to "claim" touch responsiveness? This is called for every touch move on the View when it is not the responder.\n\n' +
                            'View.props.onMoveShouldSetResponder: (event) => [true | false], where event is a synthetic touch event as described above.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onMoveShouldSetResponderCapture'}
                        description={'If a parent View wants to prevent a child View from becoming responder on a move, it should have this handler which returns true.\n\n' +
                            'View.props.onMoveShouldSetResponderCapture: (event) => [true | false], where event is a synthetic touch event as described above.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onResponderGrant'}
                        description={'The View is now responding for touch events. This is the time to highlight and show the user what is happening.\n\n' +
                            'View.props.onResponderGrant: (event) => {}, where event is a synthetic touch event as described above.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onResponderMove'}
                        description={'The user is moving their finger.\n\n' +
                            'View.props.onResponderMove: (event) => {}, where event is a synthetic touch event as described above.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onResponderReject'}
                        description={'Another responder is already active and will not release it to that View asking to be the responder.\n\n' +
                            'View.props.onResponderReject: (event) => {}, where event is a synthetic touch event as described above.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onResponderRelease'}
                        description={'Fired at the end of the touch.\n\n' +
                            'View.props.onResponderRelease: (event) => {}, where event is a synthetic touch event as described above.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onResponderTerminate'}
                        description={'The responder has been taken from the View. Might be taken by other views after a call to onResponderTerminationRequest, or might be taken by the OS without asking (e.g., happens with control center/ notification center on iOS)\n\n' +
                            'View.props.onResponderTerminate: (event) => {}, where event is a synthetic touch event as described above.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onResponderTerminationRequest'}
                        description={'Some other View wants to become responder and is asking this View to release its responder. Returning true allows its release.\n\n' +
                            'View.props.onResponderTerminationRequest: (event) => {}, where event is a synthetic touch event as described above.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'accessible'}
                        description={'When true, indicates that the view is an accessibility element. By default, all the touchable elements are accessible.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onStartShouldSetResponderCapture'}
                        description={'If a parent View wants to prevent a child View from becoming responder on a touch start, it should have this handler which returns true.\n\n' +
                            'View.props.onStartShouldSetResponderCapture: (event) => [true | false], where event is a synthetic touch event as described above.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'enum(\'box-none\', \'none\', \'box-only\', \'auto\')'}
                        name={'pointerEvents'}
                        description={'Controls whether the View can be the target of touch events.\n\t' +
                            '* \'auto\': The View can be the target of touch events.\n\t' +
                            '* \'none\': The View is never the target of touch events.\n\t' +
                            '* \'box-none\': The View is never the target of touch events but it\'s subviews can be.\n\t' +
                            '* \'box-only\': The view can be the target of touch events but it\'s subviews cannot be.\n\n' +
                            'Since pointerEvents does not affect layout/appearance, and we are already deviating from the spec by adding additional modes, we opt to not include pointerEvents on style. On some platforms, we would need to implement it as a className anyways. Using style or not is an implementation detail of the platform.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'removeClippedSubviews'}
                        description={'This is a special performance property exposed by RCTView and is useful for scrolling content when there are many subviews, most of which are offscreen. For this property to be effective, it must be applied to a view that contains many subviews that extend outside its bound. The subviews must also have overflow: hidden, as should the containing view (or one of its superviews).'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'string'}
                        name={'testID'}
                        description={'Used to locate this view in end-to-end tests.\n\n' +
                            'This disables the \'layout-only view removal\' optimization for this view!'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'AccessibilityComponentTypes'}
                        name={'accessibilityComponentType (Android)'}
                        description={'Indicates to accessibility services to treat UI component like a native one. Works for Android only. Possible values are one of:\n\t' +
                            '* \'none\'\n' +
                            '* \'button\'\n' +
                            '* \'radiobutton_checked\'\n' +
                            '* \'radiobutton_unchecked\''}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'enum(\'none\', \'polite\', \'assertive\')'}
                        name={'accessibilityLiveRegion (Android)'}
                        description={'Indicates to accessibility services whether the user should be notified when this view changes. Works for Android API >= 19 only. Possible values:\n\t' +
                            '* \'none\' - Accessibility services should not announce changes to this view.\n' +
                            '* \'polite\' - Accessibility services should announce changes to this view.\n' +
                            '* \'assertive\' - Accessibility services should interrupt ongoing speech to immediately announce changes to this view.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'collapsable (Android)'}
                        description={'Views that are only used to layout their children or otherwise don\'t draw anything may be automatically removed from the native hierarchy as an optimization. Set this property to false to disable this optimization and ensure that this View exists in the native view hierarchy.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'enum(\'auto\', \'yes\', \'no\', \'no-hide-descendants\')'}
                        name={'importantForAccessibility (Android)'}
                        description={'Controls how view is important for accessibility which is if it fires accessibility events and if it is reported to accessibility services that query the screen. Works for Android only. Possible values:\n\t' +
                            '* \'auto\' - The system determines whether the view is important for accessibility - default (recommended).\n' +
                            '* \'yes\' - The view is important for accessibility.\n' +
                            '* \'no\' - The view is not important for accessibility.\n' +
                            '* \'no-hide-descendants\' - The view is not important for accessibility, nor are any of its descendant views.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'needsOffscreenAlphaCompositing (Android)'}
                        description={'Whether this View needs to rendered offscreen and composited with an alpha in order to preserve 100% correct colors and blending behavior. The default (false) falls back to drawing the component and its children with an alpha applied to the paint used to draw each element instead of rendering the full component offscreen and compositing it back with an alpha value. This default may be noticeable and undesired in the case where the View you are setting an opacity on has multiple overlapping elements (e.g. multiple overlapping Views, or text and a background).\n\n' +
                            'Rendering offscreen to preserve correct alpha behavior is extremely expensive and hard to debug for non-native developers, which is why it is not turned on by default. If you do need to enable this property for an animation, consider combining it with renderToHardwareTextureAndroid if the view contents are static (i.e. it doesn\'t need to be redrawn each frame). If that property is enabled, this View will be rendered off-screen once, saved in a hardware texture, and then composited onto the screen with an alpha each frame without having to switch rendering targets on the GPU.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'renderToHardwareTextureAndroid (Android)'}
                        description={'Whether this View should render itself (and all of its children) into a single hardware texture on the GPU.\n\n' +
                            'On Android, this is useful for animations and interactions that only modify opacity, rotation, translation, and/or scale: in those cases, the view doesn\'t have to be redrawn and display lists don\'t need to be re-executed. The texture can just be re-used and re-composited with different parameters. The downside is that this can use up limited video memory, so this prop should be set back to false at the end of the interaction/animation.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'AccessibilityTraits, ,array of AccessibilityTraits'}
                        name={'accessibilityTraits (iOS)'}
                        description={'Provides additional traits to screen reader. By default no traits are provided unless specified otherwise in element.\n\n' +
                            'You can provide one trait or an array of many traits.\n\n' +
                            'Possible values for AccessibilityTraits are:\n\t' +
                            '* \'none\' - The element has no traits.\n\t' +
                            '* \'button\' - The element should be treated as a button.\n\t' +
                            '* \'link\' - The element should be treated as a link.\n\t' +
                            '* \'header\' - The element is a header that divides content into sections.\n\t' +
                            '* \'search\' - The element should be treated as a search field.\n\t' +
                            '* \'image\' - The element should be treated as an image.\n\t' +
                            '* \'selected\' - The element is selected.\n\t' +
                            '* \'plays\' - The element plays sound.\n\t' +
                            '* \'key\' - The element should be treated like a keyboard key.\n\t' +
                            '* \'text\' - The element should be treated as text.\n\t' +
                            '* \'summary\' - The element provides app summary information.\n\t' +
                            '* \'disabled\' - The element is disabled.\n\t' +
                            '* \'frequentUpdates\' - The element frequently changes its value.\n\t' +
                            '* \'startsMedia\' - The element starts a media session.\n\t' +
                            '* \'adjustable\' - The element allows adjustment over a range of values.\n\t' +
                            '* \'allowsDirectInteraction\' - The element allows direct touch interaction for VoiceOver users.\n\t' +
                            '* \'pageTurn\' - Informs VoiceOver that it should scroll to the next page when it finishes reading the contents of the element.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'accessibilityViewIsModal (iOS)'}
                        description={'A value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver. Default is false.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'shouldRasterizeIOS (iOS)'}
                        description={'Whether this View should be rendered as a bitmap before compositing.\n\n' +
                            'On iOS, this is useful for animations and interactions that do not modify this component\'s dimensions nor its children; for example, when translating the position of a static view, rasterization allows the renderer to reuse a cached bitmap of a static view and quickly composite it during each frame.\n\n' +
                            'Rasterization incurs an off-screen drawing pass and the bitmap consumes memory. Test and measure when using this property.'}
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
        flexDirection: 'row',
        height: 100,
        marginHorizontal: 10,
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