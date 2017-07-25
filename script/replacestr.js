//4________________________________________________________

function replacestr(map){
    return function(item){
        return map[item] ? map[item] : item;
    }
}
var charactersMap = {a: 'o', c: 'd', t: 'g'}

function cypherPhrase(object, str){
    var arr = str.split('');
    var newStr = getTransformedArray(arr, replacestr(object));

    return newStr.join('');
}
console.log(cypherPhrase( charactersMap, 'kitty cat' )); // -> “kiggy dog”
