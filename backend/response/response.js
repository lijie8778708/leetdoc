const resJson = function (res, result) {
  if (typeof result === 'undefined') {
    res.json({
      code: '1',
      msg: 'Bad operation',
    })
  } else if (result === 'add') {
    res.json({
      code: '200',
      msg: 'Saved',
    })
  } else if (result === 'delete') {
    res.json({
      code: '200',
      msg: 'Deleted',
    })
  } else if (result === 'update') {
    res.json({
      code: '200',
      msg: 'Updated',
    })
  } else if (result.result != 'undefined' && result.result === 'select') {
    res.json({
      code: '200',
      msg: 'Found',
      data: result.data,
    })
  } else if (result.result != 'undefined' && result.result === 'selectall') {
    res.json({
      code: '200',
      msg: 'All found',
      data: result.data,
    })
  } else {
    res.json(result)
  }
}
module.exports = resJson
