const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/first.txt', 'utf-8')

writeFileSync(
    './content/result-sync.txt',
    `here is the reult: ${first}, ${second}`,
    {flag: 'a'}
)
