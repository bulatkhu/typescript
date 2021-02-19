class Person {
  name: string;
}

const jill: { name: string } = {
  name: 'jill'
}

console.log('jill', jill)

const person: Person = jill
console.log('person', person)