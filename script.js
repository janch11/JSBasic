var arr = [1,2,3,4,5,6]

function loop(arr,index) {


    console.log(arr[index])

    var lastIndex = arr.length -1

    if (index === lastIndex){
        return;
    }
    loop(arr,index + 1)


}
console.log(loop(arr,0))