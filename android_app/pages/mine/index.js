import React from 'react';
import { View, Text, Image, TouchableNativeFeedback } from 'react-native';
import { screenSize, setSpText } from '../../utils/tools';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Mine = ({navigation}) => {
  const {width,height} = screenSize;
  return (
    <View style={styles.container}>
      <View style={[styles.flexRowSpaceBetween,{width,height:width*.453,backgroundColor:'#4CC596',justifyContent:'space-around'}]}>
        <View style={[styles.flexRowStart,{width:width*.5}]}>
          <View style={[styles.flexCenter,{width:width*.16,height:width*.16,borderRadius:width*.16,backgroundColor:'#fff'}]}>
            <Ionicons name='person' color='#4CC596' size={36} />
          </View>
          <Text style={{color:'#fff',paddingLeft:15,fontSize:setSpText(16)}}>用户名：某某某</Text>
        </View>
        <Image source={require('../../assets/mine/back.png')} style={{width:width*.312,height:width*.312}} resizeMode={'stretch'}/>
      </View>
      <TouchableNativeFeedback>
        <View 
          style={{width,display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#fff',marginTop:20}}
          onTouchEnd={()=>navigation.navigate('MyFamily')}
        >
          <View style={[styles.flexRowSpaceBetween,{width:width*.95,height:60,borderBottomWidth:1,borderBottomColor:"#CECECE"}]}>
            <View style={styles.flexRowStart}>
              <Ionicons name='ios-people-outline' color='#333333' size={18} />
              <Text style={{color:'#333333',paddingLeft:5,fontSize:setSpText(14)}}>我的家人</Text>
            </View>
            <Ionicons name='chevron-forward-sharp' color='#333333' size={18} />
          </View>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback>
        <View 
          style={{width,display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}
          onTouchEnd={()=>navigation.navigate('Help')}
        >
          <View style={[styles.flexRowSpaceBetween,{width:width*.95,height:60}]}>
            <View style={styles.flexRowStart}>
              <Ionicons name='md-briefcase-outline' color='#333333' size={18} />
              <Text style={{color:'#333333',paddingLeft:5,fontSize:setSpText(14)}}>我的求助</Text>
            </View>
            <Ionicons name='chevron-forward-sharp' color='#333333' size={18} />
          </View>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback>
        <View 
          style={{width,display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#fff',marginTop:20}}
          onTouchEnd={()=>navigation.navigate('Set')}
        >
          <View style={[styles.flexRowSpaceBetween,{width:width*.95,height:60}]}>
            <View style={styles.flexRowStart}>
              <Ionicons name='ios-settings-outline' color='#333333' size={18} />
              <Text style={{color:'#333333',paddingLeft:5,fontSize:setSpText(14)}}>个人设置</Text>
            </View>
            <Ionicons name='chevron-forward-sharp' color='#333333' size={18} />
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

export default Mine;