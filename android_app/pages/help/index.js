import React,{ useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableWithoutFeedback, TouchableNativeFeedback, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import commonStyles from '../../styles/commonStyles';
import { screenSize, setSpText } from '../../utils/tools';
const Help = ({navigation}) => {
  const { width, height } = screenSize;
  const [checkedList, setCheckedList] = useState([]);
  const [description, setDescription] = useState('');
  const changeChecked = (index) => {
    let list = checkedList;
    list[index].checked = !checkedList[index].checked;
    setCheckedList(JSON.parse(JSON.stringify(list)))
  }
  const descriptionChange = (e) => {
    setDescription(e)
  }
  useEffect(()=>{
    setCheckedList([
      {checked:true,name:"无符合以下五种的任何行为"},
      {checked:false,name:"口头威胁，喊叫"},
      {checked:false,name:"打砸，能制止"},
      {checked:true,name:"明显打砸，不能制止"},
      {checked:true,name:"持续打杂，不能制止"},
      {checked:true,name:"持械针对人，不分场合"},
    ])
  },[])
  const submit = () => {
    navigation.navigate('HelpSuccess')
  }
  return (
    <View style={[commonStyles.flexColumnFlexStart,{width,backgroundColor:'#fff'}]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[commonStyles.flexColumnFlexStart,{width}]}>
          <View style={[commonStyles.flexRowFlexStart,{width:width*.95,height:60,borderBottomWidth:.5,borderBottomColor:'#cecece'}]}>
            <Text style={{fontSize:setSpText(14),paddingRight:30,color:'#999999'}}>姓名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
            <Image 
              source={{uri:`https://avatar.csdn.net/7/4/C/1_u013519084.jpg?1541993124`}} 
              style={{width:36,height:36,borderRadius:36}}
              resizeMode={'stretch'}
            />
            <Text style={{fontSize:setSpText(14),paddingLeft:15,color:'#333333'}}>某某某</Text>
          </View>
          <View style={[commonStyles.flexRowFlexStart,{width:width*.95,height:60,borderBottomWidth:.5,borderBottomColor:'#cecece'}]}>
            <Text style={{fontSize:setSpText(14),paddingRight:30,color:'#999999'}}>性别&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
            <Text style={{fontSize:setSpText(14),color:'#333333'}}>男</Text>
          </View>
          <View style={[commonStyles.flexRowFlexStart,{width:width*.95,height:60}]}>
            <Text style={{fontSize:setSpText(14),paddingRight:30,color:'#999999'}}>联系方式</Text>
            <Text style={{fontSize:setSpText(14),color:'#333333'}}>111111111111</Text>
          </View>
          <View style={[commonStyles.flexCenter,{width,height:40,backgroundColor:'#F7F8FF',alignItems:'flex-start'}]}>
            <Text style={{fontSize:setSpText(12),color:'#999999',paddingLeft:width*.025}}>病患情况(可多选)</Text>
          </View>
          {
            checkedList.map((item,index)=>{
              return (
                <TouchableWithoutFeedback  key={item.name} >
                  <View style={[commonStyles.flexRowFlexStart,{width:width*.95,height:40}]}onTouchEnd={()=>changeChecked(index)}>
                    {item.checked===true&&<AntDesign name='checksquareo' color="#4CC596" size={setSpText(16)}/>}
                    {item.checked===true&&<Text style={{paddingLeft:15,fontSize:setSpText(14),color:'#333333'}}>{item.name}</Text>}
                    {item.checked===false&&<AntDesign name='checksquareo' color="#999999" size={setSpText(16)}/>}
                    {item.checked===false&&<Text style={{paddingLeft:15,fontSize:setSpText(14),color:'#999999'}}>{item.name}</Text>}
                  </View>
                </TouchableWithoutFeedback>
              )
            })
          }
          <View style={[commonStyles.flexCenter,{width:width*.95,height:40,alignItems:'flex-start'}]}>
            <Text style={{fontSize:setSpText(12),color:'#999999'}}>补充情况说明</Text>
          </View>
          <View style={[commonStyles.flexColumnSpaceBetween,{width:width*.95,height: width*.24,borderWidth:.5,borderColor:'#DDDDDD',borderRadius:5}]}>
            <TextInput 
              style={{width:width*.5,paddingVertical:0,height: width*.24-30}} 
              onChangeText={descriptionChange} 
              placeholder="请输入详细描述(最多50个字)"
              value={description}
            />
            <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',alignItems:'center',width:width*.95,height: 30}}>
              <Text style={{fontSize:setSpText(14),color:'#999999',paddingRight:15}}>{description.length}/50</Text>
            </View>
          </View>
          <TouchableNativeFeedback>
            <View style={[commonStyles.flexCenter,{width:width*.95,height:45,borderRadius:5,marginTop:30,marginBottom:30,backgroundColor:'#4CC596'}]} onTouchEnd={()=>submit()}>
              <Text style={{fontSize:setSpText(15),color:'#ffffff'}}>提交</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    </View>
  );
}

export default Help;