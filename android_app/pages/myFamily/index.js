import React,{useState} from 'react';
import { View, Text, ScrollView, Image, TouchableWithoutFeedback, TouchableNativeFeedback, Modal } from 'react-native';
import commonStyles from '../../styles/commonStyles';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { screenSize, setSpText } from '../../utils/tools';
const MyFamily = ({navigation}) => {
  const { width, height } = screenSize;
  const [familyList, setFamilyList] = useState([1,2])
  const [helpList, setHelpList] = useState([1,2,3,4,5,6])
  const [showModal, setShowModal] = useState(false)
  const phoneCall = () => {
    setShowModal(false)
  }
  const openModal = () => {
    setShowModal(true)
  }
  
  return (
    <View  style={[commonStyles.commonBackgroundColor,commonStyles.flexColumnFlexStart,{width,height}]}>
      <ScrollView style={{marginTop:20,marginBottom:40}} showsVerticalScrollIndicator={false}>
        {
          familyList.map((item,index)=>{
            return(
              <View style={[styles.familyContainer,{width:width*.92,height:width*.3,marginTop:5,marginRight:5,marginLeft:5,marginBottom:5}]} key={index+item}>
                <View style={[styles.familyWrapper,commonStyles.flexCenter,{width:width*.92,height:width*.3}]}>
                  <View style={[commonStyles.flexRowFlexStart,{width:width*.82,height:width*.2}]}>
                    <Image 
                      source={{uri:`https://avatar.csdn.net/7/4/C/1_u013519084.jpg?1541993124`}} 
                      style={{width:width*.16,height:width*.16,borderRadius:width*.08}}
                      resizeMode={'stretch'}
                    />
                    <View style={[styles.familyInfo,commonStyles.flexColumnSpaceBetween,{height:width*.18,alignItems:'flex-start'}]}>
                      <Text style={{fontSize:setSpText(14),paddingBottom:10,paddingRight:10,color:'#333333',fontWeight:'bold'}}>某某某&nbsp;&nbsp;&nbsp;&nbsp;
                        <Image 
                          source={require('../../assets/family/love.png')} 
                          style={{width:14,height:11}}
                          resizeMode={'stretch'}
                        />
                        <Text style={{color:"#FF9D83"}}>&nbsp;&nbsp;家人</Text>
                      </Text>
                      <Text style={{fontSize:setSpText(12),color:'#666666'}}>电话：123365499585</Text>
                      <Text style={{fontSize:setSpText(12),color:'#666666'}}>身份证号：123365499585</Text>
                    </View>
                  </View>
                  <TouchableWithoutFeedback>
                    <View style={[commonStyles.flexCenter,styles.help,{width:width*.186,height:24,top:width*.06}]} onTouchEnd={()=>navigation.navigate('Help')}>
                      <Text style={{fontSize:setSpText(12),fontWeight:'bold',color:"#fff"}}>一键求助</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            )
          })
        }
        <View style={[commonStyles.flexRowSpaceAround,{width:width*.92,height:36,backgroundColor:'#46C88F',marginTop:30,marginRight:5,marginLeft:5}]}>
          <Text style={{fontSize:setSpText(14),color:'#fff'}}>身份</Text>
          <Text style={{fontSize:setSpText(14),color:'#fff'}}>姓名</Text>
          <Text style={{fontSize:setSpText(14),color:'#fff'}}>联系方式</Text>
        </View>
        <View style={{backgroundColor:'#87D9B5',width:width*.92,marginRight:5,marginLeft:5}}>
          {
            helpList.length>0&&helpList.map((item,index)=>{
              return (
                <View style={[commonStyles.flexRowSpaceAround,{width:width*.92,height:36}]} key={index+item}>
                  <Text  style={{fontSize:setSpText(14),color:'#666666'}}>身份</Text>
                  <Text  style={{fontSize:setSpText(14),color:'#666666'}}>姓名</Text>
                  <TouchableNativeFeedback>
                    <Text style={{fontSize:setSpText(14),color:'#307CFF'}} onTouchEnd={()=>openModal()}>25658789654</Text>
                  </TouchableNativeFeedback>
                </View>
              )
            })
          }
        </View>

      </ScrollView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={()=>setShowModal(false)}
      >
        <View style={[commonStyles.flexCenter,{width,height,backgroundColor:'#7F7F7F'}]}>
          <View style={[commonStyles.flexColumnFlexStart,{width:260,height:150,backgroundColor:'#fff',borderRadius:10,flexDirection:'column-reverse'}]}>
            <View style={[commonStyles.flexRowFlexStart,{width:260,height:43,borderTopWidth:.5,borderTopColor:'#c3c3c3',marginTop:30}]}>
              <TouchableNativeFeedback>
                <View 
                  style={[commonStyles.flexCenter,{width:129.75,height:43,borderRightColor:'#c3c3c3',borderRightWidth:.25}]}
                  onTouchEnd={()=>setShowModal(false)}
                >
                  <Text style={{fontSize:setSpText(13),color:'#999999'}}>取消</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback>
                <View 
                  style={[commonStyles.flexCenter,{width:129.75,height:43,borderLeftColor:'#c3c3c3',borderLeftWidth:.25}]}
                  onTouchEnd={()=>phoneCall()}
                >
                  <Text style={{fontSize:setSpText(13),color:'#333333'}}>确认</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
            <Text style={{paddingTop:21,fontSize:setSpText(13),color:'#666'}}>您是否要拨打&nbsp;&nbsp;152665487548？</Text>
            <Text style={{paddingTop:14,fontSize:setSpText(13),color:'#333'}}>提示</Text>
          </View>
        </View>
        
      </Modal>
    </View>
  );
}

export default MyFamily;