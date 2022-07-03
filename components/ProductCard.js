import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export const ProductCard = ({ item }) => {
  const [isFavorite, setisFavorite] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setisFavorite(!isFavorite)}>
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
      <Text style={styles.itemTitle}>{item.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 15,
    height: 225,
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
    marginHorizontal: 10,
    marginTop: 10,
    fontSize: 12,
  },
});
