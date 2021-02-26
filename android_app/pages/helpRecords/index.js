import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, ScrollView, Image, TouchableNativeFeedback } from 'react-native';
import { screenSize, setSpText, numberToChinese } from '../../utils/tools';
// import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import commonStyles from '../../styles/commonStyles';
import NoContent from '../../components/noContent';

const HelpRecords = ({navigation}) => {

  const { width, height } = screenSize;
  const [helpList, setHelpList] = useState([1,2,3,4,5])
  return (
    <View style={[commonStyles.flexColumnFlexStart,{width,height:height-80,position:'relative',backgroundColor:'#F7F8FF'}]}>
      <View style={[commonStyles.flexCenter,{width,height:30,backgroundColor:'#CAFAE7'}]}>
        <Text style={{fontSize:setSpText(12),color:'#4cc596'}}>有关该病患的全部求助记录如下(攻击12次求助)</Text>
      </View>
      <View style={[commonStyles.flexColumnSpaceAround,{width:width*.92,height:width*.267,backgroundColor:'#fff',borderRadius:5,position:'relative',alignItems:'flex-start',marginTop:20}]}>
        <View style={[commonStyles.flexRowFlexStart,{marginLeft:10,height:width*.0667}]}>
          <Image 
            source={{uri:`https://avatar.csdn.net/7/4/C/1_u013519084.jpg?1541993124`}} 
            style={{width:width*.0667,height:width*.0667,borderRadius:width*.0667,marginRight:15}}
            resizeMode={'stretch'}
          />
          <Text style={{fontWeight:'bold',fontSize:setSpText(15),color:"#333333",paddingRight:30}}>某某某</Text>
          <AntDesign name="man" color="#0379FF" size={10}/>
          <Text style={{fontSize:setSpText(12),color:"#75A6F8",paddingLeft:5}}>33岁</Text>
        </View>
        <View style={[commonStyles.flexRowFlexStart,{marginLeft:10,height:width*.0453}]}>
          <Image 
            source={require('../../assets/patient/phone.png')} 
            style={{width:width*.0296,height:width*.028,marginRight:10}}
            resizeMode={'stretch'}
          />
          <Text style={{fontSize:setSpText(12),color:"#999999"}}>12356987456</Text>
        </View>
        <View style={[commonStyles.flexRowFlexStart,{marginLeft:10,height:width*.0453}]}>
          <Image 
            source={require('../../assets/patient/address.png')} 
            style={{width:width*.0296,height:width*.028,marginRight:10}}
            resizeMode={'stretch'}
          />
          <Text style={{fontSize:setSpText(12),color:"#999999"}}>某某某路</Text>
        </View>
        <TouchableNativeFeedback>
          <View 
            style={[commonStyles.flexCenter,{width:width*.1746,height:width*.056,backgroundColor:'#4cc596',position:'absolute',right:0,top:width*.056,borderTopLeftRadius:width*.056,borderBottomLeftRadius:width*.056}]}
            onTouchEnd={()=>navigation.navigate('MyFamily')}
            >
            <Text style={{fontSize:setSpText(12),color:"#fff"}}>其他家人</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <ScrollView style={{width,marginTop:20}} showsVerticalScrollIndicator={false} contentContainerStyle={commonStyles.flexColumnFlexStart}>
        {
          helpList.length>0&&helpList.map((item,index)=>(
            <View style={{width:width*.92}} key={index}>
              <Text style={{fontSize:setSpText(12),color:"#999",paddingTop:20}}>第{index+1}次求助</Text>
              <View style={[commonStyles.flexCenter,{width:width*.92,height:width*.266,backgroundColor:'#fff',marginTop:10,borderRadius:5}]}>
                <View style={[{width:width*.86,height:width*.22}]}>
                  <View style={[commonStyles.flexRowSpaceBetween,{marginBottom:10}]}>
                    <View style={[commonStyles.flexRowFlexStart]}>
                      <Image 
                        source={{uri:`https://avatar.csdn.net/7/4/C/1_u013519084.jpg?1541993124`}} 
                        style={{width:width*.0667,height:width*.0667,borderRadius:width*.0667,marginRight:15}}
                        resizeMode={'stretch'}
                      />
                      <Text style={{fontWeight:'bold',fontSize:setSpText(15),color:"#333333"}}>我</Text>
                    </View>
                    <Text style={{fontSize:setSpText(12),color:"#999999"}}>20202020202020202020</Text>
                  </View>
                  <View>
                    <Text>如果你的开发环境是Windows，那么就在启动项目的时候，顺便启动日志输出</Text>
                  </View>
                </View>
              </View>
            </View>
          ))
        }
        <NoContent />
        <View style={{height:80}}></View>
      </ScrollView>
      <TouchableNativeFeedback >
        <View style={[commonStyles.flexCenter,{width:width*.92,height:45,position:'absolute',bottom:15,left:width*.04,zIndex:2,borderRadius:5,backgroundColor:'#4CC596'}]} onTouchEnd={()=>navigation.navigate('Help')}>
          <Text style={{fontSize:setSpText(15),color:'#ffffff'}}>新增求助</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

export default HelpRecords;