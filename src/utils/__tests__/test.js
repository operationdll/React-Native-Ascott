import { get, post } from "../api";
import { System, Hello } from "../constants";
import { getConfig } from "../config";
import axios from 'axios';
const https = require('https');
const rootCas = require('ssl-root-cas/latest').create();


https.globalAgent.options.ca = rootCas;
https.globalAgent.options.rejectUnauthorized = false;

(async function test() {
    console.log(Hello);
    const config = getConfig();
    const URI = `${config.baseURL}${System.getTime}`;
    console.log(URI);
    const params = {}
    const options = {
        hostname: config.baseURL,
        path:System.getTime,
        method:'GET',
        rejectUnauthorized: false
    };

    const req = https.get(URI, (res) => {
        
        console.log('statusCode:', res.statusCode);
        console.log('headers', res.headers);
        
        res.on('data', (d) => {
            process.stdout.write(d);
        });

    });

    req.on('error', (e) => {
        
        console.log(e);
    });


  /*  axios.get(URI).then( (value) => {
        console.log(value);
    }).catch(
        (error) => {
         console.log('error');
         console.log(error);
        }
    );
    */
}
)()