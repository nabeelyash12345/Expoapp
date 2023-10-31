import React, { useState ,useEffect} from 'react';
import { View, Text, TouchableOpacity ,Alert } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage"

const ProductScreen = ({ route }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);


   useEffect(()=>{
    console.log('123')
    const storeData = async () => {
      try {
        await AsyncStorage.setItem(
          'TASKS',
          'I like to save it.',
        );
      } catch (error) {
        console.log(error)
      }
    };
    storeData()


   },[])
  const total = product.price * quantity;

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Product: {product.title}</Text>
      <Text>Price: ${product.price}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
        <TouchableOpacity onPress={decreaseQuantity} style={{ padding: 5, backgroundColor: '#ccc', borderRadius: 5 }}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text style={{ marginHorizontal: 10 }}>{quantity}</Text>
        <TouchableOpacity onPress={increaseQuantity} style={{ padding: 5, backgroundColor: '#ccc', borderRadius: 5 }}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <Text>Total: ${total}</Text>
    </View>
  );
};

export default ProductScreen;
