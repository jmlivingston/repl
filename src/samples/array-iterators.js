export const run = () => {
  Array.prototype.values = Array.prototype.values || function () { return this[Symbol.iterator]() }

  const array = [1, 2, 3, 4]

  const arrayIteratorWithSymbol = array[Symbol.iterator]()
  const arrayIteratorWithValues = array.values()

  console.log('Array Iterator With Symbol.iterator')
  for (let x of arrayIteratorWithSymbol) {
    console.log(x)
  }

  console.log('Array Iterator With values')
  for (let x of arrayIteratorWithValues) {
    console.log(x)
  }

  console.log('Using next()')
  const arrayIteratorWithNext = array.values()
  for (let x = 0; x < array.length; x++) {
    console.log(arrayIteratorWithNext.next())
  }

  console.log('Using Spread operator')
  const arrayWithSpread = array.values()
  const [...spreadTest] = arrayWithSpread
  spreadTest.forEach(x => console.log(x))

  // Blog Post: https://www.johnlivingston.io/blog/array-iterators
}
