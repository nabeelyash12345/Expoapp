//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { moderateVerticalScale, scale } from 'react-native-size-matters';

// create a component
const Card = ({ img, text, text1,text2,para }) => {

    
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={styles.box}>
                <Image style={styles.img} source={img} resizeMode="contain"></Image>
            </View>
            <View style={styles.box1}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                    <Text style={styles.text}>{text}</Text>
                    <View style={{ backgroundColor: "#46DD0B", paddingHorizontal: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                        <Text style={styles.text1}>{text1}</Text>
                    </View>

                </View>
                


            </View>
            <View style={styles.box2}>
               <Text style={styles.text2}>{text2}</Text>

            </View>
            </View>
            <View style={{width:"100%", marginTop:10}}>
                <Text style={styles.text3}>{para}</Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: moderateVerticalScale(144),
        backgroundColor: "#1C1C1E",
        borderRadius: 10,
     
        paddingHorizontal: moderateVerticalScale(14),
        paddingVertical: moderateVerticalScale(14),
        marginBottom:moderateVerticalScale(16),
        marginTop:20
        


    },
    box: {
        flex: 0.6,
        // justifyContent: 'center'

    },
    box1: {
        flex: 2.5

    },
    box2: {
        flex: 1.3,
        alignItems:'center',
       
    
    },
    img: {
        width: moderateVerticalScale(32),
        height: moderateVerticalScale(32)
    },
    img1: {
        width: moderateVerticalScale(30),
        height: moderateVerticalScale(30),
        alignSelf:'flex-end'
    },
    text: {
        color: '#FFFFFF',
        fontSize: scale(15),
        fontWeight: '600'
    },
    text1: {
        color: '#FFFFFF',
        fontSize: scale(15),
        fontWeight: '600'
    },
    text2: {
        color: '#FFFFFF',
        fontSize: scale(13),
        fontWeight: '400',
      
    },
    text3: {
        color: '#FFFFFF',
        fontSize: scale(13),
        fontWeight: '400',
        
    }


});

//make this component available to the app
export default Card;
