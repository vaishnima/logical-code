function customSort(array){
    const mid = Math.floor(array.length/2);
    const firstHalf=array.slice(0,mid);
    const secondHalf=array.slice(mid);
    firstHalf.sort((p,q) => p-q);
    secondHalf.sort((p,q) => q-p);
    return firstHalf.concat(secondHalf);

}
const Array = [3,7,1,4,90,67,10,78,45];
const sortedArray = customSort(Array);
console.log(sortedArray);