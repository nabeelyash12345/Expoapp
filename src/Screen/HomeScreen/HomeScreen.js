
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import imagePath from '../../Components/imagePath';
import ButtonCom from '../../Components/ButtonCom';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import AsyncStorage from "@react-native-async-storage/async-storage"
const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [Product, setProduct] = useState([])
  const [cardItem, setItem] = useState([])
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [customSelectedIndex, setCustomSelectedIndex] = React.useState(0);
  const updateCustomSegment = (index) => {
    setCustomSelectedIndex(index);
  };
  useEffect(() => {
    allCategories();
    getProducts();
  }, [])

  useEffect(() => {
    let price = 0;
    let quantity = 0;
  
    cardItem.forEach((item) => {
      price += item.price;
      quantity += 1;
    });
  
    setTotalPrice(price);
    setTotalQuantity(quantity);
  }, [cardItem]);
  


  console.log(cardItem, "items")

  const storeData = async (item) => {

    try {
      const value = await AsyncStorage.getItem('PRO');
      console.log(value)
      if (value !== null) {

        const a = JSON.parse(value)
        await AsyncStorage.setItem(
          'PRO',
          JSON.stringify([...a, item])
        );
        setItem([...a, item])
        setCustomSelectedIndex(2)
        return;
      }
      await AsyncStorage.setItem(
        'PRO',
        JSON.stringify([item])
      );
      setItem([item])
      setCustomSelectedIndex(2)
    } catch (error) {
      console.log(error)
    }
  };
  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(error => console.error('Error:', error));
  };


  const allCategories = () => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setProduct(json))
      .catch(error => console.error('Error:', error));
  };


  const renderItem = ({ item }) => {
    return (
      <View style={styles.Mainbox1}>


        <View style={styles.flexbox}>
          <Image style={styles.imgStyles} source={{ uri: item.image }} />
        </View>
        <Text style={[styles.ShowText, styles.Product]}>{item.title}</Text>
        <Text>${item.price}</Text>
        <Text>{item.category}</Text>
        <View style={styles.btn}>
          <ButtonCom
            btnText="Add To Cart"
            btnStyle={styles.LgindBtn}
            textStyle={{ color: 'black', fontSize: 15, fontWeight: '600' }}
            onPress={() => {
              storeData(item)
            }}
          />

        </View>
      </View>
    );
  };


  const ProductItem = ({ item }) => {
    return (
      <View style={styles.Mainbox1}>

        <Text style={styles.Product}>{item}</Text>

      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground resizeMode="cover" style={styles.img} source={imagePath.homeImage}>
          <Text style={styles.ShowText}>SHOW GRID FULL WIDTH</Text>
        </ImageBackground>
        <View style={styles.mainSection}>
          <Text style={[styles.ShowText, styles.Reault]}>SHOW All RESULTS </Text>

          <View style={{ flex: 1 }}>
            <SegmentedControlTab
              borderRadius={90}
              values={['All', 'Product', 'Cart', 'order']}
              selectedIndex={customSelectedIndex}
              onTabPress={updateCustomSegment}
              tabsContainerStyle={{
                height: 53,
                backgroundColor: 'white',
                width: '100%',
                alignItems: 'center',
                borderRadius: 20
              }}
              tabStyle={{
                backgroundColor: 'transparent',
                borderWidth: 0,
                borderColor: 'transparent',
                width: '100%',
                height: 35,
                marginLeft: 6


              }}

              activeTabStyle={{
                backgroundColor: 'black', height: 45,
                borderRadius: 90,
              }}
              tabTextStyle={{ color: 'black', fontSize: scale(13), fontWeight: '500', }}
              activeTabTextStyle={{ color: 'white', fontSize: scale(13), fontWeight: '500', }}
            />
            {customSelectedIndex === 0 && (
              <View style={{ marginTop: 30 }}>
                <FlatList
                  data={data}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={renderItem}
                  showsVerticalScrollIndicator={false}
                  numColumns={2}
                />

              </View>
            )}

            {customSelectedIndex === 1 && (
              <View style={{ marginTop: 30 }}>
                <FlatList
                  data={Product}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={ProductItem}
                />

              </View>
            )}

            {customSelectedIndex === 2 && (

              <ScrollView style={{ marginTop: 30 }} showsVerticalScrollIndicator={false}>
                <View><Text style={styles.Product}>Product List</Text></View>
                {cardItem.map((item, ind) =>
                 <View key={ind} style={styles.box}>
                  <Image style={styles.imgStyle} source={{ uri: item.image }} />
                  <Text style={[styles.ShowText, styles.Product]}>{item.title}</Text>
                  <Text style={[styles.ShowText, styles.Product]}>${item.price}</Text>
                  <Text style={[styles.ShowText, styles.Product]}>{item.category}</Text>
                </View>)}
                
                <View>
        <Text>Total Price: ${totalPrice}</Text>
        <Text>Total Quantity: {totalQuantity}</Text>
      </View>
              </ScrollView>
            )}


          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    height: 200,
    width: "100%",
    justifyContent: "center",
  },
  ShowText: {
    color: 'white',
    fontWeight: '600',
    fontSize: scale(15),
    marginLeft: 20,
  },
  btn: {
    width: "100%",
    alignItems: 'center',
    marginTop: 10,
  },
  Product: {
    color: 'black',
    fontWeight: '600',
    marginLeft: 0,
    fontSize: scale(12),
    marginTop: 10,
  },
  mainSection: {
    flex: 1,
    paddingHorizontal: 20,
  },
  Reault: {
    fontSize: 14,
    fontWeight: '500',
    paddingVertical: 20,
    color: 'black',
    marginLeft: 0,
  },
  Mainbox1: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 4,
    marginBottom: 20,
  },
  flexbox: {
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  imgStyles: {
    width: 170,
    height: 200,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  LgindBtn: {
    width: 130,
    height: 34,
  },

  box:{
    paddingHorizontal:20,
    paddingVertical:20
  },
  imgStyle:{
    width:"100%",
    height:200
  }

});

export default HomeScreen;
