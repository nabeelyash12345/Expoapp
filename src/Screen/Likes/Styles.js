import { moderateScale, moderateVerticalScale, verticalScale, scale } from 'react-native-size-matters';

import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
    backgroundColor:'#332C2C',
   
     




    },

    MainContainer:{
      paddingHorizontal:moderateScale(31),
      paddingVertical:moderateVerticalScale(30)
    },
    FlexImage:{
     flexDirection:'row',
     justifyContent:'space-between'
    },
    ball:{
    width:20,
    height:20
    },
    MenuIcon:{
        width:scale(21),
        height:scale(21),
        alignSelf:'flex-end'
        
    },
    TextStyles:{
        fontSize:13,
        fontWeight:'400',
        color:'#D4D1D1',
        lineHeight:13
        

    },
    SubTextTotal:{
        fontSize:scale(21),
        fontWeight:'400',
        color:'rgba(237, 110, 0, 1)',
       
        
    },
    SubTextTotal1:{
        fontSize:scale(16),
        fontWeight:'400',
        color:'rgba(255, 255, 255, 1)',
        marginTop:5
       
        
    },
    MainStyles:{
   paddingHorizontal:moderateScale(15)
    },
    SubText:{
        fontSize:15,
        fontWeight:'400',
        color:'rgba(231, 224, 216, 1)'

    },
    Text2Styles:{
        fontSize:11,
        fontWeight:'400',
        color:'#D4D1D1',
        alignSelf:'flex-start'
        

    },
    Text1Styles:{
        fontSize:scale(17),
        fontWeight:'600',
        color:'#E7E0D8',
        lineHeight:21
    
        

    },
    FlexView:{
   flexDirection:'row',
   marginBottom:2
//    justifyContent:'space-between'
    },
   
   
  
  


});
export default styles