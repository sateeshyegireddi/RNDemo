import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    ToolbarAndroid,
    StyleSheet,
} from 'react-native';
import ComponentDescription from '../ComponentDescription';

export default class UIToolbar extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title,
    });

    _onActionSelected(position) {
        if (position === 0) {
            console.log('showSettings()');
        }
    }

    _onIconClicked() {
        console.log("_onIconClicked");
    }

    render() {

        let sampleCode = '<ToolbarAndroid\n\t' +
            'style={styles.toolbar}\n\t' +
            'navIcon={require(\'../../../img/android.png\')}\n\t' +
            'onIconClicked={this._onIconClicked}\n\t' +
            'title={\"Android Tool Bar\"}\n\t' +
            'titleColor={\'black\'}\n\t' +
            'actions={[\n\t\t' +
            '{ title: \"Settings\", show: \"never\" },\n\t\t' +
            '{ title: \"Logout\", show: \"never\" }\n\t' +
            ']}\n\t' +
            'subtitle={\'subTitle\'}\n\t' +
            'onActionSelected={this._onActionSelected}\n\t' +
            'rtl={false}\n' +
            '/>\n';

        return (
            <ScrollView>
                <ComponentDescription
                    title={'Description'}
                    description={'React component that wraps the Android-only Toolbar widget. A Toolbar can display a logo, navigation icon (e.g. hamburger menu), a title & subtitle and a list of actions. The title and subtitle are expanded so the logo and navigation icons are displayed on the left, title and subtitle in the middle and the actions on the right.\n\n' +
                        'If the toolbar has an only child, it will be displayed between the title and actions.\n\n' +
                        'Although the Toolbar supports remote images for the logo, navigation and action icons, this should only be used in DEV mode where require(\'./some_icon.png\') translates into a packager URL. In release mode you should always use a drawable resource for these icons. Using require(\'./some_icon.png\') will do this automatically for you, so as long as you don\'t explicitly use e.g. {uri: \'http://...\'}, you will be good.'}
                />
                <ToolbarAndroid
                    style={styles.toolbar}
                    navIcon={require('../../../img/android.png')}
                    //overflowIcon={require('../../../img/reactIcon.png')}
                    onIconClicked={this._onIconClicked}
                    title={"Android Tool Bar"}
                    titleColor={'black'}
                    actions={[
                        { title: "Settings", show: "never" },
                        { title: "Logout", show: "never" }
                    ]}
                    subtitle={'subTitle'}
                    onActionSelected={this._onActionSelected}
                    rtl={false}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'optionalImageSource'}
                    name={'overflowIcon'}
                    description={'Sets the overflow icon.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'array of object: {title: string,icon: optionalImageSource,show: enum(\'always\', \'ifRoom\', \'never\'),showWithText: bool}'}
                    name={'actions'}
                    description={'Sets possible actions on the toolbar as part of the action menu. These are displayed as icons or text on the right side of the widget. If they don\'t fit they are placed in an \'overflow\' menu.\n\n' +
                        'This property takes an array of objects, where each object has the following keys:\n\n\t' +
                        '* title: required, the title of this action\n\t' +
                        '* icon: the icon for this action, e.g. require(\'./some_icon.png\')\n\t' +
                        '* show: when to show this action as an icon or hide it in the overflow menu: always, ifRoom or never\n\t' +
                        '* showWithText: boolean, whether to show text alongside the icon or not'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'optionalImageSource'}
                    name={'contentInsetStart'}
                    description={'Sets the content inset for the toolbar starting edge.\n\n' +
                        'The content inset affects the valid area for Toolbar content other than the navigation button and menu. Insets define the minimum margin for these components and can be used to effectively align Toolbar content along well-known gridlines.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'optionalImageSource'}
                    name={'logo'}
                    description={'Sets the toolbar logo.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'optionalImageSource'}
                    name={'navIcon'}
                    description={'Sets the navigation icon.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'function'}
                    name={'onActionSelected'}
                    description={'Callback that is called when an action is selected. The only argument that is passed to the callback is the position of the action in the actions array.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'function'}
                    name={'onIconClicked'}
                    description={'Callback called when the icon is selected.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'number'}
                    name={'contentInsetEnd'}
                    description={'Sets the content inset for the toolbar ending edge.\n\n' +
                        'The content inset affects the valid area for Toolbar content other than the navigation button and menu. Insets define the minimum margin for these components and can be used to effectively align Toolbar content along well-known gridlines.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'bool'}
                    name={'rtl'}
                    description={'Used to set the toolbar direction to RTL. In addition to this property you need to add\n\n' +
                        'android:supportsRtl=\"true\"\n\n' +
                        'to your application AndroidManifest.xml and then call setLayoutDirection(LayoutDirection.RTL) in your MainActivity onCreate method.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'string'}
                    name={'subtitle'}
                    description={'Sets the toolbar subtitle.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'color'}
                    name={'subtitleColor'}
                    description={'Sets the toolbar subtitle color.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'string'}
                    name={'testID'}
                    description={'Used to locate this view in end-to-end tests.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'string'}
                    name={'title'}
                    description={'Sets the toolbar title.'}
                />
                <ComponentProperty
                    status={'optional'}
                    type={'color'}
                    name={'titleColor'}
                    description={'Sets the toolbar title color.'}
                />
                <Text style={styles.heading}> Sample Code </Text>
                <Text style={styles.text}> {sampleCode} </Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: 'lightgray',
        height: 56,
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