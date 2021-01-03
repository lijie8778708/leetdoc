const { convertHtmlToMarkdown } = require('../util/HTML-MD')
const https = require('https')
const { resolve } = require('path')
const { login } = require('../controller/user')

function loadPage(url) {
  var pm = new Promise(function (resolve, reject) {
    https
      .get(url, function (res) {
        var html = ''
        res.on('data', function (d) {
          html += d.toString()
        })
        res.on('end', function () {
          resolve(html)
        })
      })
      .on('error', function (e) {
        reject(e)
      })
  })
  return pm
}
test(`convert html to markdown`, async () => {
  try {
    let res = await login({ username: 'lijie43', password: 123456 })
    console.log(res)
  } catch (err) {}
})
