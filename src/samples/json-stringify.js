export const run = () => {
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

  // Just Make It Look Pretty.
  console.log(JSON.stringify(person, null, 2))
  console.log(JSON.stringify(vegetables, null, 2))

  // Replace Cats and Brocolli. Also change dog's name to Happy!
  console.log(JSON.stringify(person, replaceCatsAndBroccoli, 2))
  console.log(JSON.stringify(vegetables, replaceCatsAndBroccoli, 2))
}

/*
Just a few fun extra hints on how to use JSON.stringify. First of all, if you ever need to display your code wether in a **<code>** tag or in the console, and you want it to look pretty, simply pass two additional arguments.
The first one is a replacer method and the second is the number of spaces you'd like for white space. The second thing you can do is use the replacer method for filtering out data. You can even use this with nested data.

{
  "id": 1,
  "name": "Bob",
  "pets": [
    {
      "type": "cat",
      "name": "El Diablo"
    },
    {
      "type": "dog",
      "name": "Frowny"
    }
  ]
}

[
  "carrots",
  "onions",
  "lettuce",
  "brocolli"
]

{
  "id": 1,
  "name": "Bob",
  "pets": [
    {
      "type": "dog",
      "name": "Happy"
    }
  ]
}

[
  "carrots",
  "onions",
  "lettuce"
]

*/
