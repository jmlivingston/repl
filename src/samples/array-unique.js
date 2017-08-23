/*
Here are two simple examples of how to take a shallow array and create a unique copy without mutation.
The first example can be used for primitive data types and the second example can be used with complex data types like objects.
Both employ the use of the JavaScript primitive **Set** data type which does not allow duplicates along with the **Spread** operator.
*/


const uniqueValuesFromArray = array => [...new Set(array)]

const valueArray = [1, 2, 3, 3, 4, 4, 4, 5]
const uniqueValueArray = uniqueValuesFromArray(valueArray)
console.log(JSON.stringify(uniqueValueArray, null, 2))

/*
[
  1,
  2,
  3,
  4,
  5
]
*/


const uniqueObjectsFromArray = array => [... new Set(array.map(JSON.stringify))].map(JSON.parse)

const objectArray = [{ id: 1 }, { id: 1 }, { id: 2 }, { id: 3 }]
const uniqueObjectArray = uniqueObjectsFromArray(objectArray)
console.log(JSON.stringify(uniqueObjectArray, null, 2))

/*
[
  {
    "id": 1
  },
  {
    "id": 2
  },
  {
    "id": 3
  }
]
*/


