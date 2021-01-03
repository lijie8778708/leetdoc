const resJson = function (res, result, data) {
  switch (result) {
    case 'save':
      res.json({
        code: '200',
        msg: 'Saved',
        data,
      })
      break
    case 'delete':
      res.json({
        code: '200',
        msg: 'Deleted',
        data,
      })
      break
    case 'update':
      res.json({
        code: '200',
        msg: 'Deleted',
        data,
      })
      break
    case 'find':
      res.json({
        code: '200',
        msg: 'Found',
        data,
      })
      break
    case 'fail':
      res.json({
        code: '400',
        msg: 'Operation Failed',
        data,
      })
      break
    default:
      res.json({
        code: '500',
        msg: `Something's wrong`,
      })
  }
}
module.exports = resJson
