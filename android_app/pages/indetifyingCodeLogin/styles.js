import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'column',
    justifyContent:"flex-start",
    alignItems:'center',
    backgroundColor:'#fff',
  },
  flexCenter:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  flexRowSpaceBetween:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  flexRowStart:{
    display:'flex',
    flexDirection:'row',
    justifyContent:"flex-start",
    alignItems:'center',
  },
  inputWrapper:{
    marginLeft:10,
    paddingVertical:0,
  },
  switchBtn:{
    borderWidth:1,
    borderRadius:3,
    borderColor:'#4CC596',
  }
})

export default styles;