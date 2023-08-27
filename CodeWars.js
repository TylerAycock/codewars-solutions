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

var isSquare = function (n) {
  let square = Math.sqrt(n)
  return (square * 10.0) % 10 == 0 && true
}

// console.log(isSquare( 3))
// console.log(isSquare( 4))
// console.log(isSquare(-1))


// -------------------------------//

// create a function that takes a list of non-negative integers and strings and 
// returns a new list with the strings filtered out.

function filter_list(l) {
  let filtered = l.filter(x => {
    return typeof x === 'number'
  })
  return filtered
}

// console.log(filter_list([1, 2, 'a', 'b']))


// -------------------------------//

//create a function that retunrs the sum of integers in an array

const sum = arr => {
  let sum = 0
  arr.forEach(num => {
    sum += num
  })
  return sum
}



// console.log(sum([]))
// console.log(sum([1, 5.2, 4, 0, -1]))



// -------------------------------//
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

const XO = s => {
  let x = 0
  let o = 0
  s.toLowerCase().split('').forEach(e => {
    if (e === 'x') {
      x += 1
    }
    if (e === 'o') {
      o += 1
    }
  })

  return x === o ? true : false
}

// console.log(XO('xo'));
// console.log(XO("xxOo"));
// console.log(XO("xxxm"));
// console.log(XO("Oo"));
// console.log(XO("ooom"))


// -------------------------------//
// create a custom string method to capitalize the first letter of each word 

String.prototype.toJadenCAse = function () {
  let str = this.valueOf().split(' ').map(word => {
    return word[0].toUpperCase() + word.slice(1)
  })
  return str.join(' ')
}

// var str = "How can mirrors be real if our eyes aren't real";
// console.log(str.toJadenCAse())



// -------------------------------//
// write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
  if (cc.length < 4) {
    return cc
  } else {
    let split = cc.split('')
    let arr = []
    for (let i = 0; i < split.length - 4; i++) {
      arr.push('#')
    }
    return arr.join('') + cc.slice(cc.length - 4)
  }
}


// console.log(maskify('4556364607935616'))
// console.log(maskify('1'))
// console.log(maskify('11111'))

// -------------------------------//
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
//  No floats or non-positive integers will be passed.

const sumTwoSmallestNumbers = arr => {
  let asc = arr.sort((a, b) => a - b)
  return asc[0] + asc[1]
}


// console.log(sumTwoSmallestNumbers([22, 8, 12, 19, 5]))



// -------------------------------//
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, 
// containing distinct letters - each taken only once - coming from s1 or s2.


//solution #1 filter method

const theLongest = (s1, s2) => {

  let s3 = (s1 + s2).split('')

  let unique = s3.filter((letter, index) => {
    return s3.indexOf(letter) === index

  })
  return unique.join('')

}


// solution #2 new Set method

const longest = (s1, s2) => {

  let unique = [...new Set((s1 + s2).split(''))]
  return unique.join('')
}

// console.log(longest("aretheyhere", "yestheyarehere"))



// -------------------------------//
// finds the next integral perfect square after the one passed as a parameter
//If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

function findNextSquare(sq) {
  let num = Math.sqrt(sq)

  if (Math.floor(num) < num) {
    return -1
  }
  return (num + 1) * (num + 1)

}

// console.log(findNextSquare(120))


// -------------------------------//
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
// The string has a length greater or equal to one and contains only letters from ato z.

function printerError(s) {
  let regex = /[n-z]/g
  let error = s.match(regex)

  if (!error) {
    return 0 + "/" + s.length
  }

  return error.length + "/" + s.length
}

// let s = "aaabbbbhaijjjm"
// console.log(printerError(s))


// -------------------------------//
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. 
// How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

function nbYear(p0, percent, aug, p) {
  let years = 0
  while (p0 < p) {
    p0 = p0 + (p0 * (percent / 100)) + aug
    years++
  }
  return years
}

// console.log(nbYear(1500, 5, 100, 5000)) //15
// console.log(nbYear(1500000, 2.5, 10000, 2000000)) //10


// -------------------------------//
// Given a word, return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

const getMiddle = (s) => {
  if (s.length % 2 === 1) {
    return s[Math.floor(s.length / 2)]
  } else {
    let index = s.length / 2
    return `${s[index - 1]}${s[index]}`
  }
}

// console.log(getMiddle("test"))
// console.log(getMiddle("testing"))



// -------------------------------//
// create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
  return l.filter(i => i !== String(i))
}

// console.log(filter_list([1, 2, 'a', 'b']))
// console.log(filter_list([1, 'a', 'b', 0, 15]))
// console.log(filter_list([1,2,'aasf','1','123',123]))

// -------------------------------//

String.prototype.toJadenCase = function (s) {
  let str = this.valueOf().split(' ').map(word => {
    return (word[0].toUpperCase() + word.slice(1))
  }).join(' ')
  return str
};

// let str = "How can mirrors be real if our eyes aren't real";
// str.toJadenCase()

// -------------------------------//
// Simple, given a string of words, return the length of the shortest word(s)

function findShort(s) {
  let words = s.split(' ')
  let shortest = words.reduce((accumulator, currentValue) => {
    return currentValue.length < accumulator.length ? currentValue : accumulator
  }, words[0])
  return shortest.length
}


// console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
// console.log(findShort("turns out random test cases are easier than writing out basic ones"))
// console.log(findShort("MadeSafeCoin LiteCoin"))