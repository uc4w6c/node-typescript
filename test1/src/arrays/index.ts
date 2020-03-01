let nestInstanceBaseUrlMap: string[] = new Array();
nestInstanceBaseUrlMap.push('/cats');
nestInstanceBaseUrlMap.push('/dogs');
nestInstanceBaseUrlMap.push('/');
nestInstanceBaseUrlMap.push('/cats/tama');

// const url = '/cats/aa';
const url = process.argv[2];

const mapBaseUrl = nestInstanceBaseUrlMap.filter(baseUrl => {
    return (url.indexOf(baseUrl) == 0)
}).reduce((a, b) => a.length > b.length?a:b);
console.log(mapBaseUrl);

const mapBaseUrlCount = nestInstanceBaseUrlMap.filter(baseUrl => {
    return (url.indexOf(baseUrl) == 0)
}).length;
console.log(mapBaseUrlCount);
