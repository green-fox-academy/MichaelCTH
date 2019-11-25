const queryString = {
  GET_LIST_OF_POSTS: `SELECT Posts.id, title, url, timestamp
                        , IFNULL((SELECT SUM(vote) FROM Votes WHERE Posts.id = Votes.postID),0) as 'score'
                        , Users.username as 'owner' 
                        , IFNULL((SELECT vote FROM Votes WHERE Posts.id = Votes.postID and Users.id = Votes.userID),0) as 'vote'
                        , (SELECT COUNT(*) FROM Posts as P2 WHERE P2.parentPost = Posts.id) as 'comments'
                        FROM Posts
                        LEFT JOIN Users on Users.id = Posts.owner;`,

  GET_POST_BY_ID: `SELECT Posts.id, title, url, timestamp
                    , IFNULL((SELECT SUM(vote) FROM Votes WHERE Posts.id = Votes.postID),0) as 'score'
                    , Users.username as 'owner' 
                    , IFNULL((SELECT vote FROM Votes WHERE Posts.id = Votes.postID and Users.id = Votes.userID),0) as 'vote'
                    , (SELECT COUNT(*) FROM Posts as P2 WHERE P2.parentPost = Posts.id) as 'comments'
                    FROM Posts
                    LEFT JOIN Users on Users.id = Posts.owner
                    WHERE Posts.id = ?;`,

  GET_LIST_OF_COMMENT_BY_POSTID: `SELECT id, text
                                , IFNULL((SELECT SUM(vote) FROM Votes WHERE Votes.postID = Posts.id),0) as 'score'
                                , (SELECT username FROM Users where id = owner) as 'owner', timestamp
                                FROM Posts WHERE parentPost = ?;`,

  ADD_POST: 'INSERT INTO Posts (title, url, timestamp, owner) VALUES (?, ?, ?, (SELECT id from Users WHERE username = ?));',

  RM_VOTE: 'DELETE FROM Votes WHERE userID = (SELECT id from Users WHERE username = ?) AND postID = ?;',

  ADD_VOTE: 'INSERT INTO Votes (userID, postID, vote) VALUES ((SELECT id from Users WHERE username = ?),?,?);',

  ADD_COMMENT: 'INSERT INTO Posts (masterPost, parentPost, text, timestamp, owner) VALUES (?,?,?,?,(SELECT id from Users WHERE username = ?));',

  GET_COMMENT_BY_ID: `SELECT Posts.id, text
                        , IFNULL((SELECT SUM(vote) FROM Votes WHERE postID = Posts.id),0) as 'score'
                        , Users.username
                        FROM Posts 
                        LEFT JOIN Users on Users.id = Posts.owner 
                        WHERE Posts.id = ?;`,

  UPDATE_POST: 'UPDATE Posts SET title=?, url=?, timestamp=? WHERE id = ?;',

  DEL_POST: 'DELETE FROM Posts WHERE id = ? and owner = (SELECT id from Users WHERE username = ?);',

  ADD_USER: 'INSERT INTO Users (username, hashedPass) VALUES (?,?);',
};

module.exports = queryString;
