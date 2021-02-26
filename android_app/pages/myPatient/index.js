import React, { useState, useRef } from 'react';
import { View, Text, TextInput, FlatList, TouchableWithoutFeedback, ScrollView, Image, TouchableNativeFeedback } from 'react-native';
import { screenSize, setSpText } from '../../utils/tools';
import { useHeaderHeight } from '@react-navigation/stack';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import commonStyles from '../../styles/commonStyles';
import NoContent from '../../components/noContent';

const MyPatient = ({navigation}) => {
  const headerHeight = useHeaderHeight();
  const { width, height } = screenSize;
  const inputRef = useRef();
  const [name, setName] = useState('');
  const [patientList, setPatientList] = useState([1,5]);
  const [isInput, setIsInput] = useState(false);
  const [inputHistory, setInputHistory] = useState([1,2,3,4,5,6,7,8,2,3,4,5,6,7,8]);
  const nameChange = (e) => {
    setName(e)
  }
  return (
    <View style={{width,height,backgroundColor:'#F7F8FF',position:'relative',zIndex:1}}>
      <View style={[commonStyles.flexColumnFlexStart,{width}]}>
        <View style={[commonStyles.flexCenter,{width,height:width*.1+30,paddingTop:15,paddingBottom:15,backgroundColor:'#fff'}]}>
          <View style={[commonStyles.flexRowSpaceBetween,{width:width*.92,height:width*.1}]}>
            <TextInput 
              style={{width:width*.8,height: width*.08,paddingVertical:0,backgroundColor:'#EFEFEF',borderRadius:20,paddingLeft:20}} 
              onChangeText={nameChange} 
              placeholder="请输入关键字"
              value={name}
              onFocus={()=>setIsInput(true)}
              onBlur={()=>setIsInput(false)}
              ref={inputRef}
            />
            {
              isInput&&<TouchableWithoutFeedback>
                <Text style={{fontSize:setSpText(14),color:'#307CFF'}} onTouchEnd={()=>{setIsInput(false);setName('');inputRef.current.blur()}}>取消</Text>
              </TouchableWithoutFeedback>
            }
            {!isInput&&<Text style={{fontSize:setSpText(14),color:'#999999'}}>取消</Text>}
          </View>
        </View>
      </View>
      <View style={{width,height:10,backgroundColor:'#F7F8FF'}}></View>
      {
        isInput&&<View style={[commonStyles.flexColumnFlexStart,{width,height:40,marginTop:20}]}>
          <View style={[commonStyles.flexRowSpaceBetween,{width:width*.92,height:40}]}>
            <Text style={{fontSize:setSpText(16),fontWeight:'bold',color:'#333333'}}>我搜索过的</Text>
            <TouchableWithoutFeedback>
              <AntDesign name="delete" color="#999999" size={16} onTouchEnd={()=>setInputHistory([])} />
            </TouchableWithoutFeedback>
          </View>
          <View style={[commonStyles.flexRowFlexStart,{width:width*.92,maxHeight:60,overflow:'scroll',flexWrap:'wrap'}]}>
            {
              inputHistory.length>0&&inputHistory.map((item,index)=>{
                return (
                  <View style={[commonStyles.flexCenter,{height:25,marginBottom:5,backgroundColor:'#F5F6F8',marginRight:15}]} key={index}>
                    <Text style={{fontSize:setSpText(12),color:'#999999',paddingRight:10,paddingLeft:10}}>1111111111</Text>
                  </View>
                )
              })
            }
          </View>
        </View>
      }
      {
        !isInput&&<View style={{width,height:height-width*.1-130-headerHeight}}>
          <ScrollView  showsVerticalScrollIndicator={false} contentContainerStyle={commonStyles.flexColumnFlexStart} >
            {patientList.length>0&&patientList.map((item,index)=>{
              return (
                <TouchableNativeFeedback key={index}>
                  <View 
                    style={[commonStyles.flexColumnSpaceAround,{width:width*.92,height:width*.267,backgroundColor:'#fff',borderRadius:5,position:'relative',alignItems:'flex-start',marginBottom:10}]}
                    onTouchEnd={()=>navigation.navigate('PatientInfo')}
                  >
                    <View style={[commonStyles.flexRowFlexStart,{marginLeft:10,height:width*.0667}]}>
                      <Image 
                        source={{uri:`https://avatar.csdn.net/7/4/C/1_u013519084.jpg?1541993124`}} 
                        style={{width:width*.0667,height:width*.0667,borderRadius:width*.0667,marginRight:15}}
                        resizeMode={'stretch'}
                      />
                      <Text style={{fontWeight:'bold',fontSize:setSpText(15),color:"#333333"}}>某某某</Text>
                      <Image 
                        source={require('../../assets/patient/patient.png')} 
                        style={{width:width*.04768,height:width*.03467,marginLeft:15,marginRight:6}}
                        resizeMode={'stretch'}
                      />
                      <Text style={{fontSize:setSpText(12),color:"#75A6F8"}}>病患</Text>
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
                        onTouchEnd={(e)=>{e.stopPropagation();navigation.navigate('VisitRecords')}}
                        >
                        <Text style={{fontSize:setSpText(12),color:"#fff"}}>走访记录</Text>
                      </View>
                    </TouchableNativeFeedback>
                  </View>
                </TouchableNativeFeedback>
              )
            })}
            {
              patientList.length>0&&<View style={{width:width*.92,display:'flex',alignItems:'center'}}>
                <NoContent /> 
              </View>
            }
            {
              patientList.length===0&&<View style={[commonStyles.flexCenter,{width:width*.92}]}>
                <Text style={{fontSize:setSpText(14),color:"#999999"}}>暂无病患</Text>
              </View>
            }
          </ScrollView>
        </View>
      }
      {
        !isInput&&<TouchableNativeFeedback >
          <View style={[commonStyles.flexCenter,{width:width*.92,height:45,position:'absolute',bottom:90,left:width*.04,zIndex:2,borderRadius:5,backgroundColor:'#4CC596'}]} onTouchEnd={()=>navigation.navigate('PatientInfo')}>
            <Text style={{fontSize:setSpText(15),color:'#ffffff'}}>创建</Text>
          </View>
        </TouchableNativeFeedback>
      }

    </View>
  )
}

export default MyPatient;