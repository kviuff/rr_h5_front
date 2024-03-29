import Cookies from 'js-cookie'
import store from '@/store'

/**
 * 权限
 * @param {*} key
 */
export function hasPermission (key) {
  return window.SITE_CONFIG['permissions'].indexOf(key) !== -1 || false
}

/**
 * 清除登录信息
 */
export function clearLoginInfo () {
  // store.commit('share.vue')
  Cookies.remove('token')
  window.SITE_CONFIG['dynamicMenuRoutesHasAdded'] = false
}

/**
 * 存储md5,memberId,authTime--localstorage
 */
export const setInformation=(keyword,text)=> {
  if(!keyword) return;
  localStorage.setItem(keyword,JSON.stringify(text))
}


/**
 * 获取md5,memberId,authTime--localstorage
 */
export const getInformation=keyword=> {
  if(!keyword) return;
  return JSON.parse(localStorage.getItem(keyword))
}


/**
 * 移除md5,memberId,authTime--localstorage
 */
export const removeInformation=keyword=> {
  if(!keyword) return;
  localStorage.removeItem(keyword)
}

/**
 * 获取uuid
 */
export function getUUID () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16)
  })
}

/**
 * 获取svg图标(id)列表
 */
export function getIconList () {
  var res = []
  document.querySelectorAll('svg symbol').forEach(item => {
    res.push(item.id)
  })
  return res
}

/**
 * 树形数据转换
 * @param {*} data
 * @param {*} id
 * @param {*} pid
 */
export function treeDataTranslate (data, id = 'id', pid = 'pid') {
  var res = []
  var temp = {}
  for (var i = 0; i < data.length; i++) {
    temp[data[i][id]] = data[i]
  }
  for (var k = 0; k < data.length; k++) {
    if (!temp[data[k][pid]] || data[k][id] === data[k][pid]) {
      console.log(k,'遍历')
      res.push(data[k])
      continue
    }
    if (!temp[data[k][pid]]['children']) {
      temp[data[k][pid]]['children'] = []
    }
    temp[data[k][pid]]['children'].push(data[k])
    data[k]['_level'] = (temp[data[k][pid]]._level || 0) + 1
  }
  return res
}

//图片转base64
export function getUrlBase64(url, ext, callback) {
  var canvas = document.createElement("canvas"); //创建canvas DOM元素
  var ctx = canvas.getContext("2d");
  var img = new Image;
  img.crossOrigin = 'Anonymous';
  img.src = url;
  img.onload = function () {
    canvas.height = img.height; //指定画板的高度,自定义
    canvas.width = img.width; //指定画板的宽度，自定义
    console.log(canvas.height,canvas.width)
    ctx.drawImage(img, 0, 0, canvas.width,canvas.height ); //参数可自定义
    var dataURL = canvas.toDataURL("image/" + ext);
    callback.call(this, dataURL); //回掉函数获取Base64编码
    canvas = null;
  };
}
