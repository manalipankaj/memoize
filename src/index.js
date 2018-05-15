export default (function() {
    const cache = {};

    return function(func, args) {
        const funcName = func.name;
        const fetchFromCache = cache[funcName] ? cache[funcName][args.toString()]?cache[funcName][args.toString()]:false : false;
        if(!fetchFromCache) {
            if(!cache[funcName]) { cache[funcName]={} }
            cache[funcName][args.toString()] = func(...args);
        }
        return cache[funcName][args.toString()];
    }
})();