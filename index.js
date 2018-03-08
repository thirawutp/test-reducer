const _ = require('lodash')
const reducer = require('./reducer')
const state = JSON.stringify(require('./snapshot.json'))
const events = require('./event.json')

const _actions = _.map(events, i => {
  const paresed = JSON.parse(i.Raw)
  return {
    type: paresed.type,
    payload: paresed.payload && JSON.parse(paresed.payload)
  }
}).map(i => JSON.stringify(i))

reducer.getApplication({ state, actions, transform: false }, (err, result) => {
  console.log(result);
})