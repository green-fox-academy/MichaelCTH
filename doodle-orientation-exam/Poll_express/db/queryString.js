const query = {
  GET_ONE_POLL: `SELECT question, Options.id, name, votes
                FROM Polls
                LEFT JOIN Options on Options.postID = Polls.id
                WHERE Polls.id = ?;`,

  ADD_VOTE: 'UPDATE Options SET votes = votes+1 WHERE id = ?;',

  GET_POLL_BY_OPTION_ID: `SELECT question, Options.id, name, votes
  FROM Polls
  LEFT JOIN Options on Options.postID = Polls.id
  WHERE Polls.id = (SELECT postID FROM Options WHERE id = ?);`,

  ADD_POLL: 'INSERT INTO Polls (question) VALUES (?);',
  ADD_OPTIONS: 'INSERT INTO Options (name,postID) VALUES ',

  GET_POLL_LIST: 'SELECT id, question FROM Polls;',
};


module.exports = query;
