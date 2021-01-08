const user = {
  insert: `INSERT INTO user(username, password) values(?,?)`,
  select: `SELECT username, password FROM user WHERE username=?`,
}

const question = {
  selectAll: `SELECT questionNO, topic, description, mainAns, tagID, user FROM question`,
  selectById: `SELECT questionNO, topic, description, mainAns, tagID, user FROM question where questionID = ?`,
  selectByTag: `SELECT questionNO, topic, description, mainAns, user WHERE tagID = ?`,
  selectByQuestionNO: `SELECT * FROM question WHERE questionNO = ?`,
  insert: `INSERT INTO question(questionNO, topic, description, tagID, user) values(?,?,?,?,?)`,
  update: `UPDATE question SET mainAns = ? WHERE questionID=?`,
  remove: `DELETE FROM question WHERE questionID = ?`,
}

const answer = {
  selectAll: `SELECT answerID, author, answer, date, questionID FROM answer`,
  selectById: `SELECT answerID, author, answer, date, questionID FROM answer WHERE answerID = ?`,
  selectByQuestion: `SELECT answerID, author, answer, date FROM answer WHERE questionID = ?`,
  insert: `INSERT INTO answer(author, answer, date, questionID) values(?,?,?,?)`,
  remove: `DELETE FROM answer WHERE answerID = ?`,
}

const tag = {
  selectAll: `SELECT tagID, tagName, userID FROM tag`,
  selectByUser: `SELECT tagID, tagName FROM tag WHERE userID = ?`,
  selectByTagName: `SELECT * FROM tag WHERE tagName = ?`,
  selectById: `SELECT * FROM tag WHERE tagID = ?`,
  insert: `INSERT INTO tag(tagName, userID) values(?,?)`,
}
exports.user = user
exports.tag = tag
exports.answer = answer
exports.questoin = question
