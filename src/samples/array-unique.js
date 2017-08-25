export const run = () => {
  // Code
  const uniqueValuesFromArray = array => {
    return [...new Set(array)]
  }

  const uniqueObjectsFromArray = array => {
    return [...new Set(array.map(JSON.stringify))].map(JSON.parse)
  }

  // Consuming the Code

  // Unique Values
  const valueArray = [1, 2, 3, 3, 4, 4, 4, 5]
  const uniqueValueArray = uniqueValuesFromArray(valueArray)
  console.log(uniqueValueArray)

  // Unique Objects
  const objectArray = [{ id: 1 }, { id: 1 }, { id: 2 }, { id: 3 }]
  const uniqueObjectArray = uniqueObjectsFromArray(objectArray)
  console.log(uniqueObjectArray)

  // Blog Post: https://www.johnlivingston.io/blog/array-unique
}
