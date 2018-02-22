import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';
import ComponentDescription from '../ComponentDescription';
import ComponentProperty from '../ComponentProperty';

export default class UIText extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title
    })

    constructor(props) {
        super(props)

        this.state = {
            titleText: 'Bird\'s Nest\n',
            bodyText: '\nThis is not really bird nest',
        };
    };

    render() {

        let sampleCode = '<Text style={styles.baseText}>\n\t' +
            '<Text style={styles.titleText}>\n\t\t' +
            '{this.state.titleText}\n\t' +
            '</Text>\n\t' +
            '{this.state.bodyText}\n' +
            '</Text>';

        return (
            <View>
                <ScrollView>
                    <ComponentDescription
                        title={'Description'}
                        description={'Text\n\n' +
                            'A React component for displaying text.\n' +
                            '\'Text\' supports nesting, styling, and touch handling.\n\n' +
                            'Nested text\n\n' +
                            'Both iOS and Android allow you to display formatted text by annotating ranges of a string with specific formatting like bold or colored text (\'NSAttributedString\' on iOS, \'SpannableString\' on Android). In practice, this is very tedious. For React Native, we decided to use web paradigm for this where you can nest text to achieve the same effect.\n\n' +
                            'Nested views (iOS only)\n\n' +
                            'On iOS, you can nest views within your Text component.\n' +
                            'In order to use this feature, you must give the view a width and a height.'}
                    />
                    <Text style={styles.baseText}>
                        <Text style={styles.titleText}>
                            {this.state.titleText}
                        </Text>
                        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
                        {this.state.bodyText}
                    </Text>
                    <Text style={styles.heading}>
                        Props
                    </Text>
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'selectable'}
                        description={'Lets the user select text, to use the native copy and paste functionality.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'accessible'}
                        description={'When set to true, indicates that the view is an accessibility element. The default value for a Text element is true.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'enum(\'head\', \'middle\', \'tail\', \'clip\')'}
                        name={'ellipsizeMode'}
                        description={'When \'numberOfLines\' is set, this prop defines how text will be truncated. numberOfLines must be set in conjunction with this prop.\n\n' +
                            'This can be one of the following values:\n\n' +
                            '* head - The line is displayed so that the end fits in the container and the missing text at the beginning of the line is indicated by an ellipsis glyph. e.g., \"...wxyz\"\n' +
                            '* middle - The line is displayed so that the beginning and end fit in the container and the missing text in the middle is indicated by an ellipsis glyph. \"ab...yz\"\n' +
                            '* tail - The line is displayed so that the beginning fits in the container and the missing text at the end of the line is indicated by an ellipsis glyph. e.g., \"abcd...\"\n' +
                            '* clip - Lines are not drawn past the edge of the text container.\n\n' +
                            'The default is tail. clip is working only for iOS'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'string'}
                        name={'nativeID'}
                        description={'Used to locate this view from native code.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'number'}
                        name={'numberOfLines'}
                        description={'Used to truncate the text with an ellipsis after computing the text layout, including line wrapping, such that the total number of lines does not exceed this number.\n\n' +
                            'This prop is commonly used with \'ellipsizeMode.\''}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onLayout'}
                        description={'Invoked on mount and layout changes with\n\n{nativeEvent: {layout: {x, y, width, height}}}'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onLongPress'}
                        description={'This function is called on long press.\n\ne.g., onLongPress={this.increaseSize}>'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onPress'}
                        description={'This function is called on press.\n\ne.g., onPress={() => console.log(\'1st\')}'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'object: {top: number, left: number, bottom: number, right: number}'}
                        name={'pressRetentionOffset'}
                        description={'When the scroll view is disabled, this defines how far your touch may move off of the button, before deactivating the button. Once deactivated, try moving it back and you\'ll see that the button is once again reactivated! Move it back and forth several times while the scroll view is disabled. Ensure you pass in a constant to reduce memory allocations.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'allowFontScaling'}
                        description={'Specifies whether fonts should scale to respect Text Size accessibility settings. The default is \'true\'.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'style'}
                        name={'style'}
                        description={'* textShadowOffset: object: {width: number,height: number}\n\n' +
                            '* color: color\n\n' +
                            '* fontSize: number\n\n' +
                            '* fontStyle: enum(\'normal\', \'italic\')\n\n' +
                            '* fontWeight: enum(\'normal\', \'bold\', \'100\', \'200\', \'300\', \'400\', \'500\', \'600\', \'700\', \'800\', \'900\')\n' +
                            'Specifies font weight. The values \'normal\' and \'bold\' are supported for most fonts. Not all fonts have a variant for each of the numeric values, in that case the closest one is chosen.\n\n' +
                            '* lineHeight: number\n\n' +
                            '* textAlign: enum(\'auto\', \'left\', \'right\', \'center\', \'justify\')\n' +
                            'Specifies text alignment. The value \'justify\' is only supported on iOS and fallbacks to left on Android.\n\n' +
                            '* textDecorationLine: enum(\'none\', \'underline\', \'line-through\', \'underline line-through\')\n\n' +
                            '* textShadowColor: color\n\n' +
                            '* fontFamily: string\n\n' +
                            '* textShadowRadius: number\n\n' +
                            '* includeFontPadding: bool (Android)\n' +
                            'Set to \'false\' to remove extra font padding intended to make space for certain ascenders / descenders. With some fonts, this padding can make text look slightly misaligned when centered vertically. For best results also set \'textAlignVertical\' to \'center\'. Default is true.\n\n' +
                            '* textAlignVertical: enum(\'auto\', \'top\', \'bottom\', \'center\') (Android)\n\n' +
                            '* fontVariant: array of enum(\'small-caps\', \'oldstyle-nums\', \'lining-nums\', \'tabular-nums\', \'proportional-nums\') (iOS)\n\n' +
                            '* letterSpacing: number (iOS)\n\n' +
                            '* textDecorationColor: color (iOS)\n\n' +
                            '* textDecorationStyle: enum(\'solid\', \'double\', \'dotted\', \'dashed\') (iOS)\n\n' +
                            '* writingDirection: enum(\'auto\', \'ltr\', \'rtl\') (iOS)\n'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'string'}
                        name={'testID'}
                        description={'Used to locate this view in end-to-end tests.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'disabled (Android)'}
                        description={'Specifies the disabled state of the text view for testing purposes'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'color'}
                        name={'selectionColor (Android)'}
                        description={'The highlight color of the text.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'enum(\'simple\', \'highQuality\', \'balanced\')'}
                        name={'textBreakStrategy (Android)'}
                        description={'Set text break strategy on Android API Level 23+, possible values are \'simple\', highQuality, \'balanced\' The default value is \'highQuality\'.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'adjustsFontSizeToFit (iOS)'}
                        description={'Specifies whether font should be scaled down automatically to fit given style constraints.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'number'}
                        name={'minimumFontScale (iOS)'}
                        description={'Specifies smallest possible scale a font can reach when adjustsFontSizeToFit is enabled. (values 0.01-1.0).'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'suppressHighlighting (iOS)'}
                        description={'When \'true\', no visual change is made when text is pressed down. By default, a gray oval highlights the text on press down.'}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'Cochin',
    },
    titleText: {
        // fontSize: 20,
        // fontWeight: 'bold',
        color: 'red',
    }
});