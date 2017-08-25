export const run = () => {
  const todoUrl = 'https://dev-rest-api.herokuapp.com/to-dos?_page=2&_limit=2'

  // Two async...await examples using Fetch
  async function getFunction (url) {
    const res = await fetch(url)
    return res.json()
  }

  const getArrowFunction = async url => {
    const res = await fetch(url)
    return res.json()
  }

  // Combining Promise.all with async...await
  async function getTodosUsers () {
    const [todo1, todo2, todo3] = await Promise.all([
      await getFunction(todoUrl),
      await getArrowFunction(todoUrl),
      await fetch(todoUrl).then(res => res.json()) // one liner
    ])
    return { todo1, todo2, todo3 }
  }

  (async () => {
    const usersTodos = await getTodosUsers()
    console.log(usersTodos)
  })()

  // Blog Post: https://www.johnlivingston.io/blog/async-await-multiple-promises
}
