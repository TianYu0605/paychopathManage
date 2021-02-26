import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
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
  flexRowFlexStart:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
  },
  flexColumnSpaceBetween:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
  },
  flexColumnSpaceAround:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center',
  },
  flexColumnFlexStart:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
  },
  flexRowSpaceAround:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  commonBackgroundColor:{
    backgroundColor: '#F7F8FF',
  }
})

export default commonStyles;