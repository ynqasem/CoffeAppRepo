import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Thumbnail, Text, Button, Left, Body, Right, List, ListItem, Tab, Tabs } from 'native-base';
import starbucks from '../../images/starbucks.png';
import starbucks2 from '../../images/starbucks.jpg';

export default class CoffeDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
                     
                    drink: 0,
                    option: 0,
                    quantity: 1,   

        };
    }


    currshop(coffeshop) {
        
        MyStore.currentShop = coffeshop;
        MyStore.cart.push(this.state);
    }

  render() {



    console.log(this.state);
    const coffeShopName = this.props.match.params.coffeshop;
    const coffeshop = MyStore.getShopByName(coffeShopName);

    
    return (
        <List>
            <ListItem style={styles.top}>
                <Left>
                    <Text style={styles.text}>
                        {coffeshop.name + '\n'} 
                        <Text note>{coffeshop.location}</Text>
                    </Text>
                </Left>
                <Body />
                <Right>
                  <Thumbnail bordered source={coffeshop.image} />
                </Right>
            </ListItem>
            <ListItem >
                <Body >
                    <Text style={styles.middleText}>Choose Drink</Text>
                </Body>
            </ListItem>
            <Tabs initialPage={0} onChangeTab={({ i, ref, from })=> this.setState({drink: i})}>
                <Tab heading="Espresso"/>
                <Tab heading="Latte"/>
            </Tabs>
            <ListItem >
                <Body >
                  <Text style={styles.middleText}>Choose Option</Text>
                </Body>
            </ListItem>
            <Tabs initialPage={0} onChangeTab={({ i, ref, from })=> this.setState({option: i})}>
                <Tab heading="Small"/>
                <Tab heading="Large"/>
            </Tabs>
            <Button full danger onPress={() => this.currshop(coffeshop)}>
                <Text>Add</Text>
            </Button>
        </List>
    );
  }
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 15,
        justifyContent:"center",
        alignItems:'center',
    },
    divider: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    top:{
        marginLeft: -6,
        backgroundColor: '#ffffcc'
    },
    middleText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        alignSelf: "center"
    }
  });
  
  