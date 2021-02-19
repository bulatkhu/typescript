let obj: { name: string, age: number } = {
  name: 'tom',
  age: 12
}


let objIntersection: { name: string } & {  age: number }= {
  name: 'tom',
  age: 12
}

let objIntersectionOr: { name: string } | {  age: number }= {
  name: 'tom',
  age: 12
}


let unionObj: null | { name: string } = null

unionObj = { name: 'ewr' }


console.log('obj', objIntersectionOr)
console.log('union', unionObj)