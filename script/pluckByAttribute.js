
//3________________________________________________________

var presidents = [ { name: 'George', surname: 'Kush' } ,
                   { name: 'Barako', surname: 'Obaame' } ];
var list = [];
function nameToList(key) {
    return function(item) {
        return item[key];
    }
}
function pluckByAttribute(arr, key) {
	return getTransformedArray(arr, nameToList(key) );    
}

console.log(pluckByAttribute(presidents, 'name') ); // -> [‘George’, ‘Barako’]

