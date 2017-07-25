//5________________________________________________________

function newmap(map) {
    var newMap = Object.keys(map).reduce(function(obj,key) {
       obj[ map[key] ] = key;
       return obj;
    },{});
    return newMap;
}
var charactersMap = {a: 'o', c: 'd', t: 'g'}
function decypherPhrase(object, str) {
    var newObj = newmap(charactersMap);
    return cypherPhrase(newObj, str);
};
console.log(decypherPhrase( charactersMap, 'kiggy dog' )); // -> “kitty cat”
