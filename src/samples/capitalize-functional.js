export const run = () => {
  // Non-Functional

  const capitalizeNonFunctional = word => {
    let capitalizedWord = ''
    for (let i = 0; i < word.length; i++) {
      let char = word[i]
      if (i === 0) {
        char = char.toUpperCase()
      }
      capitalizedWord += char
    }
    return capitalizedWord
  }

  const capitalizeWordsNonFunctional = words => {
    const wordsSplit = words.split(' ')
    let newWords = ''
    for (let i = 0; i < wordsSplit.length; i++) {
      newWords += capitalizeNonFunctional(wordsSplit[i]) + ' '
    }
    return newWords.trim()
  }

  let message2 = 'this is sentence about nothing'
  message2 = capitalizeWordsNonFunctional(message2)
  console.log(message2)

  // Functional

  const capitalizeFunctional = word => word[0].toUpperCase() + word.slice(1)
  const capitalizeWordsFunctional = words => words.split(' ').map(capitalizeFunctional).join(' ')

  let message1 = 'this is a another sentence about nothing'
  message1 = capitalizeWordsFunctional(message1.slice())
  console.log(message1)

  /*
  Barebones example showing the difference between a functional and non-functional approach to solving a trivial problem.
  
  Can you spot some differences?
  
  - Length - The non-functional example uses a whopping 19 lines as opposed to only 2 lines for the functional. This fact alone increases the chance that you will have a bug.
  - Looping and concatenation - Again, here is an another example where things can fail since there is a ton more code involved.
  - Variables - Within the non-functional example, we declare a whopping 6 variables. Compare that to ZERO. Yet another potential place for failure.
  - Style - The non-functional example is more imperative and involves explicitly telling the computer what to do.
  The functional example is declarative, and tells the computer what the results should look like.
  Remember that under all the interesting and terse syntax you'll see in most functional examples is really the mindset which is really the core of functional programming.
  */
}
