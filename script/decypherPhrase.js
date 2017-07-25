//5________________________________________________________
var charactersMap = {a: 'o', c: 'd', t: 'g'}

function decypherPhrase (obj, str) {
   var newObj = {};
   for (var prop in obj) {
       if(obj.hasOwnProperty(prop)) {
           newObj[obj[prop]] = prop;
       }
   }
   return cypherPhrase (newObj, str);
}
console.log(decypherPhrase( charactersMap, 'kiggy dog' )); // -> “kitty cat”
