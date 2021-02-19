



class ClassA {
  static typeName: string
  localName: string

  constructor() {}

  static getFullName() {
    return `ClassA ${ClassA.typeName}`
  }
}

const a = new ClassA()
a.localName = 'a\'s name'

// console.log('a', a)

ClassA.typeName = 'ClassA type name'

// console.log(ClassA.typeName)


class Runner {
  static lastRunTypeName: string

  constructor(private typeName: string) {}

  run() {
    Runner.lastRunTypeName = this.typeName
  }
}


const a1 = new Runner('a')
const b1 = new Runner('b1')

a1.run()
b1.run()

console.log(Runner.lastRunTypeName)