console.log("######## Question 1 Second highest element from the array.#########");


const array = [12,35,1,10,34,1]

console.log("unsorted array is ", array);

console.log("sorted array is ",array.sort());

console.log("2nd highest element is ", array.sort()[array.length-2]);

//------------------------------------------------------------------------


// console.log("############## Question 2. Prime no in given array ###########");
function isPrime(n) {

    if (n < 2)
        return `${n} is not a prime`


    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return `${n} is not a prime number`
        }
    }
    return `${n} is a prime number`
}
console.log(isPrime(29));

//---------------------------------------------------------------------------

console.log("############ Question 3 max , min element of that arrays.  ");

let min = (array, min = array[0])=>{
    for (let i = 0; i<array.length; i++){
        if (min > array[i])
        min=array[i];
    }
    return min;
};

let max = (array, max = array[0])=>{
    for (let i = 0; i<array.length; i++){
        if (max < array[i])
        max=array[i];
    }
    return max;
};

 const array = [1,2,4,3,0,-9]
 console.log("minimum value of an array is "+ min(array));
 console.log("maximum value of an array is "+ max(array));

//----------------------------------------------------------------



console.log("########### Question 7 sum of two arrays");
//1st method :-------------------------->
function sumArray(a, b) {
    var c = [];
    for (var i = 0; i < Math.max(a.length, b.length); i++) {
      c.push((a[i] || 0) + (b[i] || 0));
    }
    return c;
}

// //First Use Case.
var a = [1, 2, 3, 4];
var b = [1, 2, 3, 4];
console.log( sumArray(a, b) );

//Second Use Case with different Length.
var a = [1, 2, 3, 4];
var b = [1, 2, 3, 4, 5];
console.log( sumArray(a, b) );


//2nd method :------------------------------>
var arr1 = [1, 2, 3, 4];
var arr2 = [2, 3, 4, 5];
var arr3 = [];
var i = 0;

for (; i < arr1.length; i++) {
    arr3[i] = arr1[i] + arr2[i];
}

console.log( arr3);


//--------------------------------------------------------------------------

console.log("############ Question no. 4 sequence the array ############");

arr = [1,7,-6,15,7,9,0,2,-3]

seq = [7,15,-3]
 
newarray = arr.join(' ');
console.log(newarray);

sequence = seq.join(' ');
console.log(sequence);

final = newarray.includes(sequence);
console.log(final);




//[---------------------------------------------------------------------------------------------------]
console.log("########## Question no 9 Arrange the number in descending order ##############");

function descendingOrder(num){

    console.log(`Descending order number is ${num}`);
    for (let i=10; i>=1; i--){
        // console.log(`The descending order number is ${i}`);
        console.log(i);
    }
}

descendingOrder(10);