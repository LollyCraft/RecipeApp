import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity,Image } from 'react-native';
import { mealSelected_index } from './MealsListScreen';

import flatList from './FlatListData';

var MealOpened =
{
    key: '',
    mealName: '',
    avatar_url: '',
    yourIngredients: ''
};


export default class MealScreen extends Component {

    getSelectedMeal() {
        flatList.find(index => { index = mealSelected_index });
        MealOpened.key = flatList[mealSelected_index].key;
        MealOpened.mealName = flatList[mealSelected_index].mealName;
        MealOpened.avatar_url = flatList[mealSelected_index].avatar_url;
        MealOpened.yourIngredients = flatList[mealSelected_index].yourIngredients;

        return (
            <ScrollView>
        <Image source={{uri: MealOpened.avatar_url}} style={{ width: 200, height: 200 }}/>
        <Text>{MealOpened.mealName}</Text>
        <Text>{MealOpened.yourIngredients}</Text>
        <Text>{MealOpened.avatar_url.toString()}</Text>
            </ScrollView>
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