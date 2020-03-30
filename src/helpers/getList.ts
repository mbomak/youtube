import config from 'config.json';

interface iObj {
    [index: string]: any;
}

export default (text: string): Promise<any> => {
    const {url, maxResults, apiKey}: iObj = config;
    const params: iObj = {
        key: apiKey,
        part: 'snippet',
        type: 'video',
        q: text,
        videoEmbeddable: true,
        maxResults,
    };
    const paramsString = Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join('&');

    return fetch(url + '?' + paramsString).then(resp => resp.json());
};
