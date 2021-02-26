import React from 'react';
import { View, Text, Image, TouchableNativeFeedback } from 'react-native';
import { screenSize, setSpText } from '../../utils/tools';
import commonStyles from '../../styles/commonStyles';
const HelpSuccess = ({navigation}) => {
  const {width,height} = screenSize;

  return (
    <View style={[commonStyles.flexColumnFlexStart,{width,height,backgroundColor:'#fff'}]}>
      <Image 
        source={require('../../assets/help/chenggong_icon.png')} 
        style={{width:width*.25,height:width*.221,marginTop:height*.187}}
        resizeMode={'stretch'}
      />
      <Text style={{fontSize:setSpText(17),color:'#333333',paddingTop:20,paddingBottom:30}}>发送求助成功！</Text>
      <TouchableNativeFeedback>
        <View style={[commonStyles.flexCenter,{width:width*.95,height:45,borderRadius:5,marginTop:50,backgroundColor:'#4CC596'}]} onTouchEnd={()=>navigation.navigate('Help')}>
          <Text style={{fontSize:setSpText(16),color:'#ffffff'}}>查看求助信息</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback>
        <View style={[commonStyles.flexCenter,{width:width*.95,height:45,borderRadius:5,marginTop:20,backgroundColor:'#4CC596'}]} onTouchEnd={()=>navigation.navigate('Tab')}>
          <Text style={{fontSize:setSpText(16),color:'#ffffff'}}>返回首页</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

export default HelpSuccess;