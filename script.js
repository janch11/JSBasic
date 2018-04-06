var number = [1,2,3,4,5,6,7]


console.time('in loop')
for (var i = 0; i <= number.length; i++ )
    console.log(number[i]);
console.timeEnd('in loop')

console.time('before loop')
var length = number.length
for (var i = 0; i <= length; i++ )
    console.log(number[i]);
console.timeEnd('before loop')
