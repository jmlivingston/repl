/*
According to TC39, the ***async...await** spec is finished and expected to be published this year. This gives us a much more concise syntax and allows us to get away from
so much of the chaining inherent in traditional Promise based code. Below is an example of how to combine the power of the Fetch API, Promises, async...await, and a bit of destructuring.

Here are a few cool things you'll notice:

- There is absolutely no chaining involved. Our get function uses **fetch**, but instead of chaining a **then**, we can simply use wait. The same goes with our **Promise.all** function.
- We can couple the power of **Promise.all** with some **destructuring** syntax to easily pull out the returned data.
- The last one is a bit ugly. Since await must be used with async, we need to wrap our calls to async functions into a funky looking async IIFE.
It's not clear if we can get around this syntax in the future, but given the other benefits it's not the end of the world.

> **Warning:** Though it may be exciting to use all the latest standards, be sure to check out what Babel transpiles it into and compare against any other AJAX libraries you may be using.
As of this date, Babel will tranform 23 lines into a whopping 90.
*/

const todoUrl = 'https://dev-rest-api.herokuapp.com/to-dos'
const postUrl = 'https://dev-rest-api.herokuapp.com/posts'

async function get (url) {
  const res = await fetch(url)
  return res.json()
}

async function getTodosUsers () {
  const [todos, users] = await Promise.all([
    get(todoUrl),
    get(postUrl)]
  )
  return {
    todos,
    users
  }
}

(async () => {
  const usersTodos = await getTodosUsers()
  console.log(JSON.stringify(usersTodos, null, 2))
})()

// https://github.com/tc39/proposals/blob/master/finished-proposals.md

// https://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=env&targets=&browsers=&builtIns=false&debug=false&code_lz=MYewdgzgLgBFIBMQFUBOAbGBeGByAFlFAA4QBcA9BQgKYBuAtKjdAwIbECWAdPjaiADWAVw7FuoALYV4DJBFwAoUJFjEQ0NJhwEipStXpMWUdl178ho4uKkV10BYsVsIATzDAYAM2GeonOAwAOY0sAAUwhgAlDAA3oowMCrQMMwQ2DBsAO5snLDeYcD4kTGJaWFRYFm5-RUQ3ABWEODh0YoAvs6uHl6-_oHVoVAAKogayBD8GW3x5SmwANrw8gA0MMJTqBAAupk5ebAACgKSnFPcbOjo4YvlScPhKygxq_chYeEOUFrtSTt_CpQKpzJJJZ4QN5gjZbCDlLpdRThHqeGCzLAAPlByXAqU20zG8n2tVgw0JE1hbXKVBxkBA6Bo3HQIGC4QAUgBlADyADluNBUJwwMFON43JFYeTITAwMJrusAEzRdodaJtIA
