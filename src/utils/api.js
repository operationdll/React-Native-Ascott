import axios from "axios";
import https from 'https';
import md5 from 'md5';
import * as rootCAs from 'ssl-root-cas';

import { getConfig } from "./config";
import { System } from "./constants";
import * as fetch from 'node-fetch';

//let time = "";
const config = getConfig();
/*const instance = axios.create(
    {
        baseURL: config.baseURL,
        timeout: config.timeout,
    }
);*/

axios.interceptors.request.use( ( configuration ) => {

    return configuration;

}, ( error ) => {

    return Promise.reject(error);

});

axios.interceptors.response.use( ( response ) => {

    return response;
}, ( error ) => {
    
    return Promise.reject(error);
});

/*axios.defaults.transformRequest = [ ( data ) => {

    let ret = Object.keys(data).map( key => encodeURIComponent(key) +'=' + encodeURIComponent(data[key])).join('&');

    return ret;

}]
*/

export const getObj = async function(params){
    let time = ""
    let difTime = 0;
    let str = "";


    https.globalAgent.options.ca = rootCAs;
    https.globalAgent.options.rejectUnauthorized = false;
    $URI = `${config.baseURL}${System.getTime}`;

	if(time===""){

        const response = await fetch($URI);
        const json = await response.json();
        time = json.data.time;
        const timestamp = Math.ceil(new Date().getTime()/1000);
        difTime = timestamp - time;
    }
    else{
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

export const get = async ( api: string, params: {} ) => {
    
    const data = await getObj(params);
   
    return new Promise(( resolve, reject ) => {

        axios.get(api, data).then((response) => {
            resolve(response);
        }
        ).catch(error => {
            reject(error);
        })
    }
    )
}

export const post = async ( api: string, params: {} ) => {
    
    const data = getObj(params);
    return new Promise(( resolve, reject ) => {

        axios.post(api, data).then((response) => {
            resolve(response);
        }
        ).catch(error => {
            reject(error);
        })
    }
    )
}

/*export default {
    get : get,
    post: post,
} */


