const btn = document.getElementById('foo')
btn.addEventListener('click', element => {
  console.log('i was clicked')
})

document.getElementById('foo').dispatchEvent(new Event('click'))
