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

// alternative answer

const ccMask = (cc) => {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
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


// -------------------------------//
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string)

function solution(str, ending) {
  return str.endsWith(ending)
}

// console.log(solution('abcde', 'cde'))
// console.log(solution('abcde', 'abc'))


// -------------------------------//
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

const getSum = (a, b) => {
  if (a === b) return a;
  let arr = [a, b];
  let highNum = Math.max(...arr)
  let lowNum = Math.min(...arr)
  let sum = 0
  for (let i = lowNum; i <= highNum; i++) {
    sum += i
  }
  return sum
};

// console.log(getSum(1, 0))


// -------------------------------//
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

const filterString = (s1, s2) => {
  return (s1 + s2).split('').reduce((accumulator, currentValue) => {
    if (accumulator.indexOf(currentValue) === -1) {
      accumulator.push(currentValue)
    }
    return accumulator
  }, []).sort().join('')
}



// console.log(filterString("aretheyhere", "yestheyarehere"))
// console.log(filterString("loopingisfunbutdangerous", "lessdangerousthancoding"))

// -------------------------------//
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.


const validatePIN = (s) => {
  if (s === '') {
    return false
  }
  const regex = /^(\d{4}|\d{6})?$/
  return regex.test(s)
}


// console.log(validatePIN("12345"))

// -------------------------------//
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new 
// inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

const numYear = (pop, per, nih, goal) => {
  let years = 0
  while (pop < goal) {
    pop = pop + (pop * (per / 100)) + nih
    years++
  }
  return years
}

// console.log(numYear(1500, 5, 100, 5000))


// -------------------------------//
// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:
// 1. number of pillars (≥ 1);
// 2. distance between pillars (10 - 30 meters);
// 3. width of the pillar (10 - 50 centimeters).

// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

const pillars = (num, dist, width) => {
  let total = 0
  let x = 1
  while (x < num) {
    total += dist
    x++
  }
  if (num > 2) {
    return total * 100 + (width * (num - 2))
  } else {
    return total * 100

  }

}


// console.log(pillars(1, 10, 10)) //0
// console.log(pillars(2, 20, 25)) //2000
// console.log(pillars(11, 15, 30)) //15270



// -------------------------------//
// Write a function that takes two arguments, and returns a new array populated with the elements that only appear once, in either one array or the other, taken only once; display order should follow what appears in arr1 first, then arr2:

const hotSingles = (arr1, arr2) => {
  let newArr = [...arr1, ...arr2]
  let duplicates = []

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      duplicates.push(arr1[i])
    }
  }
  return newArr.filter(item => {
    return !duplicates.includes(item)
  })
}


// console.log(hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5]), `answer` + ' ' + [4,5])
// console.log(hotSingles([10, 200, 30], [10, 20, 3, 4, 5, 200]),`answer` + ' ' + [30, 20, 3, 4, 5])
// console.log(hotSingles([100, 45, "ciao"], [100, 2, 3, 45, 5]), `answer` + ' ' + ["ciao", 2, 3, 5])


// -------------------------------//
// You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
  let positive = arr.filter(num => num > 0)
  return positive.reduce((acc, cur) => {
    return acc + cur
  })
}

// console.log(positiveSum([1, 2, 3, 4, 5])) //15
// console.log(positiveSum([1, -2, 3, 4, 5])) //13



// -------------------------------//
// Complete the solution so that it reverses the string passed into it.

const reverse = (s) => {
  return s.split('').reverse().join('')
}

// console.log(reverse('world'))



// -------------------------------//
// Complete the function that accepts a string parameter, and reverses each word in the string. 
//All spaces in the string should be retained.

function reverseWords(s) {
  return s.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}

// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))



// -------------------------------//
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
  if (array.length === 0) {
    return 'even'
  } else {
    let sum = array.reduce((acc, red) => {
      return acc + red
    })
    return sum % 2 === 0 ? 'even' : 'odd'
  }
}

// alternative answer
const oddEven = (arr => {
  return arr.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd'
})

// console.log(oddOrEven([0]))
// console.log(oddOrEven([]))
// console.log(oddOrEven([1023, 1, 2]))
// console.log(oddOrEven([975269,-631999,634413,45417,-576623,-985505,369165,860703,90357,117663,-919245]))


// -------------------------------//
// Create a function named divisorsthat takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), 
// from smallest to largest. If the number is prime return the string '(integer) is prime'

function divisors(integer) {
  let divide = []
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      divide.push(i)
    }
  }
  return divide.length ? divide : integer + " " + "is prime"
};

// console.log(divisors(15))
// console.log(divisors(12))
// console.log(divisors(13))


// -------------------------------//

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. 
// If there are multiple elements with the same value, remove the one with a lower index. 
// If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

function removeSmallest(arr) {
  if (arr.length === 0) {
    return arr
  }

  let smallest = Math.min(...arr)
  let idx = arr.findIndex(num => num === smallest)

  let dull = [...arr.slice(0, idx), ...arr.slice(idx + 1)]
  return dull

}

// console.log(removeSmallest([1, 2, 3, 4, 5]))
// console.log(removeSmallest([2, 2, 1, 2, 1]))
// console.log(removeSmallest([5, 3, 2, 1, 4]))
// console.log(removeSmallest([]))



// -------------------------------//
function getDivisorsCnt(n) {
  let count = 0

  for (let i = 1; i <= n; i++) {
    n % i === 0 && count++
  }

  return count
}

// console.log(getDivisorsCnt(1))
// console.log(getDivisorsCnt(10))
// console.log(getDivisorsCnt(11))
// console.log(getDivisorsCnt(54))


// -------------------------------//
// turn every word we find into the taco bell recipe with each ingredient.
// We want to input a word as a string, and return a list representing that word as a taco.

function tacofy(word) {
  let key = {
    t: 'tomato',
    l: 'lettuce',
    c: 'cheese',
    g: 'guacamole',
    s: 'salsa',
    a: 'beef',
    e: 'beef',
    i: 'beef',
    o: 'beef',
    u: 'beef'
  }
  let arr = word.toLowerCase().split('')
  let taco = ["shell"]
  for (let i = 0; i < arr.length; i++) {
    if (key[arr[i]]) {
      taco.push(key[arr[i]])
    }
  }
  taco.push('shell')
  return taco
}

// console.log(tacofy("ggg"))
// console.log(tacofy("ydjkpwqrzto"))



// -------------------------------//
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

var number = function (arr) {
  return arr.map((s, index) => {
    return `${index + 1}:` + " " + s
  })
}

// console.log(number(["a", "b", "c"]))


// -------------------------------//
// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, 
// he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.
// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.\
// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

function calculateYears(principal, interest, tax, desired) {
  let years = 0
  while (principal < desired) {
    let accruedInterest = principal * interest
    let taxes = accruedInterest * tax
    principal += (accruedInterest - taxes)
    years++
  }
  return years
}

console.log(calculateYears(1000, 0.05, 0.18, 1100)) //answer is 3
console.log(calculateYears(1000, 0.01625, 0.18, 1200)) //answer is 14