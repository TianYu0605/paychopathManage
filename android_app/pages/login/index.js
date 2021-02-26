import React from 'react';
import { useState } from 'react';
import { View, Button, Text, Image, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import { screenSize, setSpText } from '../../utils/tools';
import styles from './styles';
const Login = ({navigation}) => {
  const {width,height} = screenSize;
  const turnToHome = () => {
    navigation.navigate('Tab')
  }
  return (
    <View style={styles.container}>
      <Text style={{fontSize:setSpText(20),marginTop:height*.11,color:'#333333',fontWeight:'bold'}}>请登录精神疾病</Text>
      <Text style={{fontSize:setSpText(12),marginTop:10,color:'#999999'}}>请选择登录方式</Text>
      <Image source={require('../../assets/login/login.png')} resizeMode='stretch' style={{width:width*.466,height:width*.325,marginTop:30}} />
      <TouchableNativeFeedback>
        <View style={[styles.flexCenter,{width:width*.95,height:45,borderRadius:5,marginTop:50,backgroundColor:'#4CC596'}]} onTouchEnd={()=>navigation.navigate('IndetifyingCodeLogin')}>
          <Text style={{fontSize:setSpText(15),color:'#ffffff'}}>验证码登录</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback>
        <View style={[styles.flexCenter,styles.loginBtn,{width:width*.95,height:45,marginTop:15,backgroundColor:'#fff'}]} onTouchEnd={()=>navigation.navigate('UsernameAndPasswordLogin')}>
          <Text style={{fontSize:setSpText(15),color:'#4CC596'}}>账号密码登录</Text>
        </View>
      </TouchableNativeFeedback>
      <Text style={{fontSize:setSpText(12),marginTop:50,color:'#999999'}}>没有账号？
        <TouchableWithoutFeedback>
          <Text style={{color:'#307CFF'}} onTouchEnd={()=>navigation.navigate('Register')}>立即注册</Text>
        </TouchableWithoutFeedback>
      </Text>
    </View>
  )
}

export default Login;