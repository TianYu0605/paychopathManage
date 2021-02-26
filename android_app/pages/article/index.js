import React, { useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { screenSize, setSpText } from '../../utils/tools';
const Article = ({route}) => {
  // const { id } = route.params;
  const { width } = screenSize;
  return (
    <ScrollView>
      <View style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <View style={{width:width*.95,height:30,display:'flex',justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
          <Ionicons name='toggle-sharp' color='#4CC596' size={setSpText(16)}/>
          <Text style={{fontSize:setSpText(16),paddingLeft:10}}>如何如何如何如恶化</Text>
        </View>
        <Image source={require('../../assets/home/background.png')} style={{width:width*.95,height: width*.4}} resizeMode={'stretch'}/>
        <View style={{width:width*.95,marginTop:10}}>
          <Text>查看console.log的方式最基本的有两种：
第一种方式：如果你的开发环境是Windows，那么就在启动项目的时候，顺便启动日志输出
：react-native log-android然后你就可以在启动黑框里查看输出的内容了。（这种不是很
方便，毕竟是黑框）；如果你的开发环境是Mac，那么XCode里
第一种方式：如果你的开发环境是Windows，那么就在启动项目的时候，顺便启动日志输出
：react-native log-android然后你就可以在启动黑框里查看输出的内容了。（这种不是很
方便，毕竟是黑框）；如果你的开发环境是Mac，那么XCode里
第一种方式：如果你的开发环境是Windows，那么就在启动项目的时候，顺便启动日志输出
：react-native log-android然后你就可以在启动黑框里查看输出的内容了。（这种不是很
方便，毕竟是黑框）；如果你的开发环境是Mac，那么XCode里
第一种方式：如果你的开发环境是Windows，那么就在启动项目的时候，顺便启动日志输出
：react-native log-android然后你就可以在启动黑框里查看输出的内容了。（这种不是很
方便，毕竟是黑框）；如果你的开发环境是Mac，那么XCode里
第一种方式：如果你的开发环境是Windows，那么就在启动项目的时候，顺便启动日志输出
：react-native log-android然后你就可以在启动黑框里查看输出的内容了。（这种不是很
方便，毕竟是黑框）；如果你的开发环境是Mac，那么XCode里
第一种方式：如果你的开发环境是Windows，那么就在启动项目的时候，顺便启动日志输出
：react-native log-android然后你就可以在启动黑框里查看输出的内容了。（这种不是很
方便，毕竟是黑框）；如果你的开发环境是Mac，那么XCode里
第一种方式：如果你的开发环境是Windows，那么就在启动项目的时候，顺便启动日志输出
：react-native log-android然后你就可以在启动黑框里查看输出的内容了。（这种不是很
方便，毕竟是黑框）；如果你的开发环境是Mac，那么XCode里
会有自动输出，不过同一个console会有两次输出</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default Article;