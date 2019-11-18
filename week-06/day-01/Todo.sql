DROP TABLE IF EXISTS todo CASCADE;
DROP TABLE IF EXISTS user CASCADE;
DROP TABLE IF EXISTS theme CASCADE;

CREATE TABLE theme (
    name VARCHAR(50),
    PRIMARY KEY (name)
);

CREATE TABLE user (
	id   MEDIUMINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    theme VARCHAR(50) DEFAULT 'DEFAULT',
    createTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (theme) REFERENCES theme (name)
);

CREATE TABLE todo(
	id   MEDIUMINT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50),
    description VARCHAR(100),
    userID MEDIUMINT,
    complete BOOLEAN DEFAULT FALSE,
    createTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deadline TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (userID) REFERENCES user (id)
);


INSERT INTO theme (name) VALUES 
('DEFAULT'),
('Superman'),
('Batman');

INSERT INTO user (name) VALUES
('Michael'),
('Ajax'),
('Sherry');

INSERT INTO todo (title,description,userID) VALUES
('Do some work','do some house work', 1),
('Make slides for demo','slides about React', 1),
('Prepare for demo','go thourgh the slides 5 and more times', 1),
('Rehearse it','do it before the presentation', 1),
('Nail it','and Friday wohoooo', 1);


