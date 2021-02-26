import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    position:'relative',
    zIndex: 1,
    backgroundColor:'#ffffff',
  },
  headerCotainer: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  headerWrapper: {
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  inputWrapper:{
    marginLeft:5,
    paddingVertical:0,
  },
  navContainer: {
    position: 'absolute',
    backgroundColor:'#ffffff',
    borderRadius:5,
    zIndex: 2,
    shadowColor:'#A0A0A0',
    elevation:5,
    shadowRadius:5,
    shadowOffset:{width:0,height:0},
    shadowOpacity:.5,
  },
  flexRowSpaceBetween: {
    display: 'flex',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  navItemContainer:{
    borderRadius: 10,
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  flexColumnSpaceBetween:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
  },
  articleContainer:{
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#ffffff',
    borderBottomWidth:.25,
    borderBottomColor:'#CECECE',
  },
  flexRowFlexStart: {
    display: 'flex',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'flex-start',
  }
})

export default styles;