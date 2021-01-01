const user = {
  insert: `INSERT INTO user(username, password) values(?,?)`,
  select: `SELECT * FROM user WHERE username=?`,
}

exports.user = user
