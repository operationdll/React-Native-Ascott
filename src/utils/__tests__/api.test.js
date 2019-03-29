import { get, post } from "../api";
import { system } from "../constants";
import { getConfig } from "../config";
import axios from 'axios';

jest.mock('axios');


it('get system time', () => {
    const time = { timezone:'NZ', currentTime: '28/03/2019' };
    const resp = {data: time};
    axios.get.mockResolvedValue(resp);
    const config = getConfig();
    const URI = "https://devservice.easyiservice.com/system/getTime";
    const params = {};
    const res = get(URI, params).then(resp => expect(resp.data).toEqual(time));
})