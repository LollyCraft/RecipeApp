import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';


export default class Welcomescreen extends Component {
  render() {
    return (
      <View style={styles.background}>
        <Button
          title="Go to Home"
          color='#84A6A5'
          onPress={() => this.props.navigation.navigate('Home')} />

        <View style={{ flex: 1, backgroundColor: '#f5f5f5' }} />
        <View style={{ flex: 1, backgroundColor: '#D4D8BD' }} />
        <View style={{ flex: 1, backgroundColor: '#899E7D' }} />
        <View style={{ flex: 1, backgroundColor: '#84A6A5' }} />
        <View style={{ flex: 1, backgroundColor: '#B6D1C8' }} />
        <View style={{ flex: 1, backgroundColor: '#B9AE80' }} />
        <View style={{ flex: 1, backgroundColor: '#C4CCBF' }} />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    color: '#84A6A5'
    //not working tho..need to put into button <>
  },
});