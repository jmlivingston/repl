/*
Hack: The easiest way to create a copy of any object without mutating it, is without any fancy library and only a simple one-liner. ;) 
It's easy to forget some of the forbidden fruit in JavaScript and it becomse immediately obvious once you see it.
While tempting, you should **NEVER EVER** use this code as it can potentially kill performance.  When writing pure function, always use more surgical approaches like destructuring or Object.assign.
*/

const deepCopy = obj => JSON.parse(JSON.stringify(obj))

let person = {
  id: 1,
  name: 'Joe',
  pets: ['cat', 'dog']
}

let newPerson = deepCopy(person)
newPerson.name = 'Joey'
newPerson.pets.push('fish')

console.log(JSON.stringify(person, null, 2))

/*
{
  "id": 1,
  "name": "Joe",
  "pets": [
    "cat",
    "dog"
  ]
}
*/

console.log(JSON.stringify(newPerson, null, 2))

/*
{
  "id": 1,
  "name": "Joey",
  "pets": [
    "cat",
    "dog",
    "fish"
  ]
}
*/
