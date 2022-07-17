import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
export const ProductCard = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={25}
          color="#db6d8e"
          style={{ alignSelf: "flex-end", padding: 10 }}
        />
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image style={styles.productImage} source={{ uri: item.image }} />
      </View>
      <Text numberOfLines={2} style={styles.itemTitle}>{item.title}</Text>
      <View style={styles.priceAndCartContainer}>
        <Text style={styles.itemPrice}>${item.price}</Text>
        <TouchableOpacity>
        <AntDesign
          name="plussquare"
          size={30}
          color="#db6d8e"
          
        />
      </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 15,
    backgroundColor: "white",
    borderRadius: 15,
    height: 250,
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  imageContainer: {
    alignItems: "center",

    height: 110,
    justifyContent: "center",
  },
  productImage: {
    width: "50%",
    height: "90%",
  },
  itemTitle: {
    marginHorizontal: 15,
    marginTop: 10,
    fontSize: 13,
  },
  priceAndCartContainer: {
    flexDirection: "row",
  
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop:15
    

  },
  itemPrice: {
    fontWeight:"bold",
    fontSize:15
  }
});
