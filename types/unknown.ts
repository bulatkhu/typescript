let value: unknown = 1
value = 'new String'
value = []

if (value instanceof Array) {
  value.push(3)
}


console.log('value', value)