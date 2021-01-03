const TurndownService = require('turndown')

const tds = new TurndownService()

function convertHtmlToMarkdown(htmlString) {
  return tds.turndown(htmlString)
}

exports.convertHtmlToMarkdown = convertHtmlToMarkdown
