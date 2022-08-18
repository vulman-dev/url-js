const make = (websiteAddress) => new URL(websiteAddress);

const setProtocol = (data, protocol) => {
    data.protocol = protocol;
    return data;
};

const getProtocol = (data) => data.protocol;

const setHost = (data, host) => {
    data.host = host;
    return data;
};

const getHost = (data) => data.host;

const setPath = (data, path) => {
    data.pathname = path;
    return data;
};

const getPath = (data) => data.pathname;

const setQueryParam = (data, key, value) => {
    let params = new URLSearchParams(data.search);
    params.set(key, value);
    data.search = params;
    return data;
};

const getQueryParam = (data, paramName, defaulValue = null) => {
    let params = new URLSearchParams(data.search);
    if (params.get(paramName) === null) {
        return defaulValue;
    }
    return params.get(paramName);
};

const toString = (data) => data.toString();

const url = make('https://hexlet.io/community?q=low');
console.log(url);
console.log(getQueryParam(url, 'q'));