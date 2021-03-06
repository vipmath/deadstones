const t = require('tap')
const deadstones = require('..')
const data = require('./data')

t.test('should not mutate board data', t => {
    let boardJSON = JSON.stringify(data.finished)
    deadstones.getProbabilityMap(data.finished, 50)

    t.assert(JSON.stringify(data.finished), boardJSON)
    t.end()
})

t.test('should contain values between -1 and 1', t => {
    let map = deadstones.getProbabilityMap(data.unfinished, 50)

    t.assert(map.every(row => row.every(x => -1 <= x && x <= 1)))
    t.end()
})
