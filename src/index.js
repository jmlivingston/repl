const data = [
  {
    id: 1,
    name: 'John'
  },
  {
    id: 2,
    name: 'Jane'
  }
]

function loadData() {
  const filteredData = data.filter(d => d.id === 1) // let's filter some data
  document.getElementById('code').innerText = JSON.stringify(
    filteredData,
    null,
    2
  )
}

window.onload = function() {
  document.getElementById('root').innerText = 'Window Loaded'
  loadData()
}
