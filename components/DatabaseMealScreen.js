import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import { mealSelected_index } from './AboutScreen';

// import flatList from './FlatListData';
import firebase from 'firebase';

var MealOpened =
{
    key: '',
    mealName: '',
    avatar_url: '',
    yourIngredients: ''
};

//not opening - keeps giving error : find in firebase and get the obj from it

export default class DatabaseMealScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
          meals: [],
        }
      }

    getSelectedMeal() {
        firebase.database().ref('meals').on('value', (data) => {
            const meals = [];
    
            data.forEach((doc) => {
              meals.push({
                key: doc.toJSON().key,
                mealName: doc.toJSON().mealName,
                avatar_url: doc.toJSON().avatar_url,
                yourIngredients: doc.toJSON().yourIngredients,
              })
              this.setState({
                meals: meals,
              });
            })
        });

        this.meals.find(oppened_index => { oppened_index = mealSelected_index });
        MealOpened.key = meals[oppened_index].key;
        MealOpened.mealName = meals[oppened_index].mealName;
        MealOpened.avatar_url = meals[oppened_index].avatar_url;
        MealOpened.yourIngredients = meals[oppened_index].yourIngredients;

        return (
            <ScrollView>
                <Image source={{ uri: MealOpened.avatar_url }} style={{ width: 200, height: 200 }} />
                <Text>{MealOpened.mealName}</Text>
                <Text>{MealOpened.yourIngredients}</Text>
                <Text>{MealOpened.avatar_url.toString()}</Text>
            </ScrollView>

            // <FlatList
            //     data={this.state.meals}
            //     renderItem={({ item, index }) => {
            //         return (
            //             <ScrollView>
            //             <Image source={{ uri: MealOpened.avatar_url }} style={{ width: 200, height: 200 }} />
            //             <Text>{MealOpened.mealName}</Text>
            //             <Text>{MealOpened.yourIngredients}</Text>
            //             <Text>{MealOpened.avatar_url.toString()}</Text>
            //             </ScrollView>
            //         );
            //     }}>
            // </FlatList>
        );
    };


    render() {
        return (
            <View style={styles.background}>
                <Text>Specific Meal</Text>
                <Text>{mealSelected_index}</Text>
                {this.getSelectedMeal()}
            </View>

        );
    }
}



const styles = StyleSheet.create({
    background: {
        backgroundColor: '#f5f5f5',
        flex: 1,
        // justifyContent: 'center',
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