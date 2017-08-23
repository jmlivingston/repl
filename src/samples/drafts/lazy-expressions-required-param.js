const requireParam = prop => {
  throw `Parameter ${prop} is required`
}

const upperCase = (word = requireParam('word')) => {
  return word.toUpperCase()
}
