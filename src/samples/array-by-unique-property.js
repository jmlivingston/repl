export const run = () => {
  // Code
  const filterByUniqueProperty = (array, prop, sortProp, isGreater) => {
    let trackObj = {}
    return array
      .sort((x, y) => {
        return isGreater ? x[sortProp] > y[sortProp] : x[sortProp] < y[sortProp]
      })
      .filter(item => {
        if (!trackObj[item[prop]]) {
          trackObj[item[prop]] = true
          return true
        } else {
          return false
        }
      })
  }

  // Consuming the Code
  const people = [
    {
      id: 1,
      name: 'Abe',
      lastUpdated: 1
    },
    {
      id: 1,
      name: 'Abe',
      lastUpdated: 2
    },
    {
      id: 1,
      name: 'Ben',
      lastUpdated: 3
    },
    {
      id: 1,
      name: 'Ben',
      lastUpdated: 4
    },
    {
      id: 2,
      name: 'Cole',
      lastUpdated: 4
    },
    {
      id: 2,
      name: 'Abe',
      lastUpdated: 3
    },
    {
      id: 2,
      name: 'Ben',
      lastUpdated: 2
    },
    {
      id: 2,
      name: 'Cole',
      lastUpdated: 1
    }
  ]

  const filteredPeople = filterByUniqueProperty(people, 'id', 'lastUpdated', true)

  console.log(filteredPeople)

  // Blog Post: https://www.johnlivingston.io/blog/array-by-unique-property
}
