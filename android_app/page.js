import React from 'react';
import { useEffect } from 'react';
import {View, Text, TabBarIOSItem} from 'react-native';
import Content from './components/content';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './pages/home';
import UsernameAndPasswordLogin from './pages/usernameAndPasswordLogin';
import IndetifyingCodeLogin from './pages/indetifyingCodeLogin';
import Register from './pages/register';
import Login from './pages/login';
import Article from './pages/article';
import Mine from './pages/mine';
import Set from './pages/set';
import Edit from './pages/edit';
import Help from './pages/help';
import HelpRecords from './pages/helpRecords';
import RevokePatient from './pages/revokePatient';
import MyPatient from './pages/myPatient';
import VisitRecords from './pages/visitRecords';
import VisitInfo from './pages/visitInfo';
import PatientInfo from './pages/patientInfo';
import HelpSuccess from './pages/helpSuccess';
import MyFamily from './pages/myFamily';
import IndexModel from './models/index';
import IistModel from './models/list';
import styles from './styles/commonStyles';


const indexModel = new IndexModel();
const listModel = new IistModel();

const Page = () => {
  const getCourseDatas =() => {
    indexModel.getCourseDatas().then((res)=>console.log(res))
  }
  useEffect(()=>{
    // getCourseDatas()
  },[1])

  /**
   * 首页底部导航栏
   */
  const BottomTab = () => {
    const Tab  =createBottomTabNavigator();
    return (
      <Tab.Navigator style={styles.container}
        screenOptions = {({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            switch (route.name) {
              case '首页': iconName = 'ios-home'; break;
              case '我的': iconName = 'person'; break;
            }
            return (
              <Ionicons 
                name = {iconName}
                size = {size}
                color = {color}
              />
            )
          }
        })}
        tabBarOptions = {{
          activeTintColor: '#4cc596',
          inactiveTintColor: '#999',
        }}
      >
        <Tab.Screen 
          name = '首页'
          component = {Home}
        />
        <Tab.Screen 
          name = '我的'
          component = {Mine}
        />
      </Tab.Navigator>
    )
  };

  //使用栈导航
  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name = 'Login'
            component = { Login }
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name = 'UsernameAndPasswordLogin'
            component = { UsernameAndPasswordLogin }
            options={{
              headerTitle: '账号密码登录',
              headerBackTitle: null,
              headerTitleAlign:'center',
            }}
          />
          <Stack.Screen 
            name = 'IndetifyingCodeLogin'
            component = { IndetifyingCodeLogin }
            options={{
              headerTitle: '验证码登录',
              headerBackTitle: null,
              headerTitleAlign:'center',
            }}
          />
          <Stack.Screen 
            name = 'Register'
            component = { Register }
            options={{
              headerTitle: '账号注册',
              headerBackTitle: null,
              headerTitleAlign:'center',
            }}
          />
          <Stack.Screen 
            name = 'Tab'
            component = { BottomTab }
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name = 'Article'
            component = { Article }
            options={{
              headerTitle: '详情页',
              headerBackTitle: null,
              headerTitleAlign:'center',
            }}
          />
          <Stack.Screen 
            name = 'MyFamily'
            component = { MyFamily }
            options={{
              headerTitle: '我的家人',
              headerBackTitle: null,
              headerTitleAlign:'center',
            }}
          />
          <Stack.Screen 
            name = 'Help'
            component = { Help }
            options={{
              headerTitle: '一键求助',
              headerBackTitle: null,
              headerTitleAlign:'center',
            }}
          />
          <Stack.Screen 
            name = 'HelpSuccess'
            component = { HelpSuccess }
            options={{
              headerTitle: '一键求助',
              headerBackTitle: null,
              headerTitleAlign:'center',
            }}
          />
          <Stack.Screen 
            name = 'HelpRecords'
            component = { HelpRecords }
            options={{
              headerTitle: '求助记录',
              headerBackTitle: null,
              headerTitleAlign:'center',
            }}
          />
          <Stack.Screen 
            name = 'Set'
            component = { Set }
            options={{
              headerTitle: '设置',
              headerBackTitle: null,
              headerTitleAlign:'center',
            }}
          />
          <Stack.Screen 
            name = 'Edit'
            component = { Edit }
            options={{
              headerTitle: '编辑',
              headerBackTitle: null,
              headerTitleAlign:'center',
            }}
          />
          <Stack.Screen 
            name = 'MyPatient'
            component = { MyPatient }
            options={{
              headerTitle: '我的病患',
              headerBackTitle: null,
              headerTitleAlign:'center',
            }}
          />
          <Stack.Screen 
            name = 'PatientInfo'
            component = { PatientInfo }
            options={{
              headerTitle: '病患信息',
              headerBackTitle: null,
              headerTitleAlign:'center',
            }}
          />
          <Stack.Screen 
            name = 'RevokePatient'
            component = { RevokePatient }
            options={{
              headerTitle: '撤销病患',
              headerBackTitle: null,
              headerTitleAlign:'center',
            }}
          />
          <Stack.Screen 
            name = 'VisitRecords'
            component = { VisitRecords }
            options={{
              headerTitle: '走访记录',
              headerBackTitle: null,
              headerTitleAlign:'center',
            }}
          />
          <Stack.Screen 
            name = 'VisitInfo'
            component = { VisitInfo }
            options={{
              headerTitle: '走访详情',
              headerBackTitle: null,
              headerTitleAlign:'center',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Page;