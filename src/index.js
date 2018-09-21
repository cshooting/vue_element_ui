import axios from "axios";
import qs from "qs";

require('promise.prototype.finally').shim();

function getData(url) {
  axios.get(url)
    .then(function (res) {
      console.log(res.data);
    })
}

//axios封装
function http(url, method, param) {
  param = param && typeof param === "object" ? param : {};
  const config = {
    url: url,
    method: method,
    /*
        `transformRequest` 允许在向服务器发送前，修改请求数据
        只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
        后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
    */
    transformRequest: [function (param) {
      return qs.stringify(param);
    }],
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
  };
  //post请求时需要设定Content-Type
  if (method === 'post') {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    config.data = param;
  } else if (method === 'get') {
    config.param = param;
  }
  return axios(config);
}

function test() {
  console.log("11111111111");
}

function newtest() {
  console.log("test");
}

export {
  test,
  newtest,
  getData,
  http
}
