import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  familyContainer:{
    position:'relative',
    zIndex:1,
  },
  familyWrapper:{
    position:'absolute',
    zIndex:2,
    shadowColor:'#929292',
    elevation:3,
    shadowRadius:3,
    shadowOffset:{width:0,height:0},
    shadowOpacity:.3,
    backgroundColor:'#fff',
  },
  familyInfo:{
    marginLeft:30,
  },
  help:{
    backgroundColor:'#4CC596',
    borderTopLeftRadius:12,
    borderBottomLeftRadius:12,
    position:'absolute',
    zIndex:3,
    right:1,
    shadowColor:'#929292',
    elevation:3,
    shadowRadius:3,
    shadowOffset:{width:0,height:0},
    shadowOpacity:.3,
  }
})

export default styles;