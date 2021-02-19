namespace NamespaceA {
  class A {
    aName: string = 'A'
  }
  class B {
    bName: string = 'B'
  }

  const a = new A()
  const b = new B()

  const c = { ...a, ...b }
  const d = Object.assign(a, b)
  console.log('c', c)
  console.log('d', d)
  // c { aName: 'A', bName: 'B' }
  // d A { aName: 'A', bName: 'B' }
  a.aName = 'new a name'
  console.log(c)
  console.log(d)
  // { aName: 'A', bName: 'B' }
  // A { aName: 'new a name', bName: 'B' }
}
