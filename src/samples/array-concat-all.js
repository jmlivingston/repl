/*
There are an endless number of utilities that do this, but sometimes it's helpful to break down the logic of how you could do this yourself. 
Let's try a simple example with as few lines as possible, yet preserve some readability.
- The first parameter is an array which should be pretty obvious
- The second parameter is what we'll use to accumulate the final array. It defaults to an empty array on our initial call.
- The first thing we do is check if the object is really an array or not. I'm using the standard **Array.isArray** as it is supported by all modern browsers. 
Keep in mind that **typeof** resolves as an **object** in JavaScript, so you cannot use that.
- If it is not an array, we simply push the object to our items placeholder.
- If it is an array, we loop through it and use some recursion to call concatAll again, but this time with items.
- We can then use a spread operator to flatten that out and assign it to items.

Hopefully your data does not look like this mixed array below, but as you can see the function effectively flattens it.
*/

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

const mixedArray = [['a', 'b'], 'x', ['c', 'd'], [['e', 'f'], 'y', ['g', 'h']], 'z']

const flattenedArray = concatAll(mixedArray)

console.log(JSON.stringify(flattenedArray, null, 2))

/*
[
  "a",
  "b",
  "x",
  "c",
  "d",
  "e",
  "f",
  "y",
  "g",
  "h",
  "z"
]
*/