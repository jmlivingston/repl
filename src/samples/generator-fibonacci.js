export const run = () => {
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

  const nextTest = getFibonacci(50)
  for (let x = 0; x < 11; x++) {
    console.log(nextTest.next())
  }

  const [...spreadTest] = getFibonacci(50)
  spreadTest.forEach(x => console.log(x))

  // Blog Post: https://www.johnlivingston.io/blog/generator-fibonacci
}
