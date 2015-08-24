function bubbleSort(arr){
 for (var i = 0; i < arr.length; i++) {
   var temp = 0
   if (arr[i] > arr[i+1]) {
     temp = arr[i];
     arr[i] = arr[i+1];
     arr[i+1] = temp;
     bubbleSort(arr);
   }
 }
 return arr;
}

// console.log(bubbleSort([3.1,4.5,1,2,5]));

module.exports = bubbleSort;
