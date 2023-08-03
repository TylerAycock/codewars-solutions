// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    let string = s.toLowerCase().split('');
    let newArr = string.map((letter, index) =>
        `${letter.toLocaleUpperCase()}${letter.repeat(index)}`);

    return newArr.join('-');
}


console.log(accum("abcd")) //Desired return  "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")) // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt")) //"C-Ww-Aaa-Tttt"