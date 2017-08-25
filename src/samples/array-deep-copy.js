export const run = () => {
  // Code
  const deepCopy = obj => JSON.parse(JSON.stringify(obj))

  // Consuming the Code
  let person = {
    id: 1,
    name: 'Joe',
    pets: ['cat', 'dog']
  }

  let newPerson = deepCopy(person)
  newPerson.name = 'Joey'
  newPerson.pets.push('fish')

  console.log(person)
  console.log(newPerson)

  // Blog Post: https://www.johnlivingston.io/blog/array-deep-copy
}
