import React, { Component } from 'react';
import {
    View,
    Text,
    WebView,
    StyleSheet,
    ScrollView,
} from 'react-native';
import ComponentDescription from '../ComponentDescription';

export default class UIWebView extends Component {
    render() {
        let sampleCode = '<View style={styles.container}>\n\t' +
            '<WebView\n\t' +
            'style={styles.webView}\n\t' +
            'source={{ uri: \'https://www.google.com/\' }}\n\t' +
            '/>\n' +
            '</View>';

        return (
            <View>
                <ScrollView>
                    <ComponentDescription
                        title={'Description'}
                        description={'WebView renders web content in a native view.\n\n' +
                            'You can use this component to navigate back and forth in the web view\'s history and configure various properties for the web content.\n\n' +
                            'Security Warning: Currently, onMessage and postMessage do not allow specifying an origin. This can lead to cross-site scripting attacks if an unexpected document is loaded within a WebView instance. Please refer to the MDN documentation for Window.postMessage() for more details on the security implications of this.'}
                    />
                    <Text style={styles.heading}>
                        Props
                    </Text>
                    <ComponentProperty
                        status={'optional'}
                        type={'object: {uri: string,method: string,headers: object,body: string}, ,object: {html: string,baseUrl: string}, ,number'}
                        name={'source'}
                        description={'Loads static html or a uri (with optional headers) in the WebView.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'automaticallyAdjustContentInsets'}
                        description={'Controls whether to adjust the content inset for web views that are placed behind a navigation bar, tab bar, or toolbar. The default value is true.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'injectJavaScript'}
                        description={'Function that accepts a string that will be passed to the WebView and executed immediately as JavaScript.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'string'}
                        name={'injectedJavaScript'}
                        description={'Set this to provide JavaScript that will be injected into the web page when the view loads.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'mediaPlaybackRequiresUserAction'}
                        description={'Boolean that determines whether HTML5 audio and video requires the user to tap them before they start playing. The default value is true.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'object: {component: any,props: object,viewManager: object}'}
                        name={'nativeConfig'}
                        description={'Override the native component used to render the WebView. Enables a custom native WebView which uses the same JavaScript as the original WebView.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onError'}
                        description={'Function that is invoked when the WebView load fails.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onLoad'}
                        description={'Function that is invoked when the WebView has finished loading.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onLoadEnd'}
                        description={'Function that is invoked when the WebView load succeeds or fails.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onLoadStart'}
                        description={'Function that is invoked when the WebView starts loading.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onMessage'}
                        description={'A function that is invoked when the webview calls window.postMessage. Setting this property will inject a postMessage global into your webview, but will still call pre-existing values of postMessage.\n\n' +
                            'window.postMessage accepts one argument, data, which will be available on the event object, event.nativeEvent.data. data must be a string.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onNavigationStateChange'}
                        description={'Function that is invoked when the WebView loading starts or ends.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'renderError'}
                        description={'Function that returns a view to show if there\'s an error.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'renderLoading'}
                        description={'Function that returns a loading indicator.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'scalesPageToFit'}
                        description={'Boolean that controls whether the web content is scaled to fit the view and enables the user to change the scale. The default value is true.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'number'}
                        name={'initialScale (Android)'}
                        description={'Number that controls whether the initial scale percentage of the view. 50 is 50%, 100 is 100%, etc. Used only in Android.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'number'}
                        name={'onShouldStartLoadWithRequest (iOS)'}
                        description={'Function that allows custom handling of any web view requests. Return true from the function to continue loading the request and false to stop loading.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'startInLoadingState'}
                        description={'Boolean value that forces the WebView to show the loading view on the first load.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'View.style'}
                        name={'style'}
                        description={'The style to apply to the WebView.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'ScrollView.propTypes.decelerationRate'}
                        name={'decelerationRate (iOS)'}
                        description={'A floating-point number that determines how quickly the scroll view decelerates after the user lifts their finger. You may also use the string shortcuts "normal" and "fast" which match the underlying iOS settings for UIScrollViewDecelerationRateNormal and UIScrollViewDecelerationRateFast respectively:\n\n\t' +
                            '* normal: 0.998\n\t' +
                            '* fast: 0.99 (the default for iOS web view)'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'domStorageEnabled (Android)'}
                        description={'Boolean value to control whether DOM Storage is enabled. Used only in Android.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'javaScriptEnabled (Android)'}
                        description={'Boolean value to enable JavaScript in the WebView. Used on Android only as JavaScript is enabled by default on iOS. The default value is true.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'enum(\'never\', \'always\', \'compatibility\')'}
                        name={'mixedContentMode (Android)'}
                        description={'Specifies the mixed content mode. i.e WebView will allow a secure origin to load content from any other origin.\n\n' +
                            'Possible values for mixedContentMode are:\n\n\t' +
                            '* \'never\' (default) - WebView will not allow a secure origin to load content from an insecure origin.\n\t' +
                            '* \'always\' - WebView will allow a secure origin to load content from any other origin, even if that origin is insecure.\n\t' +
                            '* \'compatibility\' - WebView will attempt to be compatible with the approach of a modern web browser with regard to mixed content.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'thirdPartyCookiesEnabled (Android)'}
                        description={'Boolean value to enable third party cookies in the WebView. Used on Android Lollipop and above only as third party cookies are enabled by default on Android Kitkat and below and on iOS. The default value is true.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'string'}
                        name={'userAgent (Android)'}
                        description={'Sets the user-agent for the WebView.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'string'}
                        name={'allowsInlineMediaPlayback (iOS)'}
                        description={'Boolean that determines whether HTML5 videos play inline or use the native full-screen controller. The default value is false.\n\n' +
                            'NOTE : In order for video to play inline, not only does this property need to be set to true, but the video element in the HTML document must also include the webkit-playsinline attribute.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'bounces (iOS)'}
                        description={'Boolean value that determines whether the web view bounces when it reaches the edge of the content. The default value is true.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'object: {top: number, left: number, bottom: number, right: number}'}
                        name={'contentInset (iOS)'}
                        description={'The amount by which the web view content is inset from the edges of the scroll view. Defaults to {top: 0, left: 0, bottom: 0, right: 0}.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'enum(\'phoneNumber\', \'link\', \'address\', \'calendarEvent\', \'none\', \'all\'), ,array of enum(\'phoneNumber\', \'link\', \'address\', \'calendarEvent\', \'none\', \'all\')'}
                        name={'dataDetectorTypes (iOS)'}
                        description={'Determines the types of data converted to clickable URLs in the web view\'s content. By default only phone numbers are detected.\n\n' +
                            'You can provide one type or an array of many types.\n\n' +
                            'Possible values for dataDetectorTypes are:\n\t' +
                            '* \'phoneNumber\'\n\t' +
                            '* \'link\'\n\t' +
                            '* \'address\'\n\t' +
                            '* \'calendarEvent\'\n\t' +
                            '* \'none\'\n\t' +
                            '* \'all\''}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'scrollEnabled (iOS)'}
                        description={'Boolean value that determines whether scrolling is enabled in the WebView. The default value is true.'}
                    />
                    <Text style={styles.heading}>
                        Methods
                    </Text>
                    <ComponentProperty
                        status={''}
                        type={''}
                        name={'extraNativeComponentConfig()'}
                        description={'static extraNativeComponentConfig()'}
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
        flex: 1,
    },
    webView: {
        marginTop: 10,
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