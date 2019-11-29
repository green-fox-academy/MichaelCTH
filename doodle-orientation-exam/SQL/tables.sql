DROP TABLE IF EXISTS Options;
DROP TABLE IF EXISTS Polls;

CREATE TABLE IF NOT EXISTS Polls
(
  id          SERIAL        PRIMARY KEY,
  question    VARCHAR(100)  NOT NULL
);

CREATE TABLE IF NOT EXISTS Options
(
  id          SERIAL PRIMARY KEY,
  name        VARCHAR(100)  NOT NULL,
  postID      BIGINT        UNSIGNED,
  votes       BIGINT        UNSIGNED DEFAULT 0,
  FOREIGN KEY(postID)       REFERENCES Polls(id) ON DELETE CASCADE
);