// @flow

export const getConfig = () => {

    let config = {
        
    };

    switch(process.env.NODE_ENV)
    {
        case "development": 
            config.localStorage = {};
            config.localStorage.identity = 'test';
            config.baseURL = 'https://devservice.easyiservice.com';
            config.timeOut = 3000;
            config.headers = { };
            config.secure = 'CtUyV$8MGoK8u5L*P0Q50T/b8S9iclS*LQqo'
            break;
        case "staging":
            break;
        case "Production":
            break;
        default:
            break;
    }

    return config;
}
