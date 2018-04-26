

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { NativeRouter, Route, Link, Switch } from 'react-router-native';
import MyStore from '../stores/Store.js';

import {observer} from 'mobx-react';

export default observer(class MyHeader extends Component {
    render() {
      return (
      <Header style={{backgroundColor: "transparent"}} >

        <Left>
            <Link to='/' component={Button} transparent>
                <Icon style={styles.backicon} name='arrow-back' />
            </Link>
        </Left>

        <Body>
        <Title style={styles.header}><Text>Coffe App</Text></Title>
        </Body>
        <Right>
            <Link to='/CoffeCart/'  component={Button} transparent>
                <Text style={styles.text}>{MyStore.cart.length + " "}
                <Icon name='beer' style={styles.icon} />
                </Text>
            </Link>
        </Right>
        </Header>
      )
    }
});

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#5cd6d6',
      opacity: 0.6,
    },
    topheader: {
      backgroundColor: '#5cd6d6',
      opacity: 0,
  
    },
    backicon: {
        color: 'white',

        },
    icon: {
      color: 'white',
      fontSize: 17,
      opacity: 1,
      },
      footericon: {
          color: 'white',
          fontSize: 15,
      },
    text: {
        color: 'white',
        fontSize: 15,
        marginTop: 19,
        opacity: 1,
    },
    header: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 17,
      marginTop: 10,
      opacity: 1,
  
      },
      footerbutton: {
          
          color: 'white',
          fontWeight: 'bold',
          fontSize: 17,
          },
      footer: {
          backgroundColor: '#5cd6d6',
          opacity: 0.6,
      }
  });
  
  