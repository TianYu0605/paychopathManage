import { Dimensions, PixelRatio } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
let fontScale = PixelRatio.getFontScale();//返回字体大小缩放比例
let pixelRatio = PixelRatio.get();//当前设备的像素密度
const defaultPixel = 2;                           //pixel2像素密度
//px转换成dp
const w2 = 1080 / defaultPixel;
const h2 = 1920 / defaultPixel;
const scale = Math.min(deviceHeight / h2, deviceWidth / w2);   //获取缩放比例
/**
 * 设置text为sp
 * @param size sp
 * return number dp
 */
function setSpText(size) {
    size = Math.round((size * scale + 0.5) * pixelRatio / fontScale);
    return size / defaultPixel;
}

const screenSize = {
  width: deviceWidth,
  height: deviceHeight,
};


function numberToChinese(str) {
  let num = parseFloat(str);
  let strOutput = "",
      strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';
  num += "00";
  let intPos = num.indexOf('.');  
  if (intPos >= 0){
      num = num.substring(0, intPos) + num.substr(intPos + 1, 2);
  }
  strUnit = strUnit.substr(strUnit.length - num.length);
  for (let i=0; i < num.length; i++){
      strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(num.substr(i,1),1) + strUnit.substr(i,1);
  }
  return strOutput.replace(/零角零分$/, '整').replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元').replace(/亿零{0,3}万/, '亿').replace(/^元/, "零元")
}
export {
  screenSize,
  setSpText,
  numberToChinese
};