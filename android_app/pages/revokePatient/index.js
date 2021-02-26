import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, ScrollView, Image, TouchableNativeFeedback } from 'react-native';
import { screenSize, setSpText } from '../../utils/tools';
// import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import commonStyles from '../../styles/commonStyles';
import NoContent from '../../components/noContent';

const RevokePatient = () => {

  const { width, height } = screenSize;
  const InfoTemplate = (props) => (
    <View style={[commonStyles.flexRowFlexStart,{width:width*.92,height:60,borderBottomColor:'#CECECE',borderBottomWidth:0.25}]}>
      <Text style={{paddingRight:30}}>{props.title}</Text>
      <Text>{props.content}</Text>
    </View>
  )
  return (
    <ScrollView contentContainerStyle={commonStyles.flexColumnFlexStart} style={{width,backgroundColor:'#fff'}}>
      <InfoTemplate title="姓名" content="某某某"/>
      <InfoTemplate title="性别" content="某某某"/>
      <InfoTemplate title="身份证号" content="某某某"/>
      <InfoTemplate title="联系电话" content="某某某"/>
      <InfoTemplate title="详细住址" content="某某某"/>
      <InfoTemplate title="监护人姓名" content="某某某"/>
      <InfoTemplate title="监护人电话" content="某某某"/>
      <TouchableNativeFeedback>
        <View style={[commonStyles.flexCenter,{width:width*.95,height:45,borderRadius:5,marginTop:50,backgroundColor:'#4CC596'}]} onTouchEnd={()=>navigation.navigate('HelpRecords')}>
          <Text style={{fontSize:setSpText(15),color:'#ffffff'}}>求助记录查看</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback>
        <View style={[commonStyles.flexCenter,{width:width*.95,height:45,marginTop:15,borderRadius:5,borderWidth:1,borderColor:'#4CC596',backgroundColor:'#fff'}]} onTouchEnd={()=>navigation.navigate('RevokePatient')}>
          <Text style={{fontSize:setSpText(15),color:'#4CC596'}}>撤销病患</Text>
        </View>
      </TouchableNativeFeedback>
    </ScrollView>
  )
}

export default RevokePatient;