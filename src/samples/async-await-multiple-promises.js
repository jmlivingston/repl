export const run = () => {
  const todoUrl = 'https://dev-rest-api.herokuapp.com/to-dos?_page=2&_limit=2'

  async function getFunction (url) {
    const res = await fetch(url)
    return res.json()
  }

  const getArrowFunction = async url => {
    const res = await fetch(url)
    return res.json()
  }

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

  /*
  According to TC39, the ***async...await** spec is finished and expected to be published this year. This gives a much more concise syntax and allows us to get away from
  so much of the nesting inherent in typical Promise based code. Below is an example of how to combine the power of the Fetch API, Promises, async...await, and a bit of destructuring.
  
  Here are a few things you'll notice in the code above:
  
  - Chaining Is Optional - Our get functions uses **fetch**, but instead of chaining a **then**, we can simply use **await**. The same goes with our **Promise.all** function.
  - Fetch Inline - Alternatively, we can still fetch inline with a **then**. See **todo3**.
  - Function vs. Arrow Function - We can use regular functions or named arrow functions for async.
  - Promise.all + Destructuring - We can couple the power of **Promise.all** with some **destructuring** syntax to easily pull out the returned data.
  - Async required for Await - The last line has some funky syntax. Since await must be used with async, we need to wrap our calls to async functions into a funky looking async IIFE.
  It's not clear if we can get around this syntax in the future, but given the other benefits it's not the end of the world.
  
  > **Warning:** Though it may be exciting to use the latest standards, be sure to check out what Babel transpiles it into and compare against any other AJAX libraries you may be using.
  As of this date, Babel will tranform 23 lines into a whopping 90, so be sure that there aren't any performance issues.
  */

  // https://github.com/tc39/proposals/blob/master/finished-proposals.md

  // https://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=env&targets=&browsers=&builtIns=false&debug=false&code_lz=MYewdgzgLgBFIBMQFUBOAbGBeGByAFlFAA4QBcA9BQgKYBuAtKjdAwIbECWAdPjaiADWAVw7FuoALYV4DJBFwAoUJFjEQ0NJhwEipStXpMWUdl178ho4uKkV10BYsVsIATzDAYAM2GeonOAwAOY0sAAUwhgAlDAA3oowMCrQMMwQ2DBsAO5snLDeYcD4kTGJaWFRYFm5-RUQ3ABWEODh0YoAvs6uHl6-_oHVoVAAKogayBD8GW3x5SmwANrw8gA0MMJTqBAAupk5ebAACgKSnFPcbOjo4YvlScPhKygxq_chYeEOUFrtSTt_CpQKpzJJJZ4QN5gjZbCDlLpdRThHqeGCzLAAPlByXAqU20zG8n2tVgw0JE1hbXKVBxkBA6Bo3HQIGC4QAUgBlADyADluNBUJwwMFON43JFYeTITAwMJrusAEzRdodaJtIA

  /*
  {
    "todo1": [
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
    ],
    "todo2": [
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
    ],
    "todo3": [
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
  }
  */
}
