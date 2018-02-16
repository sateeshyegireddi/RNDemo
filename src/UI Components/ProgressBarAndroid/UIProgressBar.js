import React, { Component } from 'react';
import {
    View,
    Text,
    ProgressBarAndroid,
    StyleSheet,
    ScrollView,
} from 'react-native';

export default class UIProgressBar extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title,
    });

    render() {

        let sampleCode = 
        '<ProgressBarAndroid\n\t' +
        'styleAttr={\'Horizontal\'}\n\t' + 
        'progress={0.8}\n\t' +
        'indeterminate={false}\n\t' +
        'color={\'blue\'}\n' +
        '/>';

        return (
            <View>
                <ScrollView>
                    <ComponentDescription
                        title={'Description'}
                        description={'Renders the native picker component on iOS and Android.'}
                    />
                    <View style={styles.progressBar}>
                        <Text style={styles.text}> Small and Normal(Large) Indeterminate </Text>
                        <View style={styles.progressContainer}>
                            <ProgressBarAndroid
                                styleAttr={'Small'}
                                indeterminate={true}
                                color={'green'}
                            />
                            <ProgressBarAndroid
                                styleAttr={'Normal'}
                                indeterminate={true}
                                color={'green'}
                            />
                        </View>
                        <Text style={styles.text}> Horizontal Progress </Text>
                        <ProgressBarAndroid
                            styleAttr={'Horizontal'}
                            progress={0.8}
                            indeterminate={false}
                            color={'blue'}
                        />
                        <Text style={styles.text}> Horizontal Indeterminate </Text>
                        <ProgressBarAndroid
                            styleAttr={'Horizontal'}
                            indeterminate={true}
                            color={'red'}
                        />
                    </View>
                    <ComponentProperty
                        status={'optional'}
                        type={'bool'}
                        name={'animating'}
                        description={'Whether to show the ProgressBar (true, the default) or hide it (false).'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'color'}
                        name={'color'}
                        description={'Color of the progress bar.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'indeterminateType'}
                        name={'indeterminate'}
                        description={'If the progress bar will show indeterminate progress. Note that this can only be false if styleAttr is Horizontal.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'number'}
                        name={'progress'}
                        description={'The progress value (between 0 and 1).'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'enum(\'Horizontal\', \'Normal\', \'Small\', \'Large\', \'Inverse\', \'SmallInverse\', \'LargeInverse\')'}
                        name={'styleAttr'}
                        description={'Style of the ProgressBar.'}
                    />
                    <ComponentProperty
                        status={'optional'}
                        type={'string'}
                        name={'testID'}
                        description={'Used to locate this view in end-to-end tests.'}
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