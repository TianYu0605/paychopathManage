import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'column',
    justifyContent:"flex-start",
    alignItems:'center',
  },
  flexCenter:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  flexRowStart:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
  },
  flexRowSpaceBetween:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  }
})

export default styles;