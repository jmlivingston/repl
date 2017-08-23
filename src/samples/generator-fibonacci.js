/*
JavaScript Generators allow you to create iterators using an easier syntax than with Symbol.iterator.

How To Consume and Iterator

- for...of
- using **next**
- Spread operator

*/

function * getFibonacci (max = Number.MAX_SAFE_INTEGER) {
  let current = 1
  let previous = 0
  while (current <= max) {
    [current, previous] = [previous, current + previous]
    if (current <= max) {
      yield current
    } else {
      return
    }
  }
}

const forOfTest = getFibonacci(50)
for (let x of forOfTest) {
  console.log(x)
}

/*
0, 1, 1, 2, 3, 5, 8, 13, 21, 34
*/

const nextTest = getFibonacci(50)
for (let x = 0; x < 11; x++) {
  console.log(JSON.stringify(nextTest.next(), null, 2))
}

/*
{
  "value": 0,
  "done": false
}
{
  "value": 1,
  "done": false
}
{
  "value": 2,
  "done": false
}
...
{
  "done": true
}
*/

const [...spreadTest] = getFibonacci(50)
spreadTest.forEach(x => console.log(x))

/*
0, 1, 1, 2, 3, 5, 8, 13, 21, 34
*/

/*
> **Fun Fact:** You can create an iterator from an array using Symbol.iterator or the newer Array.values. (Note: As of today, Array.values() is only
available in Firefox Nightly and Safari, so you will need Babel to transpile for you.)
*/

const array = [1, 2, 3, 4]

const arrayIterator1 = array[Symbol.iterator]()
const arrayIterator2 = array.values()

for (let x of arrayIterator1) {
  console.log(x)
}

for (let x of arrayIterator2) {
  console.log(x)
}
