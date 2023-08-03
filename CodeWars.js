
const accum = s => {
    let arr = []
    s.toLowerCase().split('').map((letter, index)=> {
       return arr.push(letter.repeat(index +1) )
    })
    return arr
}




console.log(accum("abcd")) // "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")) // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt")) //"C-Ww-Aaa-Tttt"