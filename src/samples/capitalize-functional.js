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

  // Functional

  const capitalizeFunctional = word => {
    return word[0].toUpperCase() + word.slice(1)
  }
  const capitalizeWordsFunctional = words => {
    return words.split(' ')
      .map(capitalizeFunctional)
      .join(' ')
  }

  // Consuming the Code
  let message1 = 'this is sentence about nothing'
  message1 = capitalizeWordsNonFunctional(message1)
  console.log(message1)

  let message2 = 'this is a another sentence about nothing'
  message1 = capitalizeWordsFunctional(message2.slice())
  console.log(message2)

  // Blog Post: https://www.johnlivingston.io/blog/capitalize-functional
}
