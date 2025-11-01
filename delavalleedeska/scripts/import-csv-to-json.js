const fs = require('fs')
const path = require('path')
const parse = require('csv-parse/lib/sync')

function convert(infile, outfile){
  const csv = fs.readFileSync(path.join(__dirname, '..', 'data', infile), 'utf-8')
  const records = parse(csv, { columns: true, skip_empty_lines: true })
  fs.writeFileSync(path.join(__dirname, '..', 'data', outfile), JSON.stringify(records, null, 2))
  console.log('Converted', infile, '->', outfile)
}

convert('reproducteurs.csv', 'reproducteurs.json')
convert('portees.csv', 'portees.json')
