function getEmployee(id) {

  return {
    name: 'John',
    age: 35,
    address: '123 St',
    country: 'United States'
  }
}

const { name: fullName, age } = getEmployee(12)
console.log('employee', fullName, age)


function getEmployeeWorkInfo(id) {
  return [
    id,
    'Office st',
    'France'
  ]
}

const [id, officeAddress] = getEmployeeWorkInfo(12)
console.log('employee', id, officeAddress)