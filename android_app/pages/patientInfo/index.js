import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, ScrollView, Image, TouchableNativeFeedback } from 'react-native';
import { screenSize, setSpText } from '../../utils/tools';
// import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import commonStyles from '../../styles/commonStyles';
import NoContent from '../../components/noContent';
const { width, height } = screenSize;
function InfoTemplate (props) {
  return (
    <View style={[commonStyles.flexRowFlexStart,{width:width*.92,height:60,borderBottomColor:'#CECECE',borderBottomWidth:0.25}]}>
      <View style={{width:width*.213,display:'flex',alignItems:'flex-start',marginRight:10}}>
        <Text style={{fontSize:setSpText(14),color:"#999999"}}>{props.title}</Text>
      </View>
      {
        props.title=='性别'&&<View style={commonStyles.flexRowFlexStart}>
          <TouchableWithoutFeedback>
            <View style={[commonStyles.flexCenter,{width:12,height:12,borderRadius:12,borderWidth:.5,borderColor:`${props.content==='男'?'#333':'#999'}`}]} onTouchEnd={()=>!props.route.params?.isSee && props?.setSex('男')}>
              {props.route.params?.isSee&&props.content==='男'&&<View style={{width:4,height:4,borderRadius:4,backgroundColor:`${props.content==='男'?'#333':'#999'}`}}></View>}
              {props?.sex==='男'&&<View style={{width:4,height:4,borderRadius:4,backgroundColor:'#333'}}></View>}
            </View>
          </TouchableWithoutFeedback>
          <Text style={{fontSize:setSpText(14),color:"#333333",paddingLeft:5}}>男</Text>
          <TouchableWithoutFeedback>
            <View style={[commonStyles.flexCenter,{width:12,height:12,marginLeft:30,borderRadius:12,borderWidth:.5,borderColor:`${props.content==='女'?'#333':'#999'}`}]} onTouchEnd={()=>!props.route.params?.isSee && props?.setSex('女')} >
              {props.route.params?.isSee&&props.content==='女'&&<View style={{width:4,height:4,borderRadius:4,backgroundColor:`${props.content==='女'?'#333':'#999'}`}}></View>}
              {props?.sex==='女'&&<View style={{width:4,height:4,borderRadius:4,backgroundColor:'#333'}}></View>}
            </View>
          </TouchableWithoutFeedback>
          <Text style={{fontSize:setSpText(14),color:"#333333",paddingLeft:5}}>女</Text>
        </View>
      }
      {((props.title!=='性别'&&!props.route.params?.isRevoke&&props.route.params?.isSee)||(props.title!=='性别'&&props.route.params?.hasRevoke))&&<Text style={{fontSize:setSpText(14),color:"#333333"}}>{props.content}</Text>}
      {((props.title!=='性别'&&!props.route.params?.isSee)||(!props.route.params?.hasRevoke&&props.route.params?.isRevoke))&&<TextInput 
        style={{width:width*.5,height:40,paddingVertical:0}} 
        onChangeText={(e)=>props.callback(e)}
        placeholder={`请输入${props.title}`}
        value={props.value}
        clearButtonMode="while-editing"
      />}
    </View>
  )
} 

const PatientInfo = ({navigation,route}) => {
  
  const [sex, setSex] = useState('');
  const [name, setName] = useState('');
  const [idCard, setIdCard] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [custodianName, setCustodianName] = useState('');
  const [custodianPhone, setCustodianPhone] = useState('');
  const [revoke, setRevoke] = useState('');
  
  const nameChange = (e) => {
    setName(e)
  }
  const idCardChange = (e) => {
    setIdCard(e)
  }
  const phoneChange = (e) => {
    setPhone(e)
  }
  const addressChange = (e) => {
    setAddress(e)
  }
  const custodianNameChange = (e) => {
    setCustodianName(e)
  }
  const custodianPhoneChange = (e) => {
    setCustodianPhone(e)
  }
  const revokeChange = (e) => {
    setRevoke(e)
  }
  
  return (
    <ScrollView contentContainerStyle={commonStyles.flexColumnFlexStart} style={{width,backgroundColor:'#fff'}}>
      <InfoTemplate title="姓名" content="某某某" route={route} callback={nameChange} value = {name}/>
      <InfoTemplate title="性别" content="男" sex={sex} setSex={setSex} route={route}/>
      <InfoTemplate title="身份证号" content="某某某"  route={route} callback={idCardChange} value = {idCard}/>
      <InfoTemplate title="联系电话" content="某某某"  route={route} callback={phoneChange} value = {phone}/>
      <InfoTemplate title="详细住址" content="某某某" route={route}  callback={addressChange} value = {address}/>
      <InfoTemplate title="监护人姓名" content="某某某" route={route}  callback={custodianNameChange} value = {custodianName}/>
      <InfoTemplate title="监护人电话" content="某某某" route={route}  callback={custodianPhoneChange} value = {custodianPhone}/>
      {route.params?.isRevoke&&<InfoTemplate title="撤销缘由" content="某某某" route={route}  callback={revokeChange} value = {revoke}/>}
      {
        (!route.params?.isRevoke||route.params?.hasRevoke)&&<TouchableNativeFeedback>
          <View style={[commonStyles.flexCenter,{width:width*.95,height:45,borderRadius:5,marginTop:50,backgroundColor:'#4CC596'}]} onTouchEnd={()=>navigation.navigate('HelpRecords')}>
            <Text style={{fontSize:setSpText(15),color:'#ffffff'}}>求助记录查看</Text>
          </View>
        </TouchableNativeFeedback>
      }
      {
        !route.params?.isRevoke&&<TouchableNativeFeedback>
          <View style={[commonStyles.flexCenter,{width:width*.95,height:45,marginTop:15,borderRadius:5,borderWidth:1,borderColor:'#4CC596',backgroundColor:'#fff'}]} onTouchEnd={()=>navigation.navigate('PatientInfo',{isRevoke:true,isSee:true})}>
            <Text style={{fontSize:setSpText(15),color:'#4CC596'}}>撤销病患</Text>
          </View>
        </TouchableNativeFeedback>
      }
      {
        route.params?.isRevoke&&<TouchableNativeFeedback>
          <View style={[commonStyles.flexCenter,{width:width*.95,height:45,borderRadius:5,marginTop:50,backgroundColor:'#4CC596'}]} onTouchEnd={()=>navigation.navigate('PatientInfo',{hasRevoke:true,isSee:true})}>
            <Text style={{fontSize:setSpText(15),color:'#ffffff'}}>确认撤销</Text>
          </View>
        </TouchableNativeFeedback>
      }
      
    </ScrollView>
  )
}

export default PatientInfo;