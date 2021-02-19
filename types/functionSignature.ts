type Run = (miles: number) => boolean

let runner: Run = function (miles: number): boolean {
  return miles > 10
}


let cutRunner: Run = function (miles) {
  return miles > 10
}

console.log('run', runner(200))
console.log('cut run', cutRunner(200))