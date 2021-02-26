import React from 'react';
import { View, Text, TextInput, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import { screenSize, setSpText } from '../../utils/tools';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useState } from 'react';
const Edit = ({navigation,route}) => {
  const {width,height} = screenSize;
  const { title } = route.params;
  const [input, setInput] = useState('');
  const inputChange = (e) => {
    setInput(e)
  }
  const sureEdit = () => {

  }
  const clearInput = () => {
    if (input.length>0) {
      setInput("")
    }
  }
  return (
    <View style={[styles.container,{width,height}]}>
      <View style={[styles.flexCenter,{backgroundColor:'#fff',width,marginTop:20}]}>
        <View style={[styles.flexRowSpaceBetween,{width:width*.95,height:60}]}>
          <TextInput 
            style={[styles.inputWrapper, {width:width*.8,height: 40}]} 
            onChangeText={inputChange} 
            placeholder={`${title}`}
            value={input}
            fontSize={setSpText(18)}
          />
          <TouchableWithoutFeedback>
            <View style={[styles.flexCenter,{backgroundColor:'#e8e8e8',width:20,height:20,borderRadius:12,marginRight:10}]} onTouchEnd={clearInput}>
              <AntDesign name="close" color="#999999" size={12}/>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <TouchableNativeFeedback>
        <View style={[styles.flexCenter,{width:width*.95,height:45,borderRadius:5,marginTop:50,backgroundColor:'#4CC596'}]} onTouchEnd={()=>sureEdit()}>
          <Text style={{fontSize:setSpText(16),color:'#ffffff'}}>完成</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

export default Edit;
