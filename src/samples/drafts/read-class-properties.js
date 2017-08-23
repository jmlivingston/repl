class Foo {

}

const fooPrototype = Object.getPrototypeOf(new Foo())
const properies = Object.getOwnPropertyNames(fooPrototype)
