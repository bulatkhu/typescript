function getLength<T>(arg: T): number {
  if (arg.hasOwnProperty('length')) {
    return arg['length']
  }
  return 0
}

console.log(getLength<number>(12))
console.log(getLength<object>([1, 12, 12]))
console.log(getLength('Hello world!'))

interface HasLength {
  length: number
}

function improvedGetLength<T extends HasLength>(arg: T): number {
  return arg.length
}
console.log(improvedGetLength([1, 12, 12]))
console.log(improvedGetLength('Hello world!'))

/*
console.log(improvedGetLength<number>(12))
Type 'object' does not satisfy the constraint 'HasLength'
console.log(improvedGetLength<object>([1, 12, 12]))
*/
