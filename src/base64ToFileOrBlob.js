import { isBase64 } from './utils';
import saveFileToBlob from './saveFileToBlob';
/**
 * 下载base64对象文件
 * @param urlData  ：数据的base64对象
 * @param type  ：类型 image/png;
 * @param isToBlob  ：是否转换Blob对象 并返回 默认true
 * @returns {Blob}：Blob文件对象
 */
export default function base64ToFileOrBlob(urlData, type, isToBlob = true) {
  if (isBase64(urlData)) {//判断是否是Base64字符串
    let arr = urlData.split(',');
    let array = arr[0].match(/:(.*?);/)
    let mime = (array && array.length > 1 ? array[1] : type) || type;
    // 去掉url的头，并转化为byte
    let bytes = window.atob(arr[1]);
    // 处理异常,将ascii码小于0的转换为大于0
    let ab = new ArrayBuffer(bytes.length);
    // 生成视图（直接针对内存）：8位无符号整数，长度1个字节
    let ia = new Uint8Array(ab);
    for (let i = 0; i < bytes.length; i++) {
      ia[i] = bytes.charCodeAt(i);
    }
    let blob = new Blob([ab], {
      type: mime
    });
    if (!!isToBlob) {
      return blob
    } else {
      //切割
      let arrType = mime.split("/");
      let filetype = arrType[(arrType.length - 1)];//文件类型
      saveFileToBlob(blob, '', filetype)
    }
  }
}