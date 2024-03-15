function customSort(arr) {
    
    var mid = Math.floor(arr.length / 2);
    var firstHalf = arr.slice(0, mid).sort((a, b) => a - b);
    var secondHalf = arr.slice(mid).sort((a, b) => b - a);

    return firstHalf.concat(secondHalf);
}

var inputArray = [45, 67, 90, 34, 87, 10];
var resultArray = customSort(inputArray);

console.log("Result Array with first half sorted in ascending order and second half sorted in descending order:", resultArray);