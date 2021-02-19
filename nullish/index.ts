const val1 = undefined
const val2 = 10
const result = val1 ?? val2
console.log(result)

/*
The double question marks work from left to right. The statement means if val1 is not
null or undefined and has an actual value, then return that value. However, if val1
does not have a value, return val2. So, in this case, compiling and running would result
in 10 being written to the console.
*/

