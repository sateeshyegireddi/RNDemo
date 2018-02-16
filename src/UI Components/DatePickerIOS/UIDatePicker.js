 
 import React, { Component } from 'react';
 import {  
     View, 
     Text, 
     StyleSheet,
     ScrollView,
     DatePickerIOS,
    } from 'react-native';
import ComponentDescription from '../ComponentDescription';
import ComponentProperty from '../ComponentProperty';
import moment from 'moment';

 export default class UIDatePicker extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title,
      });

    constructor(props) {
      super(props)

      this.state = {
         selectedDate:moment(new Date()).format("YYYY-MM-DD hh:mm:ss") // new Date(), 
        // maxDate: new Date(2018, 09, 25, 0, 0, 0, 0),
        // minDate: new Date(2017, 02, 12, 0, 0, 0, 0),
    
      };
      this.setDate = this.setDate.bind(this);
    };

    setDate(newDate) {
        this.setState({selectedDate: newDate})
    }
    
   render() {
    const { params } = this.props.navigation.state;
    let sampleCode = 
    '<DatePickerIOS\n' +
    '     date={this.state.selectedDate}\n' +
    '     onDateChange={this.setDate}\n' +
    '     mode=\'datetime\'\n' + 
    ' />'
     return (
        <ScrollView>
          <ComponentDescription
            title = {'Description'}
            description = {'Use DatePickerIOS to render a date/time picker (selector) on iOS. This is a controlled component, so you must hook in to the onDateChange callback and update the date prop in order for the component to update, otherwise the user\'s change will be reverted immediately to reflect props.date as the source of truth.'}
          />
          <View style={styles.containerUI}>
            <DatePickerIOS 
            date={this.state.selectedDate}
           // maximumDate={this.state.maxDate}
           // minimumDate={this.state.minDate}
            onDateChange={this.setDate}
            mode='datetime'
            />
          </View>
          <Text style={styles.heading}>
            Props
          </Text>
          <ComponentProperty
            status = {'required'}
            type = {'Date'}
            name = {'date'}
            description = {'The currently selected date.'}
          />
          <ComponentProperty
            status = {'required'}
            type = {'function'}
            name = {'onDateChange'}
            description = {'Date change handler.\nThis is called when the user changes the date or time in the UI. The first and only argument is a Date object representing the new date and time.'}
          />
          <ComponentProperty
            status = {'optional'}
            type = {'Date'}
            name = {'maximumDate'}
            description = {'Maximum date.\nRestricts the range of possible date/time values.'}
          />
          <ComponentProperty
            status = {'optional'}
            type = {'Date'}
            name = {'minimumDate'}
            description = {'Minimum date.\nRestricts the range of possible date/time values.'}
          />
          <ComponentProperty
            status = {'optional'}
            type = {'enum(1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30)'}
            name = {'minuteInterval'}
            description = {'The interval at which minutes can be selected.'}
          />
          <ComponentProperty
            status = {'optional'}
            type = {'enum(\'date\', \'time\', \'datetime\')'}
            name = {'mode'}
            description = {'The date picker mode.'}
          />
          <ComponentProperty
            status = {'optional'}
            type = {'String'}
            name = {'locale'}
            description = {'The date picker mode.'}
          />
          <ComponentProperty
            status = {'optional'}
            type = {'number'}
            name = {'timeZoneOffsetInMinutes'}
            description = {'Timezone offset in minutes.\nBy default, the date picker will use the device\'s timezone. With this parameter, it is possible to force a certain timezone offset. For instance, to show times in Pacific Standard Time, pass -7 * 60.'}
          />
          <Text style={styles.heading}> Sample Code </Text>
          <Text style={styles.text}> {sampleCode} </Text>
        </ScrollView>
      );;
   }
 }
 
 const styles = StyleSheet.create({
    containerUI: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 10,
        paddingBottom: 10,
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