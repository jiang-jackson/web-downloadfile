# web-downloadfile

文件下载 [web-downloadfile](https://github.com/jiang-jackson/web-downloadfile)

## BlogAddress

[纯前端下载文件](https://www.cnblogs.com/jackson-yqj/p/11321275.html)

## Installation

```sh
  $ npm install web-downloadfile --save
  # or
  $ yarn add web-downloadfile
```

## Usage

```jsx
import { base64ToFileOrBlob, saveFileToBlob, saveFileToLink } from 'web-downloadfile';
```

### 一,base64ToFileOrBlob

主要针对图片 base64转blob对象 或 直接下载文件 但是文件也可用

```jsx
  import { base64ToFileOrBlob } from 'web-downloadfile';

  let Blob = base64ToFileOrBlob(base64,'',true);

  // or

   base64ToFileOrBlob(base64,'',false);
```

### 二,saveFileToBlob

主要用于文件导出下载 支持大部分文件类型 但是文件类型必传

```jsx
  import { saveFileToBlob } from 'web-downloadfile';

  saveFileToBlob(Blob,'test','xlsx');
```

### 三,saveFileToLink

主要pdf文件链接的下载 因为pdf文件链接在浏览器会直接打开 但是其他文件的链接也可以下载 可监听文件下载进度

link必须允许跨越访问 否则无法下载
```jsx
  import { saveFileToLink } from 'web-downloadfile';

  saveFileToLink(link,'test','jpg',fn);
```
