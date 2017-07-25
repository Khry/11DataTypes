//1
var arr = ["3", "5", "2"];

function print() {
    return function(element) {
        console.log(element);
    }
}
function forEach(arr, func) {
    for (var i = 0; i < arr.length; i++) {
      func(arr[i]);
    }
}
// forEach(arr, print());[3, 5, 2], function(el){ console.log(el) } 
forEach([3, 5, 2], function(el){ console.log(el) });

