const log = console.log.bind(console)

const utility = {
  showResults (results) {
    results = typeof results === 'string' ? results : JSON.stringify(results, null, 2)
    log(results)
    const codeControl = document.getElementById('code-results')
    if (codeControl.innerText !== '') {
      codeControl.innerText += '\n\n' + results
    } else {
      codeControl.innerText = results
    }
  },
  showCode (code) {
    document.getElementById('code').innerText = code
  }
}

console.log = utility.showResults

export default utility
