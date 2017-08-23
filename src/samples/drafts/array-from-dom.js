Array.from(document.querySelectorAll('.foo'))
  .filter(element => parseFloat(element.innerText) < 10)
  .forEach(element => (element.style.color = 'red'))
