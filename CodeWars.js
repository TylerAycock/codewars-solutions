// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    let string = s.toLowerCase().split('');
    let newArr = string.map((letter, index) =>
        `${letter.toLocaleUpperCase()}${letter.repeat(index)}`);

    return newArr.join('-');
}


// console.log(accum("abcd")) //Desired return  "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")) // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt")) //"C-Ww-Aaa-Tttt"


// Given an integral number, determine if it's a square number:

var isSquare = function(n){
  let square =Math.sqrt(n)
  return (square * 10.0) % 10 == 0  && true
}

// console.log(isSquare( 3))
// console.log(isSquare( 4))
// console.log(isSquare(-1))


// -------------------------------//

// create a function that takes a list of non-negative integers and strings and 
// returns a new list with the strings filtered out.

function filter_list(l) {
  
}

console.log(filter_list([1,2,'a','b']))