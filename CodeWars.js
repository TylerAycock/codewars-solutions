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
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the log possible, 
// containing distinct letters - each taken only once - coming from s1 or s2.


//solution #1 filter method

const thelog = (s1, s2) => {

  let s3 = (s1 + s2).split('')

  let unique = s3.filter((letter, index) => {
    return s3.indexOf(letter) === index

  })
  return unique.join('')

}


// solution #2 new Set method

const log = (s1, s2) => {

  let unique = [...new Set((s1 + s2).split(''))]
  return unique.join('')
}

// console.log(log("aretheyhere", "yestheyarehere"))



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
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the log possible, containing distinct letters - each taken only once - coming from s1 or s2.

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

// console.log(calculateYears(1000, 0.05, 0.18, 1100)) //answer is 3
// console.log(calculateYears(1000, 0.01625, 0.18, 1200)) //answer is 14



// -------------------------------//
// Write a function that takes in a string of one or more words, and returns the same string, but with all FIVE or more letter words reversed.
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


function spinWords(s) {
  return s.split(' ').map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('')
    } else {
      return word
    }
  }).join(' ')
}

// console.log(spinWords("Welcome"))
// console.log(spinWords("Hey fellow warriors"))
// console.log(spinWords("You are almost to the last test"))


// -------------------------------//
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(arr) {
  let obj = {}
  for (num of arr) {
    if (!obj[num]) obj[num] = 0
    obj[num] += 1
  }

  for (prop in obj) {
    if (obj[prop] % 2 === 1) {
      return +prop
    }
  }
}

// console.log(findOdd([7]))
// console.log(findOdd([1, 1, 2]))
// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]))



// -------------------------------//
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0.

function solution(num) {
  let sum = 0
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }
  return sum
}

// console.log(solution(23))


// -------------------------------//
// We need a function that can transform a number (integer) into a string.
function numberToString(num) {
  return num.toString()
}

// console.log(numberToString(9))



// -------------------------------//
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, 
// pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. 
// It must return the display text as shown in the examples:

// ex: 
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
  if (names.length === 0) {
    return 'no one likes this'
  }
  else if (names.length === 1) {
    return `${names[0]} likes this`
  }
  else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`
  }
  else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }
  else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}

// console.log(likes([]))
// console.log(likes(['Peter']))
// console.log(likes(['Jacob', 'Alex']))
// console.log(likes(['Max', 'John', 'Mark']))
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))


// -------------------------------//
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNum(num) {
  let first = ""
  let second = ""
  let third = ""
  for (let i = 0; i < num.length; i++) {
    if (i < 3) {
      first += num[i]
    }
    if (i >= 3 && i < 6) {
      second += num[i]
    }
    else if (i >= 6) {
      third += num[i]
    }
  }
  return `(${first}) ${second}-${third}`
}

//alternative solution to above problem

const createPhoneNumber = (num) => {
  let format = '(xxx) xxx-xxxx'

  for (let i = 0; i < num.length; i++) {
    format = format.replace('x', num[i]);
  }

  return format
}
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))



// -------------------------------//
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord(bool) {
  return bool ? 'Yes' : 'No'
}

// console.log(boolToWord(true))
// console.log(boolToWord(false))



// -------------------------------//
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
// You're given one parameter, the original string.
//  You don't have to worry with strings with less than two characters.

function removeChar(s) {
  return s.slice(1, - 1)
};

// console.log(removeChar('eloquent'))


// -------------------------------//
// implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  return a.filter(num => !b.includes(num))
}

// console.log(arrayDiff([1, 2, 3], [1, 2]))


// -------------------------------//
// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, 
// continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// ex:
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6

function digitalRoot(n) {
  while (n >= 10) {
    let sum = 0
    n.toString().split('').forEach(num => sum += +num)
    n = sum
  }
  return n
}

// console.log(digitalRoot(16))
// console.log(digitalRoot(456))



// -------------------------------//
// Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

// console.log(findSmallestInt([78,56,232,12,8]))



// -------------------------------//
// Write a function that removes the spaces from the string, then return the resultant string.

noSpace = str => {
  return str.split(' ').join('')
}

// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))



// -------------------------------//
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. 
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// ex:
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(s) {
  let letters = {}
  let num = 0

  s.toLowerCase().split('').map(item => {
    if (!letters[item]) {
      letters[item] = 0
      letters[item] += 1
    } else {
      letters[item] += 1
    }
  })

  let duplicate = Object.values(letters)
  duplicate.map(item => item >= 2 && num++)

  return num
}

// console.log(duplicateCount("abcde"))
// console.log(duplicateCount("aabBcde"))
// console.log(duplicateCount("aA11"))
// console.log(duplicateCount("Indivisibility"))


// -------------------------------//
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" 
// if that character appears only once in the original string, or ")" if that character appears more than once in the original string. 
// Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(s) {
  obj = {}
  let arr = s.toLowerCase().split('')

  arr.map(letter => {
    if (!obj[letter]) {
      obj[letter] = 0
      obj[letter]++
    } else {
      obj[letter]++
    }
  })

  let answer = []
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] >= 2) {
      answer.push(")")
    } else {
      answer.push("(")
    }
  }

  return answer.join('')
}


// console.log(duplicateEncode("din"))
// console.log(duplicateEncode("recede"))
// console.log(duplicateEncode("Success"))



// -------------------------------//
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
// Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(arr) {
  let even = 0
  let odd = 0
  arr.forEach(num => {
    if (num % 2 === 0) {
      even++
    } else if (num % 2 == 1 || num % 2 === -1) {
      odd++
    }
  })
  return even > odd ? arr.find(num => num % 2 === 1) : arr.find(num => num % 2 === 0)
}

// console.log(findOutlier([0, 1, 2]))
// console.log(findOutlier([2, 6, 8, 10, 3]))



// -------------------------------//
// given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(s) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  return s.toLowerCase().split('').map(letter => {
    let num = (alphabet.indexOf(letter))
    return num + 1
  }).filter(num => num !== 0).join(' ')
}

// console.log(alphabetPosition("The sunset sets at twelve o' clock."))
// console.log(alphabetPosition("The narwhal bacons at midnight."))



// -------------------------------//
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
// which is the number of times you must multiply the digits in num until you reach a single digit.

// ex: 9 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)

function persistence(num) {
  let times = 0
  while (num >= 10) {
    num = num.toString().split('').reduce((acc, cur) => +acc * +cur)
    times++
  }
  return times
}

// console.log(persistence(39));
// console.log(persistence(4));
// console.log(persistence(25));
// console.log(persistence(999));


// -------------------------------//
// Write a method that accepts a list of objects of type Animal, and returns a new list. 
// The new list should be a copy of the original list, sorted first by the animal's number of legs, and then by its name.

function sortAnimal(animals) {
  return animals.map(animal => {
    return {
      numberOfLegs: animal.numberOfLegs,
      name: animal.name
    }
  })
}

// console.log(sortAnimal([{ name: "Cat", numberOfLegs: 4 },
// { name: "Snake", numberOfLegs: 0 },
// { name: "Dog", numberOfLegs: 4 },
// { name: "Pig", numberOfLegs: 4 },
// { name: "Human", numberOfLegs: 2 },
// { name: "", numberOfLegs:""  }]))



// -------------------------------//

// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.


function basicOp(operation, value1, value2) {
  if (operation === '+') {
    return value1 + value2
  } else if (operation === '-') {
    return value1 - value2
  } else if (operation === '*') {
    return value1 * value2
  } else if (operation === '/') {
    return value1 / value2
  }
}

// console.log(basicOp('+', 4, 7));
// console.log(basicOp('-', 15, 18));
// console.log(basicOp('*', 5, 5));
// console.log(basicOp('/', 49, 7))



// -------------------------------//

// Convert dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized. 
// The next words should be always capitalized.

function toCamelCase(str) {
  let regexp = /^[A-Z]/
  let split = str.includes("-") ? str.split("-") : str.split("_")
  if (split.length === 1) {
    return ""
  } else {
    return split.map(word => {
      if (regexp.test(word)) {
        return word
      } else {
        return word[0].toUpperCase() + word.slice(1)
      }
    }).join("")
  }
}

// console.log(toCamelCase(''))
// console.log(toCamelCase("the_stealth_warrior")) //"theStealthWarrior"
// console.log(toCamelCase("The-Stealth-Warrior")),  //"TheStealthWarrior"
// console.log(toCamelCase("A-B-C"))  //"ABC"


// -------------------------------//

// Implement the function unique_in_order which takes as argument a sequence and returns 
// a list of items without any elements with the same value next to each other and 
// preserving the original order of elements.

var uniqueInOrder = function (iterable) {
  return [...iterable].filter((item, index) => item !== iterable[index + 1])
}

// console.log(uniqueInOrder('AAAABBBCCDAABBB'))// ['A', 'B', 'C', 'D', 'A', 'B']
// console.log(uniqueInOrder('ABBCcAD'))        //['A', 'B', 'C', 'c', 'A', 'D']
// console.log(uniqueInOrder([1, 2, 2, 3, 3]))     //[1,2,3]



// -------------------------------//

// The first century spans from the year 1 up to and including the year 100, the second century - 
// from the year 101 up to and including the year 200, etc.

function century(year) {
  return Math.ceil((year / 100))
}

// console.log(century(1705))
// console.log(century(1900))


// -------------------------------//

// Your task is to sort a given string. Each word in the string will contain a single number. 
// This number indicates the words proper position.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.


function order(words) {
  return !words.length ? "" : words.split(" ").map(word => {
    return word.match(/(\d+)/)
  }).sort().map(item => item.input).join(" ")
}

// console.log(order("is2 Thi1s T4est 3a")),
// console.log(order("4of Fo1r pe6ople g3ood th5e the2")),
// console.log(order(""))


// -------------------------------//

// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
//  because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  for (let i = 0; i < alphabet.length; i++) {
    if (!string.toLowerCase().includes(alphabet[i])) {
      return false;
    }
  }
  return true;
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog."))
// console.log(isPangram("This is not a pangram."))


// -------------------------------//
// Write an algorithm that takes an array and moves all of the zeros to the end, 
// preserving the order of the other elements.

function moveZeros(arr) {
  let zero = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zero.push(arr[i])
    }
  }
  return arr.filter(num => num !== 0).concat(zero)
}

// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])) //[1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])) // returns[false,1,1,2,1,3,"a",0,0]



// -------------------------------//

// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, 
// each raised to the power of the number of digits in a given base. In this Kata, we will restrict 
// ourselves to decimal (base 10). For example, take 153 (3 digits), which is narcissistic:
// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

function narcissistic(value) {
  let arr = String(value).split("").map(Number)

  let num = arr.map(num => {
    return Math.pow(num, arr.length)
  }).reduce((cur, acc) => cur + acc, 0)

  return value === num ? true : false

}

// console.log(narcissistic(153))
// console.log(narcissistic(122))

// -------------------------------//

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
  let regex = /[^A-Za-z]+/
  return str.split(" ").map(word => {
    if (regex.test(word)) {
      return word
    } else {
      return word.slice(1) + word.slice(0, 1) + "ay"
    }
  }).join(" ")
}


// console.log(pigIt('Pig latin is cool'))
// console.log(pigIt('This is my string'))

// -------------------------------//
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

function abbrevName(name) {
  let initial = name.split(" ").map(word => word[0])
  return `${initial[0]}.${initial[1]}`

}

// console.log(abbrevName("Sam Harris"))


// -------------------------------//
// Create a function that checks if a number n is divisible by two numbers x AND y. 
// All inputs are positive, non-zero numbers.

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0 ? true : false
}

// console.log(isDivisible(3,3,4)); //false
// console.log(isDivisible(12,3,4)) //true
// console.log(isDivisible(8,3,4)) //false 



// -------------------------------//
// given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. 
// If there is no index that would make this happen, return -1.

function findEvenIndex(arr) {

  for (let i = 0; i < arr.length; i++) {
    let left = arr.slice(0, i)
    let right = arr.slice(i + 1)
    let leftSum = left.reduce((acc, cur) => acc + cur, 0)
    let rightSum = right.reduce((acc, cur) => acc + cur, 0)
    if (leftSum === rightSum) {
      return i
    }
  }
  return -1
}

// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); //3
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1])) //1
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6])) //-1 


// -------------------------------//
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// return message: "found the needle at position ${n} " 

function findNeedle(haystack) {
  let index = haystack.findIndex(word => {
    return word === "needle"
  })

  return `found the needle at position ${index}`
}


// console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))


// -------------------------------//
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.


function findUniq(arr) {
  return arr.filter((num) => arr.indexOf(num) === arr.lastIndexOf(num))[0]
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([1, 1, 2, 1, 1]));
console.log(findUniq([3, 10, 3, 3, 3]));