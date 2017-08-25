export const run = () => {
  const todoUrl = 'https://dev-rest-api.herokuapp.com/to-dos?_page=2&_limit=2'
  const badUrl = 'badUrl'

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
        // do something here
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
      // do something here
      return error
    }
  }

  function printResults (results) {
    if (results instanceof Error) {
      console.log(results.message)
    } else {
      console.log(JSON.stringify(results, null, 2))
    }
  }

  getFetch(todoUrl).then(getFetchResults => {
    printResults(getFetchResults)
  });

  (async () => {
    const getAsyncFetchResults = await getAsyncFetch(todoUrl)
    printResults(getAsyncFetchResults)
  })()

  getFetch(badUrl).then(getFetchResults => {
    printResults(getFetchResults)
  });

  (async () => {
    const getAsyncFetchResults = await getAsyncFetch(badUrl)
    printResults(getAsyncFetchResults)
  })()

  /*
  You can use Fetch with or without **async...await**. The big difference is chaining **then** methods vs. using the **await** reserved word. Stylistically, I prefer less nesting and find the **async...await** method much easier to read.
  
  The following code samples illustrate how you can use both of these patterns, along with some simple error handling techniques.


  This page could not be found: http://localhost:8080/badUrl

  This page could not be found: http://localhost:8080/badUrl

  [
    {
      "id": 3,
      "name": "Sleep",
      "completed": false,
      "createdById": 1,
      "createdDate": "2016-01-01",
      "modifiedById": 1,
      "modifiedDate": "2016-01-01"
    },
    {
      "id": 4,
      "name": "Feed the cat",
      "completed": true,
      "createdById": 3,
      "createdDate": "2016-01-01",
      "modifiedById": 3,
      "modifiedDate": "2016-01-01"
    }
  ]

  [
    {
      "id": 3,
      "name": "Sleep",
      "completed": false,
      "createdById": 1,
      "createdDate": "2016-01-01",
      "modifiedById": 1,
      "modifiedDate": "2016-01-01"
    },
    {
      "id": 4,
      "name": "Feed the cat",
      "completed": true,
      "createdById": 3,
      "createdDate": "2016-01-01",
      "modifiedById": 3,
      "modifiedDate": "2016-01-01"
    }
  ]

  */
}
