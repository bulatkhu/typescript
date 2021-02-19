interface User {
  name: string;
  age: number;
}


function canDrive(usr: User) {
  console.log('user data', usr.name)

  if (usr.age < 18) {
    console.log('allow to drive')
  } else {
    console.log('do not allow to drive')
  }
}


const tom: User = {
  name: 'tom',
  age: 20,
}

canDrive(tom)



