import { get, post } from "../api";
import { System, Login, Hello } from "../constants";
import { getConfig } from "../config";
import axios from 'axios';
import fetch from 'node-fetch';
import { getObj } from '../api';
const https = require("https");
const agent = new https.Agent({
    rejectUnauthorized: false
});

(async function test() {
 
    const config = getConfig();
    const URI = `${config.baseURL}${Login.LoginUrl}`;
    console.log(URI);
    const params = {
        fullname: 'wang',
        groupid:config.groupid,
        hotelid:1,
        identity: 'test',
        lang: 'zh',
        paltform: config.platform,
        room_no: '7072',
        propertyinterfId: 0 // or 12
        

    }
    
    console.log(params);
    const data = await getObj(params);
    
    const paramsSent = JSON.stringify(
        data
    )

    
    const options = {
        body: paramsSent,
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json'
        },
        method: 'POST',
        mode: "cors",
        redirect: 'follow',
        referrer: 'no-referrer',
        agent: agent
    }


    const response = await fetch(URI, options);
    const json = await response.json();

    console.log(json);

}
)()