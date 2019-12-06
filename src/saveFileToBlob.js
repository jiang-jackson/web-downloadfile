import moment from 'moment';
import isBlob from 'is-blob';
/**
 *下载或导出文件
 * @param blob  ：返回数据的blob对象
 * @param tagFileName  ：下载后文件名标记
 * @param fileType  ：文件类 word(docx) excel(xlsx) ppt等
 */
export default function saveFileToBlob(blob, tagFileName, fileType) {
  if (fileType) {
    console.warn('未传入文件类型,例如文件类 word(docx) excel(xlsx) ppt jpg png等')
  }
  if (isBlob(blob)) {
    var downloadElement = document.createElement('a');
    let href = window.URL.createObjectURL(blob); //创建下载的链接
    downloadElement.href = href;
    downloadElement.download = (tagFileName ? tagFileName : moment(new Date().getTime()).format('YYYYMMDDhhmmss')) + '.' + fileType; //下载后文件名
    document.body.appendChild(downloadElement);
    downloadElement.click(); //点击下载
    document.body.removeChild(downloadElement); //下载完成移除元素
    window.URL.revokeObjectURL(href); //释放掉blob对象
  } else {
    console.warn('不是blob对象类型的参数,可选择saveFileToBase64(Base64对象,文件类型)或saveFileToLink(文件链接,文件名,文件类型,进度回调方法)')
  }
}