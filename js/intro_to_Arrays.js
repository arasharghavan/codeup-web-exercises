

// 4.	Create a function that returns the longest string in a given array of string elements.

var names = ['first name', 'second long name', 'third longeeeer name'];

var lOne = 0;
var longest;

for(var i = 0; i < names.length; i++){
    if(names[i].length > lOne){
        lOne = names[i].length;
        longest = names[i];
    }
}

alert(longest);

console.log('\n');
console.log('ADD');
console.log('=====');
console.log('\n');

// 5.	 Create a function that takes in two arrays of elements, including numbers. If all
// numbers added together in the first array is equal to all the number inputs added in
// the second array, return true, otherwise, false. Only add together numeric elements
// but either array may contain non-numeric elements.
// –	exampleFunction(arr1, arr2) // returns true

    var arr1 = ['bob', 1, true, 1, 2];
    // var arr2 = ['bob', 1, true, 1, 2];
    var arr2 = [2, null, undefined, 0, 2, "apple"];

    function add(input1, input2) {
        var sum1 = 0;
        var sum2 = 0;
       for (var i = 0, j = 0; i < input1.length,j < input2.length; i++,j++){
        sum1 = sum1 + input1[i];
        sum2 = sum2 + input2[j];
       }
       return sum1 === sum2;

    }console.log(add(arr1, arr2));




