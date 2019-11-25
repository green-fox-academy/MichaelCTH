DROP TABLE IF EXISTS Votes CASCADE;
DROP TABLE IF EXISTS Posts CASCADE;
DROP TABLE IF EXISTS Users CASCADE;

CREATE TABLE IF NOT EXISTS Users
(
  id          SERIAL PRIMARY KEY,
  username    VARCHAR(100),
  hashedPass  CHAR(60)
);

CREATE TABLE IF NOT EXISTS Posts
(
  id          SERIAL        PRIMARY KEY,
  masterPost  BIGINT        UNSIGNED,
  parentPost  BIGINT        UNSIGNED,
  title       VARCHAR(100)  NOT NULL,
  url         VARCHAR(2083),
  content     VARCHAR(500),
  createdOn   BIGINT,
  owner       BIGINT        UNSIGNED,
  FOREIGN KEY(owner)        REFERENCES Users(id)
);

ALTER TABLE Posts ADD FOREIGN KEY (masterPost) REFERENCES Posts(id);
ALTER TABLE Posts ADD FOREIGN KEY (parentPost) REFERENCES Posts(id);

CREATE TABLE IF NOT EXISTS Votes
(
  userID      BIGINT        UNSIGNED,
  postID      BIGINT        UNSIGNED,
  vote        TINYINT,
  PRIMARY KEY(userID,postID),
  FOREIGN KEY(userID)       REFERENCES Users(id),
  FOREIGN KEY(postID)       REFERENCES Posts(id)
);
