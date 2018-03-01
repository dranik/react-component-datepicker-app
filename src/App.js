
import React, { Component } from 'react';
import moment from 'moment';
import './App.css';
import  PresetDateRangePicker from './components/datepicker'
;
class App extends Component {

  render() {
    const today = moment();
    const yesterday = today.subtract(24, 'hour');
    const presets = [{
      text: 'День',
      start:  today,
      end: yesterday,
    },
    {
      text: '3 дня',
      start:  moment().subtract(24*3, 'hour'),
      end: today,
    },
    {
      text: 'Месяц',
      start: moment().subtract(30, 'day'),
      end: today,
    },
    {
      text: '3 месяца',
      start: moment().subtract(90, 'day'),
      end: today,
    },
    {
      text: '6 месяцев',
      start: moment().subtract(180, 'day'),
      end: today,
    },
    {
      text: '9 месяцев',
      start: moment().subtract(270, 'day'),
      end: today,
    },
    {
      text: 'Год',
      start: moment().subtract(1, 'year'),
      end: today,
    }];
    return (
      <PresetDateRangePicker
        presets={presets}
        initialStartDate = {moment().subtract(6, 'day')}
        initialEndDate = {moment().add(1, 'day')}
        onDatesChanged = {(start, end) => console.log(start, end)}
        autoFocus
      />
    );
  }
}

export default App;
