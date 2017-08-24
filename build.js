const fs = require('fs')
const files = fs.readdirSync('./src/samples').filter(file => file !== '.DS_Store' && file !== 'drafts')
let code = 'const codeFiles = [' + files.map(file => "'" + file + "'").join(', ') + ']\nexport default codeFiles\n'
fs.writeFileSync('./src/config/codeFiles.js', code)
