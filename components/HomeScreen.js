import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Input, Image } from 'react-native-elements';

export default class Homescreen extends Component {

  addInput() {
    return (
      <Input placeholder='ingredient' />
    );
  };

  render() {
    return (
      <View style={styles.background}>
        <ScrollView>
          <View >
            <Text style={styles.title}>Insert ingedients that you have:</Text>
            <Input
              placeholder='ingredient'
            />
            <Input
              placeholder='ingredient'
            />
            <Input
              placeholder='ingredient'
            />
            <Input
              placeholder='ingredient'
            />
          </View>
          <Button
            title="Add one more ingredient"
            color='#84A6A5'
            onPress={() => this.addInput()} />

          <Button
            title="Go to Meals"
            color='#84A6A5'
            onPress={() => this.props.navigation.navigate('Meals')} />
        </ScrollView>

        <View style={{justifyContent: 'space-around', alignItems:'center'}}>
          <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/traits/512/cook-512.png' }}
            style={{ width: 200, height: 200 }} />

          <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <Button
              title="Go to About"
              color='#84A6A5'
              onPress={() => this.props.navigation.navigate('About')} />
            <Text>              </Text>
            <Button
              title="Go to Welcome"
              color='#84A6A5'
              onPress={() => this.props.navigation.navigate('Welcome')} />
          </View>
        </View>


      </View>
    )
  }

}



const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  button: {
    color: '#84A6A5'
    //not working tho..need to put into button <> with = not :
  },
  title: {
    fontSize: 17,
  },
});