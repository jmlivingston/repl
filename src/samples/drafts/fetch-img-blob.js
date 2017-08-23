fetch('logo.jpg')
  .then(response => response.blob())
  .then(blob => {
    document.getElementById('avatar').src = URL.createObjectURL(blob)
  })
