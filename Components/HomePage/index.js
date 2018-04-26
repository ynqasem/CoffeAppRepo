import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import CoffeList from '../CoffeList';
import CoffeDetail from '../CoffeDetail';
import CoffeCart from '../CoffeCart';
import Loading from '../Loading';

import background from '../../images/10.jpg';
import MyHeader from '../MyHeader';
import { NativeRouter, Route, Link, Switch } from 'react-router-native';

export default class HomePage extends Component {

  componentDidMount() {
    console.log(MyStore);
  }

  render() {
    MyStore = this.props.MyStore
    return (
        <ImageBackground source={background} style={{height: null, width: null, flex: 1}}>
          <Container>
            <MyHeader />
              <Content>
                <Switch>
                  <Route exact path="/CoffeCart/" render={
                       props => <CoffeCart {...props} MyStore={MyStore}/>
                     }/>
                  <Route exact path="/CoffeDetail/:coffeshop" render={
                       props => <CoffeDetail {...props} MyStore={MyStore}/>
                     }/>
                  <Route exact path="/" render={
                       props => <CoffeList {...props} MyStore={MyStore}/>
                     }/>
                </Switch>
              </Content>
            
            <Footer style={{backgroundColor: "transparent"}}>
              <FooterTab>
                <Link to='/CoffeCart/'  component={Button} full>
                  <Text style={styles.footerbutton}>
                    <Icon name='cart' style={styles.footericon} />
                     Cart
                  </Text>
                </Link>
              </FooterTab>
            </Footer>
          </Container>
        </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5cd6d6',
    opacity: 0.6,
  },
  topheader: {
    backgroundColor: '#5cd6d6',
    opacity: 0,

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

