import React, { useEffect } from 'react';
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
       flex: 1,
        justifyContent: "center"
      }}>
       <ActivityIndicator size="large" color="#db6d8e" />
      
    </View>
    );

    
}
