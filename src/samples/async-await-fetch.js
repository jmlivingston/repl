export const run = () => {
  // Code
  function handleError (error) {
    // Do logging...
    if (error.status === 404) {
      throw new Error('This page could not be found: ' + error.url)
    } else {
      throw error
    }
  }

  function getFetch (url) {
    return fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          handleError(res)
        }
      })
      .then(json => json)
      .catch(error => {
        return error
      })
  }

  async function getAsyncFetch (url) {
    try {
      const res = await fetch(url)
      if (res.ok) {
        const json = await res.json()
        return json
      } else {
        handleError(res)
      }
    } catch (error) {
      return error
    }
  }

  // Consuming the Code
  const todoUrl = 'https://dev-rest-api.herokuapp.com/to-dos?_page=2&_limit=2'
  const badUrl = 'badUrl'

  function printResults (results) {
    if (results instanceof Error) {
      console.log(results.message)
    } else {
      console.log(JSON.stringify(results, null, 2))
    }
  }

  getFetch(todoUrl).then(printResults);

  (async () => {
    const getAsyncFetchResults = await getAsyncFetch(todoUrl)
    printResults(getAsyncFetchResults)
  })()

  getFetch(badUrl).then(printResults);

  (async () => {
    const getAsyncFetchResults = await getAsyncFetch(badUrl)
    printResults(getAsyncFetchResults)
  })()

  // Blog Post: https://www.johnlivingston.io/blog/async-await-fetch
}
