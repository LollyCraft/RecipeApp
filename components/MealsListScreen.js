import { Card } from 'react-native-elements'
import { Button, View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity  } from 'react-native';
import React, { Component } from 'react';
import flatList from './FlatListData';

// class FlatListItem extends Component {
//     render() {
//         return (
//             <View style={{
//                 backgroundColor: this.props.index % 2 == 0 ? 'green' : 'red'
//             }}>
//                 <Text>{this.props.item.mealName}</Text>
//                 <Text>{this.props.item.yourIngredients}</Text>
//             </View>
//         );
//     }
// }

export var mealSelected_index;

export default class MealsListScreen extends Component {
    render() {
        return (
            <View style={styles.background}>
                <Text style={styles.title}>Possible meals that you can make with the ingrediantes you have</Text>
                <ScrollView>
                    {
                        flatList.map((dish, i) => (
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('SpecificMeal');
                                mealSelected_index = i;
                                }}>
                            <Card image={{uri: dish.avatar_url}}>
                                <Text style={{fontWeight: 'bold',marginBottom: 10, marginTop: 15 }}>{dish.mealName}</Text>
                                <Text style={{marginBottom: 10}}>{dish.yourIngredients}</Text>
                            </Card>
                            </TouchableOpacity >
                        ))
                    }
                </ScrollView>
                {/* <FlatList
                    data={flatList}
                    renderItem={({item, index}) => {
                        return (
                            <FlatListItem item={item} index={index}>

                            </FlatListItem>
                        );
                        }}
                    /> */}
            <Button
                title="Go back to search"
                color='#84A6A5'
                onPress={() => this.props.navigation.navigate('Home')} />
            </View >
        )
    };
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