/**
 * Created by dave on 2018/5/28.
 */
/**
 * 安装 style-loader 和 css-loader 后 可直接引入
 */
// import './css/common.scss';
const scss = require('./css/common.scss')

//demo es6

function getData() {
  const promise = new Promise((resolve, reject) => {
    const key = ~~(Math.random() * 10);
    const temp = ['es6', 'babel'];
    if (key >= 5) {
      const obj = {
        msg: 'ok',
        data: [key, ...temp]
      };
      resolve.call(this, obj);
    } else {
      const obj = {
        msg: 'error',
        data: [key, ...temp]
      };
      reject.call(this, obj);
    }
  });
  return promise;
}

const app = document.getElementById('app');
getData().then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});