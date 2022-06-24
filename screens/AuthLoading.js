import React, { useState, useEffect } from 'react';
import { View,  ActivityIndicator, Text } from 'react-native';
import {auth} from "../firebase"

export default function AuthLoading({navigation}) {


  useEffect(() => {
    const subscriber = auth.onAuthStateChanged((user) => {
        if(user){console.log(user)
            navigation.navigate("BottomTabs")
        }
        else {
             navigation.navigate('LoginScreen');
        }
    });
    return subscriber; // unsubscribe on unmount
  }, []);

  

    return (
        <View
      style={{
        width: "100%",
        height: '70%',
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'space-around',
      }}>
      <ActivityIndicator size="large" color="#0000ff" />
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            alignSelf: 'center',
            fontSize: 18,
          }}>{`Loading`}</Text>
      </View>
    </View>
    );

  
}