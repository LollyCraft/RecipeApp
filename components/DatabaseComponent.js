import firebase from 'firebase';
import React, { Component } from 'react';



export default class DatabaseComponent extends Component {

  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyAvqrD-1JZzo8-1EgYIHNRidge6UpoW0oI",
      authDomain: "recipeapp-96df2.firebaseapp.com",
      databaseURL: "https://recipeapp-96df2.firebaseio.com",
      projectId: "recipeapp-96df2",
      storageBucket: "recipeapp-96df2.appspot.com",
      messagingSenderId: "869354003408",
      appId: "1:869354003408:web:d65886629f9bfc8c44b7d5",
      measurementId: "G-34BDB04BVN"
    };
    firebase.initializeApp(firebaseConfig);

    // console.log(firebase);


    //insert data in database
    // firebase.database().ref('meals/0001').set(
    //   {
    //     mealName: 'pasta with tomato sauce',
    //     avatar_url: 'https://www.thespruceeats.com/thmb/hJtP5QhBfZayjUD7RCyVbydJHtk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-885397466-5c0cc0634cedfd00012758a7.jpg',
    //     yourIngredients: 'pasta, tomato sauce'
    //   }
    // ).then(()=>{
    //   console.log('INSERTED!');
    // }).catch((error)=> {
    //   console.log(error);
    // });


    //select from database but only once, so it goes only through 2 elements in the cathegory
    // firebase.database().ref('users').once('value', (data)=> {
    //   console.log(data.toJSON());
    // })


    // read data
    setTimeout(() => {
      firebase.database().ref('meals').on('value', (data) => {
        console.log(data.toJSON());
        const meals = [];

        data.forEach((doc) => {
          meals.push({
            key: doc.key,
            mealName: doc.toJSON().mealName,
            avatar_url: doc.avatar_url,
            yourIngredients: doc.yourIngredients,
          })
          this.setState({
            meals: meals,
          });
        })
        // return (
        //   <View style={styles.background}>
        //     <Text style={styles.title}>Possible meals that you can make with the ingrediantes you have</Text>
        //     <ScrollView>
        //       {
        //         data.forEach((dish, i) => (
        //           <TouchableOpacity onPress={() => {
        //             this.props.navigation.navigate('SpecificMeal');
        //             mealSelected_index = i;
        //           }}>
        //             <Card image={{ uri: dish.avatar_url }}>
        //               <Text style={{ fontWeight: 'bold', marginBottom: 10, marginTop: 15 }}>{dish.mealName}</Text>
        //               <Text style={{ marginBottom: 10 }}>{dish.yourIngredients}</Text>
        //             </Card>
        //           </TouchableOpacity >
        //         ))
        //       }
        //     </ScrollView>
        //   </View >
        // );
      });
    }, 10);

    // setTimeout(() => {
    //   firebase.database().ref('users/004').set(
    //       {
    //         name: 'byeeeeellllllleeee',
    //         age: '60'
    //       }
    //     ).then(()=>{
    //       console.log('INSERTED!');
    //     }).catch((error)=> {
    //       console.log(error);
    //     });
    // }, 500);


    //update data
    // firebase.database().ref('users/003').update({
    //   name: 'yes yes yes'
    // });


    //remove data - can also remove characteristics of an object eg: user's name if 'users/003/name'
    // firebase.database().ref('users/003').remove();
  }
}