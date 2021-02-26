import React, { useState, useRef } from 'react';
import { View, Text, TextInput, FlatList, TouchableWithoutFeedback, ScrollView, Image, TouchableNativeFeedback } from 'react-native';
import { screenSize, setSpText } from '../../utils/tools';
import { useHeaderHeight } from '@react-navigation/stack';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import commonStyles from '../../styles/commonStyles';
import NoContent from '../../components/noContent';

const VisitRecords = ({navigation}) => {
  const {width, height} = screenSize;
  const [visitList, setVisitList] = useState([1,2,3,4])
  return (
    <ScrollView style={{width,marginTop:20}} contentContainerStyle={commonStyles.flexColumnFlexStart}>
      {
        visitList.length>0&&visitList.map((item,index)=>(
          <View key={index} style={[commonStyles.flexCenter,{width:width*.92,height:width*.266,borderRadius:5,backgroundColor:'#fff',marginBottom:10}]}>
            <View style={[commonStyles.flexRowFlexStart,{width:width*.85,height:width*.22}]}>
              <Image 
                source={{uri:`https://avatar.csdn.net/7/4/C/1_u013519084.jpg?1541993124`}} 
                style={{width:width*.16,height:width*.16,borderRadius:width*.16,marginRight:15}}
                resizeMode={'stretch'}
              />
              <View style={[commonStyles.flexColumnSpaceBetween,{height:width*.22,alignItems:'flex-start'}]}>
                <View style={[commonStyles.flexRowFlexStart]}>
                  <Text style={{fontSize:setSpText(15),color:'#333333',fontWeight:'bold',paddingRight:15}}>走访时</Text>
                  <Text style={{fontSize:setSpText(10),color:'#BFC5CB',paddingLeft:5,paddingRight:5,backgroundColor:'#F1F4F6'}}>口头威胁</Text>
                </View>
                <View style={[commonStyles.flexRowFlexStart]}>
                  <Text style={{fontSize:setSpText(12),color:'#666666'}}>走访时间：&nbsp;&nbsp;2020202020201 19:15:15</Text>
                </View>
                <View style={[commonStyles.flexRowFlexStart]}>
                  <Text style={{fontSize:setSpText(12),color:'#666666'}}>走访人：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2020202020201 19:15:15</Text>
                </View>
              </View>
            </View>
          </View>
        ))
      }
    </ScrollView>
  )
}

export default VisitRecords;