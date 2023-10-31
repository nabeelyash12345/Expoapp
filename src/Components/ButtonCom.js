//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';
import { moderateScale } from 'react-native-size-matters';

// create a component
const ButtonCom = ({
    btnText,
    btnStyle,
    textStyle,
    onPress
}) => {
  
    return (
       <TouchableOpacity
      
       style={{...styles.btnStyle,
        ...btnStyle
    }
    }
    onPress={onPress}
       >
       <Text style={{...styles.textStyles, ...textStyle}}>{btnText}</Text>
       </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    btnStyle:{
        backgroundColor:"#e6e6e6",
        height:moderateScale(50),
        width:'100%',
        borderRadius:6,
        justifyContent:'center',
        alignItems:'center',
        opacity: 0.9,
        borderColor:"black",
        borderWidth:1
        
    },
    textStyles:{
        fontSize:moderateScale(20),
        color:'white',
        fontWeight:'700',
        lineHeight:27,
        letterSpacing:-1,   

    }
});

//make this component available to the app
export default ButtonCom;
