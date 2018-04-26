import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, ListView } from 'react-native';
import coffee from '../../images/coffee.jpg';
import list from './list';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, List, ListItem, } from 'native-base';

import { NativeRouter, Link } from 'react-router-native';

export default class CoffeList extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
          listViewData: list,
        };
    }
  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
        <List
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={(data,index) =>
                <ImageBackground  source={data.background} style={{height: 180, width: null, flex: 1}} key={data.name + "-" + index} >
                    <Link to={'/CoffeDetail/' +data.name}  component={ListItem} style={{ backgroundColor: "transparent", borderTopWidth: 0,borderRightWidth: 0,borderLeftWidth: 0,borderBottomWidth: 0 }}>
                        <Card style={{ backgroundColor: "transparent", borderTopWidth: 0,borderRightWidth: 0,borderLeftWidth: 0,borderBottomWidth: 0 }}>
                            <CardItem style={{ backgroundColor: "transparent" }}>
                                <Left>
                                    <Thumbnail bordered source={data.image} />
                                    <Body>
                                        
                                        <Text style={styles.text}>{data.name}</Text>
                                        <Text note style={styles.text}>{data.distance}</Text>
                                        
                                    </Body>
                                </Left>
                            </CardItem>
                        </Card>
                        
                        <View style={styles.divider}></View>
                        
                    </Link>
                </ImageBackground>}
            renderLeftHiddenRow={data =>
                <Button full onPress={() => alert('HEY!')}>
                <Icon active name="navigate" />
                </Button>}
            disableLeftSwipe
            leftOpenValue={75}
        />
    );
  }
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 15,
    },
    divider: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    }
  });
  
  