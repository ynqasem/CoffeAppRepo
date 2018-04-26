import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyApp from './Components/MyApp.js';
import { NativeRouter, Route, Link, Switch } from 'react-router-native'
import MyStore from './Components/stores/Store.js';

export default class App extends React.Component {
  render() {
    return (
    	<NativeRouter>
      		<MyApp MyStore={MyStore} />
      	</NativeRouter>
    );
  }
}

