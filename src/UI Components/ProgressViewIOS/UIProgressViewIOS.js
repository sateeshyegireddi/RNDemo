import React, { Component } from 'react';
import {
    View,
    Text,
    ProgressViewIOS,
    StyleSheet,
    ScrollView,
} from 'react-native';

export default class UIProgressViewIOS extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title,
    });

    render() {

        let sampleCode =
            '<ProgressViewIOS\n\t' +
            'progressViewStyle={\'bar\'}\n\t' +
            'progress={0.8}\n\t' +
            'progressTintColor={\'red\'}\n' +
            '/>';

        return (
            <View>
                <ScrollView>
                    <ComponentDescription
                        title={'Description'}
                        description={'Renders the native picker component on iOS and Android.'}
                    />
                    <View style={styles.progressBar}>
                        <View style={styles.progressContainer}>
                            <ProgressViewIOS
                                progress={0.8}
                                progressTintColor={'blue'}
                            />
                            <ProgressViewIOS
                                progressViewStyle={'bar'}
                                progress={0.8}
                                progressTintColor={'red'}
                            />
                        </View>
                    </View>
                    <ComponentProperty
                        status={'optional'}
                        type={'number'}
                        name={'progress'}
                        description={'The progress value (between 0 and 1).'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'Image.propTypes.source'}
                        name={'progressImage'}
                        description={'A stretchable image to display as the progress bar.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'string'}
                        name={'progressTintColor'}
                        description={'The tint color of the progress bar itself.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'enum(\'default\', \'bar\')'}
                        name={'progressViewStyle'}
                        description={'The progress bar style.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'Image.propTypes.source'}
                        name={'trackImage'}
                        description={'A stretchable image to display behind the progress bar.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'string'}
                        name={'trackTintColor'}
                        description={'The tint color of the progress bar track.'}
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
    progressContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    progressBar: {
        margin: 10,
    },
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
});