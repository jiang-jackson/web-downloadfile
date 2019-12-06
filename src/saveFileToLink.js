import { CheckUrl } from './utils';
import saveFileToBlob from './saveFileToBlob';

/**
 * 文件链接转文件流下载--主要针对pdf 解决谷歌浏览器a标签下载pdf直接打开的问题
 * @param url  ：文件链接
 * @param fileName  ：文件名;
 * @param type  ：文件类型;
 * @param fn  ：进度回调方法;
 */
export default function saveFileToLink(url, fileName, type, fn) {
  if (!CheckUrl(url)) {
    throw new Error("传入参数不合法,不是标准的文件链接");
  } else {
    var xhr = new XMLHttpRequest();
    url = url.includes('https:') ? url.replace('https:', '') : url.replace('http:', '');//资源路径动态获取请求的方式HTTPS或HTTP
    xhr.open('get', url, true);
    xhr.setRequestHeader('Content-Type', `application/${type}`);
    xhr.setRequestHeader("If-Modified-Since", "0");//解决缓存问题,每次请求都去请求服务器获取最新数据
    xhr.responseType = "blob";
    xhr.onprogress = function (e) {//文件下载进度
      if (fn && typeof fn == 'function') {
        fn(e);//监听文件下载进度;
      }
    },
      xhr.onload = function () {
        if (this.status == 200) {
          //接受二进制文件流
          var blob = this.response;
          saveFileToBlob(blob, fileName, type)
        }
      },
      xhr.send();
  }
}
