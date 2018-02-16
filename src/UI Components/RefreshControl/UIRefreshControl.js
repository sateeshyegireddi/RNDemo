import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    RefreshControl,
    ScrollView,
} from 'react-native';
import ComponentDescription from '../ComponentDescription';

const listData = [{ key: 'Row 1' }, { key: 'Row 2' }, { key: 'Row 3' },
{ key: 'Row 4' }, { key: 'Row 5' }, { key: 'Row 6' },
{ key: 'Row 7' }, { key: 'Row 8' },]

export default class UIRefreshControl extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title,
    });

    constructor(props) {
        super(props)

        this.state = {
            refreshing: false,
        };
        setInterval(() => {
            this.setState({ refreshing: false })
        }, 5000)
    };

    _renderItem = ({ item }) => (
        <Text style={styles.text}>
            {item.key}
        </Text>
    );

    _onRefresh = () => {
        this.setState({ refreshing: true })
    }

    render() {

        let sampleCode =
            '<FlatList\n\t' +
            'refreshControl={\n\t\t' +
            '<RefreshControl\n\t\t\t' +
            'refreshing={this.state.refreshing}\n\t\t\t' +
            'onRefresh={this._onRefresh}\n\t\t\t' +
            'colors={[\'red\', \'gray\', \'green\']}\n\t\t\t' +
            'progressBackgroundColor={\'black\'}\n\t\t\t' +
            'progressViewOffset={0}\n\t\t\t' +
            'size={RefreshControl.SIZE.DEFAULT}\n\t\t' +
            '/>\n\t' +
            '}\n' + 
            '/>\n';

        return (
            <View>
                <FlatList style={styles.flatList}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                            colors={['red', 'gray', 'green']}
                            progressBackgroundColor={'black'}
                            progressViewOffset={0}
                            size={RefreshControl.SIZE.DEFAULT}
                        />
                    }
                    data={listData}
                    renderItem={this._renderItem}
                />
                <ScrollView style={styles.containerUI}>
                    <ComponentDescription
                        title={'Description'}
                        description={'This component is used inside a ScrollView or ListView to add pull to refresh functionality. When the ScrollView is at \'scrollY: 0\', swiping down triggers an \'onRefresh\' event.\n' +
                            'Note: \'refreshing\' is a controlled prop, this is why it needs to be set to true in the \'onRefresh\' function otherwise the refresh indicator will stop immediately.'}
                    />
                    <Text style={styles.heading}>
                        Props
                    </Text>
                    <ComponentProperty
                        status={'required'}
                        type={'bool'}
                        name={'refreshing'}
                        description={'Whether the view should be indicating an active refresh.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'function'}
                        name={'onRefresh'}
                        description={'Called when the view starts refreshing.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'array of colors'}
                        name={'colors (Android)'}
                        description={'The colors (at least one) that will be used to draw the refresh indicator.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'enabled (Android)'}
                        description={'Whether the pull to refresh functionality is enabled.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'color'}
                        name={'progressBackgroundColor (Android)'}
                        description={'The background color of the refresh indicator.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'number'}
                        name={'progressViewOffset (Android)'}
                        description={'Progress view top offset'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'enum(RefreshLayoutConsts.SIZE.DEFAULT, RefreshLayoutConsts.SIZE.LARGE)'}
                        name={'size (Android)'}
                        description={'Size of the refresh indicator, see RefreshControl.SIZE.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'color'}
                        name={'tintColor (iOS)'}
                        description={'The color of the refresh indicator.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'string'}
                        name={'title (iOS)'}
                        description={'The title displayed under the refresh indicator.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'color'}
                        name={'titleColor (iOS)'}
                        description={'Title color.'}
                    />
                    <Text style={styles.heading}>
                        Sample Code
                    </Text>
                    <Text style={styles.text}>
                        {sampleCode}
                    </Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerUI: {
        height: '75%',
    },
    flatList: {
        height: '25%',
        backgroundColor: 'lightgray',
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