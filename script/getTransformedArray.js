
//2________________________________________________________

function increment() {
   return function(num) {
        return +num + 1;
    }
} 
function getTransformedArray(arr, func1) {
    var newArr = [];
    forEach(arr, function(item) {
        newArr.push(func1(item));
    });
    return newArr;
}
console.log(getTransformedArray(arr, increment()));
