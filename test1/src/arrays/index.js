var nestInstanceBaseUrlMap = new Array();
nestInstanceBaseUrlMap.push('/cats');
nestInstanceBaseUrlMap.push('/dogs');
nestInstanceBaseUrlMap.push('/');
nestInstanceBaseUrlMap.push('/cats/tama');
// const url = '/cats/aa';
var url = process.argv[2];
var mapBaseUrl = nestInstanceBaseUrlMap.filter(function (baseUrl) {
    return (url.indexOf(baseUrl) == 0);
}).reduce(function (a, b) { return a.length > b.length ? a : b; });
console.log(mapBaseUrl);
var mapBaseUrlCount = nestInstanceBaseUrlMap.filter(function (baseUrl) {
    return (url.indexOf(baseUrl) == 0);
}).length;
console.log(mapBaseUrlCount);
