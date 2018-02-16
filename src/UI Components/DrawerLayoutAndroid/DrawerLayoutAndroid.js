/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  DrawerLayoutAndroid,
} from 'react-native';
import ComponentProperty from '../ComponentProperty.js';
import ComponentDescription from '../ComponentDescription.js';

export default class UIDrawerLayout extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  });

  render() {
    const { params } = this.props.navigation.state;
    let sampleCode = 
    'var navigationView = (\n' + 
    '    <View style={{flex: 1, backgroundColor: \'#fff\'}}>\n' +
    '      <Text style={{margin: 10, fontSize: 15, textAlign: \'left\'}}>I\'m in the Drawer!</Text>\n' +
    '    </View>\n' +
    '  );\n\n' +
    ' <DrawerLayoutAndroid\n' +
    ' drawerWidth = {300}\n' +
    ' drawerPosition = {DrawerLayoutAndroid.positions.Left}\n' +
    ' renderNavigationView = {() => { navigationView }}>\n\n' +
    ' <View style={{flex: 1, alignItems: \'center\'}}>\n' + 
    '     <Text style={{margin: 10, fontSize: 15, textAlign: \'right\'}}>Hello</Text>\n' + 
    '     <Text style={{margin: 10, fontSize: 15, textAlign: \'right\'}}>World!</Text>\n' +
    ' </View>\n\n' + 
    ' </DrawerLayoutAndroid>'

    //Create navigation view 
    var navigationView = (
        <View>
            <Text style= {styles.textInDrawer}> 
                I'm in drawer layout!!
            </Text>
        </View>
    );

    drawerOpen = () => {
        console.log('drawer opened!!');
    }
    return (
        <DrawerLayoutAndroid 
        drawerWidth = {300}
        drawerPosition = {DrawerLayoutAndroid.positions.Left}
        renderNavigationView = {() => { navigationView }}
        drawerBackgroundColor = {'white'}
        onDrawerOpen = {drawerOpen} >
        <ScrollView> 
            <ComponentDescription
            title = {'Description'}
            description = {'React component that wraps the platform DrawerLayout (Android only). The Drawer (typically used for navigation) is rendered with renderNavigationView and direct children are the main view (where your content goes). The navigation view is initially not visible on the screen, but can be pulled in from the side of the window specified by the drawerPosition prop and its width can be set by the drawerWidth prop.'}
            />
            <Text style={styles.heading}>
                Props
            </Text>
            <ComponentProperty
            status = {'required'}
            type = {'function'}
            name = {'renderNavigationView'}
            description = {'The navigation view that will be rendered to the side of the screen and can be pulled in.'}
            />
            <ComponentProperty
            status = {'optional'}
            type = {'function'}
            name = {'onDrawerClose'}
            description = {'Function called whenever the navigation view has been closed.'}
            />
            <ComponentProperty
            status = {'optional'}
            type = {'enum(DrawerConsts.DrawerPosition.Left, DrawerConsts.DrawerPosition.Right)'}
            name = {'drawerPosition'}
            description = {'Specifies the side of the screen from which the drawer will slide in.'}
            />
            <ComponentProperty
            status = {'optional'}
            type = {'number'}
            name = {'drawerWidth'}
            description = {'Specifies the width of the drawer, more precisely the width of the view that be pulled in from the edge of the window.'}
            />
            <ComponentProperty
            status = {'optional'}
            type = {'enum(\'none\', \'on-drag\')'}
            name = {'keyboardDismissMode'}
            description = {'Determines whether the keyboard gets dismissed in response to a drag.\n\t\'none\' (the default), drags do not dismiss the keyboard.\n\t\'on-drag\', the keyboard is dismissed when a drag begins.'}
            />
            <ComponentProperty
            status = {'optional'}
            type = {'enum(\'unlocked\', \'locked-closed\', \'locked-open\')'}
            name = {'drawerLockMode'}
            description = {'Specifies the lock mode of the drawer. The drawer can be locked in 3 states:\n\tunlocked (default), meaning that the drawer will respond (open/close) to touch gestures\n\tlocked-closed, meaning that the drawer will stay closed and not respond to gestures.\n\tlocked-open, meaning that the drawer will stay opened and not respond to gestures. The drawer may still be opened and closed programmatically (openDrawer/closeDrawer).'}
            />
            <ComponentProperty
            status = {'optional'}
            type = {'function'}
            name = {'onDrawerOpen'}
            description = {'Function called whenever the navigation view has been opened.'}
            />
            <ComponentProperty
            status = {'optional'}
            type = {'function'}
            name = {'onDrawerSlide'}
            description = {'Function called whenever there is an interaction with the navigation view.'}
            />
            <ComponentProperty
            status = {'optional'}
            type = {'function'}
            name = {'onDrawerStateChanged'}
            description = {'Function called when the drawer state has changed. The drawer can be in 3 states:\n\t' + 
                            'idle, meaning there is no interaction with the navigation view happening at the time\n\t' + 
                            'dragging, meaning there is currently an interaction with the navigation view\n\t' + 
                            'settling, meaning that there was an interaction with the navigation view, and the navigation view is now finishing its closing or opening animation'}
            />
            <ComponentProperty
            status = {'optional'}
            type = {'color'}
            name = {'drawerBackgroundColor'}
            description = {'Specifies the background color of the drawer. The default value is white. If you want to set the opacity of the drawer, use rgba. Example:'}
            />
            <ComponentProperty
            status = {'optional'}
            type = {'color'}
            name = {'statusBarBackgroundColor'}
            description = {'Make the drawer take the entire screen and draw the background of the status bar to allow it to open over the status bar. It will only have an effect on API 21+.'}
            />
             <Text style={styles.heading}>
                Methods
            </Text>
            <ComponentProperty
            status = {''}
            type = {''}
            name = {'openDrawer()'}
            description = {'Opens the drawer'}
            />
            <ComponentProperty
            status = {''}
            type = {''}
            name = {'closeDrawer()'}
            description = {'Closes the drawer'}
            />
            <Text style={styles.heading}> Sample Code </Text>
            <Text style={styles.text}> {sampleCode} </Text>
        </ScrollView>
        </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    padding: 10,
    fontSize: 20,
    fontStyle: 'normal',
    color: '#005068',
  },
  text: {
    padding: 10,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  textInDrawer: {
    margin: 10,
    fontSize: 16,
    textAlign: 'left',
  },
});
