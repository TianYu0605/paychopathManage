import React, {useState} from 'react';
import { View, Text, Image, TouchableNativeFeedback, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { screenSize, setSpText } from '../../utils/tools';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
const Set = ({navigation}) => {
  const {width,height} = screenSize;
  const [notice, setNotice] = useState(true)
  const noticeSet = () => {
    setNotice(!notice)
  }
  const ItemTemplate = (props) => {
    const turnToEdit = () => {
      if (props?.to) {
        navigation.navigate(props.to,{title:props.title})
      }
    }
    return (
      <TouchableNativeFeedback>
        <View 
          style={{width,display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#fff',marginTop:props.top?20:0}}
          onTouchEnd={()=>turnToEdit()}
        >
          <View style={[styles.flexRowSpaceBetween,{width:width*.95,height:60,borderBottomWidth:1,borderBottomColor:props.border?"#CECECE":"#efeff3"}]}>
            <Text>{props.title}</Text>
            
            <View style={styles.flexRowStart}>
              {props.title==='头像'?
                <Image source={require('../../assets/home/jiaren_icon.png')} style={{width:40,height:40,borderRadius:20,marginRight:5}} />:
              <Text style={{color:'#333333',paddingRight:5,fontSize:setSpText(14)}}>{props.content}</Text>}
              {props?.to&&<Ionicons name='chevron-forward-sharp' color='#333333' size={18} />}
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    )
  }
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ItemTemplate top={true} title="头像" content="" to="Edit" border={true}/>
        <ItemTemplate top={false} title="昵称" content="德玛西亚" to="Edit" border={true}/>
        <ItemTemplate top={false} title="手机号" content="123456789456" to="Edit" border={true}/>
        <ItemTemplate top={false} title="微信号" content="12345665543" border={false}/>
        <ItemTemplate top={true} title="推送消息设置" content="" to="Edit" border={true}/>
        <View style={{width,display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
          <View style={[styles.flexRowSpaceBetween,{width:width*.95,height:60}]}>
            <Text>社区通知</Text>
            <TouchableWithoutFeedback>
              <View style={styles.flexRowStart} onTouchEnd={()=>noticeSet()}>
                {notice?<Fontisto name='toggle-on' color='#4CC596' size={36} />:<Fontisto name='toggle-off' color='#CECECE' size={36} />}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <ItemTemplate top={true} title="去好评" content="" to="Edit" border={true}/>
        <ItemTemplate top={false} title="推荐给朋友" content="" to="Edit" border={true}/>
        <ItemTemplate top={false} title="关于我们" content="" to="Edit" border={false}/>
        <View style={[styles.flexCenter,{width,height:60,backgroundColor:"#fff",marginTop:50,marginBottom:75}]}>
          <Text style={{color:'#FF4949',fontSize:setSpText(14)}}>退出登录</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default Set;