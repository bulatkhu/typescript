class Person2 {
  constructor(private msg: string, readonly readMsg: string) {
  }

  speak() {
    console.log('msg', this.msg)
  }

  /* Cannot assign to 'readMsg' because it is a read-only property.
  changeMessage() {
    this.readMsg = this.readMsg + 'new'
  }
  */
}

const tom2 = new Person2('Hello', 'unmodifiable message')

//tom2.readMsg = 'h' Cannot assign to 'readMsg' because it is a read-only property.
//tom2.msg Property 'msg' is private and only accessible within class 'Person2'.
tom2.speak()
