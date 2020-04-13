import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Input, Image } from 'react-native-elements';

var pressedToAddInput = false;

export default class Homescreen extends Component {

 
  addInput(){
      if(pressedToAddInput == true){
        return(
          <View>
            <Input placeholder='ingredient'/>
          </View>
        );
        pressedToAddInput = false;
      }
  }

  render() {
    return (
      <View style={styles.background}>
        <ScrollView style={{flex:1}}>
          <View>
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
            {this.addInput()}
          </View>
        </ScrollView>

        {/* <View style={{justifyContent: 'space-around', alignItems:'center'}}> */}
        
        <Button
            title="Add one more ingredient"
            color='#84A6A5'
            onPress={() => pressedToAddInput=true} />

          <Button
            title="Go to Meals"
            color='#84A6A5'
            onPress={() => this.props.navigation.navigate('Meals')} />

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
          {/* </View> */}
        </View>


      </View>
    )
  }

}



const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'space-around',
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