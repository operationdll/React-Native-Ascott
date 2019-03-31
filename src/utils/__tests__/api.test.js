import { get, post } from "../api";
import { System } from "../constants";
import { getConfig } from "../config";
import axios from 'axios';

jest.mock('axios');

it('Should get system time', () => {
    const time = { timezone:'NZ', currentTime: '28/03/2019' };
    const resp = {data: time};
    axios.get.mockResolvedValue(resp);
    fetch = jest.fn((uri) => new Promise((resolve) => { 
        const respData = { time: 1234566 };
        const respForFech = {data: respData };
        resolve( {json:respForFech} );
    }));

    const config = getConfig();
    const URI = "https://devservice.easyiservice.com/system/getTime";
    const params = {};
    get(URI, params).then(resp => {
        console.log(resp);
        expect(resp.data).toEqual(time)});

    expect(fetch).toHaveBeenCalledTimes(1);
});


it("Should get avaiable APP image", () => {

    // Not implemented
});
