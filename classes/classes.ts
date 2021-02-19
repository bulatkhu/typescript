class Person1 {
  constructor() {
  }
  msg: string
  speak() {
    console.log('msg', this.msg)
  }
}

let tom1  = new Person1()


console.log('tom', tom1)
tom1.msg = 'Hello! I am Tom!'
tom1.speak()