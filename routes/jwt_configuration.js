var Jwt = require('jsonwebtoken')

const API_SECRET = 'travler065074'

function createAccessToken (data) {
  var { uid, role } = data

  const payload = { uid, role }
  const token = Jwt.sign(payload, API_SECRET)
  return token
}

function decodeToken (token, callback) {
  Jwt.verify(token, API_SECRET, callback)
}

module.exports = { API_SECRET, createAccessToken, decodeToken }
