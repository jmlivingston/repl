const fs = require('fs')

const sampleDir = './src/samples'
const filterFiles = ['.DS_Store', 'drafts']

function buildData () {
  console.log('Building Data...')
  const files = fs.readdirSync(sampleDir)
    .filter(file => filterFiles.indexOf(file) === -1)
  const code = 'const codeFiles = [' +
    files.map(file => "'" + file + "'")
      .join(', ') +
    ']\nexport default codeFiles\n'
  fs.writeFileSync('./src/config/codeFiles.js', code)
}

// TODO: Directory level watch for new files
// fs.readdirSync(sampleDir)
//   .filter(file => file !== '.DS_Store' && file !== 'drafts')
//   .forEach(file => {
//     fs.watch(sampleDir + '/' + file, () => {
//       buildData()
//     })
//   })

buildData()
