//1.Do the below programs in anonymous function & IIFE
//a..Print odd numbers in an array
let Numbers=[23,12,7,10,15,20];
function printOddNumbers(array){
for(i = 0 ; i<array.length ; i++){
     if(array[i]%2!=0){
       console.log(array[i]);}}}
       printOddNumbers(Numbers);

//b.Convert all the strings to title caps in a string array
function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}console.log(titleCase("full stack development"));

//c.Sum of all numbers in an array
let numbers = [1, 2, 3, 4, 5];
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}let totalSum = sumArray(numbers);
console.log("The sum of all numbers in the array is:", totalSum);

 //d.Return all the prime numbers in an array
 var isPrime = function(num) {
  if (num <= 1) {
      return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
          return false;
      }
  }return true;
};const getPrimeNumbers = function(arr) {
  let primeNumbers = [];
  arr.forEach(function(num) {
      if (isPrime(num)) {
          primeNumbers.push(num);
      }
  });
  return primeNumbers;
};const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = getPrimeNumbers(numbers);
console.log(primeNumbers);

//e.Return all the palindromes in an array
const strings = ["level", "radar", "hello", "madam", "world", "civic"];
const isPalindrome = function(str) {
    str = str.toLowerCase();
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
};const getPalindromes = function(arr) {
    const palindromes = [];
    arr.forEach(function(str) {
        if (isPalindrome(str)) {
            palindromes.push(str);
        }
    });
    return palindromes;
};
const palindromeArray = getPalindromes(strings);
console.log(palindromeArray);

//f.Return median of two sorted arrays of the same size.
const findMedianSortedArrays = function(nums1, nums2) {
  const totalLength = nums1.length + nums2.length;
  let i = 0,
      j = 0,
      count = 0,
      median1 = -1,
      median2 = -1;

  while (count <= totalLength / 2) {
      median1 = median2;
      if (i < nums1.length && (j >= nums2.length || nums1[i] < nums2[j])) {
          median2 = nums1[i++];
      } else {
          median2 = nums2[j++];
      }
      count++;
  }  return totalLength % 2 === 0 ? (median1 + median2) / 2 : median2;
}
const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];
const median = findMedianSortedArrays(nums1, nums2);
console.log("Median:", median);

//g.Remove duplicates from an array
const removeDuplicates = function(arr) {
  return [...new Set(arr)];
};const arrayWithDuplicates = [1, 2, 3, 4, 4, 6, 7, 8, 8];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray);

//h.Rotate an array by k times
  const rotateArray = function(arr, k) {
  const len = arr.length;
  const rotations = k % len;
  const rotatedArray = arr.slice(rotations).concat(arr.slice(0, rotations));
  return rotatedArray;
};
const array = [1, 2, 3, 4, 5];
const k = 4;
const rotated = rotateArray(array, k);
console.log("Rotated array by", k, "times:", rotated);

//2.Do the below programs in arrow functions.
// a.Print odd numbers in an array

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const printOddNumbers = (arr) => {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};printOddNumbers(a);

//b.Convert all the strings to title caps in a string array

const strings = ["full stack development"];
const toTitleCase = (str) => {
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
};
const titleCaseStrings = strings.map(toTitleCase);
console.log(titleCaseStrings);

//c.Sum of all numbers in an array

let numbers = [1, 2, 3, 4, 5];
const sumArray=(arr)=> {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};let totalSum = sumArray(numbers);
console.log(totalSum);

//d.Return all the prime numbers in an array

const isPrime = num => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};const getPrimeNumbers = arr => {
    const primeNumbers = [];
    arr.forEach(num => {
        if (isPrime(num)) {
            primeNumbers.push(num);
        }
    });
    return primeNumbers;
};
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = getPrimeNumbers(numbers);
console.log("Prime numbers in the array:", primeNumbers);

//e.Return all the palindromes in an array

const isPalindrome = str => {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
};const getPalindromes = arr => {
    const palindromeArray = [];
    arr.forEach(str => {
        if (isPalindrome(str)) {
            palindromeArray.push(str);
        }
    });
    return palindromeArray;
};const strings = ["dad","mom","sister","pop"];
const palindromeArray = getPalindromes(strings);
console.log(palindromeArray);



                  
