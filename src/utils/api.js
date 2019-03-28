import axios from "axios";

import { getConfig } from "./config";
import { system } from "./constants";

const time = "";
const config = getConfig();
const instance = axios.create(
    {
        baseURL: config.baseURL,
        timeout: config.timeout,
    }
);

instance.interceptors.request.use( ( configuration ) => {

    return configuration;

}, ( error ) => {

    return Promise.reject(error);

});

instance.interceptors.response.use( ( response ) => {

    return response;
}, ( error ) => {
    
    return Promise.reject(error);
});

instance.defaults.transformRequest = [ ( data ) => {

    let ret = Object.keys(data).map( key => encodeURIComponent(key) +'=' + encodeURIComponent(data[key])).join('&');

    return ret;

}]

/*
const getObj = function(params){
    
    let difTime = 0;
    let str = "";
	if(time===""){
		$.ajax({
            //url:'https://devservice.easyiservice.com/system/getTime',
            url: `${config.baseURL}${system.getTime}`,
			type:'GET', //GET
			async:false,    //或false,是否异步
			timeout:5000,    //超时时间
			dataType:'json',    //返回的数据格式：json/xml/html/script/jsonp/text
			success:function(data){ 
				time = data.data.time;
				var timestamp = Math.ceil(new Date().getTime()/1000);
				difTime = timestamp - time;
			}
		});
	}else{
		time = Math.ceil(new Date().getTime()/1000)+difTime;
	}
    params.time = time;
    
	let p = Object.keys(params).sort();
    for (const k: string in p){
		if(p[k]!=="sign"){
			str += (p[k]+params[p[k]]);
		}
    }
    // Get secure key from config
	str += config.secure;
	var sign = md5(str);
    params.sign = sign;
    return params;
}
*/
const get = async ( api: string, params: {} ) => {
    
   // const data = getObj(params);
    return new Promise(( resolve, reject ) => {

        instance.get(api, data).then((response) => {
            resolve(response);
        }
        ).catch(error => {
            reject(error);
        })
    }
    )
}

const post = async ( api: string, params: {} ) => {
    
    const data = getObj(params);
    return new Promise(( resolve, reject ) => {

        instance.post(api, data).then((response) => {
            resolve(response);
        }
        ).catch(error => {
            reject(error);
        })
    }
    )
}

export default {
    get : get,
    post: post,
} 


