export const run = () => {
  // Code
  const concatAll = (array, items = []) => {
    if (Array.isArray(array)) {
      array.forEach(subArray => {
        items = [...concatAll(subArray, items)]
      })
    } else {
      items.push(array)
    }
    return items
  }

  // Consuming the Code
  const mixedArray = [
    ['a', 'b'],
    'x',
    ['c', 'd'],
    [['e', 'f'], 'y', ['g', 'h']],
    'z'
  ]

  const flattenedArray = concatAll(mixedArray)

  console.log(flattenedArray)

  // Blog Post: https://www.johnlivingston.io/blog/array-concat-all
}
