function getFetch(url) {
  return fetch(url).then(res => res.json).then(json => json).catch(error => {
    throw error
  })
}

async function getAsyncFetch(url) {
  try {
    const res = await fetch(url)
    const json = await res.json()
    return json
  } catch (error) {
    throw error
  }
}
