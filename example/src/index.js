import React from 'react';
import ReactDOM from 'react-dom';

import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex-yingqi';
import { base64ToFileOrBlob, saveFileToBlob, saveFileToLink } from 'web-downloadfile';
class ExamplePage extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {

    };
  }

  /**
  * blob对象转base64
  * @param blob  ：blob对象
  * @param callback  ：回调函数
  */
  blobToDataURL = (blob, callback) => {
    let a = new FileReader();
    a.onload = function (e) { callback(e.target.result); }
    a.readAsDataURL(blob);
  }

  /**
  * base64转文件下载
  */
  base64ToFile = () => {
    const deal = (base64) => {
      console.log('base64====', base64);
      base64ToFileOrBlob(base64, '', false);
    }
    var file = window.$("#file")[0].files[0];
    if (file) {
      this.blobToDataURL(file, deal);
    } else {
      alert('请上传文件')
    }
  }

  /**
  * base64转blob对象
  */
  base64ToBlob = () => {
    const deal = (base64) => {
      console.log('base64====', base64);
      let bolb = base64ToFileOrBlob(base64, '', true);
      console.log('bolb====', bolb);
    }
    var file = window.$("#file")[0].files[0];
    if (file) {
      this.blobToDataURL(file, deal);
    } else {
      alert('请上传文件')
    }
  }

  /**
  * blob对象文件下载
  */
  saveBlobToFile = () => {
    var blob = window.$("#file")[0].files[0];
    if (blob) {
      saveFileToBlob(blob, 'test', 'jpg');
    } else {
      alert('请上传文件')
    }
  }

  /**
  * 下载网络文件
  */
  saveLinkToFile = () => {
    const onProgress = (progress) => {
      console.log('progress====', progress);
    }
    saveFileToLink('http://pic1.win4000.com/wallpaper/a/55349fb752abc.jpg', 'test', 'png', onProgress);
  }

  render() {
    return (
      <div
        style={{
          width: '40%',
          margin: '0 auto'
        }}
      >
        <h1>
          <InlineMath>
            {'\\text{jqy-}\saveFile \\space \\text{usage examples}'}
          </InlineMath>
        </h1>
        <div>
          <label>file</label>
          <input type="file" name="file" id="file" />
        </div>
        <h2>
          <code>{` import { base64ToFileOrBlob } from 'web-downloadfile';

               let Blob = base64ToFileOrBlob(base64,'image/png',true);

                 // or

                  base64ToFileOrBlob(base64,'image/png',false);`}</code>
        </h2>
        <button onClick={() => { this.base64ToFile() }}>base64ToFile</button>
        <br />
        <button onClick={() => { this.base64ToBlob() }}>base64ToBlob</button>


        <h2>
          <code>{` import { saveFileToBlob } from 'web-downloadfile';

                   saveFileToBlob(Blob,'test','xlsx');`}</code>
        </h2>
        <button onClick={() => { this.saveBlobToFile() }}>saveFileToBlob</button>

        <h2>
          <code>{` import { saveFileToLink } from 'web-downloadfile';

                    saveFileToLink('http://pic1.win4000.com/wallpaper/a/55349fb752abc.jpg','test','jpg',fn);`}</code>
        </h2>
        <button onClick={() => { this.saveLinkToFile() }}>saveFileToLink</button>
      </div>
    );
  }
}

ReactDOM.render(<ExamplePage />, document.getElementById('root'));
