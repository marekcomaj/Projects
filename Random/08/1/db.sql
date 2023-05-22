CREATE DATABASE reddit;

CREATE TABLE posts (
    ID int NOT NULL AUTO_INCREMENT,
    Title varchar(255),
    Describtion varchar(255),
    Score int,
    PRIMARY KEY(ID)
);


INSERT INTO posts (Title, Describtion) VALUES
('second test', 'this is the second test')

INSERT INTO posts (Title, Describtion, score) VALUES
('testing 1', 'this is first test', 20)

UPDATE posts SET score = score - 1 WHERE id = 1;

DROP TABLE table_name ;
