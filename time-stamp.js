const moment = require('moment')
const tz = require('moment-timezone')

module.exports = (req, res, next) => {
  const timeStamp = moment().tz('Asia/Taipei').format('YYYY-MM-DD HH:mm:ss')
  console.log(`${timeStamp} | ${req.method} from ${req.url}`)
  next()
}