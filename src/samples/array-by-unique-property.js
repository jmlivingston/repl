/*
Filter out duplicates in an Array using given a property, sorting property, and sorting direction
*/

const filterByUniqueProperty = (array, prop, sortProp, isGreater) => {
  let trackObj = {}
  return array.sort((x, y) => {
    return isGreater ? x[sortProp] > y[sortProp] : x[sortProp] < y[sortProp]
  }).filter(item => {
    if (!trackObj[item[prop]]) {
      trackObj[item[prop]] = true
      return true
    } else {
      return false
    }
  })
}

const people = [{
  id: 1,
  name: 'Abe',
  lastUpdated: 1
}, {
  id: 1,
  name: 'Abe',
  lastUpdated: 2
}, {
  id: 1,
  name: 'Ben',
  lastUpdated: 3
}, {
  id: 1,
  name: 'Ben',
  lastUpdated: 4
}, {
  id: 2,
  name: 'Cole',
  lastUpdated: 4
}, {
  id: 2,
  name: 'Abe',
  lastUpdated: 3
}, {
  id: 2,
  name: 'Ben',
  lastUpdated: 2
}, {
  id: 2,
  name: 'Cole',
  lastUpdated: 1
}]

const filteredPeople = filterByUniqueProperty(people, 'id', 'lastUpdated', true)

console.log(JSON.stringify(filteredPeople, null, 2))

/*
[
  {
    "id": 1,
    "name": "Abe",
    "lastUpdated": 1
  },
  {
    "id": 2,
    "name": "Cole",
    "lastUpdated": 1
  }
]
*/
