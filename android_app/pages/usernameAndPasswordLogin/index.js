import React from 'react';
import { View, Text, TextInput, TouchableNativeFeedback } from 'react-native';
import { screenSize, setSpText } from '../../utils/tools';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useState } from 'react';
import Access from '../../utils/access';
// import Radio from '@ant-design/react-native/lib/radio';
// import { Radio } from '@ant-design/react-native';
const UsernameAndPasswordLogin = ({navigation}) => {
  const {width,height} = screenSize;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const usernameChange = (e) => {
    setUsername(e)
  }
  const passwordChange = (e) => {
    setPassword(e)
  }
  const login = () => {
    if (username==='1'&&password==='1') {
      Access.set('admin')
    } else {
      Access.set('user')
    }
    navigation.navigate('Tab')
  }
  return (
    <View style={[styles.container,{width,height}]}>
      <View style={[styles.flexRowSpaceBetween,{width:width*.8,borderBottomWidth:1,height:40,borderBottomColor:'#CECECE',marginTop:height*.15}]}>
        <Fontisto name='person' color='#4CC596' size={16} />
        <TextInput 
          style={[styles.inputWrapper, {width:width*.8,height: width*.08}]} 
          onChangeText={usernameChange} 
          placeholder="请输入您的账号"
          value={username}
          clearButtonMode="while-editing"
        />
      </View>
      <View style={[styles.flexRowSpaceBetween,{width:width*.8,borderBottomWidth:1,height:40,borderBottomColor:'#CECECE',marginTop:20}]}>
        <Fontisto name='locked' color='#4CC596' size={16} />
        <TextInput 
          style={[styles.inputWrapper, {width:width*.8,height: width*.08}]} 
          onChangeText={passwordChange} 
          placeholder="请输入您的密码"
          value={password}
          clearButtonMode="while-editing"
        />
      </View>
      <View style={{width:width*.8,display:'flex',justifyContent:'flex-start',flexDirection:'row',alignItems:'center',marginTop:20}}>
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

export default UsernameAndPasswordLogin;
