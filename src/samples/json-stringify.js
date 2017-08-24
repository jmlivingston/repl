export const run = () => {
  const person = {
    id: 1,
    name: 'Bob',
    pets: [{
      type: 'cat',
      name: 'el diablo'
    }, {
      type: 'dog',
      name: 'frowny'
    }]
  }

  const vegetables = [
    'carrots',
    'onions',
    'lettuce',
    'brocolli'
  ]

  const replaceCatsAndBroccoli = (key, value) => {
    if (key === 'brocolli') {
      return undefined
    }
    if (key === 'pets') {
      // look for cats return undefined
    }
    if (typeof value === 'string') {
      return undefined
    }
    return key
  }

  // Make it look pretty
  console.log(JSON.stringify(person, null, 2))
}
