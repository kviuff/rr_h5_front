import http from '@/utils/request'
import {getInformation} from '@/utils/index'

let base = "";
let requestType = { headers: { 'content-type': 'application/x-www-form-urlencoded' } };


// 注册会员
export const saveVip = params => {return http.post(`${base}/f/member/api/save?mtitle=${params.mtitle}&mname=${params.mname}&mmobile=${params.mmobile}&mdate=${params.mdate}`, params).then(res => res.data); };
// 上传图片
export const saveImage = params => { return http.post(`${base}/f/member/api/saveImage?memberId=${params.memberId}`, params,requestType).then(res => res.data); };

