function* getFibonacci (max = Number.MAX_SAFE_INTEGER) {
  let current = 1
  let previous = 0
  while (current <= max) {
    [current, previous] = [previous, current + previous]
    if (current <= max) {
      yield current
    } else {
      return
    }
  }
}

// for of / next / spread examples
