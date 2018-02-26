import React, { Component } from 'react';
import {
    View,
    Text,
    ViewPagerAndroid,
    StyleSheet,
    ScrollView,
} from 'react-native';
import ComponentDescription from '../ComponentDescription';

export default class UIViewPager extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title,
    });

    render() {

        let sampleCode = '<ViewPagerAndroid\n\t' +
            'style={styles.viewPager}\n\t' +
            'initialPage={0}>\n\t' +
            '<View style={{backgroundColor: \'red\', alignItems: \'center\', justifyContent: \'center\',}}>\n\t\t' +
            '<Text style={styles.pageTitle}>First page</Text>\n\t' +
            '</View>\n\t' +
            '<View style={{backgroundColor: \'green\', alignItems: \'center\', justifyContent: \'center\',}}>\n\t' +
            '<Text style={styles.pageTitle}>Second page</Text>\n\t' +
            '</View>\n\t' +
            '<View style={{backgroundColor: \'orange\', alignItems: \'center\', justifyContent: \'center\',}}>\n\t' +
            '<Text style={styles.pageTitle}>Third page</Text>\n\t' +
            '</View>\n' +
            '</ViewPagerAndroid>';

        return (
            <ViewPagerAndroid
                style={styles.viewPager}
                initialPage={2}
            >
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <ScrollView>
                        <ComponentDescription
                            title={'Description'}
                            description={'Container that allows to flip left and right between child views. Each child view of the ViewPagerAndroid will be treated as a separate page and will be stretched to fill the ViewPagerAndroid.\n\n' +
                                'It is important all children are <View>s and not composite components. You can set style properties like padding or backgroundColor for each child. It is also important that each child have a key prop.'}
                        />
                        <Text style={styles.heading}>
                            Props
                        </Text>
                        <ComponentProperty
                            status={'optional'}
                            type={'number'}
                            name={'initialPage'}
                            description={'Index of initial page that should be selected. Use setPage method to update the page, and onPageSelected to monitor page changes'}
                        />
                        <ComponentProperty
                            status={'optional'}
                            type={'enum(\'none\', \'on-drag\')'}
                            name={'keyboardDismissMode'}
                            description={'Determines whether the keyboard gets dismissed in response to a drag.\n\n\t' +
                                '* \'none\' (the default), drags do not dismiss the keyboard.\n\t' +
                                '* \'on-drag\', the keyboard is dismissed when a drag begins.'}
                        />
                        <ComponentProperty
                            status={'optional'}
                            type={'function'}
                            name={'onPageScroll'}
                            description={'Executed when transitioning between pages (ether because of animation for the requested page change or when user is swiping/dragging between pages) The event.nativeEvent object for this callback will carry following data:\n\n\t' +
                                '* position - index of first page from the left that is currently visible\n\t' +
                                '* offset - value from range [0,1) describing stage between page transitions. Value x means that (1 - x) fraction of the page at "position" index is visible, and x fraction of the next page is visible.'}
                        />
                        <ComponentProperty
                            status={'optional'}
                            type={'function'}
                            name={'onPageScrollStateChanged'}
                            description={'Function called when the page scrolling state has changed. The page scrolling state can be in 3 states:\n\n\t' +
                                '* idle, meaning there is no interaction with the page scroller happening at the time\n\t' +
                                '* dragging, meaning there is currently an interaction with the page scroller\n\t' +
                                '* settling, meaning that there was an interaction with the page scroller, and the page scroller is now finishing it\'s closing or opening animation'}
                        />
                        <ComponentProperty
                            status={'optional'}
                            type={'function'}
                            name={'onPageSelected'}
                            description={'This callback will be called once ViewPager finish navigating to selected page (when user swipes between pages). The event.nativeEvent object passed to this callback will have following fields:\n\n\t' +
                                '* position - index of page that has been selected'}
                        />
                        <ComponentProperty
                            status={'optional'}
                            type={'number'}
                            name={'pageMargin'}
                            description={'Blank space to show between pages. This is only visible while scrolling, pages are still edge-to-edge.'}
                        />
                        <ComponentProperty
                            status={'optional'}
                            type={'bool'}
                            name={'peekEnabled'}
                            description={'Whether enable showing peekFraction or not. If this is true, the preview of last and next page will show in current screen. Defaults to false.'}
                        />
                        <ComponentProperty
                            status={'optional'}
                            type={'bool'}
                            name={'scrollEnabled'}
                            description={'When false, the content does not scroll. The default value is true.'}
                        />
                        <Text style={styles.heading}> Sample Code </Text>
                        <Text style={styles.text}> {sampleCode} </Text>
                    </ScrollView>
                </View>
                <View style={{ backgroundColor: 'green', alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={styles.pageTitle}>Second page</Text>
                </View>
                <View style={{ backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={styles.pageTitle}>Third page</Text>
                </View>
            </ViewPagerAndroid>
        );
    }
}

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
    },
    pageTitle: {
        fontSize: 20,
        fontWeight: 'bold',
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