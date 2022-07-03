import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList
} from "react-native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { ProductCard } from "../components/ProductCard";
import axios from "axios"

export default function HomeScreen() {
  const categories = ["All", "Women", "Men", "Jewelery", "Electronics"];
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [productData, setProductData] = useState(null);
  const API_URL = `https://fakestoreapi.com/products`;


  useEffect(() => {
    axios.get(API_URL).then(response => {
      setProductData(response.data);
    })
    
  }, [API_URL]);
  

  const [loaded] = useFonts({
    CaveatBrush: require("../assets/fonts/CaveatBrush-Regular.ttf"),
    Chewy: require("../assets/fonts/Chewy-Regular.ttf"),
    GochiHand: require("../assets/fonts/GochiHand-Regular.ttf"),
    Monoton: require("../assets/fonts/Monoton-Regular.ttf"),
    Satisfy: require("../assets/fonts/Satisfy-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }

  const CategoryList = () => {
    return (
      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setCategoryIndex(index)}
            style={{
              borderBottomWidth: categoryIndex == index && 2,
              borderBottomColor: categoryIndex == index && "#db6d8e",
            }}
          >
            <Text
              style={[
                styles.categoryText,
                categoryIndex == index && styles.selectedCategoryText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };


  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.welcomeText}>Welcome to</Text>
      <Text style={styles.shopixText}>ShopiX</Text>
      <View style={styles.searchAndFilter}>
        <View style={styles.searchBar}>
          <Ionicons
            name="search"
            size={25}
            color="black"
            style={{ marginLeft: 10 }}
          />
          <TextInput style={styles.searchInput} placeholder="Search" />
        </View>
        <TouchableOpacity style={styles.filter}>
          <Ionicons name="options" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <CategoryList />
      <FlatList
      numColumns={2}
      data={productData}
      renderItem={({item}) => (<ProductCard item={item}/>)}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      showsVerticalScrollIndicator={true}
      

        />
      
    </View>
  );
}
const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 30,
    marginLeft: 20,
  },
  shopixText: {
    color: "#db6d8e",
    fontWeight: "bold",
    fontSize: 60,
    marginTop: 0,
    marginLeft: 20,
    fontFamily: "Satisfy",
  },
  searchBar: {
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "#db6d8e",
    borderRadius: 10,
    height: 50,
    marginTop: 10,
    marginHorizontal: 20,
    marginRight: 10,
    flex: 10,
  },
  searchInput: {
    fontSize: 17,
    marginLeft: 10,
    flex: 1,
  },
  searchAndFilter: {
    flexDirection: "row",
    justifyContent: "center",

    height: "12%",
  },
  filter: {
    borderWidth: 1,
    backgroundColor: "#db6d8e",
    borderColor: "#db6d8e",
    flex: 1,
    padding: 10,
    height: 50,
    marginTop: 10,
    marginRight: 20,
    borderRadius: 10,
    justifyContent: "center",
  },
  categoryContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
    marginHorizontal: 20,
    height: "4%",
  },
  categoryText: {
    fontSize: 17,
    color: "#1e1e1e",
    fontWeight:"bold"
  },
  selectedCategoryText: {
    fontSize:18,
    color: "#db6d8e",
  },
});
