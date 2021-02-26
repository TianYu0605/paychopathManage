import React from 'react';
import { useState } from 'react';
import { View, Text, Button, TextInput, Image, ScrollView, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { screenSize, setSpText } from '../../utils/tools';
import NoContent from '../../components/noContent';
import styles from './styles';
import Access from '../../utils/access';
const { width, height } = screenSize;
function NavTemplate(props){
  return (
    <TouchableWithoutFeedback>
      <View style={[styles.flexColumnSpaceBetween,{width: width*.2,height: width*.23,alignItems:'center'}]}>
        <Image source={props.imgURL} style={{width: width*.12,height:width*.12}} resizeMode={'stretch'} onTouchEnd={()=>props.navigation.navigate(`${props.to}`)}/>
        <Text style={{fontSize:setSpText(14)}}>{props.title}</Text>
        <Text style={{fontSize:setSpText(12),color:'#858B8C'}}>{props.info}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}
const Home = ({navigation}) => {
  const [inputValue, setInputValue] = useState('');
  const [articleList, setArticleList] = useState([1,2,3,4]);
  const access = Access.get();
  const inputChange = (e) => {
    setInputValue(e)
  }
  return (
    <View style={styles.container}>
      {/* <View source={require('../../assets/home/background.png')} style={{width:width,height: width*.506}} resizeMode={'stretch'}/> */}
      <View style={{width:width,height: width*.506,backgroundColor:'#4cc596'}}>
        <View style={[styles.headerWrapper, {width:width,height: width*.056,marginTop:width*.05}]}>
          <Text style={{fontSize: setSpText(18),color:'#fff'}}>精神病患</Text>
        </View>
        <View style={[styles.headerWrapper, {width:width,height: width*.106,marginTop:width*.027,position:'relative'}]}>
          <View style={[styles.flexRowFlexStart, {width:width*.723,height: width*.08,backgroundColor:'#F1F1F2',borderRadius: width*.08}]}>
            <View  style={{width:20}}></View>
            <Ionicons name='search' color='#999999' size={20}/>
            <TextInput 
              style={[styles.inputWrapper, {width:width*.5,height: width*.08}]} 
              onChangeText={inputChange} 
              placeholder="请输入关键词"
              value={inputValue}
              clearButtonMode="while-editing"
            />
          </View>
        </View>
      </View>
      <View style={{width:width*.942,height: width*.093,marginTop:width*.18,display:'flex',justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
        <View style={{width:5,height:width*.04,backgroundColor:'#4CC596'}}></View>
        <Text style={{fontSize: setSpText(20),paddingLeft:20}}>文章资讯</Text>
      </View>
      <ScrollView style={{width:width*.942,height:height - width*.96}} showsVerticalScrollIndicator={false}>
        {articleList.length>0&&articleList.map((item,index)=>(
          <TouchableWithoutFeedback key={index}>
            <View style={[styles.articleContainer, {width:width*.942,height: width*.24}]} onTouchEnd={()=>navigation.navigate('Article',{id:1})}>
              <View style={[styles.flexRowSpaceBetween, {width:width*.942}]}>
                <View style={[styles.flexColumnSpaceBetween, {width:width*.6,height: width*.176}]}>
                  <Text style={{fontSize:setSpText(14),color:'#333333',paddingLeft:5}} numberOfLines={2}>
                    <View style={{backgroundColor:'#CAFAE7',paddingLeft:5,paddingRight:5,borderRadius:5}}><Text style={{fontSize:setSpText(12),color:'#4CC596'}}>科普</Text></View>
                  &nbsp;这是一这是一个很长很长的标题这是一个很长很长的标题个很长很长的标题这是一个很长很长的标题</Text>
                  <Text style={{fontSize:setSpText(12),color:'#999999'}}>2020-05-21  13:13</Text>
                </View>
                <Image source={require('../../assets/home/background.png')} style={{width:width*.36,height: width*.176}} resizeMode={'stretch'}/>
              </View>
            </View>
          </TouchableWithoutFeedback>
        ))}
        {
          access==='user'&&<View style={{display:'flex',alignItems:'center'}}>
            <NoContent /> 
          </View>
        }
        {
          access==='admin'&&articleList.length===0&&
          <View style={{display:'flex',alignItems:'center'}}>
            <Image source={require('../../assets/home/noData.png')} style={{width:width*.328,height: width*.267,marginTop:30}} resizeMode={'stretch'}/>
            <Text style={{fontSize:setSpText(10),color:'#BBCDE0',paddingTop:2}}>暂无数据</Text>
            <TouchableNativeFeedback>
              <Text style={{fontSize:setSpText(12),color:'#307CFF',paddingTop:20,paddingBottom:30}} onTouchEnd={()=>navigation.navigate('EditArticle')}>立即添加</Text>
            </TouchableNativeFeedback>
          </View>
          
        }

      </ScrollView>
      <View style={[styles.navContainer,styles.headerWrapper, {width:width*.92,height: width*.35,left:width*.04,top:width*.316}]}>
        <View style={[styles.flexRowSpaceBetween, {width:width*.58}]}>
          {access==='admin'&&<NavTemplate to='MyPatient' imgURL={require('../../assets/home/binghuan_icon.png')} title='我的病患' info='患者基本信息' bgColor='#E6FAFE' navigation={navigation}/>}
          {access==='admin'&&<NavTemplate to='VisitRecords' imgURL={require('../../assets/home/jilu_icon.png')} title='走访记录' info='反馈病患情况' bgColor='#FFF7E1' navigation={navigation}/>}
          {access==='user'&&<NavTemplate to='MyFamily' imgURL={require('../../assets/home/jiaren_icon.png')} title='我的家人' info='查看我的家人' bgColor='#E6FAFE' navigation={navigation}/>}
          {access==='user'&&<NavTemplate to='Help' imgURL={require('../../assets/home/qiuzhu_icon.png')} title='一键求助' info='求助有新进展' bgColor='#FFF7E1' navigation={navigation}/>}
        </View>
      </View>
    </View>
  );
}

export default Home;