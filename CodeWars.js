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

function duplicateast(s) {
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

// console.log(duplicateast("abcde"))
// console.log(duplicateast("aabBcde"))
// console.log(duplicateast("aA11"))
// console.log(duplicateast("Indivisibility"))


// -------------------------------//
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" 
// if that character appears only once in the original string, or ")" if that character appears more than once in the original string. 
// Ignore capitalization when determining if a character is a duplicate.

function isDuplicate(s) {
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


// console.log(isDuplicate("din"))
// console.log(isDuplicate("recede"))
// console.log(isDuplicate("Success"))



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

function alphabetIndex(s) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  return s.toLowerCase().split('').map(letter => {
    let num = (alphabet.indexOf(letter))
    return num + 1
  }).filter(num => num !== 0).join(' ')
}

// console.log(alphabetIndex("The sunset sets at twelve o' clock."))
// console.log(alphabetIndex("The narwhal bacons at midnight."))



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

// console.log(findUniq([1, 1, 1, 2, 1, 1]));
// console.log(findUniq([1, 1, 2, 1, 1]));
// console.log(findUniq([3, 10, 3, 3, 3]));



// -------------------------------//
// There is a bus moving in the city which takes and drops some people at each bus stop.
// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of 
// people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). 
// Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, 
// they are probably sleeping.


var number = function (busStops) {
  let passengers = 0
  for (let i = 0; i < busStops.length; i++) {
    passengers += busStops[i][0]
    passengers -= busStops[i][1]
  }
  return passengers
}

// console.log(number([[10, 0], [3, 5], [5, 8]])) //5
// console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]))//17
// console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]])) // 21
// console.log(number([[0, 0]])) //0



// -------------------------------//
// Complete the solution so that it splits the string into pairs of two characters. 
// If the string contains an odd number of characters then it should replace the missing 
// second character of the final pair with an underscore ('_').

function solution(str) {
  let arr = []
  if (str.length % 2 === 1) {
    str = str + "_"
  }
  for (let i = 0; i < str.length; i += 2) {
    arr.push(str[i] + str[i + 1])
  }
  return arr
}

// console.log(solution("abcdef")) // ["ab", "cd", "ef"]
// console.log(solution("abcdefg"))// ["ab", "cd", "ef", "g_"]
// console.log(solution("")) // []


// -------------------------------//
// Write a function which calculates the average of the numbers in a given list


function findAverage(arr) {
  return arr.length === 0 ? 0 : (arr.reduce((acc, cur) => acc + cur, 0) / arr.length)
}

// console.log(findAverage([1, 1, 1]), 1);
// console.log(findAverage([1, 2, 3]), 2);
// console.log(findAverage([1, 2, 3, 4]), 2.5);
// console.log(findAverage([]))



// -------------------------------//
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while 
// leaving the even numbers at their original positions.

function sortArray(array) {
  let odd = array.filter(num => num % 2 === 1).sort()

  let result = [];

  for (let num of array) {
    if (num % 2 === 0) {
      result.push(num); // Keep even numbers in their current index
    } else {
      result.push(odd.shift()); // Reinsert sorted odd numbers
    }
  }

  return result;
}


// console.log(sortArray([5, 3, 2, 8, 1, 4])) //[1, 3, 2, 8, 5, 4]
// console.log(sortArray([5, 3, 1, 8, 0]))    // [1, 3, 5, 8, 0]
// console.log(sortArray([])) //[]



// -------------------------------//
// Given two arrays a and b write a function that checks whether the two arrays have the "same" elements, with the same multiplicities 
// (the multiplicity of a member is the number of times it appears). "Same" means, here, 
// that the elements in b are the elements in a squared, regardless of the order.

// function comp(arr1, arr2) {
//   let newArr1 = arr1.sort()
//   let newArr2 = arr2.sort()
//   for (let i = 0; i < newArr1.length; i++) {
//     if (newArr2[i] === (newArr1[i] * newArr1[i])) {

//     } else {
//       return false
//     }
//   }
//   return true
// }

function comp(arr1, arr2) {
  if (arr1 === null || arr2 === null || arr1.length !== arr2.length) {
    return false;
  }

  const sortedArr1 = arr1.sort()
  const sortedArr2 = arr2.sort()

  for (let i = 0; i < sortedArr1.length; i++) {
    if (sortedArr1[i] * sortedArr1[i] !== sortedArr2[i]) {
      return false;
    }
  }
  return true;

}


// console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361])) //true
// console.log(comp([2, 2, 3], [4, 9, 9]))





// -------------------------------//

// You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!


function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((acc, cur) => acc + cur, 0) / classPoints.length + 1 ? true : false

}

// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)) //true




// -------------------------------//

// Given an array of integers, return an array, where the first element is the count of positives 
// numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(arr) {
  if (arr.length === 0) {
    return []
  } else {
    let positive = 0
    let negative = 0
    arr.map(num => {
      if (num > 0) {
        positive++
      } else if (num < 0) {
        negative += num
      }
    })
    return [positive, negative]
  }
}


// console.log(countPositivesSumNegatives([]))
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) //[10,-65]




// -------------------------------//

// You will be given an array of numbers. You have to sort the odd numbers in ascending order 
// while leaving the even numbers at their original positions.


function sortOddNums(array) {
  let odd = array.filter(num => num % 2 == 1).sort()

  return array.map(num => {
    if (num % 2 === 1) {
      let order = odd.shift(1)
      return num = order
    } else {
      return num
    }
  })
}


// console.log(sortOddNums([5, 3, 2, 8, 1, 4])) //[1, 3, 2, 8, 5, 4]
// console.log(sortOddNums([5, 3, 1, 8, 0])) //[1, 3, 5, 8, 0]



// -------------------------------//

// You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer
// You should return the duplicate value as a single integer.

function findDup(arr) {
  let sorted = arr.sort()
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      return sorted[i]
    }
  }
}

// console.log(findDup([1,2,2,3])) //2
// console.log(findDup([1,3,2,5,4,5,7,6])) //5



// -------------------------------//

// Create a function that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.


const findMissingLetter = (arr) => {
  let prevLetter = arr[0].charCodeAt(0); // Get the character code of the first letter

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].charCodeAt(0) !== prevLetter + 1) {
      return String.fromCharCode(prevLetter + 1); // Convert the character code back to a letter
    }
    prevLetter = arr[i].charCodeAt(0); // Update the previous letter's character code
  }

  return "No missing letter found";
}

// console.log(findMissingLetter(['a', 'b', 'c', 'e', 'f']))
// console.log(findMissingLetter(['O', 'Q', 'R', 'S'])) //p



// -------------------------------//

// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let bmi = weight / (height * height);
  let category;

  switch (true) {
    case bmi < 18.5:
      category = "Underweight";
      break;
    case bmi < 24.9:
      category = "Normal Weight";
      break;
    case bmi < 29.9:
      category = "Overweight";
      break;
    default:
      category = "Obese";
  }

  return category;
}

// console.log(bmi(80, 1.80))



// What Javascript statement in place of "?" will make the result always be between 6 and 7? 

const x = 2;
let y = 4;

function update(arg) {
  return Math.random() + y * arg;
}
y = 2; y = 3;

const result = update(x);

// console.log(result)



// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {
  return number % 2 == 0 ? "Even" : "Odd"
}

//  console.log(evenOrOdd(2))

// You get an array of numbers, return the sum of all of the positives ones.

//my initial solution utilizes if statements filter and reduce functions which overcomplicates the problem

function positiveSum(arr) {
  let filtered = []
  if (arr.length === 0) {
    return arr.length
  } else {
    filtered = arr.filter(num => num >= 0)
  }
  if (filtered.length === 0) {
    return 0
  } else {
    return filtered.reduce((acc, cur) => acc + cur)
  }
}

//a much simpler solution 

function positiveSum(arr) {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      total += arr[i]
    }
  }
  return total
}

// console.log(positiveSum([1, 2, 3, 4, 5]), 15)
// console.log(positiveSum([1, -2, 3, 4, 5]), 13)
// console.log(positiveSum([]), 0)
// console.log(positiveSum([-1, -2, -3, -4, -5]), 0)



// -------------------------------//

//Return the number (count) of vowels in the given string.

//initial response 
function getCount(str) {
  return str.split("").filter(letter => {
    return letter === 'a' || letter === "e" || letter === "i" || letter === "o" || letter === "u"
  }).length;
}

//simplified alternative 

function getCount(str) {
  return str.split('').filter(letter => "aeiou".includes(letter)).length
}

// console.log(getCount("abracadabra"), 5)



// -------------------------------//
// Your task is to write a function that takes a string and return a new string with all vowels removed.

function disemvowel(str) {
  return str.split("").filter(letter => !"aeiou".includes(letter.toLowerCase())).join("")
}


// console.log(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
// console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
// console.log(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")



// -------------------------------//
// Write a function that squares every digit of a number and concatenate them.

function squareDigits(num) {
  return +num.toString().split("").map(num => +num * +num).join("")
}

// console.log(squareDigits(3212))



// -------------------------------//

// Given a string of space separated numbers, return the highest and lowest number.

function highAndLow(num) {
  let arr = num.split(" ").map(num => +num)
  return `${Math.max(...arr)} ${Math.min(...arr)}`
}
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");




// -------------------------------//
//make a function that can take any non-negative integer as an argument and return it with its digits in descending order.

function descendingOrder(n) {
  return +n.toString().split('').map(Number).sort().reverse().join('')
}

// console.log(descendingOrder(1), 1)
// console.log(descendingOrder(111), 111)
// console.log(descendingOrder(15), 51)
// console.log(descendingOrder(1021), 2110)




// -------------------------------//
// Write a function that returns the middle character of the word. If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.

function getTheMiddle(str) {
  return str.length % 2 === 0 ? `${str[(str.length / 2) - 1]}${str[str.length / 2]}` : str[Math.floor(str.length / 2)]
}

// console.log(getTheMiddle("test"),"es");
// console.log(getTheMiddle("testing"),"t");
// console.log(getTheMiddle("middle"),"dd");
// console.log(getTheMiddle("A"),"A");




// -------------------------------//
//create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function arrFilter(arr) {
  return arr.filter(i => typeof (i) === 'number')
}

// console.log(arrFilter([1,2,'a','b']))
// console.log(arrFilter([1,'a','b',0,15]))
// console.log(arrFilter([1,2,'aasf','1','123',123]))




// -------------------------------//
//Create a function that creates a string where each letter in the input string is repeated a certain number of times based on its position in the original string

function accum(s) {
  let arr = s.split("")
  let multiply = []

  for (let i = 0; i < arr.length; i++) {

    let repeatedLetter = arr[i].toUpperCase()

    for (let x = 1; x <= i; x++) {
      repeatedLetter += arr[i].toLowerCase()

    }
    multiply.push(repeatedLetter)
  }
  return multiply.join("-")
}
// console.log(accum("abcd"), "A-Bb-Ccc-Dddd")
// console.log(accum("RqaEzty"), "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy")
// console.log(accum("cwAt") ,"C-Ww-Aaa-Tttt")



// -------------------------------//
// Create a function that given an integral number, determine if it's a square number:

var isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n))
}

// console.log(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
// console.log(isSquare(0), true, "0 is a square number (0 * 0)");
// console.log(isSquare(34), false, "3 is not a square number");



// -------------------------------//
// Create a function to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XOXO(str) {
  let x = 0
  let o = 0
  let arr = str.split("").map(letter => letter.toLowerCase())
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'x') {
      x++
    } else if (arr[i] === "o") {
      o++
    }
  }
  return x === o
}

// console.log(XOXO('xo'), true);
// console.log(XOXO("xxOo"), true);
// console.log(XOXO("xxxm"), false);
// console.log(XOXO("Oo"), false);
// console.log(XOXO("ooom"), false);




// -------------------------------//
//Create a function that transforms only the first letter of each word to uppercase

var str = "HOW CAN MIRRORS BE REAL?"

String.prototype.toJadenCase = function () {
  return this.split(" ").map(word => `${word[0].toUpperCase()}` + `${word.slice(1).toLowerCase()}`).join(" ")
};
// console.log(str.toJadenCase());




// -------------------------------//

//given a string of words, return the length of the shortest word(s).String will never be empty and you do not need to account for different data types.

//initial solution using for loop 
function findShort(s) {
  let arr = s.split(" ")
  let shortest = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < shortest.length) {
      shortest = arr[i]
    }
  }
  return shortest.length
}


//cleaner solution utilizing spread and mapping 
function findShort(s) {
  return Math.min(...s.split(" ").map(word => word.length))
}


// console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
// console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3);
// console.log(findShort("Let's travel abroad shall we"), 2);




// -------------------------------//

// symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the 
// DNA (string, except for Haskell); you need to return the other complementary side.

function dnaStrand(dna) {
  return dna.split("").map(letter => {
    if (letter === "A") {
      return "T"
    } else if (letter === "T") {
      return "A"
    } else if (letter === "C") {
      return "G"
    } else if (letter === "G") {
      return "C"
    }
  }).join("")
}

// console.log(dnaStrand("AAAA"), "TTTT", "String AAAA is")
// console.log(dnaStrand("ATTGC"), "TAACG", "String ATTGC is")
// console.log(dnaStrand("GTAT"), "CATA", "String GTAT is")




// -------------------------------//
// Create a function that returns the sum of all the multiples of 3 or 5 below the number passed in.
//Additionally, if the number is negative, return 0.
//Note: If the number is a multiple of both 3 and 5, only count it once.


function solution(n) {
  let sum = 0
  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }
  return sum
}
// console.log(solution(10)) //23



// -------------------------------//

// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed

function spinWords(s) {
  return s.split(" ").map(word => {
    if (word.length >= 5) {
      return word.split("").reverse().join("")
    } else {
      return word
    }
  }).join(" ")
}


// console.log(spinWords("Welcome"), "emocleW");
// console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
// console.log(spinWords("This is a test"), "This is a test");





// -------------------------------//
// Given an array of integers, find the one that appears an odd number of times. Two solutions provided below

//for loop solution

function findOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0
    for (let x = 0; x < arr.length; x++) {
      if (arr[i] === arr[x]) {
        count++
      }
    }
    if (count % 2 !== 0) {
      return arr[i]
    }
  }
}

//creating an object running a forEach and looping over the object solution 
function findOdd(arr) {
  let obj = {}
  arr.forEach(num => {
    if (obj[num]) {
      obj[num]++
    } else {
      obj[num] = 1
    }
  })
  for (num in obj) {
    if (obj[num] % 2 !== 0) {
      return +num
    };
  }
}

// console.log(findOdd([7], 7))
// console.log(findOdd([1, 1, 2], 2))
// console.log(findOdd([0, 1, 0, 1, 0], 0))




// -------------------------------//
// Create a function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// examples: 
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(arr) {
  const length = arr.length;

  switch (length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${arr[0]} likes this`;
    case 2:
      return `${arr[0]} and ${arr[1]} like this`;
    case 3:
      return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
    default:
      return `${arr[0]}, ${arr[1]} and ${length - 2} others like this`;
  }
}

// console.log(likes([]), 'no one likes this');
// console.log(likes(['Peter']), 'Peter like this');
// console.log(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
// console.log(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');






// -------------------------------//
// Given n, take the sum of the digits of n. If that value has more than one digit, 
// continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.


function digitalRoot(n) {
  while (n >= 10) {
    n = String(n).split("").map(n => +n).reduce((acc, cur) => acc + cur)
  }
  return n
}
// console.log(digitalRoot(16), 7)
// console.log(digitalRoot(456), 6)




// -------------------------------//
// Create a function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.

function arrayDiff(a, b) {
  return a.filter(num => !b.includes(num))
}

// console.log(arrayDiff([1, 2], [1]), [2], "a was [1,2], b was [1]");



// -------------------------------//
// given an array (which will have a length of at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
// Write a function that takes the array as an argument and returns this "outlier" N.

function findOutlier(arr) {
  let slice = arr.slice(0, 3)
  let even = 0
  let odd = 0
  slice.forEach(num => {
    num % 2 === 0 ? even++ : odd++
  })
  if (even > odd) {
    return arr.filter(num => num % 2 !== 0)[0]
  } else if (odd > even) {
    return arr.filter(num => num % 2 === 0)[0]
  }
}

// console.log(findOutlier([0, 1, 2]), 1)
// console.log(findOutlier([1, 2, 3]), 2)
// console.log(findOutlier([2, 6, 8, 10, 3]), 3)
// console.log(findOutlier([0, 0, 3, 0, 0]), 3)
// console.log(findOutlier([1, 1, 0, 1, 1]), 0)



// -------------------------------//

// Create a function that checks if the array of directions will send you on an exactly 10 minute walk and return you to your original locaiton.
//Each direction will take you exactly 1 minute to walk that block.


function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false
  }
  let north = walk.filter(letter => letter === "n").length
  let south = walk.filter(letter => letter === "s").length
  let east = walk.filter(letter => letter === "e").length
  let west = walk.filter(letter => letter === "w").length
  return north === south && west === east
}

// console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return true');
// console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']), 'should return false');
// console.log(isValidWalk(['w']), 'should return false');
// console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return false');



// -------------------------------//
// Create a function that  convert a string to a new string where each character in the new string is "(" 
// if that character appears only once in the original string, or ")" if that character appears more than once in the original string.
//  Ignore capitalization when determining if a character is a duplicate.


//initial solution creating an obj and mapping over the arr to see how many times a letter appears
function isDuplicate(s) {
  let obj = {}
  let arr = s.split("").map(letter => letter.toLowerCase())

  arr.forEach(l => {
    if (obj[l]) {
      obj[l]++
    } else {
      obj[l] = 1
    }
  })
  return arr.map(letter => {
    if (obj[letter] <= 1) {
      return "("
    } else {
      return ")"
    }
  }).join("")
}

//for loop solution that utilizes the lastIndexOf and indexOf string methods to find duplcates and adds those to a new string var
function isDuplicate(word) {
  var unique = '';
  word = word.toLowerCase();
  for (var i = 0; i < word.length; i++) {
    if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
      unique += '(';
    }
    else {
      unique += ')';
    }
  }
  return unique;
}


// console.log(isDuplicate("din"), "(((");
// console.log(isDuplicate("recede"), "()()()");
// console.log(isDuplicate("Success"), ")())())", "should ignore case");
// console.log(isDuplicate("(( @"), "))((");




// -------------------------------//

//Create a function that given a string, replaces every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.

function alphabetIndex(s) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let regex = /^[a-zA-Z]+$/

  return s.split("").filter(letter => regex.test(letter)).map(letter => letter.toLowerCase()).map(letter => {
    if (alphabet.includes(letter)) {
      return (alphabet.indexOf(letter)) + 1
    }
  }).join(" ")
}

// console.log(alphabetIndex("The sunset sets at twelve o' clock.")); //, "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
// console.log(alphabetIndex("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");




// -------------------------------//
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
// which is the number of times you must multiply the digits in num until you reach a single digit. Return the number of splits

function persistence(num) {
  let count = 0
  while (num >= 10) {
    count++
    num = num.toString().split("").map(num => +num).reduce((acc, cur) => acc * cur)
  }
  return count
}

// console.log(persistence(39), 3);
// console.log(persistence(4), 0);
// console.log(persistence(25), 2);
// console.log(persistence(999), 4);




// -------------------------------//
// create a function that converts dash/underscore delimited words into camel casing

function toCamelCase(str) {
  return str.replace(/[_ -]/g, " ").split(" ").map((word, index) => {
    return index === 0 ? word : `${word[0].toUpperCase()}${word.slice(1)}`
  }).join("")
}

// console.log(toCamelCase('')) // " "
// console.log(toCamelCase("the_stealth_warrior")) //"theStealthWarrior"
// console.log(toCamelCase("The-Stealth-Warrior")) //"TheStealthWarrior"
// console.log(toCamelCase("A-B-C")) //"ABC"




// -------------------------------/

// Create a function that takes in a string. Each word in the string contains a number. The function should print on the string with the words in numerical order. 
//Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

function order(words) {
  return words.split(" ").map(word => {
    let order = word.split("").filter(Number)
    return `${order}${word}`
  }).sort().map(word => word.slice(1)).join(" ")
}


// console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
// console.log(order(""), "", "empty input should return empty string")



// -------------------------------/

//Create a function that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZero(arr) {
  let filtered = arr.filter(num => num !== 0)
  let zeros = arr.filter(num => num === 0)
  return filtered.concat(zeros)
}

// console.log(moveZero([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])) // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0];




// -------------------------------/
// Create a function that transforms the given input into military time 

function to24hourtime(hour, minute, period) {
  if (period === "pm" && hour !== 12) {
    hour += 12
  } else if (period === "am" && hour === 12) {
    hour = 0
  }

  let formattedHour = hour.toString().padStart(2, 0)
  let formattedMinute = minute.toString().padStart(2, 0)

  return formattedHour + formattedMinute
}

// console.log(to24hourtime(1, 0, "am"), "0100", "Input =  1:00 am");
// console.log(to24hourtime(1, 0, "pm"), "1300", "Input =  1:00 pm");
// console.log(to24hourtime(12, 0, "am"), "0000", "Input = 12:00 am");
// console.log(to24hourtime(12, 0, "pm"), "1200", "Input = 12:00 pm");



// -------------------------------/
// Create a function that returns a boolean for if a number which is the sum of its own digits, each raised to the power of the number of digits in a given base.
// ex of true ===    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

function sumOfSquare(n) {
  let s = n.toString().split("")
  return s.map(num => Math.pow(+num, s.length)).reduce((acc, cur) => acc + cur) === n
}

// console.log(sumOfSquare(153))//true
// console.log(sumOfSquare(122))//false 




// -------------------------------/
// Create a function that given an array of numbers will sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortMyArray(array) {
  let odd = array.filter(num => num % 2 == 1 || num % 2 === -1).sort((a, b) => a - b)

  return array.map(num => {
    if (num % 2 === 1 || num % 2 === -1) {
      let order = odd.shift(1)
      return num = order
    } else {
      return num
    }
  })

}

// console.log(sortMyArray([1, 11, 2, 8, 3, 4, 5])) //[ 1, 3, 2, 8, 5, 4, 11 ]
// console.log(sortMyArray([-30, 7, 20, -42, -46, -12, -49, 14, 11, 15, 19, -6, -17, -50, -35, -27, -15, 27, 31, 36, 50, 38, -27, 45]))
//  [ -30, -49, 20, -42, -46, -12, -35, 14, -27, -27, -17, -6, -15, -50, 7, 11, 15, 19, 27, 36, 50, 38, 31, 45 ]




// -------------------------------/

// Create a function that  builds a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors.
//  A tower block is represented with "*" character.

function towerBuilder(nFloors) {
  let tower = []
  for (let i = 0; i < nFloors; i++) {
    let spaces = " ".repeat(nFloors - i - 1)
    let stars = "*".repeat(2 * i + 1)
    tower.push(spaces + stars + spaces)
  }
  return tower
}

// console.log(towerBuilder(1), ["*"]);
// console.log(towerBuilder(2), [" * ", "***"]);
// console.log(towerBuilder(3), ["  *  ", " *** ", "*****"]);




// -------------------------------/
// Create a fucntion that given a string of words, finds the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet:

function high(s) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("")
  let words = s.split(" ")
  let numbers = s.split(" ").map(word => {
    let count = 0
    for (let i = 0; i < word.length; i++) {
      count += alphabet.indexOf(word[i]) + 1
    }
    return count
  })
  return words[numbers.indexOf(Math.max(...numbers))]
}

// console.log(high('man i need a taxi up to ubud'), 'taxi');
// console.log(high('what time are we climbing up the volcano'), 'volcano');
// console.log(high('take me to semynak'), 'semynak');






// -------------------------------/

// Write a function that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

function missingLetter(arr) {
  let letters = arr.map(letter => letter.toLowerCase())
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("")
  let missingLetter = ""

  for (let i = 0; i < letters.length; i++) {
    let currentLetterIndex = alphabet.indexOf(letters[i])

    if (currentLetterIndex !== -1 && alphabet[currentLetterIndex + 1]) {
      missingLetter = alphabet[currentLetterIndex + 1]
    }
    if (arr[i] === arr[i].toUpperCase()) {
      missingLetter = missingLetter.toUpperCase()
    }
    return missingLetter
  }
}


// console.log(missingLetter(['a', 'b', 'c', 'd', 'f']), 'e');
// console.log(missingLetter(['O', 'Q', 'R', 'S']), 'P');




// -------------------------------/ 
// Create a function that given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// ex: if n = 2 and arr = [1,2,3,1,2,1,2,3] output would be [1,2,3,1,2,3]

function deleteNth(arr, n) {
  let answer = []
  let obj = {}
  arr.forEach(num => {
    if (!obj[num]) {
      obj[num] = 1
    } else {
      obj[num]++
    }
  })
  for (let i = arr.length - 1; i >= 0; i--) {
    if (obj[arr[i]] > n) {
      obj[arr[i]]--
    } else {
      answer.unshift(arr[i])
    }
  }
  return answer
}

// cleaner answer 

function deleteNth(arr, x) {
  var cache = {};
  return arr.filter(num => {
    cache[num] = (cache[num] || 0) + 1;
    return cache[num] <= x;
  });
}


// console.log(deleteNth([20, 37, 20, 21], 1)) //[20, 37, 21]
// console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)) //[1, 1, 3, 3, 7, 2, 2, 2]




// -------------------------------/ 
// Given an array (arr) as an argument create a function that should return the total number of smiling faces.

// Rules for a smiling face:
//  - Each smiley face must contain a valid pair of eyes. Eyes can be marked as ":" or ";"
//  - A smiley face can have a nose but it does not have to. Valid characters for a nose are "-" or '~'
//  - Every smiling face must have a smiling mouth that should be marked with either ')' or 'D'


function countSmileys(arr) {
  let count = 0
  let pattern = /^[:;][-~]?[)D]/

  arr.forEach(face => {
    pattern.test(face) && count++
  })
  return count
}

// console.log(countSmileys([]), 0);
// console.log(countSmileys([':D', ':~)', ';~D', ':)']), 4);
// console.log(countSmileys([':)', ':(', ':D', ':O', ':;']), 2);
// console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);



// -------------------------------/ 
// Create a function that breaks up camel casing, using a space between words

function solution(string) {
  return string.split("").map(letter => letter === letter.toUpperCase() ? " " + letter : letter).join("")
}


// console.log(solution(""), "");
// console.log(solution("camelCasing"), "camel Casing");
// console.log(solution("camelCasingTest"), "camel Casing Test");



// -------------------------------/ 
// You are given an array(list) strarr of strings and an integer k. 
// Your task is to return the first longest string consisting of k consecutive strings taken in the array.

function longestConsec(strarr, k) {
  let longest = 0
  let string = ""
  for (let i = 0; i < strarr.length; i++) {
    let slice = strarr.slice(i, i + k).join("")
    let curlength = slice.length

    if (curlength > longest) {
      longest = curlength
      string = slice
    }
  }
  return string
}
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
// console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
// console.log(longestConsec([], 3), "")



// -------------------------------/ 

// Craete a function that counts all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

function count(string) {
  let count = {}
  let arr = string.split("")
  arr.forEach(letter => count[letter] ? count[letter]++ : count[letter] = 1)
  return count
}

