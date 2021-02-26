import React from 'react';
import {View, Text} from 'react-native';
import { screenSize, setSpText } from '../../utils/tools';

const NoContent = () => {
  const { width } = screenSize;
  return (
    <View style={{width:width*.45,height:20,paddingTop:40,paddingBottom:20,display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <View style={{width:width*.154,height:0.25,backgroundColor:'#BDBDBD'}}></View>
      <Text style={{fontSize:setSpText(12),color:'#BDBDBD'}}>到底咯~</Text>
      <View style={{width:width*.154,height:0.25,backgroundColor:'#BDBDBD'}}></View>
    </View>
  )
}

export default NoContent;