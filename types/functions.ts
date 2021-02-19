function runMore(distance: number): number {
  return distance + 10
}


console.log('distance', runMore(10))


function eat(calories: number) {
  console.log(`I ate: ${calories} calories`)
}

console.log('eat', eat(100))


function sleepIn(hours: number): void {
  console.log(`I slept ${hours} hours`)
}

