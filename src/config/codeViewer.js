import codeFiles from './codeFiles'
import utlity from './utility'

const activeClass = 'btn-primary'
const inActiveClass = 'btn-secondary'

const clickButton = async button => {
  console.clear()
  document.getElementById('code-results').innerText = ''
  document.getElementById('code-title').innerText = 'samples\\' + button.innerText
  const { run } = await import(`../samples/${button.innerText}`)
  run()
  const response = await fetch(`/samples/${button.innerText}`)
  const text = await response.text()
  const cleanText = text.trim().split('\n')
    .filter((line, index, lines) => index != 0 && index != lines.length - 1) //remove run wrapper
    .join('\n')
  utlity.showCode(cleanText)
  updateButtonStyles(button)
  history.pushState(null, null, '/?' + button.id)
}

const updateButtonStyles = button => {
  document.querySelectorAll('#button-container > .btn').forEach(button => {
    button.classList.remove(activeClass)
    button.classList.add(inActiveClass)
  })
  button.classList.remove(inActiveClass)
  button.classList.add(activeClass)
}

const addHtml = async () => {
  const response = await fetch('/config/codeViewer.html')
  const html = await response.text()
  document.getElementById('root').innerHTML = html.replace(/  /g, '')
  createButtons()
  const targetButton = document.getElementById(location.search.slice(1))
  if (location.search === '' || targetButton === null) {
    clickButton(document.querySelectorAll('#button-container > .btn')[0])
  } else {
    clickButton(targetButton)
  }
  bindSearch()
}

const bindSearch = () => {
  const codeSearch = document.getElementById('code-search');
  document.getElementById('code-search-clear').addEventListener('click', e => {
    codeSearch.value = ''
    Array.from(document.querySelectorAll('#button-container > .btn')).forEach(e => {
      e.style.display = 'block'
    })
  })
  codeSearch.addEventListener('keydown', e => {
    const search = e.target.value
    Array.from(document.querySelectorAll('#button-container > .btn'))
      .forEach(e => {
        if (e.className.includes(activeClass) || e.innerText.includes(search)) {
          e.style.display = 'block'
        } else {
          e.style.display = 'none'
        }
      })
  })
}

const createButtons = () => {
  codeFiles.forEach(codeFile => {
    let button = document.createElement('button')
    button.innerText = codeFile
    button.classList.add('btn', 'btn-block', 'text-truncate', 'btn-sm')
    button.id = codeFile.substr(0, codeFile.length - 3)
    button.onclick = () => clickButton(button, codeFile)
    document.getElementById('button-container').appendChild(button)
  })
}

window.addEventListener('load', () => {
  addHtml()
})
