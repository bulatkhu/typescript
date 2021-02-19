const callerObj = {
  name: 'John'
}

// function CheckContext() {
//   this.name2 = 'name'
// }

function checkMyThis(age) {
  console.log('what is this', + this)
  console.log('name', this.name)
  this.age = age
  console.log('what is my age', this.age)
}


checkMyThis.call(callerObj,25, '12312')