import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
} from 'react-native';
import ComponentDescription from '../ComponentDescription';
import ComponentProperty from '../ComponentProperty';

export default class UITextInput extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title
    })

    _onChangeText = (text) => {
        console.log(text);
    }

    _onEndEditing = () => {
        console.log('End editing');
    }

    _focusOnNextTextInput(ref) {
        this.refs[ref].focus();
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <ComponentDescription
                        title={'Description'}
                        description={'A foundational component for inputting text into the app via a keyboard. Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad.\n\n' +
                            'The simplest use case is to plop down a TextInput and subscribe to the onChangeText events to read the user input. There are also other events, such as onSubmitEditing and onFocus that can be subscribed to.\n\n' +
                            'Two methods exposed via the native element are .focus() and .blur() that will focus or blur the TextInput programmatically.\n\n' +
                            'Note that some props are only available with multiline={true/false}. Additionally, border styles that apply to only one side of the element (e.g., borderBottomColor, borderLeftWidth, etc.) will not be applied if multiline=false. To achieve the same effect, you can wrap your TextInput in a View\n\n' +
                            'TextInput has by default a border at the bottom of its view. This border has its padding set by the background image provided by the system, and it cannot be changed. Solutions to avoid this is to either not set height explicitly, case in which the system will take care of displaying the border in the correct position, or to not display the border by setting underlineColorAndroid to transparent.\n\n' +
                            'Note that on Android performing text selection in input can change app\'s activity windowSoftInputMode param to adjustResize. This may cause issues with components that have position: \'absolute\' while keyboard is active. To avoid this behavior either specify windowSoftInputMode in AndroidManifest.xml ( https://developer.android.com/guide/topics/manifest/activity-element.html ) or control this param programmatically with native code.'}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='email'
                        placeholderTextColor='darkgray'
                        autoFocus={false}
                        editable={true}
                        keyboardType='email-address'
                        maxLength={10}
                        multiline={false}
                        onChangeText={this._onChangeText}
                        onEndEditing={this._onEndEditing}
                        onSubmitEditing={() =>
                            this._focusOnNextTextInput('2')
                        }
                        returnKeyType='next'
                        clearButtonMode='while-editing'
                        ref='1'
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='password'
                        placeholderTextColor='darkgray'
                        editable={true}
                        keyboardType='default'
                        maxLength={10}
                        multiline={false}
                        onChangeText={this._onChangeText}
                        onEndEditing={this._onEndEditing}
                        onSubmitEditing={() => { }}
                        returnKeyType='join'
                        autoCorrect={false}
                        secureTextEntry={true}
                        ref='2'
                    />
                    <Text style={styles.heading}>
                        Props
                    </Text>
                    <ComponentProperty
                        status={'optional'}
                        type={'color'}
                        name={'placeholderTextColor'}
                        description={'The text color of the placeholder string.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'allowFontScaling'}
                        description={'Specifies whether fonts should scale to respect Text Size accessibility settings. The default is true.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'autoCorrect'}
                        description={'If false, disables auto-correct. The default value is true.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'autoFocus'}
                        description={'If true, focuses the input on componentDidMount. The default value is false.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'blurOnSubmit'}
                        description={'If true, the text field will blur when submitted. The default value is true for single-line fields and false for multiline fields. Note that for multiline fields, setting blurOnSubmit to true means that pressing return will blur the field and trigger the onSubmitEditing event instead of inserting a newline into the field.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'caretHidden'}
                        description={'If true, caret is hidden. The default value is false.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'contextMenuHidden'}
                        description={'If true, context menu is hidden. The default value is false.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'string'}
                        name={'defaultValue'}
                        description={'Provides an initial value that will change when the user starts typing. Useful for simple use-cases where you do not want to deal with listening to events and updating the value prop to keep the controlled state in sync.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'editable'}
                        description={'If false, text is not editable. The default value is true.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'enum(\'default\', \'email-address\', \'numeric\', \'phone-pad\', \'ascii-capable\', \'numbers-and-punctuation\', \'url\', \'number-pad\', \'name-phone-pad\', \'decimal-pad\', \'twitter\', \'web-search\', \'visible-password\')'}
                        name={'keyboardType'}
                        description={'Determines which keyboard to open, e.g.numeric.\n\n' +
                            'The following values work across platforms:\n\t' +
                            '* default\n\t' +
                            '* numeric\n\t' +
                            '* email-address\n\t' +
                            '* phone-pad\n' +
                            'iOS Only\n' +
                            'The following values work on iOS only:\n' +
                            '* ascii-capable\n\t' +
                            '* numbers-and-punctuation\n\t' +
                            '* url\n\t' +
                            '* number-pad\n\t' +
                            '* name-phone-pad\n\t' +
                            '* decimal-pad\n\t' +
                            '* twitter\n\t' +
                            '* web-search\n' +
                            'Android Only\n' +
                            'The following values work on Android only:\n' +
                            '* visible-password'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'number'}
                        name={'maxHeight'}
                        description={'If autogrow is true, limits the height that the TextInput box can grow to. Once it reaches this height, the TextInput becomes scrollable.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'number'}
                        name={'maxLength'}
                        description={'Limits the maximum number of characters that can be entered. Use this instead of implementing the logic in JS to avoid flicker.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'multiline'}
                        description={'If true, the text input can be multiple lines. The default value is false.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onBlur'}
                        description={'Callback that is called when the text input is blurred.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onChange'}
                        description={'Callback that is called when the text input\'s text changes.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onChangeText'}
                        description={'Callback that is called when the text input\'s text changes. Changed text is passed as an argument to the callback handler.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onContentSizeChange'}
                        description={'Callback that is called when the text input\'s content size changes. This will be called with { nativeEvent: { contentSize: { width, height } } }.\n\nOnly called for multiline text inputs.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onEndEditing'}
                        description={'Callback that is called when text input ends.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onFocus'}
                        description={'Callback that is called when the text input is focused.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onLayout'}
                        description={'Invoked on mount and layout changes with {x, y, width, height}.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onScroll'}
                        description={'Invoked on content scroll with { nativeEvent: { contentOffset: { x, y } } }. May also contain other properties from ScrollEvent but on Android contentSize is not provided for performance reasons.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onSelectionChange'}
                        description={'Callback that is called when the text input selection is changed. This will be called with { nativeEvent: { selection: { start, end } } }.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onSubmitEditing'}
                        description={'Callback that is called when the text input\'s submit button is pressed. Invalid if multiline={true} is specified.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'string'}
                        name={'placeholder'}
                        description={'The string that will be rendered before text input has been entered.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'enum(\'none\', \'sentences\', \'words\', \'characters\')'}
                        name={'autoCapitalize'}
                        description={'Can tell TextInput to automatically capitalize certain characters.\n\t' +
                            '* characters: all characters.\n\t' +
                            '* words: first letter of each word.\n\t' +
                            '* sentences: first letter of each sentence (default).\n\t' +
                            '* none: don\'t auto capitalize anything.\n'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'enum(\'done\', \'go\', \'next\', \'search\', \'send\', \'none\', \'previous\', \'default\', \'emergency-call\', \'google\', \'join\', \'route\', \'yahoo\'))'}
                        name={'returnKeyType'}
                        description={'Determines how the return key should look. On Android you can also use returnKeyLabel.\n\n' +
                            'Cross platform\n' +
                            'The following values work across platforms:\n\t' +
                            '* done\n\t' +
                            '* go\n\t' +
                            '* next\n\t' +
                            '* search\n\t' +
                            '* send\n' +
                            'iOS Only\n' +
                            'The following values work on iOS only:\n' +
                            '* default\n\t' +
                            '* emergency-call\n\t' +
                            '* google\n\t' +
                            '* join\n\t' +
                            '* route\n\t' +
                            '* yahoo\n' +
                            'Android Only\n' +
                            'The following values work on Android only:\n' +
                            '* none\n\t' +
                            '* previous'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'secureTextEntry'}
                        description={'If true, the text input obscures the text entered so that sensitive text like passwords stay secure. The default value is false. Does not work with \'multiline={true}\'.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'selectTextOnFocus'}
                        description={'If true, all text will automatically be selected on focus.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'object: {start: number,end: number}'}
                        name={'selection'}
                        description={'The start and end of the text input\'s selection. Set start and end to the same value to position the cursor.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'color'}
                        name={'selectionColor'}
                        description={'The highlight and cursor color of the text input.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'Text'}
                        name={'style'}
                        description={'Note that not all Text styles are supported, an incomplete list of what is not supported includes:\n\t' +
                            '* borderLeftWidth\n\t' +
                            '* borderTopWidth\n\t' +
                            '* borderRightWidth\n\t' +
                            '* borderBottomWidth\n\t' +
                            '* borderTopLeftRadius\n\t' +
                            '* borderTopRightRadius\n\t' +
                            '* borderBottomRightRadius\n\t' +
                            '* borderBottomLeftRadius\n'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'string'}
                        name={'value'}
                        description={'The value to show for the text input. TextInput is a controlled component, which means the native value will be forced to match this value prop if provided. For most uses, this works great, but in some cases this may cause flickering - one common cause is preventing edits by keeping value the same. In addition to simply setting the same value, either set editable={false}, or set/update maxLength to prevent unwanted edits without flicker.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'autoGrow (Android)'}
                        description={'If true, will increase the height of the textbox if need be. If false, the textbox will become scrollable once the height is reached. The default value is false.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'disableFullscreenUI (Android)'}
                        description={'When false, if there is a small amount of space available around a text input (e.g. landscape orientation on a phone), the OS may choose to have the user edit the text inside of a full screen text input mode. When true, this feature is disabled and users will always edit the text directly inside of the text input. Defaults to false.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'string'}
                        name={'inlineImageLeft (Android)'}
                        description={'If defined, the provided image resource will be rendered on the left. The image resource must be inside /android/app/src/main/res/drawable and referenced like\n\n' +
                            '<TextInput\n\t' +
                            'inlineImageLeft=\'search_icon\'\n' +
                            '/>'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'number'}
                        name={'inlineImagePadding (Android)'}
                        description={'Padding between the inline image, if any, and the text input itself.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'number'}
                        name={'numberOfLines (Android)'}
                        description={'Sets the number of lines for a TextInput. Use it with multiline set to true to be able to fill the lines.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'string'}
                        name={'returnKeyLabel (Android)'}
                        description={'Sets the return key to the label. Use it instead of returnKeyType.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'enum(\'simple\', \'highQuality\', \'balanced\')'}
                        name={'textBreakStrategy (Android)'}
                        description={'Set text break strategy on Android API Level 23+, possible values are simple, highQuality, balanced The default value is simple.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'color'}
                        name={'underlineColorAndroid (Android)'}
                        description={'The color of the TextInput underline.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'enum(\'never\', \'while-editing\', \'unless-editing\', \'always\')'}
                        name={'clearButtonMode (iOS)'}
                        description={'When the clear button should appear on the right side of the text view.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'clearTextOnFocus (iOS)'}
                        description={'If true, clears the text field automatically when editing begins.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'enum(\'phoneNumber\', \'link\', \'address\', \'calendarEvent\', \'none\', \'all\'), ,array of enum(\'phoneNumber\', \'link\', \'address\', \'calendarEvent\', \'none\', \'all\')'}
                        name={'dataDetectorTypes (iOS)'}
                        description={'Determines the types of data converted to clickable URLs in the text input. Only valid if multiline={true} and editable={false}. By default no data types are detected.\n\n' +
                            'You can provide one type or an array of many types.\n\n' +
                            'Possible values for dataDetectorTypes are:\n\t' +
                            '* phoneNumber\n\t' +
                            '* link\n\t' +
                            '* address\n\t' +
                            '* calendarEvent\n\t' +
                            '* none\n\t' +
                            '* all\n'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'enablesReturnKeyAutomatically (iOS)'}
                        description={'If true, the keyboard disables the return key when there is no text and automatically enables it when there is text. The default value is false.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'enum(\'default\', \'light\', \'dark\')'}
                        name={'keyboardAppearance (iOS)'}
                        description={'Determines the color of the keyboard.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onKeyPress (iOS)'}
                        description={'Callback that is called when a key is pressed. This will be called with { nativeEvent: { key: keyValue } } where keyValue is \'Enter\' or \'Backspace\' for respective keys and the typed-in character otherwise including \' \' for space. Fires before onChange callbacks.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'DocumentSelectionState'}
                        name={'selectionState (iOS)'}
                        description={'An instance of DocumentSelectionState, this is some state that is responsible for maintaining selection information for a document.\n\n' +
                            'Some functionality that can be performed with this instance is:\n\t' +
                            '* blur()\n\t' +
                            '* focus()\n\t' +
                            '* update()\n'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'spellCheck (iOS)'}
                        description={'If false, disables spell-check style (i.e. red underlines). The default value is inherited from autoCorrect.'}
                    />
                    <Text style={styles.heading}>
                        Methods
                    </Text>
                    <ComponentProperty
                        status={''}
                        type={''}
                        name={'isFocused()'}
                        description={'isFocused():\nReturns true if the input is currently focused; false otherwise.'}
                    />
                    <ComponentProperty
                        status={''}
                        type={''}
                        name={'clear()'}
                        description={'clear():\nRemoves all text from the TextInput.'}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        marginTop: 20,
        marginHorizontal: 10,
        padding: 8,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 5,
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