import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'column',
    justifyContent:"flex-start",
    alignItems:'center',
    backgroundColor:'#F7F8FF',
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
  inputWrapper:{
    marginLeft:10,
    paddingVertical:0,
  }
})

export default styles;