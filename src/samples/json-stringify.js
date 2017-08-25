export const run = () => {
  // An Object and an Array to Be Stringified
  const person = {
    id: 1,
    name: 'Bob',
    pets: [{
      type: 'cat',
      name: 'El Diablo'
    }, {
      type: 'dog',
      name: 'Frowny'
    }]
  }

  const vegetables = [
    'carrots',
    'onions',
    'lettuce',
    'brocolli'
  ]

  // Just Make It Look Pretty.
  console.log(JSON.stringify(person, null, 2))
  console.log(JSON.stringify(vegetables, null, 2))

  // Replace Cats and Brocolli. Also change dog's name to Happy!

  // Our Replacer Method
  const replaceCatsAndBroccoli = (key, value) => {
    if (Array.isArray(value)) {
      return value.filter(v => v !== 'brocolli')
    }
    if (typeof value === 'object') {
      if (value.pets) {
        value.pets = value.pets.filter(pet => pet.type !== 'cat').map(pet => {
          if (pet.name === 'Frowny') {
            pet.name = 'Happy'
          }
          return pet
        })
      }
      return value
    }
    return value
  }

  // Consuming with JSON.stringify
  console.log(JSON.stringify(person, replaceCatsAndBroccoli, 2))
  console.log(JSON.stringify(vegetables, replaceCatsAndBroccoli, 2))

  // Blog Post: https://www.johnlivingston.io/blog/json-stringify
}
