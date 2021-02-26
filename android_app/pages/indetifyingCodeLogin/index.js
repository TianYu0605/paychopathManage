import React from 'react';
import { View, Text, TextInput, TouchableNativeFeedback } from 'react-native';
import { screenSize, setSpText } from '../../utils/tools';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useState } from 'react';
const IndetifyingCodeLogin = ({navigation}) => {
  const {width,height} = screenSize;
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [checked, setChecked] = useState(false);
  const [sendAgain, setSendAgain] = useState(true);
  const [timeCount, setTimeCount] = useState(0);
  const phoneChange = (e) => {
    setPhone(e)
  }
  const codeChange = (e) => {
    setCode(e)
  }
  const login = () => {
    navigation.navigate('Tab')
  }
  const sendCode = () => {

  }
  return (
    <View style={[styles.container,{width,height}]}>
      <View style={[styles.flexRowSpaceBetween,{width:width*.8,borderBottomWidth:1,height:40,borderBottomColor:'#CECECE',marginTop:height*.15}]}>
        <View style={styles.flexRowStart}>
          <Fontisto name='phone' color='#4CC596' size={16} />
          <TextInput 
            style={[styles.inputWrapper, {width:width*.6,height: width*.08}]} 
            onChangeText={phoneChange} 
            placeholder="请输入您的手机号码"
            value={phone}
            clearButtonMode="while-editing"
          />
        </View>
        <TouchableNativeFeedback>
          <View onTouchEnd={()=>sendCode} >
            <Text style={{color:'#4CC596'}} >发送</Text>
            {/* <Fontisto name='paper-plane' color='#4CC596' size={16} /> */}
          </View>
        </TouchableNativeFeedback>
      </View>
      <View style={[styles.flexRowSpaceBetween,{width:width*.8,borderBottomWidth:1,height:40,borderBottomColor:'#CECECE',marginTop:20}]}>
        <View style={styles.flexRowStart}>
          <Fontisto name='calendar' color='#4CC596' size={16} />
          <TextInput 
            style={[styles.inputWrapper, {width:width*.4,height: width*.08}]} 
            onChangeText={codeChange} 
            placeholder="请输入您的验证码"
            value={code}
            clearButtonMode="while-editing"
          />
        </View>
        <Text  style={{color:`${sendAgain?'#4CC596':'#fff'}`}} >{timeCount}秒后可重新发送</Text>
      </View>
      <View style={[styles.flexRowStart,{width:width*.8,marginTop:20}]}>
        <TouchableNativeFeedback>
          <AntDesign name='checksquareo' color={`${checked?'#4CC596':'#999'}`} size={setSpText(16)} onTouchEnd={()=>setChecked(!checked)}/>
        </TouchableNativeFeedback>
        <Text style={{fontSize:setSpText(12),paddingLeft:10}}>登录即同意
          <TouchableNativeFeedback>
            <Text  style={{color:'#307CFF'}} onTouchEnd={()=>navigation.navigate('UserAgreement')}>《用户协议》</Text>
          </TouchableNativeFeedback>
        </Text>
      </View>
      <TouchableNativeFeedback>
        <View style={[styles.flexCenter,{width:width*.95,height:45,borderRadius:5,marginTop:50,backgroundColor:'#4CC596'}]} onTouchEnd={()=>login()}>
          <Text style={{fontSize:setSpText(15),color:'#ffffff'}}>登录</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

export default IndetifyingCodeLogin;
