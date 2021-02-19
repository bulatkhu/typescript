function oldEnough(age: number): never | boolean {
  if (age > 100) {
    throw Error('too old')
  }
  if (age < 18) {
    return false
  }
  return  true
}

